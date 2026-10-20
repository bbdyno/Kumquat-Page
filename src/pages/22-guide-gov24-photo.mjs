import { site } from '../config.mjs';
import { docPage, storeCta } from '../layout.mjs';

export const path = 'guides/gov24-id-photo/';
export const langs = ['ko'];
export const priority = 0.7;

// TODO: confirm the file format, file size and pixel requirements on 정부24's online application screens
// (주민등록증 재발급 등), then add them here with the date checked. Physical size and 6-month rule come from
// local government 민원 guidance; the pixel numbers below are plain arithmetic, not an official requirement.

const diagram = `<svg viewBox="0 0 200 240" role="img" aria-label="가로 3.5cm, 세로 4.5cm 증명사진 규격 그림">
  <rect class="frame" x="30" y="20" width="140" height="180" rx="4"/>
  <g class="person"><circle cx="100" cy="88" r="32"/><path d="M48 200c4-44 26-66 52-66s48 22 52 66z"/></g>
  <line class="dim" x1="30" y1="214" x2="170" y2="214"/><line class="dim" x1="30" y1="209" x2="30" y2="219"/><line class="dim" x1="170" y1="209" x2="170" y2="219"/>
  <text x="100" y="232" text-anchor="middle">3.5 cm · 413 px</text>
  <line class="dim" x1="182" y1="20" x2="182" y2="200"/><line class="dim" x1="177" y1="20" x2="187" y2="20"/><line class="dim" x1="177" y1="200" x2="187" y2="200"/>
  <text x="192" y="114" transform="rotate(90 192 114)" text-anchor="middle">4.5 cm · 531 px</text>
</svg>`;

export function render(ctx) {
  return {
    title: '정부24 증명사진 규격 맞추기 (Mac)',
    description: '주민등록증 재발급 등 정부24 온라인 신청에 쓰는 3.5×4.5cm 증명사진을 Mac에서 규격에 맞는 파일로 만드는 방법과 픽셀 계산.',
    body: docPage(ctx, {
      eyebrow: '목적지 가이드 · 정부24',
      title: '정부24 증명사진, 규격에 맞는 파일로 만들기',
      lede: '사진관 파일이나 직접 찍은 사진을 온라인 신청에 올리려면 비율, 픽셀, 배경을 맞춰야 합니다. Mac 기본 앱으로 하는 방법과 계산 근거를 정리했습니다.',
      aside: `<h2>목차</h2><ol><li><a href="#spec">기본 규격</a></li><li><a href="#pixels">픽셀로 바꾸기</a></li><li><a href="#preview">미리보기로 맞추기</a></li><li><a href="#kumquat">Kumquat 증명사진 메이커</a></li><li><a href="#check">올리기 전 확인</a></li></ol>`,
      body: `          <p class="meta-line">작성 ${site.factsDate} · macOS 12 이상 기준</p>

          <h2 id="spec">1. 기본 규격</h2>
          <div class="photo-spec">
            ${diagram}
            <div>
              <p>주민등록증 재발급 등 민원에 쓰는 증명사진은 일반적으로 다음을 요구합니다.</p>
              <ul>
                <li>크기 <strong>가로 3.5cm × 세로 4.5cm</strong> (비율 7:9)</li>
                <li><strong>최근 6개월 이내</strong>에 촬영</li>
                <li>모자 등을 쓰지 않은 <strong>상반신 정면</strong></li>
              </ul>
            </div>
          </div>
          <div class="callout"><p>온라인 신청 화면은 파일 형식(JPG 등)과 파일 용량, 배경 색 기준을 따로 안내할 수 있습니다. <strong>업로드 화면의 안내가 항상 우선</strong>입니다. 여권 사진은 외교부의 별도 기준(얼굴 크기, 흰색 배경 등)이 더 엄격하니 여권 안내를 따로 확인하세요.</p></div>

          <h2 id="pixels">2. cm를 픽셀로 바꾸기</h2>
          <p>사진 파일에는 cm가 없고 픽셀만 있습니다. 인쇄 해상도(dpi)를 정하면 픽셀 수를 계산할 수 있습니다.</p>
          <div class="table-wrap"><table>
            <thead><tr><th scope="col">해상도</th><th scope="col">가로 (3.5cm)</th><th scope="col">세로 (4.5cm)</th></tr></thead>
            <tbody>
              <tr><th scope="row">300 dpi</th><td class="mono">413 px</td><td class="mono">531 px</td></tr>
              <tr><th scope="row">600 dpi</th><td class="mono">827 px</td><td class="mono">1063 px</td></tr>
            </tbody>
          </table></div>
          <p class="meta-line">계산식: 픽셀 = cm ÷ 2.54 × dpi. 예) 3.5 ÷ 2.54 × 300 ≈ 413. 화면에 픽셀 기준이 따로 있으면 그 값을 쓰고, 없으면 비율 7:9만 정확히 맞추면 됩니다.</p>

          <h2 id="preview">3. 미리보기로 맞추기</h2>
          <ol>
            <li>사진을 <strong>미리보기</strong>로 엽니다.</li>
            <li>드래그로 얼굴과 어깨가 들어가게 영역을 고릅니다. 선택 영역 옆에 표시되는 크기를 보며 가로:세로를 <strong>7:9</strong>에 가깝게 맞춥니다(예: 700×900).</li>
            <li><strong>도구 › 자르기</strong>를 누릅니다.</li>
            <li><strong>도구 › 크기 조절</strong>에서 단위를 픽셀로 바꾸고, 가로 <strong>413</strong> 세로 <strong>531</strong>을 입력합니다.</li>
            <li><strong>파일 › 내보내기</strong>에서 형식을 <strong>JPEG</strong>로 저장합니다. 용량 한도가 있으면 품질 슬라이더로 맞춥니다.</li>
          </ol>
          <p>배경에 사물이 보이거나 그림자가 지면 반려될 수 있습니다. 밝은 단색 벽 앞에서 다시 찍는 것이 가장 확실합니다.</p>

          <h2 id="kumquat">4. Kumquat 증명사진 메이커 <span class="pill">Pro · 1.2 예정</span></h2>
          <p>사진을 놓으면 정부24 프리셋에 맞춰 7:9로 자르고, 얼굴 위치와 크기를 검사하고, 배경을 단색으로 바꾼 JPG를 만듭니다. 배경 분리는 Mac 안에서 처리하므로 얼굴 사진이 어디로도 전송되지 않습니다.</p>
          <ul class="checks">
            <li>얼굴이 너무 작거나 치우치면 경고</li>
            <li>배경을 흰색 또는 지정한 단색으로 교체(macOS 14 이상에서 가장 정확)</li>
            <li>파일 용량 한도에 맞춰 JPG 품질 자동 조절</li>
          </ul>
          ${storeCta(ctx, 'guide-gov24-photo')}

          <h2 id="check">5. 올리기 전 확인</h2>
          <ul>
            <li>비율이 7:9이고, 화면에서 요구한 픽셀·용량 안에 들어가나요?</li>
            <li>6개월 이내 사진이고, 모자·선글라스 없이 정면인가요?</li>
            <li>배경에 무늬나 그림자가 없나요?</li>
            <li>보정으로 얼굴 모양이 실제와 달라지지 않았나요?</li>
          </ul>
          <p class="meta-line">이 가이드는 정부24·행정안전부와 관계없는 Kumquat 팀이 작성했습니다. 사진 기준은 신청 화면과 담당 기관의 안내를 따르세요.</p>`,
    }),
  };
}
