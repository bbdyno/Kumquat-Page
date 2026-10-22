// Renders the README artwork (hero banner, facts band, footer wordmark, site screenshots) with headless Chrome.
// Usage: npm run readme-art   (run `npm run build` first for the site screenshots; needs cwebp from Homebrew)
// Output: .github/readme/*.webp. The Korean files are also used by the Kumquat app repo's README;
// copy hero-ko-*.webp, band-ko.webp and footer-*.webp to Kumquat/.github/readme/ after re-rendering.

import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

const chrome = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const root = new URL('../', import.meta.url);
const out = fileURLToPath(new URL('.github/readme/', root));
const fonts = new URL('public/assets/fonts/', root).href;
const img = new URL('public/assets/img/', root).href;
const shots = new URL('public/assets/shots/', root).href;
// English captures copied from Kumquat/AppStore/captures (light appearance only).
const enShots = new URL('.github/readme/src/', root).href;
const { mark } = await import('../src/layout.mjs');

const theme = {
  light: { bg: '#ece6dd', paper: '#f6f2ec', ink: '#171411', muted: '#6d655c', faint: '#8c8174', accent: '#b8490b', rule: 'rgba(23,20,17,.14)', shadow: 'rgba(60,40,20,.22)' },
  dark: { bg: '#110f0d', paper: '#1b1815', ink: '#f3ede4', muted: '#a89d90', faint: '#7d7368', accent: '#ff8a3d', rule: 'rgba(243,237,228,.14)', shadow: 'rgba(0,0,0,.55)' },
};

const copy = {
  ko: {
    h: '끌다가 Shift 한 번,<br><span class="o">원하는 형식으로.</span>',
    p: 'Mac용 파일 변환·용량 줄이기.<br>파일은 Mac 밖으로 나가지 않습니다.',
    meta: ['macOS 12 이상', 'Intel · Apple 실리콘', '한국어 · English'],
    band: [['10개', '처음 파일', 'Pro 포함 모든 기능 무료 체험'], ['0', '업로드·수집', '서버도, 계정도, 분석 SDK도 없음'], ['12+', 'macOS Monterey부터', 'Intel과 Apple 실리콘 모두'], ['5개', '매일 무료 기본 변환', '체험 후에도 하루 5개, 광고 포함']],
  },
  en: {
    h: 'Drag, tap Shift,<br><em>drop.</em>',
    p: 'A file converter and optimizer for Mac.<br>Your files never leave your Mac.',
    meta: ['macOS 12 or later', 'Intel · Apple silicon', 'English · 한국어'],
    band: [['10', 'First files', 'Every feature free, Pro included'], ['0', 'Uploads & data', 'No server, no account, no analytics'], ['12+', 'macOS Monterey and up', 'Intel and Apple silicon'], ['5/day', 'Free basic conversions', 'After the trial, with ads']],
  },
};

const head = (w, h, t) => `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:KS;src:url(${fonts}instrument-serif.woff2)}
@font-face{font-family:KS;font-style:italic;src:url(${fonts}instrument-serif-italic.woff2)}
@font-face{font-family:KSKR;src:url(${fonts}noto-serif-kr-subset.woff2)}
html,body{margin:0;width:${w}px;height:${h}px;overflow:hidden}
body{background:${t.bg};color:${t.ink};font-family:-apple-system,"Apple SD Gothic Neo",sans-serif;word-break:keep-all;position:relative;-webkit-font-smoothing:antialiased}
.mark{display:block}
</style>`;

const capture = (name, lang, mode) => (lang === 'ko' ? `${shots}${name}-${mode}.webp` : `${enShots}${name}-en.webp`);

// 1280×520: editorial serif headline on the left, the sunlit kumquat arch on the right with real app captures over it.
const hero = (lang, mode) => {
  const t = theme[mode], c = copy[lang];
  return `${head(1280, 520, t)}<style>
.wrap{position:absolute;left:72px;top:58px;bottom:58px;width:600px;display:flex;flex-direction:column}
.brand{display:flex;align-items:center;gap:12px;font:400 38px KS;letter-spacing:-.02em}.brand svg{width:34px;height:34px}
h1{margin:auto 0 20px;font:500 ${lang === 'ko' ? 66 : 84}px/1.1 KS,KSKR;letter-spacing:-.035em}
h1 em{font-style:italic;color:${t.accent}}.o{color:${t.accent}}
p{margin:0 0 26px;font-size:20px;line-height:1.5;color:${t.muted}}
.meta{display:flex;gap:0;font-size:14px;color:${t.faint};border-top:1px solid ${t.rule};padding-top:14px}
.meta span+span::before{content:"";display:inline-block;width:4px;height:4px;border-radius:50%;background:${t.accent};margin:0 12px 3px}
.arch{position:absolute;right:96px;top:44px;bottom:0;width:360px;border-radius:999px 999px 0 0;background:url(${img}hero-kumquats.webp) 50% 40%/cover;${mode === 'dark' ? 'filter:brightness(.82) saturate(.95);' : ''}}
.wheel{position:absolute;right:300px;bottom:34px;width:300px;filter:drop-shadow(0 24px 40px ${t.shadow})}
.toast{position:absolute;right:46px;bottom:44px;width:190px;filter:drop-shadow(0 18px 30px ${t.shadow})}
</style></head><body><div class="wrap"><div class="brand">${mark}Kumquat</div><h1>${c.h}</h1><p>${c.p}</p><div class="meta">${c.meta.map((m) => `<span>${m}</span>`).join('')}</div></div>
<div class="arch"></div><img class="wheel" src="${capture('wheel', lang, mode)}"><img class="toast" src="${capture('toasthover', lang, mode)}"></body></html>`;
};

// 1280×190: the black number band from the site.
const band = (lang) => {
  const t = theme.dark, c = copy[lang];
  return `${head(1280, 190, { ...t, bg: '#171411' })}<style>
.row{display:grid;grid-template-columns:repeat(4,1fr);height:100%;padding:0 40px;box-sizing:border-box}
.cell{padding:34px 28px 0;border-left:1px solid rgba(243,237,228,.12)}.cell:first-child{border-left:0}
b{display:block;font:400 64px/1 KS,KSKR;letter-spacing:-.03em;color:#ff8a3d}
strong{display:block;margin:14px 0 4px;font-size:16px;font-weight:600;color:#f3ede4}
span{font-size:14px;color:#a89d90}
</style></head><body><div class="row">${c.band.map(([n, a, b]) => `<div class="cell"><b>${n}</b><strong>${a}</strong><span>${b}</span></div>`).join('')}</div></body></html>`;
};

// 1280×200: oversized footer wordmark, as on the site.
const footer = (mode) => {
  const t = theme[mode];
  return `${head(1280, 200, t)}<style>
.w{position:absolute;left:64px;right:64px;bottom:-34px;display:flex;align-items:flex-end;gap:26px;font:400 220px/1 KS;letter-spacing:-.05em;color:${t.ink}}
.w svg{width:150px;height:150px;margin-bottom:58px}
</style></head><body><div class="w">${mark}Kumquat</div></body></html>`;
};

const tmp = join(tmpdir(), 'kumquat-readme-art');
await mkdir(tmp, { recursive: true });
await mkdir(out, { recursive: true });

function shoot(name, html, w, h, { scale = 2 } = {}) {
  const png = join(tmp, `${name}.png`);
  const args = ['--headless=new', '--disable-gpu', '--hide-scrollbars', `--force-device-scale-factor=${scale}`, '--allow-file-access-from-files', `--window-size=${w},${h}`, `--screenshot=${png}`];
  execFileSync(chrome, [...args, html], { stdio: 'ignore' });
  execFileSync('cwebp', ['-quiet', '-q', '88', png, '-o', join(out, `${name}.webp`)]);
  console.log(`wrote .github/readme/${name}.webp`);
}

async function page(name, html, w, h, opts) {
  const file = join(tmp, `${name}.html`);
  await writeFile(file, html);
  shoot(name, `file://${file}`, w, h, opts);
}

for (const lang of ['ko', 'en']) {
  for (const mode of ['light', 'dark']) await page(`hero-${lang}-${mode}`, hero(lang, mode), 1280, 520);
  await page(`band-${lang}`, band(lang), 1280, 190);
}
for (const mode of ['light', 'dark']) await page(`footer-${mode}`, footer(mode), 1280, 200);

// Screenshots of the built site (first screen of the Korean and English landing pages). The page follows the
// system appearance, so each mode is shot from a temporary copy that pins the theme switch, kept next to the original
// so relative asset paths still resolve.
const dist = fileURLToPath(new URL('dist/', root));
for (const [lang, dir] of [['ko', ''], ['en', 'en/']]) {
  const html = await readFile(join(dist, dir, 'index.html'), 'utf8');
  for (const mode of ['light', 'dark']) {
    const file = join(dist, dir, `.readme-${mode}.html`);
    const pin = `<script>try{localStorage.setItem('kq-theme','${mode}')}catch(e){}</script>`;
    await writeFile(file, html.replace('<html ', `<html data-theme="${mode}" `).replace('<head>', `<head>${pin}`));
    shoot(`site-${lang}-${mode}`, `file://${file}`, 1440, 900, { scale: 1 });
    await rm(file);
  }
}

await rm(tmp, { recursive: true, force: true });
