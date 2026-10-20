import { site } from '../config.mjs';
import { docPage, storeCta } from '../layout.mjs';

export const path = 'guides/hometax-attachment-size/';
export const langs = ['ko'];
export const priority = 0.7;

// TODO: confirm the current per-file and total size limits on Hometax's attachment screens (they differ by menu
// and can change), then add them here with the date checked. Until then this guide tells readers to read the limit on screen.

export function render(ctx) {
  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: '홈택스 증빙서류 첨부 용량 줄이기 (Mac)',
    step: [
      { '@type': 'HowToStep', name: '첨부 화면의 허용 형식과 용량 한도 확인' },
      { '@type': 'HowToStep', name: '사진은 JPG로, 스캔은 회색조로' },
      { '@type': 'HowToStep', name: '미리보기에서 PDF 용량 줄이기' },
      { '@type': 'HowToStep', name: '글자가 읽히는지 확인 후 첨부' },
    ],
  };
  return {
    title: '홈택스 증빙서류 첨부 용량 줄이기 (Mac)',
    description: '홈택스에 스캔 PDF나 아이폰 사진이 첨부되지 않을 때, Mac 기본 앱과 Kumquat으로 글자를 살리면서 용량을 줄이는 방법.',
    head: `<script type="application/ld+json">${JSON.stringify(howTo)}</script>`,
    body: docPage(ctx, {
      eyebrow: '목적지 가이드 · 홈택스',
      title: '홈택스 증빙서류, 용량 초과 없이 첨부하기',
      lede: '종합소득세·연말정산 증빙을 올리다 “파일 용량 초과”나 “허용되지 않는 확장자”를 만났다면, 대부분 스캔 해상도와 사진 형식 문제입니다. Mac에서 바로 해결하는 순서를 정리했습니다.',
      aside: `<h2>목차</h2><ol><li><a href="#check">한도 먼저 확인</a></li><li><a href="#photo">사진: HEIC → JPG</a></li><li><a href="#scan">스캔 다시 하기</a></li><li><a href="#preview">미리보기로 줄이기</a></li><li><a href="#kumquat">Kumquat으로 줄이기</a></li><li><a href="#final">올리기 전 확인</a></li></ol>`,
      body: `          <p class="meta-line">작성 ${site.factsDate} · macOS 12 이상 기준</p>

          <h2 id="check">1. 첨부 화면의 한도부터 확인하세요</h2>
          <p>홈택스는 메뉴(신고서 부속서류, 증빙서류 제출, 민원 신청 등)마다 허용하는 파일 형식과 <strong>파일당·전체 용량 한도</strong>가 다를 수 있습니다. 첨부 버튼 근처의 안내 문구에서 두 가지를 적어 두세요.</p>
          <ul><li>허용 형식: 보통 PDF와 이미지(JPG, PNG 등). HEIC는 받지 않는 경우가 많습니다.</li><li>용량 한도: 파일 하나당 몇 MB인지, 전체 합계 한도가 따로 있는지</li></ul>
          <div class="callout"><p>한도 숫자는 화면 안내가 기준입니다. 안내가 없거나 헷갈리면 국세청 상담센터(국번 없이 126)에 문의하세요. 전자 제출이 어려운 대용량 자료는 관할 세무서에 제출 방법을 확인할 수 있습니다.</p></div>

          <h2 id="photo">2. 사진은 HEIC가 아니라 JPG로</h2>
          <p>아이폰으로 찍은 영수증은 대부분 HEIC 형식입니다. 확장자를 확인하고 JPG로 바꾸세요.</p>
          <ol>
            <li>사진을 <strong>미리보기</strong>로 엽니다.</li>
            <li>메뉴에서 <strong>파일 › 내보내기</strong>를 고릅니다.</li>
            <li>형식을 <strong>JPEG</strong>로, 품질 슬라이더를 가운데쯤으로 두고 저장합니다.</li>
          </ol>
          <p>여러 장이면 모두 선택해 미리보기로 연 뒤, 사이드바에서 전체 선택 › 파일 › 선택한 이미지 내보내기를 쓰면 한 번에 바꿀 수 있습니다.</p>

          <h2 id="scan">3. 스캔은 회색조·적당한 해상도로 다시</h2>
          <p>용량이 큰 PDF는 대부분 컬러 600dpi로 스캔된 경우입니다. 글자 위주 서류라면 <strong>회색조(또는 흑백), 200~300dpi</strong>로 다시 스캔하는 것이 가장 깔끔하게 용량을 줄이는 방법입니다. 이미지 캡처 앱이나 스캐너 설정에서 바꿀 수 있습니다.</p>

          <h2 id="preview">4. 미리보기로 PDF 용량 줄이기</h2>
          <ol>
            <li>PDF를 <strong>미리보기</strong>로 엽니다.</li>
            <li><strong>파일 › 내보내기</strong>를 고릅니다.</li>
            <li><strong>Quartz 필터</strong>에서 <strong>파일 크기 줄이기</strong>(Reduce File Size)를 고르고 다른 이름으로 저장합니다.</li>
          </ol>
          <p>간단하지만 압축 강도를 조절할 수 없어 글자가 뭉개질 때가 있습니다. 저장한 파일을 100%로 확대해 금액·사업자등록번호 같은 숫자가 또렷한지 꼭 확인하세요.</p>

          <h2 id="kumquat">5. Kumquat으로 한도에 딱 맞추기</h2>
          <p>Kumquat은 “목표 용량”을 정하면 가장 큰 품질에서 시작해 한도 안에 들어올 때까지 줄이고, 줄인 결과의 글자를 OCR로 다시 읽어 원본보다 가독성이 떨어지지 않았는지 확인합니다(품질 가드).</p>
          <ol>
            <li>PDF를 끌다가 <kbd>Shift</kbd>를 눌러 휠을 엽니다.</li>
            <li><strong>목표 용량</strong> 조각에 놓고, 첨부 화면에서 확인한 한도보다 조금 작은 값을 고릅니다.</li>
            <li>결과가 원본 옆에 저장됩니다. 원본은 그대로 남습니다.</li>
          </ol>
          <div class="callout tip"><p><strong>무료</strong>: 목표 용량은 처음 파일 10개 체험 안에서 써 볼 수 있고, 이후에는 Pro 기능입니다. 체험이 끝난 뒤에는 2~4번의 기본 앱 방법을 쓰세요.<br><strong>Pro</strong>: 브라우저 확장이 홈택스 첨부 칸의 형식·용량 안내를 읽어, 칸에 바로 놓아도 맞춰 줍니다. 한도를 넘는 묶음은 여러 파일로 나눠 줍니다.</p></div>
          <div class="doc-cta">${storeCta(ctx, 'guide-hometax')}</div>

          <h2 id="final">6. 올리기 전 확인</h2>
          <ul>
            <li>100%로 확대했을 때 금액, 날짜, 사업자등록번호가 읽히나요?</li>
            <li>페이지가 빠지거나 순서가 바뀌지 않았나요?</li>
            <li>파일 이름은 짧고 특수문자 없이(예: <code>2026_의료비_영수증.pdf</code>) 정리했나요?</li>
            <li>제출에 필요 없는 다른 사람의 개인정보가 들어 있지 않나요?</li>
          </ul>
          <p class="meta-line">이 가이드는 홈택스·국세청과 관계없는 Kumquat 팀이 작성했습니다. 제출 요건은 항상 홈택스 화면의 안내를 따르세요.</p>`,
    }),
  };
}
