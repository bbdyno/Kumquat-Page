# Design direction

Chosen on 2026-10-20 after reviewing about 140 Pinterest results (searches: "mac app landing page design", "premium app landing page orange", "minimal editorial software website", "bento grid app website light", "editorial serif app landing page", "warm cream minimal saas website orange accent", "citrus orange brand website minimal", "premium macos utility app website", "file converter app website design"). No single design was copied; these are the patterns the strongest results shared, and how Kumquat uses them.

| Pattern seen in references | How the site applies it |
| --- | --- |
| Warm stone canvas instead of white or pure black; one or two lighter paper surfaces | `--bg #ece6dd`, `--paper #f6f2ec`; dark mode is warm near-black `#110f0d`, never cool grey |
| Large editorial serif headline, left-aligned, one word emphasized (italic in Latin, color in Korean) | Instrument Serif / Noto Serif KR 500 for h1–h2; `<em>` is italic in English and orange in Korean |
| Real photograph inside an arch-shaped frame with soft directional light | Hero arch holds a sunlit kumquat photo (Unsplash) with the real app's wheel and result thumbnail captures over it |
| A small brand symbol next to the wordmark, echoed in the number band | Kumquat cross-section symbol (`mark` in `src/layout.mjs`) in the header, band, footer wordmark and favicon |
| Thin-line icons in soft square tiles beside short feature text | Phosphor Light icons in `.feat-ico` / `.tile-ico` squares |
| A real product UI next to a feature list | `#app` section: the real main window (stats in light mode, the history list in dark mode) with the real result thumbnail layered over it. Recipes, destinations and the originals vault are not shown because they do not exist yet |
| A black band of big serif numbers under the hero | `.band` with four facts (10개, 0, 12+, 5개) |
| Orange used for one CTA and one tile only, against neutrals | Orange pill CTA, one solid orange bento tile, the final CTA panel; everything else neutral |
| Bento grid on cream with mixed tile sizes, one dark tile, one orange tile | `.bento`: destination (wide), recipe (tall), privacy (dark), HWP, Pro trial (orange) |
| Editorial hairline lists and numbered steps instead of boxed cards | Steps 01–03, AI tab list, FAQ, tables and document TOCs all use 1px rules |
| Oversized wordmark in the footer | `.wordmark` |
| Pill buttons with a circular arrow chip | `.btn .arrow` |

Avoided on purpose: hand-drawn placeholder art where a real photo or a real result can be used, emoji and text-glyph icons (✓ → ↗) in the UI, centered hero over a radial glow, ruled "eyebrow" labels on every section, pill badges everywhere, uniform rounded card grids, gradient text. Those read as a generated template.

Reference pins (Pinterest image IDs) that shaped the decisions: `c40` Aurora workspace (stone, serif, arch, black stats band), `a20` saibi (serif hero, monochrome art, single orange CTA), `w02` / `w04` (cream and orange, orange numerals, left rule), `d64` (cream bento with one orange tile), `e04` / `e08` (editorial serif typography).
