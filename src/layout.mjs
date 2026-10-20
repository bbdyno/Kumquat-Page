import { site, storeLink } from './config.mjs';

export const strings = {
  ko: {
    skip: '본문으로 건너뛰기',
    home: 'Kumquat 홈',
    nav: [
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
      tagline: '드롭하면, 목적지에 딱 맞게. 파일은 Mac 밖으로 나가지 않습니다.',
      product: '제품',
      resources: '자료',
      legal: '법률',
      links: {
        product: [['#how', '작동 방식'], ['#formats', '지원 포맷'], ['#pricing', '가격'], ['#compare', '비교'], ['changelog/', '변경 기록']],
        resources: [['guides/', '목적지 가이드'], ['support/', '지원·FAQ'], ['press/', '보도 자료']],
        legal: [['privacy/', '개인정보 처리방침'], ['terms/', '이용약관(EULA)']],
      },
      fine: 'Kumquat은 개발 중인 앱의 가칭이며, 이 사이트의 기능·가격은 출시 계획 기준입니다. Apple, Mac, macOS, App Store는 Apple Inc.의 상표입니다.',
    },
  },
  en: {
    skip: 'Skip to content',
    home: 'Kumquat home',
    nav: [
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
      tagline: 'Drop it, and it fits where it’s going. Your files never leave your Mac.',
      product: 'Product',
      resources: 'Resources',
      legal: 'Legal',
      links: {
        product: [['#how', 'How it works'], ['#formats', 'Formats'], ['#pricing', 'Pricing'], ['#compare', 'Compare'], ['changelog/', 'Changelog']],
        resources: [['support/', 'Support & FAQ'], ['press/', 'Press kit'], ['../guides/', 'Upload guides (Korean)']],
        legal: [['privacy/', 'Privacy Policy'], ['terms/', 'Terms of Use (EULA)']],
      },
      fine: 'Kumquat is a working title for an app in development. Features and prices on this site describe the launch plan. Apple, Mac, macOS and App Store are trademarks of Apple Inc.',
    },
  },
};

export const arrowSvg = `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 12L12 4M5.5 4H12v6.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const themeIcon = `<svg class="icon-sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg><svg class="icon-moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg><svg class="icon-auto" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 3.5a8.5 8.5 0 0 1 0 17z" fill="currentColor"/></svg>`;

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
  const title = page.title.includes('Kumquat') ? page.title : `${page.title} · Kumquat`;
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
  <meta property="og:site_name" content="Kumquat">
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
      <a class="brand" href="${ctx.href('')}" aria-label="${s.home}">Kumquat<i aria-hidden="true"></i></a>
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
          <a href="mailto:${site.email}">${site.email}</a>
        </div>
        ${footCol('product')}
        ${footCol('resources')}
        ${footCol('legal')}
      </div>
      <p class="wordmark" aria-hidden="true">Kumquat<i></i></p>
      <div class="footer-fine"><p>${s.footer.fine}</p><p>© 2026 Kumquat</p></div>
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
          <a class="store-badge-link" href="${storeLink(ctx.lang, campaign)}" aria-label="${ko ? 'Mac App Store에서 Kumquat 다운로드' : 'Download Kumquat on the Mac App Store'}"><img class="store-badge" src="${ctx.badge}" width="164" height="46" alt="${ko ? 'Mac App Store에서 다운로드' : 'Download on the Mac App Store'}"></a>
          ${note ? `<p class="store-note">${note}</p>` : ''}
        </div>`;
}

export function placeholder(label, ratio = '16 / 10') {
  return `<div class="placeholder" style="aspect-ratio:${ratio}" role="img" aria-label="${label}"><span class="ph-tag">${label}</span></div>`;
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
