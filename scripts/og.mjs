// Renders the placeholder Open Graph images (1200×630) with headless Chrome.
// Usage: npm run og   (set CHROME=/path/to/chrome if it isn't in the default macOS location)
// TODO: replace with a designed image that shows the real app once screenshots exist.

import { writeFile, mkdir } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

const chrome = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const out = fileURLToPath(new URL('../public/assets/og/', import.meta.url));
const logo = `<svg viewBox="0 0 32 32" width="64" height="64"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFB547"/><stop offset="1" stop-color="#E8590C"/></linearGradient></defs><ellipse cx="15" cy="18.5" rx="10.5" ry="11.5" transform="rotate(-18 15 18.5)" fill="url(#g)"/><ellipse cx="11.5" cy="14" rx="3" ry="1.6" transform="rotate(-50 11.5 14)" fill="#fff" opacity=".45"/><path d="M19.5 7.5c1.5-3.6 5-5.3 9-4.6-1 3.8-4.3 6-9 4.6z" fill="#3F9142"/></svg>`;

const variants = {
  ko: { h: '드롭하면,<br><em>목적지에 딱 맞게.</em>', p: 'Mac 파일 변환 · 기본 변환 무제한 무료 · 데이터 수집 안 함', tag: 'OG 이미지 자리표시자' },
  en: { h: 'Drop it,<br><em>and it fits.</em>', p: 'File converter for Mac · Unlimited free conversions · No data collected', tag: 'OG image placeholder' },
};

const page = ({ h, p, tag }) => `<!doctype html><html><head><meta charset="utf-8"><style>
html,body{margin:0;width:1200px;height:630px;overflow:hidden}
body{font-family:-apple-system,"SF Pro Display","Apple SD Gothic Neo",sans-serif;background:#0e0c0a;color:#f5eee5;position:relative;word-break:keep-all}
body::before{content:"";position:absolute;inset:0;background:radial-gradient(55% 70% at 78% 30%,rgba(255,128,40,.38),transparent 70%),radial-gradient(30% 40% at 10% 100%,rgba(124,201,127,.18),transparent 70%)}
.wrap{position:relative;padding:72px 84px;height:100%;box-sizing:border-box;display:flex;flex-direction:column}
.brand{display:flex;align-items:center;gap:16px;font-size:34px;font-weight:700;letter-spacing:-.02em}
h1{margin:auto 0 22px;font-size:92px;line-height:1.08;letter-spacing:-.04em;font-weight:700}
em{font-style:normal;background:linear-gradient(100deg,#ffb46b,#ff8a3d 60%);-webkit-background-clip:text;color:transparent}
p{margin:0;font-size:28px;color:#b8ad9f}
.tag{position:absolute;right:40px;top:40px;padding:6px 14px;border-radius:99px;border:1px dashed rgba(255,238,214,.3);color:#8c8174;font-size:18px}
</style></head><body><div class="wrap"><div class="brand">${logo}Kumquat</div><h1>${h}</h1><p>${p}</p></div><span class="tag">${tag}</span></body></html>`;

await mkdir(out, { recursive: true });
for (const [lang, v] of Object.entries(variants)) {
  const html = join(tmpdir(), `kumquat-og-${lang}.html`);
  await writeFile(html, page(v));
  execFileSync(chrome, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1', '--window-size=1200,630', `--screenshot=${join(out, `default-${lang}.png`)}`, `file://${html}`], { stdio: 'ignore' });
  console.log(`wrote public/assets/og/default-${lang}.png`);
}
