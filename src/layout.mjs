import { site, storeLink } from './config.mjs';
import { icon } from './icons.mjs';

export const strings = {
  ko: {
    skip: '본문으로 건너뛰기',
    home: 'Shrinkwrap 홈',
    nav: [
      ['#destinations', '보낼 곳'],
      ['#how', '작동 방식'],
      ['#features', '기능'],
      ['#pricing', '가격'],
      ['guides/', '가이드'],
      ['support/', '지원'],
    ],
    otherLang: 'EN',
    otherLangCode: 'en',
    otherLangName: 'English',
    menu: '메뉴 열기',
    theme: '화면 모드 바꾸기',
    themeNames: { auto: '시스템', light: '라이트', dark: '다크' },
    cta: 'App Store',
    footer: {
      tagline: '보낼 곳을 고르면, 크기는 알아서 맞춥니다. 파일은 Mac 밖으로 나가지 않습니다.',
      product: '제품',
      resources: '자료',
      legal: '법률',
      links: {
        product: [['#destinations', '보낼 곳'], ['#how', '작동 방식'], ['#formats', '지원 포맷'], ['#pricing', '가격'], ['changelog/', '변경 기록']],
        resources: [['guides/', '보낼 곳 가이드'], ['support/', '지원·FAQ'], ['press/', '보도 자료']],
        legal: [['privacy/', '개인정보 처리방침'], ['terms/', '이용약관(EULA)'], ['opensource/', '오픈소스']],
      },
      fine: '이 사이트의 기능·가격은 출시 계획 기준입니다. Apple, Mac, macOS, App Store는 Apple Inc.의 상표입니다.',
    },
  },
  en: {
    skip: 'Skip to content',
    home: 'Shrinkwrap home',
    nav: [
      ['#destinations', 'Destinations'],
      ['#how', 'How it works'],
      ['#features', 'Features'],
      ['#pricing', 'Pricing'],
      ['support/', 'Support'],
    ],
    otherLang: 'KO',
    otherLangCode: 'ko',
    otherLangName: '한국어',
    menu: 'Open menu',
    theme: 'Change appearance',
    themeNames: { auto: 'System', light: 'Light', dark: 'Dark' },
    cta: 'App Store',
    footer: {
      tagline: 'Pick where it’s going, and it fits. Your files never leave your Mac.',
      product: 'Product',
      resources: 'Resources',
      legal: 'Legal',
      links: {
        product: [['#destinations', 'Destinations'], ['#how', 'How it works'], ['#formats', 'Formats'], ['#pricing', 'Pricing'], ['changelog/', 'Changelog']],
        resources: [['support/', 'Support & FAQ'], ['press/', 'Press kit'], ['../guides/', 'Upload guides (Korean)']],
        legal: [['privacy/', 'Privacy Policy'], ['terms/', 'Terms of Use (EULA)'], ['opensource/', 'Open source']],
      },
      fine: 'Features and prices on this site describe the launch plan. Apple, Mac, macOS and App Store are trademarks of Apple Inc.',
    },
  },
};

export const arrowSvg = icon('arrow-up-right');

// Brand symbol: a parcel tightly wrapped in clear film with one blue band. Also used for the favicon.
export const mark = `<svg class="mark" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><rect x="3.5" y="5.5" width="25" height="22" rx="6" fill="#e9eef8"/><path d="M13 5.5h6v22h-6z" fill="#2b63d9"/><rect x="3.5" y="5.5" width="25" height="22" rx="6" fill="none" stroke="#1d4bae" stroke-width="1.5"/><path d="M7.4 11.2c.8-1.7 2.2-2.6 3.4-2.9M23.6 23.4c.6-.5 1-1.1 1.2-1.8" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/></svg>`;

// Wordmark: serif name followed by an accent dot, as in the app.
export const wordmark = (cls = '') => `<span class="wm ${cls}">Shrinkwrap<i class="wm-dot" aria-hidden="true"></i></span>`;

const themeIcon = icon('sun', 'icon-sun') + icon('moon', 'icon-moon') + icon('circle-half', 'icon-auto');

// Runs before first paint so a saved theme never flashes.
const themeBoot = `<script>document.documentElement.classList.add('js');try{var t=localStorage.getItem('kq-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}</script>`;

function navHref(ctx, href) {
  if (href.startsWith('#')) return ctx.isHome ? href : ctx.href('') + href;
  return ctx.href(href);
}

export function btn(href, label, cls = '') {
  return `<a class="btn ${cls}" href="${href}">${label}<span class="arrow">${arrowSvg}</span></a>`;
}

export function layout(ctx, page) {
  const s = strings[ctx.lang];
  const url = site.url + ctx.outDir;
  const alternates = ctx.alternates.map((a) => `<link rel="alternate" hreflang="${a.lang}" href="${site.url}${a.outDir}">`).join('\n  ');
  const xDefault = ctx.alternates.find((a) => a.lang === 'ko');
  const ogImage = site.url + 'assets/og/' + (page.og || `default-${ctx.lang}.png`);
  const title = page.title.includes(site.name) ? page.title : `${page.title} · ${site.name}`;
  const other = ctx.alternates.find((a) => a.lang !== ctx.lang);
  const otherHref = other ? ctx.root + other.outDir : ctx.root + (ctx.lang === 'ko' ? 'en/' : '');
  const navLinks = s.nav.map(([h, l]) => `<a href="${navHref(ctx, h)}">${l}</a>`).join('');
  const footCol = (key) => `<div><h2>${s.footer[key]}</h2><ul>${s.footer.links[key].map(([h, l]) => `<li><a href="${navHref(ctx, h)}">${l}</a></li>`).join('')}</ul></div>`;

  return `<!DOCTYPE html>
<html lang="${ctx.lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${page.description}">
  <meta name="color-scheme" content="light dark">
  <meta name="theme-color" content="#ece6dd" media="(prefers-color-scheme: light)">
  <meta name="theme-color" content="#110f0d" media="(prefers-color-scheme: dark)">
  <link rel="canonical" href="${url}">
  ${alternates}
  ${xDefault ? `<link rel="alternate" hreflang="x-default" href="${site.url}${xDefault.outDir}">` : ''}
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${site.name}">
  <meta property="og:locale" content="${ctx.lang === 'ko' ? 'ko_KR' : 'en_US'}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${page.description}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${ogImage}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" type="image/svg+xml" href="${ctx.root}assets/favicon.svg">
  <link rel="preload" href="${ctx.root}assets/fonts/instrument-serif.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="${ctx.root}assets/site.css">
  ${themeBoot}
  <script src="${ctx.root}assets/site.js" defer></script>
  ${page.head || ''}
</head>
<body class="${page.bodyClass || ''}">
  <a class="skip-link" href="#main">${s.skip}</a>
  <header class="site-header">
    <div class="wrap header-inner">
      <a class="brand" href="${ctx.href('')}" aria-label="${s.home}">${mark}${wordmark()}</a>
      <nav class="nav" aria-label="${ctx.lang === 'ko' ? '주 메뉴' : 'Main'}">${navLinks}</nav>
      <div class="header-actions">
        <a class="lang-link" href="${otherHref}" lang="${s.otherLangCode}" hreflang="${s.otherLangCode}" aria-label="${s.otherLangName}">${s.otherLang}</a>
        <button class="theme-toggle" type="button" aria-label="${s.theme}" data-labels='${JSON.stringify(s.themeNames)}'>${themeIcon}</button>
        ${btn(storeLink(ctx.lang, 'header'), s.cta, 'header-cta')}
        <details class="mobile-nav">
          <summary aria-label="${s.menu}"><span></span></summary>
          <nav aria-label="${ctx.lang === 'ko' ? '모바일 메뉴' : 'Mobile'}">${navLinks}<a href="${otherHref}" lang="${s.otherLangCode}">${s.otherLangName}</a></nav>
        </details>
      </div>
    </div>
  </header>
  <main id="main">
${page.body}
  </main>
  <footer class="site-footer">
    <div class="wrap">
      <div class="footer-grid">
        <div class="footer-brand">
          <p>${s.footer.tagline}</p>
          <p class="credit">${ctx.lang === 'ko' ? '아이콘' : 'Icons'}: <a href="https://phosphoricons.com" rel="noopener">Phosphor</a></p>
          <a href="mailto:${site.email}">${site.email}</a>
        </div>
        ${footCol('product')}
        ${footCol('resources')}
        ${footCol('legal')}
      </div>
      <p class="wordmark" aria-hidden="true">Shrinkwrap<i class="wm-dot"></i></p>
      <div class="footer-fine"><p>${s.footer.fine}</p><p>© 2026 ${site.operator.name}</p></div>
    </div>
  </footer>
</body>
</html>
`;
}

// Apple's badge, loaded unchanged from Apple Marketing Tools, plus a note line.
export function storeCta(ctx, campaign, note) {
  const ko = ctx.lang === 'ko';
  return `<div class="store-cta">
          <a class="store-badge-link" href="${storeLink(ctx.lang, campaign)}" aria-label="${ko ? 'Mac App Store에서 Shrinkwrap 다운로드' : 'Download Shrinkwrap on the Mac App Store'}"><img class="store-badge" src="${ctx.badge}" width="164" height="46" alt="${ko ? 'Mac App Store에서 다운로드' : 'Download on the Mac App Store'}"></a>
          ${note ? `<p class="store-note">${note}</p>` : ''}
        </div>`;
}

export function draftBanner(ctx) {
  return ctx.lang === 'ko'
    ? `<div class="draft-banner" role="note"><strong>초안</strong><span>법률 검토 전 문서입니다. 앱 출시 전에 내용이 바뀔 수 있으며, 확정본이 게시되기 전까지 법적 효력이 있는 최종 문서로 보지 마세요.</span></div>`
    : `<div class="draft-banner" role="note"><strong>Draft</strong><span>This document has not been legally reviewed and may change before the app is released. Do not rely on it as a final, binding text until the final version is published.</span></div>`;
}

export function docPage(ctx, { eyebrow, title, lede, body, aside = '' }) {
  return `    <article class="wrap">
      <header class="doc-head">
        ${eyebrow ? `<p class="label">${eyebrow}</p>` : ''}
        <h1>${title}</h1>
        ${lede ? `<p class="lede">${lede}</p>` : ''}
      </header>
      <div class="doc-grid">
        <aside class="doc-aside">${aside}</aside>
        <div class="prose">
${body}
        </div>
      </div>
    </article>`;
}

// Real app captures (2x PNG from the app repo, converted to WebP). Shown at half their pixel size.
// Both themes are in the page; CSS shows the one matching the site theme, so the manual toggle works too.
// The files still show the pre-rebrand UI. Recapture them from the Shrinkwrap build and drop them in under the same
// names (`<name>-light.webp`, `<name>-dark.webp`); update the size here if a new capture has other pixel dimensions.
//   main       main window, “어디로 보내나요?” destinations screen
//   dropmenu   menu bar drop menu, destinations listed first
//   toastad    result card as free users see it (with the ad line)
//   toasthover result card on hover: compare, undo, similarity, new Mail message / share
//   settings   Settings › General (on-device promise)
const shotSizes = { main: [1800, 1240], toasthover: [496, 444], toastad: [496, 444], settings: [1080, 736], dropmenu: [520, 660] };
export function shot(ctx, name, alt, { cls = '', eager = false } = {}) {
  const [w, h] = shotSizes[name];
  const attrs = `width="${w / 2}" height="${h / 2}" decoding="async"${eager ? '' : ' loading="lazy"'}`;
  return `<span class="shot ${cls}"><img class="shot-light" src="${ctx.root}assets/shots/${name}-light.webp" ${attrs} alt="${alt}"><img class="shot-dark" src="${ctx.root}assets/shots/${name}-dark.webp" ${attrs} alt="${alt}"></span>`;
}
