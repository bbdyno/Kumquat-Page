import { site, pricing } from '../config.mjs';
import { docPage, draftBanner } from '../layout.mjs';

export const path = 'terms/';
export const priority = 0.4;

// Kumquat uses Apple's Standard EULA as is (no custom EULA in App Store Connect since 2026-10-22).
// License, warranty, liability, export and governing law come from the Standard EULA only; §3 points to it and must not restate it with different terms.
// TODO before launch: legal review.

const P = pricing;
const appleEula = 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/';

const ko = (ctx) => docPage(ctx, {
  eyebrow: '이용약관 · 최종 사용자 라이선스 계약(EULA)',
  title: 'Kumquat 이용약관',
  lede: 'Mac App Store에서 내려받은 Kumquat과 그 안의 구독·인앱 구매에 적용되는 조건입니다.',
  aside: `<h2>목차</h2><ol><li><a href="#t1">이 약관의 구성</a></li><li><a href="#t2">오픈소스 구성요소</a></li><li><a href="#t3">표준 EULA가 정하는 사항</a></li><li><a href="#t4">무료 기능과 Pro</a></li><li><a href="#t5">자동 갱신 구독</a></li><li><a href="#t6">해지와 환불</a></li><li><a href="#t7">사용자 파일</a></li><li><a href="#t8">변경과 연락처</a></li></ol>`,
  body: `${draftBanner(ctx)}
          <p class="meta-line">초안 작성일 ${site.factsDate} · 시행일: 앱 출시일에 확정</p>

          <h2 id="t1">1. 이 약관의 구성</h2>
          <p>Kumquat의 사용 허락에는 Apple의 <a href="${appleEula}" rel="noopener">표준 최종 사용자 라이선스 계약(표준 EULA)</a>이 그대로 적용됩니다. Kumquat은 별도의 맞춤형 EULA를 두지 않습니다.</p>
          <p>2조와 3조는 오픈소스 구성요소와 표준 EULA의 내용을 안내하고, 4조부터는 무료 사용, 구독, 광고 같은 서비스 조건을 설명합니다. 이 페이지가 사용 허락에 관해 표준 EULA와 다르게 읽히면 표준 EULA가 우선하고, App Store 이용에 관해서는 Apple 미디어 서비스 이용약관이 우선합니다.</p>

          <h2 id="t2">2. 오픈소스 구성요소</h2>
          <p>Kumquat에는 FFmpeg, LAME 같은 오픈소스 소프트웨어가 들어 있으며, 이 구성요소는 각자의 라이선스(GNU 약소 일반 공중 사용 허가서(LGPL) 2.1 이상 등)에 따라 사용자에게 허락됩니다. 표준 EULA(a항)도 앱에 포함된 오픈소스 구성요소의 라이선스 조건이 허용하는 범위를 사용 제한의 예외로 둡니다.</p>
          <p>이 페이지의 어떤 내용도 그 라이선스가 보장하는 권리를 제한하지 않습니다. 여기에는 해당 구성요소를 수정할 권리와, 그 수정을 디버깅하기 위해 역설계할 권리가 포함됩니다.</p>
          <p>대응하는 소스 코드 전체는 앱 안(<code>Kumquat.app/Contents/Resources/OpenSource</code>)에 함께 들어 있고, 라이선스 원문은 앱의 <strong>설정 › 정보 › 오픈소스 라이선스</strong>에서 볼 수 있습니다.</p>
          <p>Kumquat 자체 코드는 LGPL로 허락되지 않습니다. 이 조항은 오픈소스 구성요소에만 적용됩니다.</p>

          <h2 id="t3">3. 표준 EULA가 정하는 사항</h2>
          <p>다음 사항은 이 페이지에서 따로 정하지 않고 표준 EULA를 그대로 따릅니다. 아래는 이해를 돕기 위한 요약이며, 내용은 <a href="${appleEula}" rel="noopener">표준 EULA 원문</a>이 우선합니다.</p>
          <ul>
            <li><strong>사용 범위(a항)</strong>: 사용자가 소유하거나 관리하는 Apple 기기에서, App Store 사용 규칙(가족 공유 포함)에 따라 쓸 수 있는 양도 불가능한 권리입니다. 법이나 오픈소스 라이선스(2조)가 허용하는 경우를 제외하고 앱을 복제·역설계·수정·재배포할 수 없습니다.</li>
            <li><strong>계약 종료(c항)</strong>: 조건을 지키지 않으면 사용 권리가 자동으로 끝납니다.</li>
            <li><strong>보증의 부인(e항)</strong>: 법이 허용하는 최대 범위에서 앱은 “있는 그대로” 제공되며, 어떠한 보증도 하지 않습니다.</li>
            <li><strong>책임의 제한(f항)</strong>: 법이 금지하지 않는 범위에서 데이터 손실을 포함한 간접·부수적·결과적 손해에 책임지지 않으며, 전체 책임은 50달러를 넘지 않습니다.</li>
            <li><strong>수출 규정(g항)</strong>: 미국 법과 앱을 받은 지역의 법이 허용하지 않는 수출·재수출은 할 수 없으며, 사용자는 미국 정부의 금수 대상 국가에 있지 않고 거래 제한 명단에 올라 있지 않음을 진술합니다.</li>
            <li><strong>준거법(i항)</strong>: 기본은 미국 캘리포니아주 법률입니다. 미국 밖에 사는 EU 회원국·스위스·노르웨이·아이슬란드 시민에게는 평소 거주지의 법률과 법원이 적용됩니다.</li>
          </ul>
          <p>일부 국가에서는 보증의 배제나 책임의 제한이 허용되지 않습니다. 이 경우 위 제한은 법이 허용하는 범위에서만 적용되며, 거주 국가의 법률이 보장하는 소비자 권리는 그대로 유지됩니다.</p>

          <h2 id="t4">4. 무료 기능과 Pro</h2>
          <ul>
            <li><strong>처음 체험</strong>: 처음 파일 ${P.welcomeTrialFiles}개까지는 Pro 기능을 포함한 모든 기능을 무료로 사용할 수 있습니다.</li>
            <li><strong>무료 사용</strong>: 체험 이후에는 이미지·오디오·영상·문서의 기본 변환을 하루 ${P.freeDailyFiles}개 파일까지 무료로 사용할 수 있습니다. 개수는 파일 단위로 세며, 일괄 처리는 그날 남은 무료 개수만큼 실행됩니다. 목표 용량, GIF·AVIF·FLAC·Opus·WebM 등 일부 포맷, 자동화·AI 기능에는 Pro가 필요합니다.</li>
            <li><strong>광고</strong>: 무료 사용 중에는 앱 안에 광고가 표시됩니다. 광고는 Kumquat Pro 안내 또는 개발자가 직접 계약한 스폰서 광고입니다. Pro 평생 이용권 구매자와 Pro 연간 구독 기간에는 광고가 표시되지 않습니다.</li>
            <li><strong>Pro 평생 이용권</strong>(비소모성 인앱 구매, 정가 ${P.lifetime}): 구매한 메이저 버전(예: 1.x)과 그 업데이트를 기간 제한 없이 사용합니다. 다음 메이저 버전은 별도 업그레이드 구매가 필요할 수 있습니다.</li>
            <li><strong>Pro 연간 구독</strong>(자동 갱신 구독, ${P.yearly}/년): 구독 기간 동안 최신 버전의 모든 Pro 기능을 사용합니다.</li>
          </ul>
          <p>표시 가격은 미국 App Store 기준이며, 실제 가격과 통화는 사용자의 App Store 국가에 따라 결제 화면에 표시됩니다. 무료 사용 범위와 기능 구성은 업데이트로 바뀔 수 있으나, 이미 구매한 평생 이용권의 기능을 구매 당시보다 줄이지는 않습니다.</p>
          <p>스폰서 광고의 내용과 광고주의 상품·서비스에 대한 책임은 해당 광고주에게 있습니다. 광고를 누르면 광고주의 웹사이트가 브라우저에서 열리며, 그 사이트의 이용은 광고주의 약관과 개인정보 처리방침을 따릅니다.</p>

          <h2 id="t5">5. 자동 갱신 구독</h2>
          <ul>
            <li>구독 이름: Kumquat Pro 연간 · 기간: 1년 · 가격: 결제 화면에 표시되는 현지 가격</li>
            <li>결제는 구매 확인 시 Apple ID 계정으로 청구됩니다.</li>
            <li>현재 기간이 끝나기 최소 24시간 전에 자동 갱신을 끄지 않으면 구독이 자동으로 갱신되며, 기간 종료 전 24시간 안에 다음 기간 요금이 청구됩니다.</li>
            <li>${P.trialDays}일 무료 체험이 제공되는 경우, 체험 기간이 끝나기 최소 24시간 전에 해지하지 않으면 유료 구독으로 전환됩니다. 체험 기간 중 같은 구독 그룹의 상품을 구매하면 남은 체험 기간은 소멸합니다.</li>
            <li>구독은 시스템 설정 › Apple ID › 미디어 및 구입 항목 › 구독 관리에서 관리하고 해지할 수 있습니다.</li>
          </ul>

          <h2 id="t6">6. 해지와 환불</h2>
          <p>해지하면 이미 결제한 기간이 끝날 때까지 Pro를 쓸 수 있고, 남은 기간에 대한 부분 환불은 제공되지 않습니다. 모든 결제는 Apple이 처리하므로 환불은 Apple의 <a href="https://reportaproblem.apple.com/" rel="noopener">문제 신고</a> 페이지에서 요청해야 하며, Apple의 정책과 관련 법령에 따라 처리됩니다. 개발자는 직접 환불할 수 없습니다.</p>

          <h2 id="t7">7. 사용자 파일</h2>
          <p>사용자가 처리하는 파일의 권리와 책임은 사용자에게 있습니다. Kumquat은 원본을 덮어쓰지 않도록 설계되었지만, 중요한 파일은 처리 전에 백업해 두시기 바랍니다. 목적지 프리셋(사이트별 형식·용량 규칙)은 편의를 위한 참고 정보이며, 각 사이트의 실제 요구사항과 다를 수 있습니다. 최종 제출 전 해당 사이트의 안내를 확인할 책임은 사용자에게 있습니다.</p>

          <h2 id="t8">8. 변경과 연락처</h2>
          <p>이 페이지의 서비스 조건을 바꾸면 시행일과 함께 게시하고, 사용자에게 불리한 중대한 변경은 앱 업데이트 노트에도 알립니다.</p>
          <p>문의: <a href="mailto:${site.email}">${site.email}</a> · <a href="../support/">지원 페이지</a></p>`,
});

const en = (ctx) => docPage(ctx, {
  eyebrow: 'Terms of Use · End User License Agreement (EULA)',
  title: 'Kumquat Terms of Use',
  lede: 'These terms apply to Kumquat downloaded from the Mac App Store, including its subscriptions and in-app purchases.',
  aside: `<h2>Contents</h2><ol><li><a href="#t1">How these terms fit together</a></li><li><a href="#t2">Open source components</a></li><li><a href="#t3">What the Standard EULA covers</a></li><li><a href="#t4">Free and Pro</a></li><li><a href="#t5">Auto-renewing subscription</a></li><li><a href="#t6">Cancellation and refunds</a></li><li><a href="#t7">Your files</a></li><li><a href="#t8">Changes and contact</a></li></ol>`,
  body: `${draftBanner(ctx)}
          <p class="meta-line">Draft written ${site.factsDate} · Effective date: set at app launch</p>

          <h2 id="t1">1. How these terms fit together</h2>
          <p>Kumquat is licensed to you under Apple’s <a href="${appleEula}" rel="noopener">Licensed Application End User License Agreement (Standard EULA)</a>, as is. Kumquat has no custom EULA.</p>
          <p>Sections 2 and 3 explain the open source components and what the Standard EULA provides, and sections 4 onward set out service terms such as free use, subscriptions and ads. If this page reads differently from the Standard EULA on the license itself, the Standard EULA prevails. Regarding use of the App Store, the Apple Media Services Terms and Conditions prevail.</p>

          <h2 id="t2">2. Open source components</h2>
          <p>Kumquat includes open source software that is licensed to you under its own terms, including FFmpeg and LAME under the GNU Lesser General Public License (LGPL) version 2.1 or later. Those terms govern your use of those components, and the Standard EULA (section a) also excepts what the licensing terms of included open source components permit.</p>
          <p>Nothing on this page restricts your rights under those licenses, including the rights to modify those components and to reverse engineer for the purpose of debugging such modifications.</p>
          <p>The complete corresponding source code is included inside the app (<code>Kumquat.app/Contents/Resources/OpenSource</code>), and the license texts are available in the app under <strong>Settings › About › Open Source Licenses</strong>.</p>
          <p>Kumquat’s own code is not licensed under the LGPL. This section applies only to the open source components.</p>

          <h2 id="t3">3. What the Standard EULA covers</h2>
          <p>This page does not set its own terms for the following; they come from the Standard EULA. The summary below is for convenience only, and the <a href="${appleEula}" rel="noopener">Standard EULA itself</a> prevails.</p>
          <ul>
            <li><strong>Scope of license (section a)</strong>: a non-transferable license to use the app on Apple-branded products you own or control, as permitted by the App Store Usage Rules, including Family Sharing. Except where the law or the open source licenses (section 2) allow it, you may not copy, reverse engineer, modify or redistribute the app.</li>
            <li><strong>Termination (section c)</strong>: your rights end automatically if you fail to comply with the terms.</li>
            <li><strong>No warranty (section e)</strong>: to the maximum extent permitted by law, the app is provided “as is,” without warranty of any kind.</li>
            <li><strong>Limitation of liability (section f)</strong>: to the extent not prohibited by law, no liability for incidental, indirect or consequential damages, including loss of data, and total liability limited to fifty dollars (US$50).</li>
            <li><strong>Export (section g)</strong>: no export or re-export except as allowed by U.S. law and the law where you obtained the app, and you represent that you are not in a U.S.-embargoed country or on a U.S. list of prohibited or restricted parties.</li>
            <li><strong>Governing law (section i)</strong>: the laws of the State of California by default. For citizens of an EU country, Switzerland, Norway or Iceland living outside the U.S., the laws and courts of their usual place of residence apply.</li>
          </ul>
          <p>Some jurisdictions do not allow the exclusion of warranties or the limitation of liability. Where that is the case, these limits apply only as far as the law allows, and the consumer rights you have under the laws of your country stay in place.</p>

          <h2 id="t4">4. Free and Pro</h2>
          <ul>
            <li><strong>Welcome trial</strong>: your first ${P.welcomeTrialFiles} files can use every feature, including Pro features, for free.</li>
            <li><strong>Free use</strong>: after the trial, basic image, audio, video and document conversions are free for up to ${P.freeDailyFiles} files a day. Usage is counted per file, and a batch runs up to the free files you have left that day. Target size, some formats such as GIF, AVIF, FLAC, Opus and WebM, and automation and AI features require Pro.</li>
            <li><strong>Ads</strong>: the free version shows ads inside the app, either a note about Kumquat Pro or a sponsor the Developer works with directly. No ads are shown to Pro Lifetime owners or during a Pro Yearly subscription.</li>
            <li><strong>Pro Lifetime</strong> (non-consumable in-app purchase, regular price ${P.lifetime}): use the major version you bought (for example 1.x) and its updates with no time limit. A later major version may require a separate upgrade purchase.</li>
            <li><strong>Pro Yearly</strong> (auto-renewable subscription, ${P.yearly}/year): all Pro features in the latest version while subscribed.</li>
          </ul>
          <p>Prices shown are US App Store prices. The price and currency you pay are shown at checkout for your App Store country. The free allowance and features may change with updates, but a Pro Lifetime purchase will not lose features it had when you bought it.</p>
          <p>Advertisers are responsible for their ads and for their products and services. Tapping an ad opens the advertiser’s website in your browser, and your use of that site is governed by the advertiser’s terms and privacy policy.</p>

          <h2 id="t5">5. Auto-renewing subscription</h2>
          <ul>
            <li>Title: Kumquat Pro Yearly · Length: 1 year · Price: the local price shown at checkout</li>
            <li>Payment is charged to your Apple ID account at confirmation of purchase.</li>
            <li>The subscription renews automatically unless auto-renew is turned off at least 24 hours before the end of the current period. Your account is charged for renewal within 24 hours before the end of the current period.</li>
            <li>If a ${P.trialDays}-day free trial is offered, it converts to a paid subscription unless cancelled at least 24 hours before it ends. Any unused part of a free trial is forfeited when you buy a product in the same subscription group.</li>
            <li>Manage or cancel in System Settings › Apple ID › Media & Purchases › Manage Subscriptions.</li>
          </ul>

          <h2 id="t6">6. Cancellation and refunds</h2>
          <p>After you cancel, Pro stays active until the end of the period you paid for. No partial refunds are given for the rest of a period. Apple processes all payments, so refunds are requested through Apple’s <a href="https://reportaproblem.apple.com/" rel="noopener">Report a Problem</a> page and handled under Apple’s policies and applicable law. The Developer cannot issue refunds directly.</p>

          <h2 id="t7">7. Your files</h2>
          <p>You keep all rights to, and responsibility for, the files you process. Kumquat is designed not to overwrite originals, but back up important files first. Destination presets (per-site format and size rules) are provided for convenience and may differ from a site’s actual requirements; check the site’s own instructions before you submit.</p>

          <h2 id="t8">8. Changes and contact</h2>
          <p>Changes to the service terms on this page will be posted with a new effective date, and material changes that are unfavorable to you will also be noted in the app’s release notes.</p>
          <p>Contact: <a href="mailto:${site.email}">${site.email}</a> · <a href="../support/">Support page</a></p>`,
});

export function render(ctx) {
  return ctx.lang === 'ko'
    ? { title: '이용약관(EULA)', description: 'Kumquat 최종 사용자 라이선스 계약과 Pro 구독·평생 이용권 조건(초안).', body: ko(ctx) }
    : { title: 'Terms of Use (EULA)', description: 'Kumquat end user license agreement and terms for the Pro subscription and lifetime purchase (draft).', body: en(ctx) };
}
