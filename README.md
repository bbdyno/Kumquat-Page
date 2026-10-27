<a href="https://bbdyno.github.io/Kumquat-Page/en/">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset=".github/readme/hero-en-dark.webp">
    <img src=".github/readme/hero-en-light.webp" alt="Shrinkwrap. Sized to fit where it’s going. Fit files to email, chat and form uploads on your Mac." width="100%">
  </picture>
</a>

<p align="center">
  <a href="https://bbdyno.github.io/Kumquat-Page/"><img src="https://img.shields.io/badge/site-bbdyno.github.io%2FKumquat--Page-2B63D9?style=for-the-badge&labelColor=171411" alt="Site"></a>
  <a href="https://github.com/bbdyno/Kumquat-Page/actions/workflows/deploy.yml"><img src="https://img.shields.io/github/actions/workflow/status/bbdyno/Kumquat-Page/deploy.yml?branch=main&style=for-the-badge&labelColor=171411&label=pages" alt="Deploy status"></a>
  <img src="https://img.shields.io/badge/npm%20dependencies-0-2B63D9?style=for-the-badge&labelColor=171411" alt="Zero npm dependencies">
  <img src="https://img.shields.io/badge/trackers-none-2B63D9?style=for-the-badge&labelColor=171411" alt="No trackers">
  <img src="https://img.shields.io/badge/node-20%2B-2B63D9?style=for-the-badge&labelColor=171411&logo=nodedotjs&logoColor=white" alt="Node 20+">
  <a href="LICENSE"><img src="https://img.shields.io/github/license/bbdyno/Kumquat-Page?style=for-the-badge&labelColor=171411&color=2B63D9" alt="License"></a>
</p>

<p align="center">
  <a href="https://bbdyno.github.io/Kumquat-Page/"><b>한국어 사이트</b></a> ·
  <a href="https://bbdyno.github.io/Kumquat-Page/en/"><b>English site</b></a> ·
  <a href="https://bbdyno.github.io/Kumquat-Page/en/press/">Press kit</a> ·
  <a href="https://bbdyno.github.io/Kumquat-Page/en/privacy/">Privacy</a> ·
  <a href="https://bbdyno.github.io/Kumquat-Page/en/support/">Support</a> ·
  <a href="https://bbdyno.github.io/Kumquat-Page/en/changelog/">Changelog</a>
</p>

<img src=".github/readme/band-en.webp" alt="7 destinations · 10 first files with every feature free · 0 uploads and data collected · macOS 12 and up on Intel and Apple silicon" width="100%">

Marketing, legal, support and upload-guide pages for **Shrinkwrap** (슈링크랩), a macOS app that fits files to where they’re going: email attachments, messengers, online forms, photo uploads and more. Korean is the default at the site root; English lives under `/en/`. Downloads are App Store campaign links only.

> [!NOTE]
> The app was renamed from its working title to Shrinkwrap on 2026-10-27 after App Review feedback (see `docs/REBRAND.md` in the app repo). Only user-facing names changed: this repository, the site URL (`/Kumquat-Page/`), the bundle ID and the App Store app ID stay the same. The App Store links start working once the app is public.

## The site

<table>
  <tr>
    <th width="50%">Korean · <code>/</code></th>
    <th width="50%">English · <code>/en/</code></th>
  </tr>
  <tr>
    <td>
      <picture>
        <source media="(prefers-color-scheme: dark)" srcset=".github/readme/site-ko-dark.webp">
        <img src=".github/readme/site-ko-light.webp" alt="Korean landing page, first screen">
      </picture>
    </td>
    <td>
      <picture>
        <source media="(prefers-color-scheme: dark)" srcset=".github/readme/site-en-dark.webp">
        <img src=".github/readme/site-en-light.webp" alt="English landing page, first screen">
      </picture>
    </td>
  </tr>
</table>

The screenshots follow your GitHub theme, the same way the site follows your system appearance.

| | |
| --- | --- |
| **Stack** | No framework and no npm dependencies. Page modules in `src/pages/` are rendered by `build.mjs` (Node 20+) into `dist/`. |
| **Privacy** | No trackers, no cookies, no third-party font requests. |
| **Type** | Instrument Serif and Noto Serif KR, self-hosted subsets in `public/assets/fonts/` (both OFL, licenses alongside). |
| **Script** | One file, `assets/site.js` (theme toggle, scroll demo, format search). Every page works without it. |
| **Design** | The visual direction and the Pinterest references it came from are in [`DESIGN.md`](DESIGN.md). Accent: film blue `#2B63D9` (dark `#6EA0FF`). |

## Commands

```bash
npm run build     # src/ + public/ → dist/ (also writes sitemap.xml and robots.txt)
npm run preview   # build, then serve dist/ at http://localhost:4321/Kumquat-Page/
npm run og        # re-render the OG images (wrapped-parcel art) with headless Chrome
npm run readme-art # re-render the README banner, band, footer and site screenshots (needs cwebp)
npm run fonts     # re-subset the serif fonts after heading copy changes (needs: pip install fonttools brotli)
```

Run `npm run build` before `npm run fonts`: the subsetter reads the Korean heading text from `dist/`. Korean heading characters that are not in the subset fall back to the system serif until it is re-run.

The preview server mounts the site under the same base path GitHub Pages uses, so relative links and `404.html` behave like production.

`npm run readme-art` writes `.github/readme/*.webp`. Run `npm run build` first, because the site screenshots are taken from `dist/`. The Korean banner, band and footer are also used by the app repo's README; copy `hero-ko-*.webp`, `band-ko.webp` and `footer-*.webp` to the app repo's `.github/readme/` after re-rendering. The English banner uses the app's English result-card capture in `.github/readme/src/` (from the app repo's `AppStore/captures`); it still shows the pre-rebrand UI.

## Pages

| Page | Korean | English | Source |
| --- | --- | --- | --- |
| Landing | `/` | `/en/` | `src/pages/00-home.mjs` |
| Privacy Policy (draft) | `/privacy/` | `/en/privacy/` | `10-privacy.mjs` |
| Terms of Use / EULA (draft) | `/terms/` | `/en/terms/` | `11-terms.mjs` |
| Support & FAQ | `/support/` | `/en/support/` | `12-support.mjs` |
| Press kit | `/press/` | `/en/press/` | `13-press.mjs` |
| Changelog | `/changelog/` | `/en/changelog/` | `14-changelog.mjs` |
| Guides index | `/guides/` | — | `20-guides.mjs` |
| Hometax attachment size (Online forms destination) | `/guides/hometax-attachment-size/` | — | `21-guide-hometax.mjs` |
| Gov24 ID photo (Photo upload destination) | `/guides/gov24-id-photo/` | — | `22-guide-gov24-photo.mjs` |
| Open source | `/opensource/` | `/en/opensource/` | `15-opensource.mjs` |
| 404 | `/404.html` | — | `99-404.mjs` |

Shared header, footer, `<head>` tags (canonical, hreflang, Open Graph) and building blocks are in `src/layout.mjs`. Site settings, prices and the App Store link builder are in `src/config.mjs`. The format table is generated from `src/data/formats.mjs`.

To add a guide: copy a guide module, give it a new `path`, and add it to `src/pages/_guides.mjs`. Files starting with `_` are helpers, not pages.

## Deploy

`.github/workflows/deploy.yml` builds on every push to `main` and deploys `dist/` with GitHub Pages Actions. In the repository settings, set **Pages › Source** to **GitHub Actions**.

## TODO before launch

1. **App Store link.** `APP_ID` is `id6824821095`. Links carry `mt=12` and a per-CTA `ct` campaign value (`home-hero`, `guide-hometax`, …); the provider token `pt` is left out until it is confirmed in App Store Connect. After approval, change the “출시 준비 중 / Coming soon” chip and the “in review” notes in `00-home.mjs`.
2. **Support email.** `site.email` is `della.kimko@gmail.com`, the same support and ad-report address the app uses.
3. **Site URL.** `site.url` assumes `https://bbdyno.github.io/Kumquat-Page/`. Change it if a custom domain is used; canonical, hreflang, OG and sitemap URLs follow it.
4. **Legal review.** Privacy Policy and Terms are marked as drafts on the page. Set the effective dates (operator: bbdyno, 서울특별시 구로구, in `src/config.mjs`). The app uses Apple's Standard EULA as is (no custom EULA in App Store Connect), so the Terms only summarise it in §3 and must not restate license, warranty, liability or governing-law terms differently.
5. **Guide facts.** Both guides tell readers to follow the limits shown on the upload screen and say that Shrinkwrap's destination defaults (Online forms 5 MB, Photo upload 500 KB) are not official limits. Confirm Hometax size limits and Gov24 photo file requirements, then add them with the date checked (see the TODO comments in each module).
6. **New captures.** Every file in `public/assets/shots/` still shows the pre-rebrand UI (old name, orange accent). Recapture from the Shrinkwrap build and drop them in under the same names; the list and intended content are in the comment above `shotSizes` in `src/layout.mjs`. The old app icon, welcome screen, drag-shortcut captures and promo video were removed; add the new app icon as `assets/img/app-icon.webp` and `app-icon-1024.png` and put it back in the press kit and final CTA (see the TODO in `13-press.mjs`).
7. **App 1.0 scope.** Copy presents destinations (Email attachment 20 MB total split by file size, Messenger 25 MB, Small upload 10 MB, Online forms 5 MB, Photo upload 500 KB, Web images 500 KB WebP, Custom), the quality guard, text-preserving PDF compression, sending results to a new Mail message or Share, menu bar drop, Finder Quick Actions, Shortcuts, format conversions, history and stats. Recipes, folder watching, automatic destination detection, on-device AI and HWP are labeled as planned (changelog only). The optional drag shortcut (off by default in the app) is not marketed anywhere. App Review can reject an app whose site or metadata promises more than it does.
8. **Prices and free tier.** Free: every feature for the first `welcomeTrialFiles` (10) files, then `freeDailyFiles` (5) basic conversions a day, with ads; destinations are Pro. Pro Lifetime $19.99 launch ($24.99 regular), Pro Yearly $11.99 with a 7-day trial. Both numbers live in `src/config.mjs`; the landing, terms, privacy, press and guide copy follow them.
9. **Fonts.** Run `npm run fonts` after the copy changes so new Korean heading glyphs are in the Noto Serif KR subset.

## Sponsor ad list

The app downloads `/ads/v1.json` (source: `public/ads/v1.json`) about once a day to show sponsor ads to free users. It sends no identifiers or usage data, and the privacy policy says so; keep it that way. Format:

```json
{
  "version": 1,
  "updated": "YYYY-MM-DD",
  "ads": [
    { "id": "…", "advertiser": "…", "headline": "…", "body": "…", "url": "https://…", "locale": "ko|en|*", "start": "YYYY-MM-DD", "end": "YYYY-MM-DD" }
  ]
}
```

An empty `ads` array means no sponsors; the app then shows its own Shrinkwrap Pro note. Update `updated` whenever the list changes.

## Credits

Icons: [Phosphor Icons](https://phosphoricons.com) Light, MIT (`licenses/phosphor-icons-MIT.txt`), inlined by `src/icons.mjs`. Fonts: Instrument Serif and Noto Serif KR, SIL OFL 1.1 (`licenses/`).

<br>

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset=".github/readme/footer-dark.webp">
    <img src=".github/readme/footer-light.webp" alt="Shrinkwrap" width="100%">
  </picture>
</p>
