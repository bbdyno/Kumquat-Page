#!/usr/bin/env python3
"""Self-host the display serifs as small subsets, so the site makes no third-party font requests.

- Instrument Serif (OFL): Latin display face, regular + italic.
- Noto Serif KR (OFL): Korean display face, pinned to weight 500 and cut down to the Hangul
  that actually appears in headings across dist/.

Run after `npm run build` whenever heading copy changes (`npm run fonts`). New Korean heading
glyphs that are missing from the subset fall back to the system serif until this is re-run.
Needs: python3 -m pip install fonttools brotli
"""

import os
import re
import sys
import urllib.request
from html.parser import HTMLParser
from pathlib import Path

from fontTools import subset
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

ROOT = Path(__file__).resolve().parent.parent
DIST = ROOT / "dist"
OUT = ROOT / "public" / "assets" / "fonts"
CACHE = Path(os.environ.get("KUMQUAT_FONT_CACHE", Path.home() / ".cache" / "kumquat-page-fonts"))
SOURCES = {
    "InstrumentSerif-Regular.ttf": "https://github.com/google/fonts/raw/main/ofl/instrumentserif/InstrumentSerif-Regular.ttf",
    "InstrumentSerif-Italic.ttf": "https://github.com/google/fonts/raw/main/ofl/instrumentserif/InstrumentSerif-Italic.ttf",
    "NotoSerifKR.ttf": "https://github.com/google/fonts/raw/main/ofl/notoserifkr/NotoSerifKR%5Bwght%5D.ttf",
}
# Elements rendered in the serif face (see site.css).
SERIF_TAGS = {"h1", "h2", "h3", "blockquote", "summary", "strong", "b"}
LATIN = "U+0020-007E,U+00A0-00FF,U+0131,U+0152-0153,U+02C6,U+02DA,U+02DC,U+2010-2027,U+2030-203A,U+20AC,U+2122,U+2190-21FF,U+2212,U+221E"


class SerifText(HTMLParser):
    def __init__(self):
        super().__init__()
        self.depth = 0
        self.nav = 0
        self.chars = set()

    def handle_starttag(self, tag, attrs):
        if tag in SERIF_TAGS:
            self.depth += 1
        if tag == "nav":
            self.nav += 1

    def handle_endtag(self, tag):
        if tag in SERIF_TAGS and self.depth:
            self.depth -= 1
        if tag == "nav" and self.nav:
            self.nav -= 1

    def handle_data(self, data):
        if self.depth or self.nav:
            self.chars.update(data)


def fetch(name):
    CACHE.mkdir(parents=True, exist_ok=True)
    path = CACHE / name
    if not path.exists():
        print(f"downloading {name}")
        urllib.request.urlretrieve(SOURCES[name], path)
    return path


def write_subset(font, out, unicodes=None, text=None):
    opts = subset.Options()
    opts.flavor = "woff2"
    opts.layout_features = ["kern", "liga", "calt", "locl", "ccmp"]
    opts.name_IDs = ["*"]  # keep copyright and license names
    sub = subset.Subsetter(opts)
    sub.populate(unicodes=unicodes or [], text=text or "")
    sub.subset(font)
    font.flavor = "woff2"
    font.save(out)
    print(f"wrote {out.relative_to(ROOT)} ({out.stat().st_size // 1024} KB)")


def main():
    if not DIST.exists():
        sys.exit("dist/ not found. Run `npm run build` first.")
    parser = SerifText()
    for html in DIST.rglob("*.html"):
        parser.feed(html.read_text(encoding="utf-8"))
    hangul = "".join(sorted(c for c in parser.chars if re.match(r"[ㄱ-ㆎ가-힣]", c)))
    print(f"{len(hangul)} Hangul glyphs in serif text")

    OUT.mkdir(parents=True, exist_ok=True)
    latin = subset.parse_unicodes(LATIN)
    for src, out in (("InstrumentSerif-Regular.ttf", "instrument-serif.woff2"), ("InstrumentSerif-Italic.ttf", "instrument-serif-italic.woff2")):
        write_subset(TTFont(fetch(src)), OUT / out, unicodes=latin)

    kr = TTFont(fetch("NotoSerifKR.ttf"))
    kr = instancer.instantiateVariableFont(kr, {"wght": 500})
    write_subset(kr, OUT / "noto-serif-kr-subset.woff2", text=hangul + "·…“”‘’")


if __name__ == "__main__":
    main()
