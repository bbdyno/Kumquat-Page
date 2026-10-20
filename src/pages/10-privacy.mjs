import { site } from '../config.mjs';
import { docPage, draftBanner } from '../layout.mjs';

export const path = 'privacy/';
export const priority = 0.5;

// TODO before launch: legal review (incl. 개인정보 보호법 §30 items), effective date, operator name/contact.

const ko = (ctx) => docPage(ctx, {
  eyebrow: '개인정보 처리방침',
  title: 'Kumquat은 개인정보를 수집하지 않습니다.',
  lede: '파일 변환, 압축, AI 처리는 모두 사용자의 Mac 안에서 이루어집니다. 이 문서는 그 사실과, 예외적으로 네트워크가 쓰이는 경우를 설명합니다.',
  aside: `<h2>목차</h2><ol>
    <li><a href="#summary">요약</a></li><li><a href="#app">앱이 처리하는 정보</a></li><li><a href="#network">네트워크 사용</a></li>
    <li><a href="#apple">구매와 Apple</a></li><li><a href="#site">웹사이트</a></li><li><a href="#legal">법정 고지 항목</a></li>
    <li><a href="#rights">권리와 문의</a></li><li><a href="#changes">변경</a></li></ol>`,
  body: `${draftBanner(ctx)}
          <p class="meta-line">초안 작성일 ${site.factsDate} · 시행일: 앱 출시일에 확정</p>

          <h2 id="summary">요약</h2>
          <ul>
            <li>Kumquat은 개인정보를 수집·저장·전송하지 않습니다. 회원가입, 계정, 로그인이 없습니다.</li>
            <li>사용자가 다루는 파일과 그 내용은 Mac 밖으로 나가지 않습니다. Kumquat이 운영하는 서버는 없습니다.</li>
            <li>분석, 광고, 크래시 리포트 SDK 등 서드파티 추적 도구를 쓰지 않습니다.</li>
            <li>App Store 개인정보 라벨은 “데이터 수집 안 함”으로 신고하는 것을 기준으로 합니다.</li>
          </ul>

          <h2 id="app">앱이 처리하는 정보</h2>
          <p>아래 정보는 기능을 위해 <strong>사용자의 Mac 안에서만</strong> 처리되며, 개발자에게 전송되지 않습니다.</p>
          <div class="table-wrap"><table>
            <thead><tr><th scope="col">정보</th><th scope="col">용도</th><th scope="col">저장 위치·기간</th></tr></thead>
            <tbody>
              <tr><th scope="row">사용자가 끌어 놓거나 선택한 파일</th><td>변환·압축·편집·AI 처리</td><td>결과 파일은 사용자가 정한 위치. 원본 보관함 사본은 앱 컨테이너에 두고 설정한 기간(기본 24시간) 후 삭제</td></tr>
              <tr><th scope="row">작업 기록(파일 이름, 경로, 작업 종류, 시각)</th><td>기록 보기, 실행 취소</td><td>앱 컨테이너의 로컬 데이터베이스. Free 24시간, Pro 최대 30일 후 자동 삭제. 설정에서 즉시 지울 수 있음</td></tr>
              <tr><th scope="row">커서 아래 앱의 번들 ID</th><td>목적지 인식(예: 메일에 놓으면 첨부 규격 적용)</td><td>저장하지 않음. 창 제목이나 화면 내용은 읽지 않음</td></tr>
              <tr><th scope="row">브라우저 확장이 읽는 업로드 칸 정보(허용 형식, 용량 안내 문구, 현재 도메인)</th><td>업로드 칸에 맞춘 자동 변환</td><td>앱으로만 전달하고 저장하지 않음. 페이지 내용은 수집하지 않음</td></tr>
              <tr><th scope="row">클립보드 내용(기능을 켠 경우)</th><td>복사한 이미지 자동 최적화, 변환해서 붙여넣기</td><td>저장하지 않음</td></tr>
              <tr><th scope="row">설정, 레시피, 사용자 프리셋</th><td>앱 동작</td><td>앱 컨테이너. 앱 삭제 시 함께 삭제</td></tr>
            </tbody>
          </table></div>
          <p>OCR, 받아쓰기, 배경 제거, 번역 같은 AI 기능은 Apple이 macOS에 제공하는 온디바이스 프레임워크(Vision, Speech, Core ML 등)로 처리합니다. Kumquat은 이 과정에서 데이터를 외부로 보내지 않습니다.</p>

          <h3>요청하는 권한</h3>
          <ul>
            <li><strong>파일·폴더 접근</strong>: 사용자가 직접 고른 파일과, 폴더 감시에 등록한 폴더만 접근합니다.</li>
            <li><strong>손쉬운 사용</strong>: “변환해서 붙여넣기”를 켤 때만 요청합니다. 붙여넣기 단축키를 보내는 데에만 씁니다.</li>
          </ul>

          <h2 id="network">네트워크 사용</h2>
          <p>Kumquat은 다음 한 가지 경우에만 인터넷에 연결합니다.</p>
          <ul>
            <li><strong>목적지 프리셋 갱신</strong>: 사이트별 허용 형식·용량 규칙 목록(서명된 JSON 파일)을 이 웹사이트에서 내려받습니다. 요청에는 파일이나 개인정보가 담기지 않습니다. 다만 인터넷 통신의 특성상 사이트를 호스팅하는 GitHub가 IP 주소 등 접속 기록을 처리할 수 있습니다(<a href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" rel="noopener">GitHub 개인정보 처리방침</a>).</li>
          </ul>
          <p>설정에서 <strong>완전 오프라인 모드</strong>를 켜면 이 갱신도 멈추고, 앱에 포함된 프리셋만 사용합니다.</p>

          <h2 id="apple">구매와 Apple</h2>
          <p>Pro 구매와 구독은 Apple의 App Store(StoreKit)로만 처리합니다. 결제 정보는 Apple이 처리하며 개발자는 받지 않습니다. 구매 여부는 기기에 있는 App Store 영수증으로 확인하며, 별도의 결제·라이선스 서버를 쓰지 않습니다.</p>
          <p>사용자가 Apple 기기 설정에서 “개발자와 공유”를 허용한 경우, Apple은 크래시 리포트와 사용 통계를 개인을 식별할 수 없는 형태로 개발자에게 제공할 수 있습니다. 이 데이터는 Apple의 <a href="https://www.apple.com/kr/legal/privacy/" rel="noopener">개인정보 처리방침</a>에 따라 처리됩니다.</p>

          <h2 id="site">웹사이트</h2>
          <ul>
            <li>이 사이트는 GitHub Pages로 호스팅됩니다. 쿠키, 분석 도구, 광고 추적을 쓰지 않습니다.</li>
            <li>화면 모드(라이트/다크) 선택은 브라우저의 로컬 저장소에만 저장되며 전송되지 않습니다.</li>
            <li>App Store 배지 이미지는 Apple 서버에서 불러오므로, 페이지를 열면 Apple이 IP 주소 등 접속 정보를 받을 수 있습니다.</li>
          </ul>

          <h2 id="legal">법정 고지 항목</h2>
          <p>「개인정보 보호법」 제30조에 따라 공개해야 하는 항목을 정리합니다. Kumquat은 개인정보를 수집하지 않으므로 대부분의 항목이 해당하지 않습니다.</p>
          <div class="table-wrap"><table>
            <tbody>
              <tr><th scope="row">처리 목적·항목</th><td>해당 없음(수집하지 않음)</td></tr>
              <tr><th scope="row">처리 및 보유 기간</th><td>해당 없음. 앱 안의 기록은 사용자 Mac에만 있으며 위 표의 기간에 따라 삭제</td></tr>
              <tr><th scope="row">제3자 제공</th><td>하지 않음</td></tr>
              <tr><th scope="row">처리 위탁</th><td>하지 않음</td></tr>
              <tr><th scope="row">국외 이전</th><td>하지 않음</td></tr>
              <tr><th scope="row">파기 절차·방법</th><td>보관하는 개인정보가 없음. 기기 안의 데이터는 앱 삭제 또는 설정의 “기록 지우기”로 즉시 삭제</td></tr>
              <tr><th scope="row">자동 수집 장치(쿠키 등)</th><td>설치·운영하지 않음</td></tr>
              <tr><th scope="row">만 14세 미만 아동</th><td>아동의 개인정보도 수집하지 않음</td></tr>
              <tr><th scope="row">안전성 확보 조치</th><td>App Sandbox 적용, 서드파티 SDK 미사용, 네트워크 사용 최소화</td></tr>
              <tr><th scope="row">개인정보 보호책임자</th><td>[운영자 이름 확정 후 기재] · <a href="mailto:${site.email}">${site.email}</a></td></tr>
            </tbody>
          </table></div>

          <h2 id="rights">권리와 문의</h2>
          <p>개발자는 사용자의 개인정보를 보유하지 않으므로 열람·정정·삭제를 요청할 대상 정보가 없습니다. Mac 안의 기록과 설정은 사용자가 언제든 지울 수 있습니다. 궁금한 점은 <a href="mailto:${site.email}">${site.email}</a>으로 문의해 주세요.</p>
          <p>개인정보 침해에 대한 신고·상담은 개인정보침해신고센터(국번 없이 118, privacy.kisa.or.kr), 개인정보분쟁조정위원회(1833-6972, www.kopico.go.kr)에도 할 수 있습니다.</p>

          <h2 id="changes">변경</h2>
          <p>이 방침을 바꾸면 이 페이지에 시행일과 함께 게시합니다. 데이터 처리 방식이 바뀌는 중대한 변경은 앱 업데이트 노트에도 알립니다.</p>`,
});

const en = (ctx) => docPage(ctx, {
  eyebrow: 'Privacy Policy',
  title: 'Kumquat doesn’t collect your personal data.',
  lede: 'Converting, compressing and AI processing all happen on your Mac. This policy explains that, and the one case where the app uses the network.',
  aside: `<h2>Contents</h2><ol>
    <li><a href="#summary">Summary</a></li><li><a href="#app">What the app processes</a></li><li><a href="#network">Network use</a></li>
    <li><a href="#apple">Purchases and Apple</a></li><li><a href="#site">This website</a></li><li><a href="#rights">Your rights and contact</a></li><li><a href="#changes">Changes</a></li></ol>`,
  body: `${draftBanner(ctx)}
          <p class="meta-line">Draft written ${site.factsDate} · Effective date: set at app launch</p>

          <h2 id="summary">Summary</h2>
          <ul>
            <li>Kumquat does not collect, store or transmit personal data. There is no sign-up, account or login.</li>
            <li>Your files and their contents never leave your Mac. Kumquat runs no servers.</li>
            <li>No third-party tracking: no analytics, advertising or crash-reporting SDKs.</li>
            <li>The App Store privacy label is meant to be declared as “Data Not Collected.”</li>
          </ul>

          <h2 id="app">What the app processes</h2>
          <p>The information below is processed <strong>only on your Mac</strong> to make features work. None of it is sent to the developer.</p>
          <div class="table-wrap"><table>
            <thead><tr><th scope="col">Information</th><th scope="col">Purpose</th><th scope="col">Where and how long</th></tr></thead>
            <tbody>
              <tr><th scope="row">Files you drop or choose</th><td>Converting, compressing, editing, AI</td><td>Results go where you choose. Copies in the originals vault live in the app container and are deleted after the period you set (24 hours by default)</td></tr>
              <tr><th scope="row">Activity history (file name, path, action, time)</th><td>History and undo</td><td>Local database in the app container. Deleted automatically after 24 hours (Free) or up to 30 days (Pro). You can clear it anytime</td></tr>
              <tr><th scope="row">Bundle ID of the app under the cursor</th><td>Destination awareness (e.g. attachment specs when dropping on Mail)</td><td>Not stored. Window titles and screen contents are never read</td></tr>
              <tr><th scope="row">Upload field details read by the browser extension (accepted types, size hint text, current domain)</th><td>Converting to fit the upload field</td><td>Passed to the app only and not stored. Page contents are not collected</td></tr>
              <tr><th scope="row">Clipboard contents (if you turn it on)</th><td>Optimizing copied images, convert-and-paste</td><td>Not stored</td></tr>
              <tr><th scope="row">Settings, recipes, custom presets</th><td>App behavior</td><td>App container. Removed when you delete the app</td></tr>
            </tbody>
          </table></div>
          <p>AI features such as OCR, transcription, background removal and translation use on-device frameworks Apple ships with macOS (Vision, Speech, Core ML and others). Kumquat sends nothing off your Mac in the process.</p>

          <h3>Permissions</h3>
          <ul>
            <li><strong>Files and folders</strong>: only files you pick and folders you add to folder watching.</li>
            <li><strong>Accessibility</strong>: requested only when you turn on convert-and-paste, and used only to send the paste shortcut.</li>
          </ul>

          <h2 id="network">Network use</h2>
          <p>Kumquat connects to the internet in one case only.</p>
          <ul>
            <li><strong>Refreshing destination presets</strong>: it downloads the list of per-site format and size rules (a signed JSON file) from this website. The request contains no files or personal data. Like any web request, GitHub, which hosts the site, may process your IP address and access logs (<a href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" rel="noopener">GitHub Privacy Statement</a>).</li>
          </ul>
          <p>Turn on <strong>full offline mode</strong> in Settings to stop this too and use only the presets bundled with the app.</p>

          <h2 id="apple">Purchases and Apple</h2>
          <p>Pro purchases and subscriptions are handled only through Apple’s App Store (StoreKit). Apple processes payment details; the developer never receives them. Your purchase is verified with the App Store receipt on your device, with no separate payment or license server.</p>
          <p>If you allowed “Share with App Developers” in your Apple device settings, Apple may provide crash reports and usage statistics to the developer in a form that doesn’t identify you. Apple handles that data under its <a href="https://www.apple.com/legal/privacy/" rel="noopener">Privacy Policy</a>.</p>

          <h2 id="site">This website</h2>
          <ul>
            <li>The site is hosted on GitHub Pages. It uses no cookies, analytics or ad tracking.</li>
            <li>Your light/dark choice is saved only in your browser’s local storage and is never sent anywhere.</li>
            <li>The App Store badge image loads from Apple’s servers, so Apple may receive your IP address when a page opens.</li>
          </ul>

          <h2 id="rights">Your rights and contact</h2>
          <p>Because the developer holds no personal data about you, there is nothing to access, correct or delete on our side. You can clear history and settings on your Mac at any time. Questions: <a href="mailto:${site.email}">${site.email}</a>.</p>

          <h2 id="changes">Changes</h2>
          <p>Changes to this policy will be posted here with a new effective date. Material changes to how data is handled will also be noted in the app’s release notes.</p>`,
});

export function render(ctx) {
  return ctx.lang === 'ko'
    ? { title: '개인정보 처리방침', description: 'Kumquat은 개인정보를 수집하지 않습니다. 파일 처리는 모두 Mac 안에서 이루어지며, 네트워크는 목적지 프리셋 갱신에만 씁니다.', body: ko(ctx) }
    : { title: 'Privacy Policy', description: 'Kumquat collects no personal data. All file processing happens on your Mac; the network is used only to refresh destination presets.', body: en(ctx) };
}
