# Design direction

Chosen on 2026-10-20 after reviewing about 140 Pinterest results (searches: "mac app landing page design", "premium app landing page", "minimal editorial software website", "bento grid app website light", "editorial serif app landing page", "warm cream minimal saas website", "premium macos utility app website", "file converter app website design"). No single design was copied; these are the patterns the strongest results shared, and how the site uses them.

On 2026-10-27 the app was renamed to Shrinkwrap and repositioned around destinations (“어디로 보내나요?”). The paper canvas, ink text and serif headings stayed; only the accent changed, from orange to film blue, and the brand symbol became a wrapped parcel.

| Token | Light | Dark |
| --- | --- | --- |
| `--accent` | `#2B63D9` | `#6EA0FF` |
| `--accent-ink` (text on canvas) | `#1D4BAE` | `#9CC0FF` |

| Pattern seen in references | How the site applies it |
| --- | --- |
| Warm stone canvas instead of white or pure black; one or two lighter paper surfaces | `--bg #ece6dd`, `--paper #f6f2ec`; dark mode is warm near-black `#110f0d`, never cool grey |
| Large editorial serif headline, left-aligned, one word emphasized (italic in Latin, color in Korean) | Instrument Serif / Noto Serif KR 500 for h1–h2; `<em>` is italic in English and accent-colored in Korean |
| A single illustration inside an arch-shaped frame with soft directional light | Hero arch holds the wrapped parcel (`parcelArt()` in `src/data/illustrations.mjs`) with real app captures (menu bar menu, result card) over it |
| A small brand symbol next to the wordmark, echoed in the number band | Parcel in clear film with one blue band (`mark` in `src/layout.mjs`) in the header, band, final CTA and favicon; the wordmark is the serif name plus an accent dot, as in the app |
| Thin-line icons in soft square tiles beside short feature text | Phosphor Light icons in `.feat-ico` / `.tile-ico` squares |
| A real product UI next to a feature list | `#app` section: the real main window with the real result card layered over it |
| A black band of big serif numbers under the hero | `.band` with four facts (7곳, 10개, 0, 12+) |
| Accent used for one CTA and one tile only, against neutrals | Blue pill CTA, one solid blue bento tile, the final CTA panel; everything else neutral |
| Bento grid on cream with mixed tile sizes, one dark tile, one accent tile | `.bento`: email total budget (wide), quality guard (tall), PDF, send, privacy (dark), anywhere, Pro trial (blue) |
| Editorial hairline lists and numbered steps instead of boxed cards | Destination table, steps 01–03, FAQ, tables and document TOCs all use 1px rules |
| Oversized wordmark in the footer | `.wordmark` |
| Pill buttons with a circular arrow chip | `.btn .arrow` |

Avoided on purpose: emoji and text-glyph icons in the UI, centered hero over a radial glow, all-caps labels, pill badges everywhere, uniform rounded card grids, gradient text, fruit or citrus imagery. Those read as a generated template or as the old brand.

Reference pins (Pinterest image IDs) that shaped the decisions: `c40` Aurora workspace (stone, serif, arch, black stats band), `a20` saibi (serif hero, monochrome art, single accent CTA), `w02` / `w04` (cream with one accent, accent numerals, left rule), `d64` (cream bento with one accent tile), `e04` / `e08` (editorial serif typography).
