import { docPage } from '../layout.mjs';

export const path = 'changelog/';
export const priority = 0.5;

// Planned releases mirror docs/PLAN.md §5. Replace "planned" entries with real release notes as versions ship.

const entries = {
  ko: [
    ['계획', '1.3 이후', '확장', ['HWPX → PDF, 이후 HWP 5.0', 'PPTX·XLSX·iWork·EPUB 변환(Office 팩)', '개발자 팩(앱 아이콘 세트, 파비콘, srcset)', '자연어로 레시피 만들기, 9:16 리프레이밍, 무음 구간 컷', '명령줄 도구, Chrome 확장']],
    ['계획', '1.2', '온디바이스 AI', ['배경 제거, OCR → 검색 가능한 PDF', '받아쓰기 → SRT/VTT 자막과 번역', '업스케일 2×/4×, 영상 → 최적화 GIF', '민감정보 자동 마스킹, 증명사진 메이커']],
    ['계획', '1.1', '자동화', ['레시피와 폴더 감시', '보낼 곳 자동 인식(앱 감지, Safari 확장, 국내 사이트 프리셋)', '클립보드 자동 최적화, 노치 선반']],
    ['계획', '1.0', '첫 출시', ['어디로 보내나요?: 메일 첨부, 메신저, 작은 업로드, 서류 제출, 사진 첨부, 웹·블로그 이미지, 직접 지정. 한도는 설정에서 바꿀 수 있음', '메일 첨부 합계 맞춤(20 MB를 파일 크기 비율로 나눔), 품질 가드(해상도부터 줄이고 유사도 표시), 글자를 살리는 PDF 압축', '결과를 새 메일에 첨부·공유·Finder에서 보기, 이미 한도 안인 파일은 “이미 맞음” 표시', '메뉴 막대 드롭, Finder 빠른 동작, 단축어', '다른 형식으로: 이미지·오디오·영상·문서 변환, 자르기·회전, PNG·JPG로 복사, QR 읽기', '처음 파일 10개 모든 기능 체험, 이후 기본 변환 하루 5개 무료(광고 포함)', '기록·통계 창, 결과 카드(비교·실행 취소)']],
    ['2026-10', '웹사이트', '사이트 공개 준비', ['한국어·영어 랜딩, 개인정보 처리방침·이용약관 초안, 지원, 보도 자료, 보낼 곳 가이드 2편', '보낼 곳 중심으로 소개를 새로 쓰고 이름과 색을 Shrinkwrap에 맞춤']],
  ],
  en: [
    ['Planned', '1.3+', 'Expansion', ['HWPX → PDF, then HWP 5.0', 'PPTX, XLSX, iWork and EPUB conversion (Office pack)', 'Developer pack (app icon sets, favicons, srcset)', 'Recipes from plain language, 9:16 reframing, silence cutting', 'Command-line tool, Chrome extension']],
    ['Planned', '1.2', 'On-device AI', ['Background removal, OCR to searchable PDF', 'Transcription to SRT/VTT subtitles, with translation', 'Upscaling 2×/4×, video to optimized GIF', 'Automatic redaction, ID photo maker']],
    ['Planned', '1.1', 'Automation', ['Recipes and folder watching', 'Automatic destination detection (app detection, Safari extension, Korean site presets)', 'Clipboard optimization, notch shelf']],
    ['Planned', '1.0', 'First release', ['Where is it going?: email attachment, messenger, small upload, online forms, photo upload, web images and custom. Every limit can be changed in Settings', 'Email total budget (20 MB split across files by size), quality guard (lowers resolution first and shows similarity), text-preserving PDF compression', 'Send results to a new Mail message, share them or show them in Finder; files that already fit are marked as such', 'Menu bar drop, Finder Quick Actions, Shortcuts', 'Format conversions for images, audio, video and documents, crop and rotate, copy as PNG or JPG, QR reading', 'Every feature for the first 10 files, then 5 free basic conversions a day (with ads)', 'History and stats window, result card with compare and undo']],
    ['2026-10', 'Website', 'Site prepared', ['Korean and English landing, draft privacy policy and terms, support, press kit, two upload guides (Korean)', 'Rewritten around destinations, with the Shrinkwrap name and colors']],
  ],
};

export function render(ctx) {
  const ko = ctx.lang === 'ko';
  const list = entries[ctx.lang]
    .map(([when, ver, title, items]) => `<li><div class="when"><b>${ver}</b>${when}</div><div><h2>${title}</h2><ul>${items.map((i) => `<li>${i.replace(/`([^`]+)`/g, '<code>$1</code>')}</li>`).join('')}</ul></div></li>`)
    .join('\n          ');
  return {
    title: ko ? '변경 기록' : 'Changelog',
    description: ko ? 'Shrinkwrap 버전별 변경 사항과 출시 계획.' : 'What’s new in each Shrinkwrap version, and what’s planned.',
    body: docPage(ctx, {
      eyebrow: ko ? '변경 기록' : 'Changelog',
      title: ko ? '무엇이 바뀌었고, 무엇이 오고 있나' : 'What’s new, and what’s next',
      lede: ko ? '아직 출시 전입니다. 아래 “계획” 항목은 개발 일정에 따라 바뀔 수 있습니다.' : 'Shrinkwrap isn’t out yet. “Planned” entries may change as development goes on.',
      body: `          <ol class="timeline">
          ${list}
          </ol>`,
    }),
  };
}
