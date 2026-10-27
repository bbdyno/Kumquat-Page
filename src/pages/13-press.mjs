import { site, pricing } from '../config.mjs';
import { docPage, shot, mark } from '../layout.mjs';

export const path = 'press/';
export const priority = 0.4;

// TODO: add the new app icon (assets/img/app-icon.webp, 128 px shown; app-icon-1024.png for download) and a new
// welcome-screen capture once they exist, plus a downloadable press kit ZIP. The old icon and welcome capture
// were removed with the 2026-10-27 rebrand.

const swatches = [
  ['#2B63D9', 'Film Blue'],
  ['#1D4BAE', 'Film Blue Ink'],
  ['#6EA0FF', 'Film Blue (dark mode)'],
  ['#171411', 'Ink'],
  ['#F6F2EC', 'Paper'],
];

const swatchHtml = swatches.map(([hex, name]) => `<div class="swatch"><i style="background:${hex}"></i><span><strong>${name}</strong><br><span class="mono">${hex}</span></span></div>`).join('');

const logo = (ctx, caption) => `<figure class="press-shot press-mark">${mark}<figcaption>${caption} · <a href="${ctx.root}assets/favicon.svg" download="shrinkwrap-mark.svg">SVG</a></figcaption></figure>`;

const ko = (ctx) => docPage(ctx, {
  eyebrow: '보도 자료',
  title: 'Shrinkwrap 프레스 키트',
  lede: '기사와 리뷰에 쓸 수 있는 사실 정보와 소개 문구입니다. 리뷰용 프로모션 코드가 필요하면 메일로 연락해 주세요.',
  aside: `<h2>미디어 문의</h2><p><a href="mailto:${site.email}?subject=%5BPress%5D%20">${site.email}</a></p><h2>바로가기</h2><ul><li><a href="#facts">기본 정보</a></li><li><a href="#about">소개 문구</a></li><li><a href="#assets">이미지·로고</a></li></ul>`,
  body: `          <h2 id="facts">기본 정보</h2>
          <div class="table-scroll"><table><tbody>
            <tr><th scope="row">이름</th><td>Shrinkwrap(슈링크랩) · App Store 표기: Shrinkwrap: 보낼 곳에 맞게 줄이기</td></tr>
            <tr><th scope="row">부제</th><td>메일·메신저·서류 제출 용량 맞춤</td></tr>
            <tr><th scope="row">분류</th><td>macOS 유틸리티 · 파일 용량 맞춤·변환</td></tr>
            <tr><th scope="row">출시</th><td>준비 중(Mac App Store 단독 배포)</td></tr>
            <tr><th scope="row">요구 사양</th><td>macOS 12 이상, Intel·Apple 실리콘</td></tr>
            <tr><th scope="row">가격</th><td>무료(처음 파일 ${pricing.welcomeTrialFiles}개는 모든 기능, 이후 기본 변환 하루 ${pricing.freeDailyFiles}개, 광고 포함) · Pro 연 ${pricing.yearly}(${pricing.trialDays}일 무료 체험) 또는 평생 ${pricing.lifetime}(출시가 ${pricing.lifetimeLaunch}), 광고 없음 · USD 기준 계획가</td></tr>
            <tr><th scope="row">언어</th><td>한국어, 영어</td></tr>
            <tr><th scope="row">개인정보</th><td>데이터 수집 안 함, 계정 없음, 모든 처리 온디바이스</td></tr>
          </tbody></table></div>

          <h2 id="about">소개 문구</h2>
          <h3>한 줄</h3>
          <blockquote>Shrinkwrap은 메일, 메신저, 서류 제출처럼 보낼 곳을 고르면 그곳의 용량 한도에 맞게 파일을 줄여 주는 Mac 앱입니다.</blockquote>
          <h3>한 문단</h3>
          <blockquote>Shrinkwrap은 파일을 보낼 곳에 맞춰 주는 Mac 앱입니다. “어디로 보내나요?”에서 메일 첨부, 메신저, 서류 제출, 사진 첨부 같은 보낼 곳을 고르고 파일을 놓으면, 그곳의 한도와 형식에 맞는 새 파일을 만듭니다. 메일 첨부는 전체 20 MB를 파일 크기 비율로 나눠 맞추고, PDF는 글자를 살린 채 이미지만 압축합니다. 품질을 지나치게 낮춰야 할 때는 해상도부터 줄이고, 결과마다 원본과의 유사도를 보여 줍니다. 결과는 새 메일에 바로 첨부하거나 공유할 수 있습니다. 처음 파일 ${pricing.welcomeTrialFiles}개는 모든 기능을 무료로 써 볼 수 있고, 이후에도 기본 변환은 하루 ${pricing.freeDailyFiles}개까지 무료입니다. 모든 처리는 Mac 안에서 이루어지고, 데이터를 수집하지 않습니다. Intel Mac과 macOS 12부터 지원합니다.</blockquote>
          <h3>주요 특징</h3>
          <ul>
            <li>보낼 곳 7곳: 메일 첨부(합계 20 MB), 메신저(파일당 25 MB), 작은 업로드(10 MB), 서류 제출(5 MB), 사진 첨부(500 KB), 웹·블로그 이미지(500 KB, WebP), 직접 지정. 한도는 설정에서 바꿀 수 있음</li>
            <li>메일 첨부 합계 맞춤: 여러 파일을 놓으면 전체 한도를 파일 크기 비율로 나눠 각각 줄임</li>
            <li>품질 가드: 글자가 뭉개지기 전에 해상도부터 줄이고, 원본과의 유사도 표시</li>
            <li>글자를 살리는 PDF 압축: 메일 첨부와 서류 제출에서 글자는 그대로, 이미지만 압축</li>
            <li>결과를 새 메일에 첨부, 공유, Finder에서 보기. 이미 한도 안인 파일은 “이미 맞음”으로 표시</li>
            <li>메뉴 막대 아이콘에 놓기, Finder 빠른 동작, 단축어에서도 보낼 곳부터 선택. 형식만 바꾸는 “다른 형식으로”도 제공</li>
            <li>원본은 그대로, 기록·통계 창에서 비교·실행 취소</li>
          </ul>

          <h2 id="assets">이미지·로고</h2>
          <div class="card-grid">
            ${logo(ctx, '로고 마크')}
            <figure class="press-shot">${shot(ctx, 'main', '메인 창')}<figcaption>메인 창</figcaption></figure>
            <figure class="press-shot">${shot(ctx, 'dropmenu', '메뉴 막대 메뉴')}<figcaption>메뉴 막대 메뉴</figcaption></figure>
            <figure class="press-shot">${shot(ctx, 'toasthover', '결과 카드')}<figcaption>결과 카드</figcaption></figure>
            <figure class="press-shot">${shot(ctx, 'settings', '설정 · 일반')}<figcaption>설정 · 일반</figcaption></figure>
          </div>
          <h3>브랜드 색</h3>
          <div class="swatches">${swatchHtml}</div>
          <p class="meta-line">로고와 스크린샷은 Shrinkwrap을 소개하는 목적으로 자유롭게 쓸 수 있습니다. 로고의 색이나 비율은 바꾸지 말아 주세요.</p>`,
});

const en = (ctx) => docPage(ctx, {
  eyebrow: 'Press',
  title: 'Shrinkwrap press kit',
  lede: 'Facts and copy you can use in articles and reviews. Email us if you need a promo code for review.',
  aside: `<h2>Media contact</h2><p><a href="mailto:${site.email}?subject=%5BPress%5D%20">${site.email}</a></p><h2>Jump to</h2><ul><li><a href="#facts">Fact sheet</a></li><li><a href="#about">Descriptions</a></li><li><a href="#assets">Images and logo</a></li></ul>`,
  body: `          <h2 id="facts">Fact sheet</h2>
          <div class="table-scroll"><table><tbody>
            <tr><th scope="row">Name</th><td>Shrinkwrap · App Store name: Shrinkwrap: Fit to Any Limit</td></tr>
            <tr><th scope="row">Subtitle</th><td>Email, chat and form uploads</td></tr>
            <tr><th scope="row">Category</th><td>macOS utility · fitting files to size limits, file conversion</td></tr>
            <tr><th scope="row">Release</th><td>Coming soon (Mac App Store only)</td></tr>
            <tr><th scope="row">Requirements</th><td>macOS 12 or later, Intel and Apple silicon</td></tr>
            <tr><th scope="row">Price</th><td>Free (every feature for the first ${pricing.welcomeTrialFiles} files, then ${pricing.freeDailyFiles} basic conversions a day, with ads) · Pro ${pricing.yearly}/year (${pricing.trialDays}-day free trial) or ${pricing.lifetime} lifetime (launch ${pricing.lifetimeLaunch}), no ads · planned USD prices</td></tr>
            <tr><th scope="row">Languages</th><td>English, Korean</td></tr>
            <tr><th scope="row">Privacy</th><td>Data Not Collected, no account, all processing on device</td></tr>
          </tbody></table></div>

          <h2 id="about">Descriptions</h2>
          <h3>One line</h3>
          <blockquote>Shrinkwrap is a Mac app that fits files to where they’re going: pick email, chat or an online form, and it shrinks your files to that limit.</blockquote>
          <h3>One paragraph</h3>
          <blockquote>Shrinkwrap fits files to where they’re going. Pick a destination such as an email attachment, a messenger, an online form or a photo upload, drop your files, and it makes new copies that fit that limit and format. Email attachments share a 20 MB total that is split across the files by size, and PDFs keep their text while only the images inside are compressed. When fitting a limit would crush the quality, it lowers the resolution first and shows how closely each result matches the original. Results go straight into a new Mail message or the share menu. Your first ${pricing.welcomeTrialFiles} files get every feature free and ${pricing.freeDailyFiles} basic conversions a day stay free after that. Everything runs on your Mac and no data is collected. It supports Intel Macs and macOS 12 or later.</blockquote>
          <h3>Highlights</h3>
          <ul>
            <li>Seven destinations: email attachment (20 MB in total), messenger (25 MB per file), small upload (10 MB), online forms (5 MB), photo upload (500 KB), web images (500 KB, WebP) and custom. Every limit can be changed in Settings</li>
            <li>Email total budget: drop several files and the total is split across them by size</li>
            <li>Quality guard: lowers resolution before text gets crushed, and shows similarity to the original</li>
            <li>Text-preserving PDF compression for email attachments and online forms</li>
            <li>Send results to a new Mail message or the share menu, or show them in Finder. Files that already fit are marked as such</li>
            <li>Menu bar drop, Finder Quick Actions and Shortcuts all start with the destination; plain format conversion is there too</li>
            <li>Originals stay as they were; compare and undo from the history and stats window</li>
          </ul>

          <h2 id="assets">Images and logo</h2>
          <div class="card-grid">
            ${logo(ctx, 'Logo mark')}
            <figure class="press-shot">${shot(ctx, 'main', 'Main window')}<figcaption>Main window (Korean UI)</figcaption></figure>
            <figure class="press-shot">${shot(ctx, 'dropmenu', 'Menu bar menu')}<figcaption>Menu bar menu (Korean UI)</figcaption></figure>
            <figure class="press-shot">${shot(ctx, 'toasthover', 'Result card')}<figcaption>Result card</figcaption></figure>
            <figure class="press-shot">${shot(ctx, 'settings', 'Settings, General')}<figcaption>Settings · General</figcaption></figure>
          </div>
          <h3>Brand colors</h3>
          <div class="swatches">${swatchHtml}</div>
          <p class="meta-line">You may use the logo and screenshots to write about Shrinkwrap. Please don’t change the logo’s colors or proportions.</p>`,
});

export function render(ctx) {
  return ctx.lang === 'ko'
    ? { title: '보도 자료', description: 'Shrinkwrap 기본 정보, 소개 문구, 로고와 스크린샷, 미디어 문의처.', body: ko(ctx) }
    : { title: 'Press kit', description: 'Shrinkwrap fact sheet, descriptions, logo, screenshots and media contact.', body: en(ctx) };
}
