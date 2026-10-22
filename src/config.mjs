// Site-wide settings. Everything marked TODO must be confirmed before launch.

export const site = {
  name: 'Kumquat',
  // TODO: replace with the custom domain if one is bought. Used only for canonical, hreflang, OG and sitemap URLs.
  url: 'https://bbdyno.github.io/Kumquat-Page/',
  // Support and ad-report address, shared with the app (Kumquat commit 3af987b) and the user's other app sites.
  email: 'della.kimko@gmail.com',
  // Operator shown on the privacy and terms pages (confirmed by the user 2026-10-22).
  operator: { name: 'bbdyno', addressKo: '서울특별시 구로구', addressEn: 'Guro-gu, Seoul, Republic of Korea' },
  // Date shown on facts that can go stale (pricing, comparison table).
  factsDate: '2026-10-20',
  appVersion: '출시 전',
};

// App Store links (Kumquat 1.0.0 submitted for review 2026-10-20; links open once the app is public).
// One `ct` value per page lets App Store Connect attribute installs to the page that sent them.
// TODO: add `pt` (provider token, App Store Connect › Analytics › campaign link generator) once confirmed;
// a wrong `pt` can break the link, so it is left out until then.
const APP_ID = 'id6824821095';

export function storeLink(lang, campaign) {
  const region = lang === 'ko' ? 'kr/' : '';
  return `https://apps.apple.com/${region}app/${APP_ID}?mt=12&ct=${encodeURIComponent(campaign)}`;
}

// Apple's official badge, loaded unchanged from Apple Marketing Tools. Do not recolor, crop or recreate it.
export function storeBadge(lang) {
  const locale = lang === 'ko' ? 'ko-kr' : 'en-us';
  return `https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-mac-app-store/black/${locale}`;
}

// Prices and free tier from docs/PLAN.md §2 (planned, USD). App Store sets local prices per storefront.
// Free tier (decided 2026-10-20): the first `welcomeTrialFiles` files get every feature including Pro;
// after that, basic conversions only, `freeDailyFiles` files a day, with ads. Pro has no limits and no ads.
export const pricing = {
  lifetime: '$24.99',
  lifetimeLaunch: '$19.99',
  yearly: '$11.99',
  trialDays: 7,
  welcomeTrialFiles: 10,
  freeDailyFiles: 5,
};
