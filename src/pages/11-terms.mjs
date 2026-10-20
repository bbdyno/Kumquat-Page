import { site, pricing } from '../config.mjs';
import { docPage, draftBanner } from '../layout.mjs';

export const path = 'terms/';
export const priority = 0.4;

// TODO before launch: legal review; decide custom EULA vs Apple's standard EULA; governing law;
// developer legal name and address (required by Apple's minimum EULA terms); register the EULA URL in App Store Connect.

const P = pricing;
const appleEula = 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/';

const ko = (ctx) => docPage(ctx, {
  eyebrow: '이용약관 · 최종 사용자 라이선스 계약(EULA)',
  title: 'Kumquat 이용약관',
  lede: 'Mac App Store에서 내려받은 Kumquat과 그 안의 구독·인앱 구매에 적용되는 조건입니다.',
  aside: `<h2>목차</h2><ol>
    <li><a href="#t1">계약 당사자</a></li><li><a href="#t2">라이선스</a></li><li><a href="#t3">무료 기능과 Pro</a></li>
    <li><a href="#t4">자동 갱신 구독</a></li><li><a href="#t5">해지와 환불</a></li><li><a href="#t6">사용자 파일</a></li>
    <li><a href="#t7">제3자 구성요소</a></li><li><a href="#t8">보증의 부인</a></li><li><a href="#t9">책임의 제한</a></li>
    <li><a href="#t10">지원과 유지보수</a></li><li><a href="#t11">제품 관련 청구</a></li><li><a href="#t12">지식재산권 청구</a></li>
    <li><a href="#t13">법령 준수</a></li><li><a href="#t14">제3자 수익자</a></li><li><a href="#t15">준거법</a></li><li><a href="#t16">변경과 연락처</a></li></ol>`,
  body: `${draftBanner(ctx)}
          <p class="meta-line">초안 작성일 ${site.factsDate} · 시행일: 앱 출시일에 확정</p>
          <p>이 약관은 Apple의 <a href="${appleEula}" rel="noopener">표준 EULA</a>를 대신하는 맞춤형 최종 사용자 라이선스 계약입니다. 이 약관이 Apple 미디어 서비스 이용약관과 다를 경우, App Store 사용에 관해서는 Apple의 약관이 우선합니다.</p>

          <h2 id="t1">1. 계약 당사자</h2>
          <p>이 계약은 사용자와 Kumquat 개발자(이하 “개발자”, [법적 이름·주소 확정 후 기재]) 사이에 체결되며, Apple과의 계약이 아닙니다. Kumquat과 그 콘텐츠에 대한 책임은 Apple이 아닌 개발자에게 있습니다.</p>

          <h2 id="t2">2. 라이선스</h2>
          <p>개발자는 사용자가 소유하거나 관리하는 Apple 브랜드 Mac에서, App Store 이용약관의 사용 규칙(가족 공유 포함)에 따라 Kumquat을 사용할 수 있는 양도 불가능한 비독점적 권리를 부여합니다. 법이 허용하는 경우를 제외하고 앱을 역컴파일·역설계·재배포하거나, 구매 확인 등 기술적 보호 수단을 우회해서는 안 됩니다.</p>

          <h2 id="t3">3. 무료 기능과 Pro</h2>
          <ul>
            <li>기본 변환 기능은 기간·횟수 제한 없이 무료로 제공됩니다.</li>
            <li>Pro 기능은 기능별 체험 횟수(현재 ${P.proTrialCredits}회)를 무료로 쓸 수 있고, 그 이후에는 Pro 구매가 필요합니다.</li>
            <li><strong>Pro 평생 이용권</strong>(비소모성 인앱 구매, 정가 ${P.lifetime}): 구매한 메이저 버전(예: 1.x)과 그 업데이트를 기간 제한 없이 사용합니다. 다음 메이저 버전은 별도 업그레이드 구매가 필요할 수 있습니다.</li>
            <li><strong>Pro 연간 구독</strong>(자동 갱신 구독, ${P.yearly}/년): 구독 기간 동안 최신 버전의 모든 Pro 기능을 사용합니다.</li>
          </ul>
          <p>표시 가격은 미국 App Store 기준이며, 실제 가격과 통화는 사용자의 App Store 국가에 따라 결제 화면에 표시됩니다. 기능 구성은 업데이트로 바뀔 수 있으나, 이미 구매한 평생 이용권의 기능을 구매 당시보다 줄이지는 않습니다.</p>

          <h2 id="t4">4. 자동 갱신 구독</h2>
          <ul>
            <li>구독 이름: Kumquat Pro 연간 · 기간: 1년 · 가격: 결제 화면에 표시되는 현지 가격</li>
            <li>결제는 구매 확인 시 Apple ID 계정으로 청구됩니다.</li>
            <li>현재 기간이 끝나기 최소 24시간 전에 자동 갱신을 끄지 않으면 구독이 자동으로 갱신되며, 기간 종료 전 24시간 안에 다음 기간 요금이 청구됩니다.</li>
            <li>${P.trialDays}일 무료 체험이 제공되는 경우, 체험 기간이 끝나기 최소 24시간 전에 해지하지 않으면 유료 구독으로 전환됩니다. 체험 기간 중 같은 구독 그룹의 상품을 구매하면 남은 체험 기간은 소멸합니다.</li>
            <li>구독은 시스템 설정 › Apple ID › 미디어 및 구입 항목 › 구독 관리에서 관리하고 해지할 수 있습니다.</li>
          </ul>

          <h2 id="t5">5. 해지와 환불</h2>
          <p>해지하면 이미 결제한 기간이 끝날 때까지 Pro를 쓸 수 있고, 남은 기간에 대한 부분 환불은 제공되지 않습니다. 모든 결제는 Apple이 처리하므로 환불은 Apple의 <a href="https://reportaproblem.apple.com/" rel="noopener">문제 신고</a> 페이지에서 요청해야 하며, Apple의 정책과 관련 법령에 따라 처리됩니다. 개발자는 직접 환불할 수 없습니다.</p>

          <h2 id="t6">6. 사용자 파일</h2>
          <p>사용자가 처리하는 파일의 권리와 책임은 사용자에게 있습니다. Kumquat은 원본을 덮어쓰지 않도록 설계되었지만, 중요한 파일은 처리 전에 백업해 두시기 바랍니다. 목적지 프리셋(사이트별 형식·용량 규칙)은 편의를 위한 참고 정보이며, 각 사이트의 실제 요구사항과 다를 수 있습니다. 최종 제출 전 해당 사이트의 안내를 확인할 책임은 사용자에게 있습니다.</p>

          <h2 id="t7">7. 제3자 구성요소</h2>
          <p>Kumquat에는 오픈 소스 구성요소(예: LGPL 라이선스의 FFmpeg 라이브러리)가 포함될 수 있으며, 해당 구성요소에는 각자의 라이선스가 적용됩니다. 고지 사항은 앱의 정보 화면에서 볼 수 있습니다.</p>

          <h2 id="t8">8. 보증의 부인</h2>
          <p>관련 법령이 허용하는 최대 범위에서 Kumquat은 “있는 그대로” 제공되며, 특정 목적 적합성이나 오류가 없음을 보증하지 않습니다. 앱이 보증 사항을 충족하지 못한 경우 사용자는 Apple에 알릴 수 있고, Apple은 해당 앱의 구매 금액을 환불할 수 있습니다. 법이 허용하는 최대 범위에서 Apple은 앱에 관해 그 밖의 어떠한 보증 의무도 지지 않으며, 보증 불이행으로 인한 그 밖의 청구·손실·책임·비용은 개발자의 책임입니다.</p>

          <h2 id="t9">9. 책임의 제한</h2>
          <p>관련 법령이 허용하는 최대 범위에서, 개발자는 앱 사용으로 인한 데이터 손실, 간접·부수적·결과적 손해에 대해 책임지지 않으며, 어떤 경우에도 개발자의 책임은 사용자가 Kumquat에 지불한 금액을 넘지 않습니다. 다만 개발자의 고의 또는 중대한 과실로 인한 손해, 그리고 법령상 배제할 수 없는 책임은 이 제한에서 제외됩니다.</p>

          <h2 id="t10">10. 지원과 유지보수</h2>
          <p>지원과 유지보수의 책임은 개발자에게 있으며, Apple은 앱에 대한 유지보수·지원 의무를 지지 않습니다. 문의: <a href="mailto:${site.email}">${site.email}</a> · <a href="../support/">지원 페이지</a></p>

          <h2 id="t11">11. 제품 관련 청구</h2>
          <p>앱과 관련된 청구(제조물 책임, 법령·규제 요건 미준수, 소비자 보호 관련 청구 등)는 Apple이 아닌 개발자가 처리합니다.</p>

          <h2 id="t12">12. 지식재산권 청구</h2>
          <p>앱 또는 사용자의 앱 사용이 제3자의 지식재산권을 침해한다는 청구가 있는 경우, 그 조사·방어·해결·면책의 책임은 Apple이 아닌 개발자에게 있습니다.</p>

          <h2 id="t13">13. 법령 준수</h2>
          <p>사용자는 미국 정부의 금수 조치 대상 국가에 있지 않고, 미국 정부의 거래 금지·제한 대상 명단에 올라 있지 않음을 진술합니다.</p>

          <h2 id="t14">14. 제3자 수익자</h2>
          <p>Apple과 Apple의 자회사는 이 계약의 제3자 수익자이며, 사용자가 이 계약을 수락하면 Apple은 제3자 수익자로서 사용자에게 이 계약을 집행할 권리를 갖습니다.</p>

          <h2 id="t15">15. 준거법</h2>
          <p>[준거법과 관할 법원 확정 후 기재. 예: 대한민국 법률, 관할 법원은 민사소송법에 따름.] 이 조항은 사용자의 거주 국가 법률이 보장하는 소비자 권리를 제한하지 않습니다.</p>

          <h2 id="t16">16. 변경과 연락처</h2>
          <p>약관을 바꾸면 이 페이지에 시행일과 함께 게시하고, 사용자에게 불리한 중대한 변경은 앱 업데이트 노트에도 알립니다. 문의: <a href="mailto:${site.email}">${site.email}</a></p>`,
});

const en = (ctx) => docPage(ctx, {
  eyebrow: 'Terms of Use · End User License Agreement (EULA)',
  title: 'Kumquat Terms of Use',
  lede: 'These terms apply to Kumquat downloaded from the Mac App Store, including its subscriptions and in-app purchases.',
  aside: `<h2>Contents</h2><ol>
    <li><a href="#t1">Parties</a></li><li><a href="#t2">License</a></li><li><a href="#t3">Free and Pro</a></li>
    <li><a href="#t4">Auto-renewing subscription</a></li><li><a href="#t5">Cancellation and refunds</a></li><li><a href="#t6">Your files</a></li>
    <li><a href="#t7">Third-party components</a></li><li><a href="#t8">Warranty disclaimer</a></li><li><a href="#t9">Limitation of liability</a></li>
    <li><a href="#t10">Support and maintenance</a></li><li><a href="#t11">Product claims</a></li><li><a href="#t12">Intellectual property claims</a></li>
    <li><a href="#t13">Legal compliance</a></li><li><a href="#t14">Third-party beneficiary</a></li><li><a href="#t15">Governing law</a></li><li><a href="#t16">Changes and contact</a></li></ol>`,
  body: `${draftBanner(ctx)}
          <p class="meta-line">Draft written ${site.factsDate} · Effective date: set at app launch</p>
          <p>This is a custom end user license agreement that replaces Apple’s <a href="${appleEula}" rel="noopener">Standard EULA</a>. Where it conflicts with the Apple Media Services Terms and Conditions regarding use of the App Store, Apple’s terms prevail.</p>

          <h2 id="t1">1. Parties</h2>
          <p>This agreement is between you and the developer of Kumquat (“Developer”, [legal name and address to be added]), not Apple. The Developer, not Apple, is solely responsible for Kumquat and its content.</p>

          <h2 id="t2">2. License</h2>
          <p>The Developer grants you a non-transferable, non-exclusive license to use Kumquat on any Apple-branded Mac you own or control, as permitted by the Usage Rules in the App Store Terms, including Family Sharing. Except where the law allows it, you may not decompile, reverse engineer or redistribute the app, or bypass purchase verification or other technical protections.</p>

          <h2 id="t3">3. Free and Pro</h2>
          <ul>
            <li>Basic conversions are free with no time or usage limits.</li>
            <li>Each Pro feature can be tried a limited number of times (currently ${P.proTrialCredits}) for free; after that, Pro is required.</li>
            <li><strong>Pro Lifetime</strong> (non-consumable in-app purchase, regular price ${P.lifetime}): use the major version you bought (for example 1.x) and its updates with no time limit. A later major version may require a separate upgrade purchase.</li>
            <li><strong>Pro Yearly</strong> (auto-renewable subscription, ${P.yearly}/year): all Pro features in the latest version while subscribed.</li>
          </ul>
          <p>Prices shown are US App Store prices. The price and currency you pay are shown at checkout for your App Store country. Features may change with updates, but a Pro Lifetime purchase will not lose features it had when you bought it.</p>

          <h2 id="t4">4. Auto-renewing subscription</h2>
          <ul>
            <li>Title: Kumquat Pro Yearly · Length: 1 year · Price: the local price shown at checkout</li>
            <li>Payment is charged to your Apple ID account at confirmation of purchase.</li>
            <li>The subscription renews automatically unless auto-renew is turned off at least 24 hours before the end of the current period. Your account is charged for renewal within 24 hours before the end of the current period.</li>
            <li>If a ${P.trialDays}-day free trial is offered, it converts to a paid subscription unless cancelled at least 24 hours before it ends. Any unused part of a free trial is forfeited when you buy a product in the same subscription group.</li>
            <li>Manage or cancel in System Settings › Apple ID › Media & Purchases › Manage Subscriptions.</li>
          </ul>

          <h2 id="t5">5. Cancellation and refunds</h2>
          <p>After you cancel, Pro stays active until the end of the period you paid for. No partial refunds are given for the rest of a period. Apple processes all payments, so refunds are requested through Apple’s <a href="https://reportaproblem.apple.com/" rel="noopener">Report a Problem</a> page and handled under Apple’s policies and applicable law. The Developer cannot issue refunds directly.</p>

          <h2 id="t6">6. Your files</h2>
          <p>You keep all rights to, and responsibility for, the files you process. Kumquat is designed not to overwrite originals, but back up important files first. Destination presets (per-site format and size rules) are provided for convenience and may differ from a site’s actual requirements; check the site’s own instructions before you submit.</p>

          <h2 id="t7">7. Third-party components</h2>
          <p>Kumquat may include open-source components (for example, the FFmpeg libraries under the LGPL), each under its own license. Notices are available in the app’s About window.</p>

          <h2 id="t8">8. Warranty disclaimer</h2>
          <p>To the maximum extent permitted by law, Kumquat is provided “as is,” without warranty of fitness for a particular purpose or freedom from errors. If the app fails to conform to any applicable warranty, you may notify Apple, and Apple may refund the purchase price of the app. To the maximum extent permitted by law, Apple has no other warranty obligation with respect to the app, and any other claims, losses, liabilities, damages, costs or expenses attributable to a failure to conform to any warranty are the Developer’s responsibility.</p>

          <h2 id="t9">9. Limitation of liability</h2>
          <p>To the maximum extent permitted by law, the Developer is not liable for data loss or for indirect, incidental or consequential damages arising from use of the app, and the Developer’s total liability will not exceed the amount you paid for Kumquat. This does not limit liability for intentional misconduct or gross negligence, or any liability that cannot be excluded by law.</p>

          <h2 id="t10">10. Support and maintenance</h2>
          <p>The Developer is solely responsible for support and maintenance. Apple has no obligation to furnish any maintenance or support services for the app. Contact: <a href="mailto:${site.email}">${site.email}</a> · <a href="../support/">Support page</a></p>

          <h2 id="t11">11. Product claims</h2>
          <p>The Developer, not Apple, is responsible for addressing any claims relating to the app, including product liability claims, claims that the app fails to meet any legal or regulatory requirement, and claims under consumer protection or similar laws.</p>

          <h2 id="t12">12. Intellectual property claims</h2>
          <p>If a third party claims that the app or your use of it infringes their intellectual property rights, the Developer, not Apple, is solely responsible for the investigation, defense, settlement and discharge of that claim.</p>

          <h2 id="t13">13. Legal compliance</h2>
          <p>You represent that you are not located in a country subject to a U.S. Government embargo, and that you are not listed on any U.S. Government list of prohibited or restricted parties.</p>

          <h2 id="t14">14. Third-party beneficiary</h2>
          <p>Apple and its subsidiaries are third-party beneficiaries of this agreement, and upon your acceptance, Apple will have the right to enforce it against you as a third-party beneficiary.</p>

          <h2 id="t15">15. Governing law</h2>
          <p>[Governing law and venue to be decided, e.g. the laws of the Republic of Korea.] Nothing here limits consumer rights you have under the laws of the country where you live.</p>

          <h2 id="t16">16. Changes and contact</h2>
          <p>Changes will be posted on this page with a new effective date, and material changes that are unfavorable to you will also be noted in the app’s release notes. Contact: <a href="mailto:${site.email}">${site.email}</a></p>`,
});

export function render(ctx) {
  return ctx.lang === 'ko'
    ? { title: '이용약관(EULA)', description: 'Kumquat 최종 사용자 라이선스 계약과 Pro 구독·평생 이용권 조건(초안).', body: ko(ctx) }
    : { title: 'Terms of Use (EULA)', description: 'Kumquat end user license agreement and terms for the Pro subscription and lifetime purchase (draft).', body: en(ctx) };
}
