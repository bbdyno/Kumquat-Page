import { site } from '../config.mjs';
import { docPage, draftBanner } from '../layout.mjs';

export const path = 'privacy/';
export const priority = 0.5;

// TODO before launch: legal review (incl. 개인정보 보호법 §30 items), effective date, operator name/contact.

const ko = (ctx) => docPage(ctx, {
  eyebrow: '개인정보 처리방침',
  title: 'Kumquat은 개인정보를 수집하지 않습니다.',
  lede: '파일 변환, 압축, AI 처리는 모두 사용자의 Mac 안에서 이루어집니다. 이 문서는 그 사실과, 앱이 네트워크를 쓰는 두 가지 경우, 무료 사용자에게 보이는 광고를 설명합니다.',
  aside: `<h2>목차</h2><ol>
    <li><a href="#summary">요약</a></li><li><a href="#app">앱이 처리하는 정보</a></li><li><a href="#network">네트워크 사용</a></li><li><a href="#ads">광고</a></li>
    <li><a href="#apple">구매와 Apple</a></li><li><a href="#site">웹사이트</a></li><li><a href="#legal">법정 고지 항목</a></li>
    <li><a href="#rights">권리와 문의</a></li><li><a href="#changes">변경</a></li></ol>`,
  body: `${draftBanner(ctx)}
          <p class="meta-line">초안 작성일 ${site.factsDate} · 시행일: 앱 출시일에 확정</p>

          <h2 id="summary">요약</h2>
          <ul>
            <li>Kumquat은 개인정보를 수집·저장·전송하지 않습니다. 회원가입, 계정, 로그인이 없습니다.</li>
            <li>사용자가 다루는 파일과 그 내용은 Mac 밖으로 나가지 않습니다. Kumquat이 운영하는 서버는 없습니다.</li>
            <li>분석, 광고, 크래시 리포트 SDK 등 서드파티 추적 도구를 쓰지 않습니다.</li>
            <li>무료 사용자에게는 앱 안에 광고가 보이지만, 광고를 고르거나 보여 주는 데 사용자 정보를 쓰지 않고 추적하지 않습니다.</li>
            <li>App Store 개인정보 라벨은 “데이터 수집 안 함”으로 신고하는 것을 기준으로 합니다.</li>
          </ul>

          <h2 id="app">앱이 처리하는 정보</h2>
          <p>아래 정보는 기능을 위해 <strong>사용자의 Mac 안에서만</strong> 처리되며, 개발자에게 전송되지 않습니다.</p>
          <div class="table-scroll"><table>
            <thead><tr><th scope="col">정보</th><th scope="col">용도</th><th scope="col">저장 위치·기간</th></tr></thead>
            <tbody>
              <tr><th scope="row">사용자가 끌어 놓거나 선택한 파일</th><td>변환·압축·편집·AI 처리</td><td>결과 파일은 원본 옆(또는 설정에서 허용한 폴더)에 저장. 원본은 그대로 둠</td></tr>
              <tr><th scope="row">최근 작업(파일 이름, 작업 종류, 시각)</th><td>메뉴 막대의 최근 작업, 마지막 변환 실행 취소</td><td>앱 컨테이너에만 저장. 앱 삭제 시 함께 삭제</td></tr>
              <tr><th scope="row">커서 아래 앱의 번들 ID</th><td>목적지 인식(1.1 예정 기능. 예: 메일에 놓으면 첨부 규격 적용)</td><td>저장하지 않음. 창 제목이나 화면 내용은 읽지 않음</td></tr>
              <tr><th scope="row">브라우저 확장이 읽는 업로드 칸 정보(허용 형식, 용량 안내 문구, 현재 도메인)</th><td>업로드 칸에 맞춘 자동 변환(1.1 예정 기능)</td><td>앱으로만 전달하고 저장하지 않음. 페이지 내용은 수집하지 않음</td></tr>
              <tr><th scope="row">클립보드 내용(기능을 켠 경우)</th><td>복사한 이미지 자동 최적화, 변환해서 붙여넣기(1.1 예정 기능)</td><td>저장하지 않음</td></tr>
              <tr><th scope="row">설정(레시피·사용자 프리셋은 1.1부터)</th><td>앱 동작</td><td>앱 컨테이너. 앱 삭제 시 함께 삭제</td></tr>
              <tr><th scope="row">무료 사용 횟수(처음 체험에 쓴 파일 수, 오늘 쓴 무료 변환 수)</th><td>무료 사용 범위 적용</td><td>이 기기의 Keychain과 사용자 본인 iCloud 계정의 키-값 저장소에만 기록. 개발자는 이 값을 볼 수 없음</td></tr>
            </tbody>
          </table></div>
          <p>OCR, 받아쓰기, 배경 제거, 번역 같은 AI 기능은 Apple이 macOS에 제공하는 온디바이스 프레임워크(Vision, Speech, Core ML 등)로 처리합니다. Kumquat은 이 과정에서 데이터를 외부로 보내지 않습니다.</p>

          <h3>요청하는 권한</h3>
          <ul>
            <li><strong>파일·폴더 접근</strong>: 사용자가 직접 고른 파일과, 폴더 감시에 등록한 폴더만 접근합니다.</li>
            <li><strong>손쉬운 사용</strong>: “변환해서 붙여넣기”를 켤 때만 요청합니다. 붙여넣기 단축키를 보내는 데에만 씁니다.</li>
          </ul>

          <h2 id="network">네트워크 사용</h2>
          <p>Kumquat은 다음 두 가지 경우에만 인터넷에 연결합니다. 두 요청 모두 이 웹사이트의 정적 파일을 내려받기만 하며, 파일·식별자·사용 정보를 보내지 않습니다.</p>
          <ul>
            <li><strong>목적지 프리셋 갱신</strong>: 사이트별 허용 형식·용량 규칙 목록(서명된 JSON 파일)을 내려받습니다.</li>
            <li><strong>광고 목록 받기(무료 사용자)</strong>: 하루 한 번 정도 스폰서 광고 목록(JSON 파일)을 내려받습니다. 어떤 광고를 보여 줄지는 앱이 기기 안에서 정합니다.</li>
          </ul>
          <p>인터넷 통신의 특성상 사이트를 호스팅하는 GitHub(GitHub Pages)가 IP 주소 등 접속 기록을 처리할 수 있습니다(<a href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" rel="noopener">GitHub 개인정보 처리방침</a>). Kumquat 개발자는 이 기록을 받지 않습니다.</p>
          <p>설정에서 <strong>완전 오프라인 모드</strong>를 켜면 두 요청이 모두 멈추고, 앱에 포함된 프리셋과 Kumquat Pro 안내만 사용합니다.</p>

          <h2 id="ads">광고</h2>
          <ul>
            <li>무료 사용 중에는 앱 안에 광고가 표시됩니다. Pro 사용자에게는 표시되지 않습니다.</li>
            <li>광고는 Kumquat Pro 안내이거나, 개발자가 직접 계약한 스폰서 광고입니다. 서드파티 광고 네트워크나 광고 SDK는 쓰지 않습니다.</li>
            <li>광고 노출·클릭 기록을 남기거나 보내지 않으며, 관심사·위치 등에 따른 맞춤 광고나 추적을 하지 않습니다.</li>
            <li>광고를 누르면 광고주의 웹사이트가 브라우저에서 열립니다. 그 사이트에서 처리되는 정보는 광고주의 개인정보 처리방침을 따릅니다.</li>
          </ul>

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
          <div class="table-scroll"><table>
            <tbody>
              <tr><th scope="row">처리 목적·항목</th><td>해당 없음(수집하지 않음)</td></tr>
              <tr><th scope="row">처리 및 보유 기간</th><td>해당 없음. 앱 안의 기록은 사용자 Mac에만 있으며 위 표의 기간에 따라 삭제</td></tr>
              <tr><th scope="row">제3자 제공</th><td>하지 않음</td></tr>
              <tr><th scope="row">처리 위탁</th><td>하지 않음</td></tr>
              <tr><th scope="row">국외 이전</th><td>하지 않음</td></tr>
              <tr><th scope="row">파기 절차·방법</th><td>보관하는 개인정보가 없음. 기기 안의 데이터는 앱 삭제 또는 설정의 “기록 지우기”로 즉시 삭제</td></tr>
              <tr><th scope="row">자동 수집 장치(쿠키 등)</th><td>설치·운영하지 않음. 광고에도 식별자·추적 기술을 쓰지 않음</td></tr>
              <tr><th scope="row">만 14세 미만 아동</th><td>아동의 개인정보도 수집하지 않음</td></tr>
              <tr><th scope="row">안전성 확보 조치</th><td>App Sandbox 적용, 서드파티 SDK 미사용, 네트워크는 정적 파일 내려받기로 한정</td></tr>
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
  lede: 'Converting, compressing and AI processing all happen on your Mac. This policy explains that, the two cases where the app uses the network, and the ads shown in the free version.',
  aside: `<h2>Contents</h2><ol>
    <li><a href="#summary">Summary</a></li><li><a href="#app">What the app processes</a></li><li><a href="#network">Network use</a></li><li><a href="#ads">Ads</a></li>
    <li><a href="#apple">Purchases and Apple</a></li><li><a href="#site">This website</a></li><li><a href="#rights">Your rights and contact</a></li><li><a href="#changes">Changes</a></li></ol>`,
  body: `${draftBanner(ctx)}
          <p class="meta-line">Draft written ${site.factsDate} · Effective date: set at app launch</p>

          <h2 id="summary">Summary</h2>
          <ul>
            <li>Kumquat does not collect, store or transmit personal data. There is no sign-up, account or login.</li>
            <li>Your files and their contents never leave your Mac. Kumquat runs no servers.</li>
            <li>No third-party tracking: no analytics, advertising or crash-reporting SDKs.</li>
            <li>The free version shows ads in the app, but no information about you is used to choose or show them, and nothing is tracked.</li>
            <li>The App Store privacy label is meant to be declared as “Data Not Collected.”</li>
          </ul>

          <h2 id="app">What the app processes</h2>
          <p>The information below is processed <strong>only on your Mac</strong> to make features work. None of it is sent to the developer.</p>
          <div class="table-scroll"><table>
            <thead><tr><th scope="col">Information</th><th scope="col">Purpose</th><th scope="col">Where and how long</th></tr></thead>
            <tbody>
              <tr><th scope="row">Files you drop or choose</th><td>Converting, compressing, editing, AI</td><td>Results are saved next to the original (or in a folder you allowed in Settings). Originals are left as they are</td></tr>
              <tr><th scope="row">Recent actions (file name, action, time)</th><td>Recent actions in the menu bar, undoing the last conversion</td><td>Stored only in the app container. Removed when you delete the app</td></tr>
              <tr><th scope="row">Bundle ID of the app under the cursor</th><td>Destination awareness (coming in 1.1; e.g. attachment specs when dropping on Mail)</td><td>Not stored. Window titles and screen contents are never read</td></tr>
              <tr><th scope="row">Upload field details read by the browser extension (accepted types, size hint text, current domain)</th><td>Converting to fit the upload field (coming in 1.1)</td><td>Passed to the app only and not stored. Page contents are not collected</td></tr>
              <tr><th scope="row">Clipboard contents (if you turn it on)</th><td>Optimizing copied images, convert-and-paste (coming in 1.1)</td><td>Not stored</td></tr>
              <tr><th scope="row">Settings (recipes and custom presets from 1.1)</th><td>App behavior</td><td>App container. Removed when you delete the app</td></tr>
              <tr><th scope="row">Free usage counts (files used in the welcome trial, free conversions used today)</th><td>Applying the free allowance</td><td>Stored only in this Mac’s Keychain and your own iCloud key-value storage. The developer cannot see these values</td></tr>
            </tbody>
          </table></div>
          <p>AI features such as OCR, transcription, background removal and translation use on-device frameworks Apple ships with macOS (Vision, Speech, Core ML and others). Kumquat sends nothing off your Mac in the process.</p>

          <h3>Permissions</h3>
          <ul>
            <li><strong>Files and folders</strong>: only files you pick and folders you add to folder watching.</li>
            <li><strong>Accessibility</strong>: requested only when you turn on convert-and-paste, and used only to send the paste shortcut.</li>
          </ul>

          <h2 id="network">Network use</h2>
          <p>Kumquat connects to the internet in two cases only. Both requests just download static files from this website; neither sends your files, any identifier or usage data.</p>
          <ul>
            <li><strong>Refreshing destination presets</strong>: downloads the list of per-site format and size rules (a signed JSON file).</li>
            <li><strong>Fetching the ad list (free version)</strong>: about once a day, downloads the list of sponsor ads (a JSON file). The app picks which ad to show on your Mac.</li>
          </ul>
          <p>Like any web request, GitHub, which hosts this site on GitHub Pages, may process your IP address and access logs (<a href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" rel="noopener">GitHub Privacy Statement</a>). The Kumquat developer does not receive these logs.</p>
          <p>Turn on <strong>full offline mode</strong> in Settings to stop both requests; the app then uses only its bundled presets and its own Kumquat Pro notes.</p>

          <h2 id="ads">Ads</h2>
          <ul>
            <li>The free version shows ads inside the app. Pro users see no ads.</li>
            <li>Ads are either a note about Kumquat Pro or a sponsor the developer works with directly. No third-party ad network or ad SDK is used.</li>
            <li>Ad views and taps are not recorded or sent anywhere, and there is no personalization by interests or location and no tracking.</li>
            <li>Tapping an ad opens the advertiser’s website in your browser. Information handled there is governed by the advertiser’s privacy policy.</li>
          </ul>

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
    ? { title: '개인정보 처리방침', description: 'Kumquat은 개인정보를 수집하지 않습니다. 파일 처리는 모두 Mac 안에서 이루어지며, 네트워크는 프리셋과 광고 목록을 받을 때만 씁니다. 광고에 추적·맞춤 기술을 쓰지 않습니다.', body: ko(ctx) }
    : { title: 'Privacy Policy', description: 'Kumquat collects no personal data. All file processing happens on your Mac; the network is used only to download presets and the ad list, and ads are never personalized or tracked.', body: en(ctx) };
}
