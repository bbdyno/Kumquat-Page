import { site, pricing } from '../config.mjs';
import { docPage, placeholder } from '../layout.mjs';

export const path = 'press/';
export const priority = 0.4;

// TODO: replace screenshot placeholders and add a downloadable press kit ZIP once the app UI is final.

const swatches = [
  ['#E8590C', 'Kumquat Orange'],
  ['#FF9F43', 'Peel'],
  ['#2F7D33', 'Leaf'],
  ['#1B1712', 'Ink'],
  ['#FBF8F3', 'Rind'],
];

const swatchHtml = swatches.map(([hex, name]) => `<div class="swatch"><i style="background:${hex}"></i><span><strong>${name}</strong><br><span class="mono">${hex}</span></span></div>`).join('');

const ko = (ctx) => docPage(ctx, {
  eyebrow: '보도 자료',
  title: 'Kumquat 프레스 키트',
  lede: '기사와 리뷰에 쓸 수 있는 사실 정보와 소개 문구입니다. 리뷰용 프로모션 코드가 필요하면 메일로 연락해 주세요.',
  aside: `<h2>미디어 문의</h2><p><a href="mailto:${site.email}?subject=%5BPress%5D%20">${site.email}</a></p><h2>바로가기</h2><ul><li><a href="#facts">기본 정보</a></li><li><a href="#about">소개 문구</a></li><li><a href="#assets">이미지·로고</a></li></ul>`,
  body: `          <h2 id="facts">기본 정보</h2>
          <div class="table-scroll"><table><tbody>
            <tr><th scope="row">이름</th><td>Kumquat(가칭) · App Store 표기 예정: Kumquat: File Converter</td></tr>
            <tr><th scope="row">분류</th><td>macOS 유틸리티 · 파일 변환·최적화</td></tr>
            <tr><th scope="row">출시</th><td>준비 중(Mac App Store 단독 배포)</td></tr>
            <tr><th scope="row">요구 사양</th><td>macOS 12 이상, Intel·Apple 실리콘</td></tr>
            <tr><th scope="row">가격</th><td>무료(기본 변환 무제한) · Pro 연 ${pricing.yearly} 또는 평생 ${pricing.lifetime}(출시가 ${pricing.lifetimeLaunch}), USD 기준 계획가</td></tr>
            <tr><th scope="row">언어</th><td>한국어, 영어</td></tr>
            <tr><th scope="row">개인정보</th><td>데이터 수집 안 함, 계정 없음, 모든 처리 온디바이스</td></tr>
          </tbody></table></div>

          <h2 id="about">소개 문구</h2>
          <h3>한 줄</h3>
          <blockquote>Kumquat은 파일을 올릴 곳의 규격에 맞춰 자동으로 바꿔 주는 Mac용 파일 변환 앱입니다.</blockquote>
          <h3>한 문단</h3>
          <blockquote>Kumquat은 Mac용 파일 변환·최적화 앱입니다. 파일을 끌다가 Shift를 누르면 그 파일로 할 수 있는 작업이 휠로 펼쳐지고, 홈택스·정부24·메일처럼 올릴 곳의 허용 형식과 용량 한도에 맞춰 자동으로 변환합니다. 기본 변환은 횟수 제한 없이 무료이며, 여러 단계를 묶는 레시피, 폴더 감시, 온디바이스 AI는 Pro로 제공합니다. 모든 처리는 Mac 안에서 이루어지고, 데이터를 수집하지 않습니다. Intel Mac과 macOS 12부터 지원합니다.</blockquote>
          <h3>주요 특징</h3>
          <ul>
            <li>목적지 인식: 커서 아래 앱과 브라우저 업로드 칸에 맞춰 형식·용량·픽셀 규격 자동 조정</li>
            <li>목표 용량 + 품질 가드: “2MB 이하”로 줄이면서 글자 가독성 확인</li>
            <li>레시피와 폴더 감시: 리사이즈·변환·압축·메타데이터 제거·이름 변경·이동을 한 번에</li>
            <li>한국 특화: HWP/HWPX 변환, 국내 사이트 프리셋, 증명사진 메이커</li>
          </ul>

          <h2 id="assets">이미지·로고</h2>
          <div class="card-grid">
            ${placeholder('앱 아이콘 (1024×1024 PNG) 자리', '1 / 1')}
            ${placeholder('스크린샷: 휠 (2880×1800) 자리', '16 / 10')}
            ${placeholder('스크린샷: 레시피 편집기 자리', '16 / 10')}
          </div>
          <h3>브랜드 색</h3>
          <div class="swatches">${swatchHtml}</div>
          <p class="meta-line">로고와 스크린샷은 Kumquat을 소개하는 목적으로 자유롭게 쓸 수 있습니다. 로고의 색이나 비율은 바꾸지 말아 주세요.</p>`,
});

const en = (ctx) => docPage(ctx, {
  eyebrow: 'Press',
  title: 'Kumquat press kit',
  lede: 'Facts and copy you can use in articles and reviews. Email us if you need a promo code for review.',
  aside: `<h2>Media contact</h2><p><a href="mailto:${site.email}?subject=%5BPress%5D%20">${site.email}</a></p><h2>Jump to</h2><ul><li><a href="#facts">Fact sheet</a></li><li><a href="#about">Descriptions</a></li><li><a href="#assets">Images and logo</a></li></ul>`,
  body: `          <h2 id="facts">Fact sheet</h2>
          <div class="table-scroll"><table><tbody>
            <tr><th scope="row">Name</th><td>Kumquat (working title) · Planned App Store name: Kumquat: File Converter</td></tr>
            <tr><th scope="row">Category</th><td>macOS utility · file conversion and optimization</td></tr>
            <tr><th scope="row">Release</th><td>Coming soon (Mac App Store only)</td></tr>
            <tr><th scope="row">Requirements</th><td>macOS 12 or later, Intel and Apple silicon</td></tr>
            <tr><th scope="row">Price</th><td>Free (unlimited basic conversions) · Pro ${pricing.yearly}/year or ${pricing.lifetime} lifetime (launch ${pricing.lifetimeLaunch}), planned USD prices</td></tr>
            <tr><th scope="row">Languages</th><td>English, Korean</td></tr>
            <tr><th scope="row">Privacy</th><td>Data Not Collected, no account, all processing on device</td></tr>
          </tbody></table></div>

          <h2 id="about">Descriptions</h2>
          <h3>One line</h3>
          <blockquote>Kumquat is a file converter for Mac that fits files to wherever you’re uploading them.</blockquote>
          <h3>One paragraph</h3>
          <blockquote>Kumquat is a file converter and optimizer for Mac. Tap Shift while dragging a file and the actions that make sense for it fan out in a wheel; drop it on an upload field and Kumquat matches the accepted formats and size limit automatically. Basic conversions are free with no limits, while recipes, folder watching and on-device AI are part of Pro. Everything runs on your Mac and no data is collected. It supports Intel Macs and macOS 12 or later.</blockquote>
          <h3>Highlights</h3>
          <ul>
            <li>Destination awareness: fits format, size and dimensions to the app or upload field under the cursor</li>
            <li>Target size with a quality guard: shrink under 2 MB while keeping text readable</li>
            <li>Recipes and folder watching: resize, convert, compress, strip metadata, rename and move in one go</li>
            <li>Korea-ready: HWP/HWPX conversion, local site presets, ID photo maker</li>
          </ul>

          <h2 id="assets">Images and logo</h2>
          <div class="card-grid">
            ${placeholder('App icon (1024×1024 PNG) goes here', '1 / 1')}
            ${placeholder('Screenshot: the wheel (2880×1800)', '16 / 10')}
            ${placeholder('Screenshot: recipe editor', '16 / 10')}
          </div>
          <h3>Brand colors</h3>
          <div class="swatches">${swatchHtml}</div>
          <p class="meta-line">You may use the logo and screenshots to write about Kumquat. Please don’t change the logo’s colors or proportions.</p>`,
});

export function render(ctx) {
  return ctx.lang === 'ko'
    ? { title: '보도 자료', description: 'Kumquat 기본 정보, 소개 문구, 로고와 스크린샷, 미디어 문의처.', body: ko(ctx) }
    : { title: 'Press kit', description: 'Kumquat fact sheet, descriptions, logo, screenshots and media contact.', body: en(ctx) };
}
