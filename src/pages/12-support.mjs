import { site } from '../config.mjs';
import { docPage } from '../layout.mjs';

export const path = 'support/';
export const priority = 0.6;

// TODO: check menu names and steps against the shipped app and the current macOS before launch.

const faq = (items) => `<div class="faq">${items.map(([q, a]) => `<details><summary>${q}</summary><div class="answer">${a}</div></details>`).join('')}</div>`;

const ko = (ctx) => docPage(ctx, {
  eyebrow: '지원',
  title: '무엇을 도와드릴까요?',
  lede: '자주 묻는 질문과 문제 해결 방법을 모았습니다. 해결되지 않으면 메일로 알려 주세요. 보통 영업일 기준 2일 안에 답장합니다.',
  aside: `<h2>문의</h2><p><a href="mailto:${site.email}">${site.email}</a></p><h2>바로가기</h2><ul>
    <li><a href="#start">시작하기</a></li><li><a href="#trouble">문제 해결</a></li><li><a href="#purchase">구매·구독</a></li><li><a href="#report">버그 신고</a></li></ul>`,
  body: `          <div class="card-grid">
            <a class="card" href="#purchase"><span class="kicker">구매</span><h2>구독 해지·환불</h2><p>App Store에서 처리하는 방법</p></a>
            <a class="card" href="#trouble"><span class="kicker">문제 해결</span><h2>한도 안으로 안 줄어요</h2><p>한도 바꾸기와 나눠 보내기</p></a>
            <a class="card" href="../guides/"><span class="kicker">가이드</span><h2>보낼 곳 가이드</h2><p>홈택스·정부24 업로드 규격 맞추기</p></a>
          </div>

          <h2 id="start">시작하기</h2>
          <h3>요구 사양</h3>
          <ul><li>macOS 12 Monterey 이상</li><li>Intel 또는 Apple 실리콘 Mac</li></ul>
          <h3>기본 사용법</h3>
          <ol>
            <li>Shrinkwrap 메인 창의 “어디로 보내나요?”에서 보낼 곳(메일 첨부, 메신저, 서류 제출, 사진 첨부 등)을 고릅니다.</li>
            <li>파일을 창에 놓습니다. 여러 개를 한꺼번에 놓아도 됩니다.</li>
            <li>한도에 맞는 새 파일이 만들어집니다. 원본은 그대로 남습니다. 결과는 Finder에서 보거나, 공유하거나, 메일 첨부라면 새 메일에 바로 첨부할 수 있습니다.</li>
          </ol>
          <p>메뉴 막대 아이콘에 파일을 놓거나, Finder에서 오른쪽 클릭 › 빠른 동작, 단축어 앱에서 시작해도 보낼 곳부터 고릅니다. 형식만 바꾸고 싶다면 보낼 곳 아래의 “다른 형식으로”를 쓰세요.</p>
          <h3>보낼 곳과 기본 한도</h3>
          <ul><li>메일 첨부: 전체 합계 20 MB(파일 크기 비율로 나눠 맞춤)</li><li>메신저: 파일당 25 MB</li><li>작은 업로드: 파일당 10 MB</li><li>서류 제출: 파일당 5 MB</li><li>사진 첨부: 파일당 500 KB</li><li>웹·블로그 이미지: 파일당 500 KB(WebP)</li><li>직접 지정: 파일당 2 MB</li></ul>
          <p>한도는 모두 설정에서 바꿀 수 있습니다. 기본값은 각 서비스의 공식 한도가 아니므로, 올릴 곳의 안내와 다르면 그 값에 맞춰 주세요.</p>

          <h2 id="trouble">문제 해결</h2>
          ${faq([
            ['한도 안으로 줄어들지 않아요', '<p>아주 큰 영상이나 페이지가 많은 PDF는 한도 안에 들지 않을 수 있습니다. 올릴 곳이 허락한다면 설정에서 그 보낼 곳의 한도를 늘려 보세요. 메일 첨부라면 파일을 두 통으로 나눠 보내고, PDF라면 페이지를 나눠 보세요.</p>'],
            ['“이미 맞음”이라고 나와요', '<p>파일이 이미 한도 안이고 형식도 맞아서 새 파일을 만들지 않았다는 뜻입니다. 원본을 그대로 보내면 됩니다.</p>'],
            ['결과가 원본보다 흐려 보여요', '<p>결과에 표시되는 유사도와 결과 카드의 비교로 원본과 나란히 확인해 보세요. 품질 가드는 품질을 지나치게 낮춰야 할 때 해상도부터 줄입니다. 더 선명해야 한다면 올릴 곳이 허락하는 만큼 설정에서 한도를 늘려 주세요.</p>'],
            ['Finder 빠른 동작에 Shrinkwrap이 보이지 않아요', '<p>시스템 설정 › 키보드 › 키보드 단축키 › 서비스에서 Shrinkwrap 항목을 켜 주세요. 켜도 보이지 않으면 Shrinkwrap을 한 번 종료했다가 다시 실행해 주세요.</p>'],
            ['HEIC로 저장하는 메뉴가 없어요', '<p>HEIC 인코딩은 하드웨어 HEVC 인코더가 있는 Mac에서만 제공됩니다. 지원하지 않는 Mac에서는 메뉴에서 숨겨집니다.</p>'],
            ['변환을 되돌리고 싶어요', '<p>메뉴 막대 아이콘 메뉴의 “실행 취소”(⌘Z), 결과 카드의 “실행 취소”, 또는 메인 창 › 기록에서 해당 항목의 실행 취소 버튼을 누르세요. 원본은 처음부터 그대로 남아 있습니다.</p>'],
          ])}

          <h2 id="purchase">구매·구독</h2>
          ${faq([
            ['Pro를 다른 Mac에서도 쓰려면?', '<p>같은 Apple ID로 로그인한 Mac에서 Shrinkwrap › 설정 › Pro › “구매 복원”을 누르세요. 가족 공유가 켜진 가족 구성원도 쓸 수 있습니다.</p>'],
            ['구독을 해지하려면?', '<ol><li>시스템 설정을 엽니다.</li><li>맨 위의 Apple ID(이름)를 누릅니다.</li><li>미디어 및 구입 항목 › 구독 › 관리를 누릅니다.</li><li>Shrinkwrap Pro를 고르고 “구독 취소”를 누릅니다.</li></ol><p>App Store 앱 › 계정 › 구독 관리에서도 할 수 있습니다. 해지해도 결제한 기간이 끝날 때까지 Pro를 쓸 수 있습니다.</p>'],
            ['환불을 받으려면?', '<p>결제는 Apple이 처리하므로 개발자가 직접 환불할 수 없습니다. <a href="https://reportaproblem.apple.com/" rel="noopener">reportaproblem.apple.com</a>에서 Apple ID로 로그인한 뒤 Shrinkwrap 구매를 골라 환불을 요청해 주세요.</p>'],
            ['평생 이용권과 연간 구독의 차이는?', '<p>평생 이용권은 구매한 메이저 버전(예: 1.x)을 계속 쓰고, 다음 메이저 버전은 기존 구매자 할인가로 업그레이드할 수 있습니다. 연간 구독은 구독하는 동안 항상 최신 버전의 Pro를 씁니다.</p>'],
          ])}

          <h2 id="report">버그 신고·기능 요청</h2>
          <p><a href="mailto:${site.email}?subject=%5BShrinkwrap%5D%20">${site.email}</a>으로 보내 주세요. 아래 정보를 함께 적어 주시면 빠르게 확인할 수 있습니다.</p>
          <ul><li>Shrinkwrap 버전(메뉴 막대 › Shrinkwrap 정보)</li><li>쓴 보낼 곳(예: 메일 첨부, 서류 제출)</li><li>macOS 버전과 Mac 종류(Intel / Apple 실리콘)</li><li>문제가 생긴 파일 형식과 대략적인 크기, 재현 순서</li></ul>
          <div class="callout tip"><p>문제가 된 파일을 보내 주실 필요는 없습니다. 파일에 개인정보가 있을 수 있으니, 꼭 필요할 때만 개인정보를 지운 샘플로 보내 주세요.</p></div>`,
});

const en = (ctx) => docPage(ctx, {
  eyebrow: 'Support',
  title: 'How can we help?',
  lede: 'Answers to common questions and fixes for common problems. If you’re still stuck, email us; we usually reply within two business days.',
  aside: `<h2>Contact</h2><p><a href="mailto:${site.email}">${site.email}</a></p><h2>Jump to</h2><ul>
    <li><a href="#start">Getting started</a></li><li><a href="#trouble">Troubleshooting</a></li><li><a href="#purchase">Purchases</a></li><li><a href="#report">Report a bug</a></li></ul>`,
  body: `          <div class="card-grid">
            <a class="card" href="#purchase"><span class="kicker">Purchases</span><h2>Cancel or get a refund</h2><p>How the App Store handles it</p></a>
            <a class="card" href="#trouble"><span class="kicker">Troubleshooting</span><h2>It won’t fit the limit</h2><p>Change the limit or split the send</p></a>
          </div>

          <h2 id="start">Getting started</h2>
          <h3>Requirements</h3>
          <ul><li>macOS 12 Monterey or later</li><li>Intel or Apple silicon Mac</li></ul>
          <h3>Basics</h3>
          <ol>
            <li>In the Shrinkwrap main window, choose where the file is going (email attachment, messenger, online forms, photo upload and so on).</li>
            <li>Drop your files on the window. A whole batch is fine.</li>
            <li>Shrinkwrap makes new files that fit the limit and leaves your originals as they were. Show the results in Finder, share them, or, for email, attach them to a new Mail message.</li>
          </ol>
          <p>Dropping on the menu bar icon, Finder right-click › Quick Actions and the Shortcuts app also start with the destination. To change only the format, use the format conversions listed under the destinations.</p>
          <h3>Destinations and default limits</h3>
          <ul><li>Email attachment: 20 MB in total, split across files by size</li><li>Messenger: 25 MB per file</li><li>Small upload: 10 MB per file</li><li>Online forms: 5 MB per file</li><li>Photo upload: 500 KB per file</li><li>Web images: 500 KB per file (WebP)</li><li>Custom: 2 MB per file</li></ul>
          <p>Every limit can be changed in Settings. The defaults aren’t official limits of any service, so match whatever the place you’re uploading to asks for.</p>

          <h2 id="trouble">Troubleshooting</h2>
          ${faq([
            ['It won’t shrink under the limit', '<p>Very long videos or PDFs with many pages may not fit. If the place you’re uploading to allows it, raise that destination’s limit in Settings. For email, split the files across two messages; for a PDF, try splitting it into parts.</p>'],
            ['It says the file already fits', '<p>The file is already under the limit and in the right format, so Shrinkwrap didn’t make a new one. Send the original as it is.</p>'],
            ['The result looks softer than the original', '<p>Check the similarity shown with the result and use Compare on the result card. The quality guard lowers resolution first when fitting the limit would crush the quality. If you need it sharper, raise the limit in Settings as far as the destination allows.</p>'],
            ['Shrinkwrap isn’t in Finder Quick Actions', '<p>Turn on the Shrinkwrap items in System Settings › Keyboard › Keyboard Shortcuts › Services. If they still don’t appear, quit and reopen Shrinkwrap.</p>'],
            ['There’s no option to save as HEIC', '<p>HEIC encoding is offered only on Macs with a hardware HEVC encoder. It’s hidden on Macs without one.</p>'],
            ['I want to undo a conversion', '<p>Choose Undo (⌘Z) from the menu bar icon’s menu, click Undo on the result card, or use the undo button on the item in the main window’s History. Your original was never changed.</p>'],
          ])}

          <h2 id="purchase">Purchases and subscriptions</h2>
          ${faq([
            ['Using Pro on another Mac', '<p>On a Mac signed in with the same Apple ID, open Shrinkwrap › Settings › Pro › Restore Purchases. Family Sharing members can use it too.</p>'],
            ['Cancelling a subscription', '<ol><li>Open System Settings.</li><li>Click your Apple ID (your name) at the top.</li><li>Choose Media & Purchases › Subscriptions › Manage.</li><li>Select Shrinkwrap Pro and click Cancel Subscription.</li></ol><p>You can also do this in the App Store app › Account › Manage Subscriptions. Pro stays active until the end of the period you paid for.</p>'],
            ['Getting a refund', '<p>Apple processes payments, so the developer can’t issue refunds. Sign in at <a href="https://reportaproblem.apple.com/" rel="noopener">reportaproblem.apple.com</a>, choose your Shrinkwrap purchase and request a refund.</p>'],
            ['Lifetime vs yearly', '<p>Lifetime keeps the major version you bought (for example 1.x), with a discounted upgrade to the next major version. Yearly always gives you the latest Pro while subscribed.</p>'],
          ])}

          <h2 id="report">Report a bug or request a feature</h2>
          <p>Email <a href="mailto:${site.email}?subject=%5BShrinkwrap%5D%20">${site.email}</a>. These details help us find the problem faster:</p>
          <ul><li>Shrinkwrap version (menu bar › About Shrinkwrap)</li><li>The destination you used (for example Email attachment or Online forms)</li><li>macOS version and Mac type (Intel or Apple silicon)</li><li>File type, rough size and the steps that cause the problem</li></ul>
          <div class="callout tip"><p>You don’t need to send the file. Files can contain personal information, so only send a sample with personal details removed, and only if we ask.</p></div>`,
});

export function render(ctx) {
  return ctx.lang === 'ko'
    ? { title: '지원 · 자주 묻는 질문', description: 'Shrinkwrap 사용법, 문제 해결, 구독 해지·환불·구매 복원 방법과 문의처.', body: ko(ctx) }
    : { title: 'Support & FAQ', description: 'How to use Shrinkwrap, troubleshooting, and how to cancel, get a refund or restore purchases.', body: en(ctx) };
}
