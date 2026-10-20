// Site-wide settings. Everything marked TODO must be confirmed before launch.

export const site = {
  name: 'Kumquat',
  // TODO: replace with the custom domain if one is bought. Used only for canonical, hreflang, OG and sitemap URLs.
  url: 'https://bbdyno.github.io/Kumquat-Page/',
  // TODO: support address is a placeholder until a domain mailbox exists.
  email: 'support@kumquat.example',
  // Date shown on facts that can go stale (pricing, comparison table).
  factsDate: '2026-10-20',
  appVersion: '출시 전',
};

// App Store campaign links. TODO: replace APP_ID and PROVIDER_TOKEN after App Store Connect creates the app.
// One `ct` value per page lets App Store Connect attribute installs to the page that sent them.
const APP_ID = 'id0000000000';
const PROVIDER_TOKEN = '000000';

export function storeLink(lang, campaign) {
  const region = lang === 'ko' ? 'kr/' : '';
  return `https://apps.apple.com/${region}app/kumquat/${APP_ID}?mt=12&pt=${PROVIDER_TOKEN}&ct=${encodeURIComponent(campaign)}`;
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
