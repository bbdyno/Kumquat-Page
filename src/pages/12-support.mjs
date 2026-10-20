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
            <a class="card" href="#trouble"><span class="kicker">문제 해결</span><h2>휠이 안 열려요</h2><p>단축키와 권한 확인</p></a>
            <a class="card" href="../guides/"><span class="kicker">가이드</span><h2>목적지 가이드</h2><p>홈택스·정부24 업로드 규격 맞추기</p></a>
          </div>

          <h2 id="start">시작하기</h2>
          <h3>요구 사양</h3>
          <ul><li>macOS 12 Monterey 이상</li><li>Intel 또는 Apple 실리콘 Mac</li><li>일부 AI 기능은 macOS 버전에 따라 켜집니다(예: 배경 제거는 macOS 14 이상, 번역은 macOS 15 이상).</li></ul>
          <h3>기본 사용법</h3>
          <ol>
            <li>Finder에서 파일을 끌기 시작합니다.</li>
            <li>끄는 도중 <kbd>Shift</kbd>를 한 번 누르면 휠이 열립니다(설정에서 다른 키나 “누르고 있기” 방식으로 바꿀 수 있습니다).</li>
            <li>원하는 조각 위에 놓으면 결과가 원본 옆에 저장됩니다.</li>
          </ol>
          <p>휠 말고도 메뉴바 아이콘에 놓기, Finder 우클릭 › 빠른 동작, 공유 메뉴, 단축어 앱에서 쓸 수 있습니다.</p>

          <h2 id="trouble">문제 해결</h2>
          ${faq([
            ['휠이 열리지 않아요', '<p>Kumquat이 실행 중인지 메뉴바 아이콘을 확인하세요. 설정 › 휠에서 트리거 키가 다른 앱 단축키와 겹치지 않는지 보고, “탭”과 “누르고 있기” 방식을 바꿔 보세요. 그래도 안 되면 앱을 종료한 뒤 다시 실행해 주세요.</p>'],
            ['Finder 빠른 동작에 Kumquat이 보이지 않아요', '<p>시스템 설정 › 일반 › 로그인 항목 및 확장 프로그램 › Finder(macOS 버전에 따라 “확장 프로그램” 항목)에서 Kumquat을 켜 주세요.</p>'],
            ['목표 용량까지 줄어들지 않아요', '<p>품질 가드가 글자를 읽기 어려워질 만큼 줄이는 것을 막았을 수 있습니다. 결과 창에서 “해상도를 낮춰 다시 시도”를 고르거나, PDF라면 페이지를 나눠 보세요.</p>'],
            ['HEIC로 저장하는 메뉴가 없어요', '<p>HEIC 인코딩은 하드웨어 HEVC 인코더가 있는 Mac에서만 제공됩니다. 지원하지 않는 Mac에서는 메뉴에서 숨겨집니다.</p>'],
            ['“변환해서 붙여넣기”가 동작하지 않아요', '<p>이 기능은 손쉬운 사용 권한이 필요합니다. 시스템 설정 › 개인정보 보호 및 보안 › 손쉬운 사용에서 Kumquat을 켜 주세요. 이 권한은 붙여넣기 단축키를 보내는 데에만 씁니다.</p>'],
            ['원본을 되돌리고 싶어요', '<p>메뉴 막대 아이콘 메뉴의 “실행 취소”(⌘Z), 결과 썸네일의 “실행 취소”, 또는 메인 창 › 기록에서 해당 항목의 실행 취소 버튼을 누르세요.</p>'],
          ])}

          <h2 id="purchase">구매·구독</h2>
          ${faq([
            ['Pro를 다른 Mac에서도 쓰려면?', '<p>같은 Apple ID로 로그인한 Mac에서 Kumquat › 설정 › Pro › “구매 복원”을 누르세요. 가족 공유가 켜진 가족 구성원도 쓸 수 있습니다.</p>'],
            ['구독을 해지하려면?', '<ol><li>시스템 설정을 엽니다.</li><li>맨 위의 Apple ID(이름)를 누릅니다.</li><li>미디어 및 구입 항목 › 구독 › 관리를 누릅니다.</li><li>Kumquat Pro를 고르고 “구독 취소”를 누릅니다.</li></ol><p>App Store 앱 › 계정 › 구독 관리에서도 할 수 있습니다. 해지해도 결제한 기간이 끝날 때까지 Pro를 쓸 수 있습니다.</p>'],
            ['환불을 받으려면?', '<p>결제는 Apple이 처리하므로 개발자가 직접 환불할 수 없습니다. <a href="https://reportaproblem.apple.com/" rel="noopener">reportaproblem.apple.com</a>에서 Apple ID로 로그인한 뒤 Kumquat 구매를 골라 환불을 요청해 주세요.</p>'],
            ['평생 이용권과 연간 구독의 차이는?', '<p>평생 이용권은 구매한 메이저 버전(예: 1.x)을 계속 쓰고, 다음 메이저 버전은 기존 구매자 할인가로 업그레이드할 수 있습니다. 연간 구독은 구독하는 동안 항상 최신 버전의 Pro를 씁니다.</p>'],
          ])}

          <h2 id="report">버그 신고·기능 요청</h2>
          <p><a href="mailto:${site.email}?subject=%5BKumquat%5D%20">${site.email}</a>으로 보내 주세요. 아래 정보를 함께 적어 주시면 빠르게 확인할 수 있습니다.</p>
          <ul><li>Kumquat 버전(메뉴바 › Kumquat 정보)</li><li>macOS 버전과 Mac 종류(Intel / Apple 실리콘)</li><li>문제가 생긴 파일 형식과 대략적인 크기, 재현 순서</li></ul>
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
            <a class="card" href="#trouble"><span class="kicker">Troubleshooting</span><h2>The wheel won’t open</h2><p>Check the shortcut and permissions</p></a>
          </div>

          <h2 id="start">Getting started</h2>
          <h3>Requirements</h3>
          <ul><li>macOS 12 Monterey or later</li><li>Intel or Apple silicon Mac</li><li>Some AI features depend on the macOS version (for example, background removal needs macOS 14 and translation needs macOS 15).</li></ul>
          <h3>Basics</h3>
          <ol>
            <li>Start dragging a file in Finder.</li>
            <li>Tap <kbd>Shift</kbd> while dragging to open the wheel (you can pick another key, or hold-to-open, in Settings).</li>
            <li>Drop on a slice. The result is saved next to the original.</li>
          </ol>
          <p>You can also drop on the menu bar icon, use Finder right-click › Quick Actions, the Share menu or the Shortcuts app.</p>

          <h2 id="trouble">Troubleshooting</h2>
          ${faq([
            ['The wheel doesn’t open', '<p>Check that Kumquat is running (menu bar icon). In Settings › Wheel, make sure the trigger key doesn’t clash with another app’s shortcut, and try switching between tap and hold. If it still doesn’t work, quit and reopen the app.</p>'],
            ['Kumquat isn’t in Finder Quick Actions', '<p>Turn Kumquat on in System Settings › General › Login Items & Extensions › Finder (called “Extensions” on some macOS versions).</p>'],
            ['It won’t shrink to the target size', '<p>The quality guard may have stopped it from making text unreadable. Choose “Try again at lower resolution” in the result window, or split the PDF into parts.</p>'],
            ['There’s no option to save as HEIC', '<p>HEIC encoding is offered only on Macs with a hardware HEVC encoder. It’s hidden on Macs without one.</p>'],
            ['Convert-and-paste does nothing', '<p>This feature needs Accessibility permission. Turn Kumquat on in System Settings › Privacy & Security › Accessibility. It’s only used to send the paste shortcut.</p>'],
            ['I want my original back', '<p>Choose Undo (⌘Z) from the menu bar icon’s menu, click Undo on the result thumbnail, or use the undo button on the item in the main window’s History.</p>'],
          ])}

          <h2 id="purchase">Purchases and subscriptions</h2>
          ${faq([
            ['Using Pro on another Mac', '<p>On a Mac signed in with the same Apple ID, open Kumquat › Settings › Pro › Restore Purchases. Family Sharing members can use it too.</p>'],
            ['Cancelling a subscription', '<ol><li>Open System Settings.</li><li>Click your Apple ID (your name) at the top.</li><li>Choose Media & Purchases › Subscriptions › Manage.</li><li>Select Kumquat Pro and click Cancel Subscription.</li></ol><p>You can also do this in the App Store app › Account › Manage Subscriptions. Pro stays active until the end of the period you paid for.</p>'],
            ['Getting a refund', '<p>Apple processes payments, so the developer can’t issue refunds. Sign in at <a href="https://reportaproblem.apple.com/" rel="noopener">reportaproblem.apple.com</a>, choose your Kumquat purchase and request a refund.</p>'],
            ['Lifetime vs yearly', '<p>Lifetime keeps the major version you bought (for example 1.x), with a discounted upgrade to the next major version. Yearly always gives you the latest Pro while subscribed.</p>'],
          ])}

          <h2 id="report">Report a bug or request a feature</h2>
          <p>Email <a href="mailto:${site.email}?subject=%5BKumquat%5D%20">${site.email}</a>. These details help us find the problem faster:</p>
          <ul><li>Kumquat version (menu bar › About Kumquat)</li><li>macOS version and Mac type (Intel or Apple silicon)</li><li>File type, rough size and the steps that cause the problem</li></ul>
          <div class="callout tip"><p>You don’t need to send the file. Files can contain personal information, so only send a sample with personal details removed, and only if we ask.</p></div>`,
});

export function render(ctx) {
  return ctx.lang === 'ko'
    ? { title: '지원 · 자주 묻는 질문', description: 'Kumquat 사용법, 문제 해결, 구독 해지·환불·구매 복원 방법과 문의처.', body: ko(ctx) }
    : { title: 'Support & FAQ', description: 'How to use Kumquat, troubleshooting, and how to cancel, get a refund or restore purchases.', body: en(ctx) };
}
