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
const fonts = new URL('../public/assets/fonts/', import.meta.url).href;
const variants = {
  ko: { h: '드롭하면,<br><span class="o">목적지에</span> 딱 맞게.', p: 'Mac 파일 변환 · 기본 변환 무제한 무료 · 데이터 수집 안 함', tag: 'OG 이미지 자리표시자' },
  en: { h: 'Drop it,<br>and it <em>fits.</em>', p: 'File converter for Mac · Unlimited free conversions · No data collected', tag: 'OG image placeholder' },
};

const page = ({ h, p, tag }) => `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:KS;src:url(${fonts}instrument-serif.woff2)}
@font-face{font-family:KS;font-style:italic;src:url(${fonts}instrument-serif-italic.woff2)}
@font-face{font-family:KSKR;src:url(${fonts}noto-serif-kr-subset.woff2)}
html,body{margin:0;width:1200px;height:630px;overflow:hidden}
body{background:#ece6dd;color:#171411;font-family:-apple-system,"Apple SD Gothic Neo",sans-serif;word-break:keep-all;position:relative}
.wrap{position:absolute;left:80px;top:70px;bottom:70px;width:620px;display:flex;flex-direction:column}
.brand{font:400 46px KS;letter-spacing:-.02em}.brand i{display:inline-block;width:9px;height:9px;border-radius:50%;background:#f2661b;margin-left:3px}
h1{margin:auto 0 22px;font:500 76px/1.12 KS,KSKR;letter-spacing:-.035em}
h1 em{font-style:italic;color:#b8490b}.o{color:#b8490b}
p{margin:0;font-size:24px;color:#6d655c}
.arch{position:absolute;right:70px;top:60px;bottom:0;width:380px;border-radius:999px 999px 0 0;background:radial-gradient(60% 44% at 50% 56%,rgba(255,138,61,.55),transparent 72%),linear-gradient(180deg,#e9dfd2,#d8c6b1)}
.slice{position:absolute;left:50%;top:52%;width:290px;height:290px;transform:translate(-50%,-50%);border-radius:50%;background:radial-gradient(circle,#fff1dc 0 5%,transparent 5.5%),conic-gradient(from -30deg,#ffab5c 0 58deg,#fff1dc 58deg 60deg,#ffab5c 60deg 118deg,#fff1dc 118deg 120deg,#e2550f 120deg 178deg,#fff1dc 178deg 180deg,#ffab5c 180deg 238deg,#fff1dc 238deg 240deg,#ffab5c 240deg 298deg,#fff1dc 298deg 300deg,#ffab5c 300deg 358deg,#fff1dc 358deg);box-shadow:0 0 0 10px #fff1dc,0 0 0 20px #e9620f,0 30px 50px rgba(120,50,0,.3)}
.tag{position:absolute;left:80px;bottom:28px;color:#8c8174;font-size:15px}
</style></head><body><div class="wrap"><div class="brand">Kumquat<i></i></div><h1>${h}</h1><p>${p}</p></div><div class="arch"><div class="slice"></div></div><span class="tag">${tag}</span></body></html>`;

await mkdir(out, { recursive: true });
for (const [lang, v] of Object.entries(variants)) {
  const html = join(tmpdir(), `kumquat-og-${lang}.html`);
  await writeFile(html, page(v));
  execFileSync(chrome, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1', '--allow-file-access-from-files', '--window-size=1200,630', `--screenshot=${join(out, `default-${lang}.png`)}`, `file://${html}`], { stdio: 'ignore' });
  console.log(`wrote public/assets/og/default-${lang}.png`);
}
