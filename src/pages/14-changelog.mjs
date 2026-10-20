import { docPage } from '../layout.mjs';

export const path = 'changelog/';
export const priority = 0.5;

// Planned releases mirror docs/PLAN.md §5. Replace "planned" entries with real release notes as versions ship.

const entries = {
  ko: [
    ['계획', '1.3 이후', '확장', ['HWPX → PDF, 이후 HWP 5.0', 'PPTX·XLSX·iWork·EPUB 변환(Office 팩)', '개발자 팩(앱 아이콘 세트, 파비콘, srcset)', '자연어로 레시피 만들기, 9:16 리프레이밍, 무음 구간 컷', '`kq` 명령줄 도구, Chrome 확장']],
    ['계획', '1.2', '온디바이스 AI', ['배경 제거, OCR → 검색 가능한 PDF', '받아쓰기 → SRT/VTT 자막과 번역', '업스케일 2×/4×, 영상 → 최적화 GIF', '민감정보 자동 마스킹, 증명사진 메이커']],
    ['계획', '1.1', '목적지와 자동화', ['레시피와 폴더 감시', '목적지 인식(앱 감지, Safari 확장, 국내 프리셋 30개)', '클립보드 자동 최적화, 노치 선반']],
    ['계획', '1.0', '첫 출시', ['Shift-드래그 휠, 메뉴바 드롭, Finder 빠른 동작, 공유 확장, 단축어', '이미지·오디오·영상·문서 기본 변환 무제한 무료', '목표 용량과 품질 가드', '기록, 실행 취소, 원본 보관']],
    ['2026-10', '웹사이트', '사이트 공개 준비', ['한국어·영어 랜딩, 개인정보 처리방침·이용약관 초안, 지원, 보도 자료, 목적지 가이드 2편']],
  ],
  en: [
    ['Planned', '1.3+', 'Expansion', ['HWPX → PDF, then HWP 5.0', 'PPTX, XLSX, iWork and EPUB conversion (Office pack)', 'Developer pack (app icon sets, favicons, srcset)', 'Recipes from plain language, 9:16 reframing, silence cutting', '`kq` command-line tool, Chrome extension']],
    ['Planned', '1.2', 'On-device AI', ['Background removal, OCR to searchable PDF', 'Transcription to SRT/VTT subtitles, with translation', 'Upscaling 2×/4×, video to optimized GIF', 'Automatic redaction, ID photo maker']],
    ['Planned', '1.1', 'Destinations and automation', ['Recipes and folder watching', 'Destination awareness (app detection, Safari extension, 30 Korean site presets)', 'Clipboard optimization, notch shelf']],
    ['Planned', '1.0', 'First release', ['Shift-drag wheel, menu bar drop, Finder Quick Actions, Share extension, Shortcuts', 'Unlimited free basic conversions for images, audio, video and documents', 'Target size with quality guard', 'History, undo and originals vault']],
    ['2026-10', 'Website', 'Site prepared', ['Korean and English landing, draft privacy policy and terms, support, press kit, two upload guides (Korean)']],
  ],
};

export function render(ctx) {
  const ko = ctx.lang === 'ko';
  const list = entries[ctx.lang]
    .map(([when, ver, title, items]) => `<li><div class="when"><b>${ver}</b>${when}</div><div><h2>${title}</h2><ul>${items.map((i) => `<li>${i.replace(/`([^`]+)`/g, '<code>$1</code>')}</li>`).join('')}</ul></div></li>`)
    .join('\n          ');
  return {
    title: ko ? '변경 기록' : 'Changelog',
    description: ko ? 'Kumquat 버전별 변경 사항과 출시 계획.' : 'What’s new in each Kumquat version, and what’s planned.',
    body: docPage(ctx, {
      eyebrow: ko ? '변경 기록' : 'Changelog',
      title: ko ? '무엇이 바뀌었고, 무엇이 오고 있나' : 'What’s new, and what’s next',
      lede: ko ? '아직 출시 전입니다. 아래 “계획” 항목은 개발 일정에 따라 바뀔 수 있습니다.' : 'Kumquat isn’t out yet. “Planned” entries may change as development goes on.',
      body: `          <ol class="timeline">
          ${list}
          </ol>`,
    }),
  };
}
