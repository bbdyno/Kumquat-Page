// Renders the placeholder Open Graph images (1200×630) with headless Chrome.
// Usage: npm run og   (set CHROME=/path/to/chrome if it isn't in the default macOS location)
// Art: the wrapped parcel from src/data/illustrations.mjs inside the arch, as on the landing page.
// TODO: replace with a designed image that shows the real app once new Shrinkwrap screenshots exist.

import { writeFile, mkdir } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

const chrome = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const out = fileURLToPath(new URL('../public/assets/og/', import.meta.url));
const fonts = new URL('../public/assets/fonts/', import.meta.url).href;
const { mark } = await import('../src/layout.mjs');
const { parcelArt } = await import('../src/data/illustrations.mjs');
const variants = {
  ko: { h: '보낼 곳에<br><span class="o">딱 맞게.</span>', p: '메일·메신저·서류 제출 용량 맞춤 · 처음 10개는 모든 기능 무료 · 데이터 수집 안 함', tag: '' },
  en: { h: 'Sized to fit<br><em>where it’s going.</em>', p: 'Email, chat and form uploads on your Mac · First 10 files fully free · No data collected', tag: '' },
};

const page = ({ h, p, tag }) => `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:KS;src:url(${fonts}instrument-serif.woff2)}
@font-face{font-family:KS;font-style:italic;src:url(${fonts}instrument-serif-italic.woff2)}
@font-face{font-family:KSKR;src:url(${fonts}noto-serif-kr-subset.woff2)}
html,body{margin:0;width:1200px;height:630px;overflow:hidden}
body{background:#ece6dd;color:#171411;font-family:-apple-system,"Apple SD Gothic Neo",sans-serif;word-break:keep-all;position:relative}
.wrap{position:absolute;left:80px;top:70px;bottom:70px;width:620px;display:flex;flex-direction:column}
.brand{display:flex;align-items:baseline;gap:14px;font:400 46px KS;letter-spacing:-.02em}.brand svg{width:40px;height:40px;align-self:center}.dot{display:inline-block;width:8px;height:8px;margin-left:-11px;border-radius:50%;background:#2b63d9}
h1{margin:auto 0 22px;font:500 76px/1.12 KS,KSKR;letter-spacing:-.035em}
h1 em{font-style:italic;color:#1d4bae}.o{color:#1d4bae}
p{margin:0;font-size:24px;color:#6d655c}
.arch{position:absolute;right:70px;top:60px;bottom:0;width:400px;border-radius:999px 999px 0 0;background:radial-gradient(90% 60% at 50% 8%,rgba(43,99,217,.22),transparent 70%),linear-gradient(180deg,#e9dfd2,#d8c6b1)}
.arch svg{position:absolute;left:50%;top:46%;width:88%;transform:translate(-50%,-50%)}
.parcel .box{fill:#f6f2ec}.parcel .box-side{fill:#e4ddd2}.parcel .floor{fill:rgba(23,20,17,.14)}.parcel .band{fill:#2b63d9}.parcel .band-edge{fill:#1d4bae}
.parcel .film{fill:rgba(255,255,255,.16);stroke:rgba(255,255,255,.75);stroke-width:2}.parcel .shine{fill:none;stroke:#fff;stroke-linecap:round;opacity:.8}.parcel .pinch{fill:none;stroke:rgba(255,255,255,.7);stroke-width:1.5;stroke-linecap:round}
.tag{position:absolute;left:80px;bottom:28px;color:#8c8174;font-size:15px}
</style></head><body><div class="wrap"><div class="brand">${mark}Shrinkwrap<i class="dot"></i></div><h1>${h}</h1><p>${p}</p></div><div class="arch">${parcelArt()}</div><span class="tag">${tag}</span></body></html>`;

await mkdir(out, { recursive: true });
for (const [lang, v] of Object.entries(variants)) {
  const html = join(tmpdir(), `shrinkwrap-og-${lang}.html`);
  await writeFile(html, page(v));
  execFileSync(chrome, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1', '--allow-file-access-from-files', '--window-size=1200,630', `--screenshot=${join(out, `default-${lang}.png`)}`, `file://${html}`], { stdio: 'ignore' });
  console.log(`wrote public/assets/og/default-${lang}.png`);
}
