# Kumquat Page

Marketing, legal, support and upload-guide pages for Kumquat (working title), a macOS file converter. Korean is the default at the site root; English lives under `/en/`. Downloads are App Store campaign links only.

No framework and no npm dependencies: page modules in `src/pages/` are rendered by `build.mjs` (Node 20+) into `dist/`. No trackers, no cookies, no third-party font requests. The display serifs are self-hosted subsets in `public/assets/fonts/` (Instrument Serif and Noto Serif KR, both OFL; licenses alongside). The only script is `assets/site.js` (theme toggle, scroll demo, before/after slider, format search), and every page works without it.

The visual direction and the Pinterest references it came from are written down in `DESIGN.md`.

## Commands

```bash
npm run build     # src/ + public/ → dist/ (also writes sitemap.xml and robots.txt)
npm run preview   # build, then serve dist/ at http://localhost:4321/Kumquat-Page/
npm run og        # re-render the placeholder OG images with headless Chrome
npm run fonts     # re-subset the serif fonts after heading copy changes (needs: pip install fonttools brotli)
```

Run `npm run build` before `npm run fonts`: the subsetter reads the Korean heading text from `dist/`. Korean heading characters that are not in the subset fall back to the system serif until it is re-run.

The preview server mounts the site under the same base path GitHub Pages uses, so relative links and `404.html` behave like production.

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
| Hometax attachment size | `/guides/hometax-attachment-size/` | — | `21-guide-hometax.mjs` |
| Gov24 ID photo | `/guides/gov24-id-photo/` | — | `22-guide-gov24-photo.mjs` |
| 404 | `/404.html` | — | `99-404.mjs` |

Shared header, footer, `<head>` tags (canonical, hreflang, Open Graph) and building blocks are in `src/layout.mjs`. Site settings, prices and the App Store link builder are in `src/config.mjs`. The format table is generated from `src/data/formats.mjs`.

To add a guide: copy a guide module, give it a new `path`, and add it to `src/pages/_guides.mjs`. Files starting with `_` are helpers, not pages.

## Deploy

`.github/workflows/deploy.yml` builds on every push to `main` and deploys `dist/` with GitHub Pages Actions. In the repository settings, set **Pages › Source** to **GitHub Actions**.

## TODO before launch

1. **App Store link.** `APP_ID` and `PROVIDER_TOKEN` in `src/config.mjs` are placeholders. Each CTA passes its own `ct` campaign value (`home-hero`, `guide-hometax`, …). Remove the "not released yet" notes in `00-home.mjs` after release.
2. **Support email.** `site.email` is a placeholder (`support@kumquat.example`).
3. **Site URL.** `site.url` assumes `https://bbdyno.github.io/Kumquat-Page/`. Change it if a custom domain is used; canonical, hreflang, OG and sitemap URLs follow it.
4. **Legal review.** Privacy Policy and Terms are marked as drafts on the page. Fill in the operator's legal name and address, the governing law, and the effective date. Register the terms URL as the custom EULA in App Store Connect, or switch to Apple's standard EULA.
5. **Guide facts.** Both guides tell readers to follow the limits shown on the upload screen. Confirm Hometax size limits and Gov24 photo file requirements, then add them with the date checked (see the TODO comments in each module).
6. **Comparison table.** Tangerine facts were checked on 2026-10-20 (build 2.0.2). Re-check before publishing and after their updates; keep the date in `site.factsDate` current.
7. **Placeholders.** Hero video, scroll demo, AI before/after images, the App Store privacy label capture, press screenshots and the OG images are placeholders, labeled on the page.
8. **Prices and free tier.** Prices mirror `Kumquat/docs/PLAN.md` §2. Free tier (decided 2026-10-20): every feature for the first `welcomeTrialFiles` (10) files, then `freeDailyFiles` (5) basic conversions a day, with ads; Pro has no limits and no ads. Both numbers live in `src/config.mjs`; the landing, terms, privacy, press and Hometax guide copy follow them.

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

An empty `ads` array means no sponsors; the app then shows its own Kumquat Pro note. Update `updated` whenever the list changes.
