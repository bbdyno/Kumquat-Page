import { site, pricing, storeLink } from '../config.mjs';
import { btn, arrowSvg, mark, shot } from '../layout.mjs';
import { icon } from '../icons.mjs';
import { formats, kinds } from '../data/formats.mjs';
import { maskIllustration } from '../data/illustrations.mjs';

const img = (ctx, name) => `${ctx.root}assets/img/${name}`;

export const path = '';
export const priority = 1.0;

const P = pricing;

const copy = {
  ko: {
    title: 'Kumquat — 드롭하면, 목적지에 딱 맞게 | Mac 파일 변환',
    description: 'Mac용 파일 변환·최적화 앱. 처음 파일 10개는 모든 기능을 무료로, 이후 기본 변환은 하루 5개 무료. 업로드 용량에 맞춰 자동 규격화, 여러 단계를 묶는 레시피, 온디바이스 AI. 파일은 Mac 밖으로 나가지 않습니다. Intel Mac·macOS 12 지원.',
    hero: {
      label: 'Mac 파일 변환 · 출시 준비 중',
      announceTag: '출시 준비 중',
      announce: `처음 파일 ${P.welcomeTrialFiles}개는 모든 기능 무료`,
      alt: '햇살 아래 놓인 금귤 사진',
      wheelAlt: 'Kumquat 휠: 금귤 단면 모양으로 JPG, PNG, HEIC, WebP, 2 MB 이하, 1 MB 이하, 1920 px, 메타데이터 제거가 펼쳐진 실제 화면',
      toastAlt: '변환 뒤 화면 구석에 뜨는 결과 썸네일',
      h1: '드롭하면,<br><em>목적지에</em> 딱 맞게.',
      lede: '파일을 끌다가 <kbd>Shift</kbd>를 한 번. 원하는 형식으로 바로 바뀌고, <span class="nowrap">홈택스·정부24·메일</span>에 올릴 파일을 2 MB·1 MB 이하로 줄이는 것도 한 번에. 모든 처리는 내 Mac 안에서만.',
      cta: 'App Store에서 받기',
      more: '작동 방식 보기',
      note: 'App Store 심사 중입니다. 승인되어 공개되면 링크가 열립니다.',
      chipTitle: '증빙_스캔.pdf',
      chipSub: '8.4 MB → 1.8 MB',
      tag: '앱 녹화 영상 자리 · 16:10',
    },
    app: {
      label: '실제 화면',
      h2: '변환은 끌어서,<br>기록은 <em>한 창에.</em>',
      feats: [['stack', '드래그 중 Shift, 그리고 휠', '파일을 끄는 동안 ⇧를 누르면 커서 둘레에 휠이 뜹니다. 가운데에 놓으면 입력해서 찾을 수 있습니다.'], ['clock-counter-clockwise', '기록', '날짜별로 묶인 기록에서 썸네일을 보고, 검색하고, 비교하거나 되돌리고, Finder에서 바로 엽니다. 창에 파일을 놓아도 변환됩니다.'], ['chart-bar', '통계', '변환한 파일 수, 줄인 용량, 최근 14일 그래프, 자주 쓴 동작을 보여 줍니다. 사이드바 아래에는 남은 체험·무료 개수가 나옵니다.']],
      shots: { main: 'Kumquat 메인 창: 사이드바(기록·통계·설정)와 통계 또는 날짜별 기록 목록', hover: '결과 썸네일에 마우스를 올린 모습: 비교, 실행 취소, 2 MB 줄였습니다' },
      note: '실제 앱 화면입니다. 기록 목록의 파일은 데모 데이터입니다.',
    },
    band: [
      [`${P.welcomeTrialFiles}개`, '처음 파일', 'Pro 포함 모든 기능 무료 체험'],
      ['0', '업로드·수집', '서버도, 계정도, 분석 SDK도 없음'],
      ['12+', 'macOS Monterey부터', 'Intel과 Apple 실리콘 모두'],
      [`${P.freeDailyFiles}개`, '매일 무료 기본 변환', '체험 후에도 하루 5개, 광고 포함'],
    ],
    how: {
      label: '작동 방식',
      h2: '끌어서, 고르고, <em>놓으면</em> 끝.',
      p: '변환 메뉴를 찾아 헤매지 않아도 됩니다. 끌고, ⇧를 누르고, 원하는 칸에 놓으면 됩니다.',
      file: '금귤_정물.heic',
      drop: '홈택스 · 증빙서류 첨부',
      dropSmall: '예시 화면 · 업로드 칸의 허용 형식과 용량 한도를 읽어 옵니다',
      ok: '한도 안으로',
      steps: [
        ['파일을 끌기 시작합니다', 'Finder, 메일 첨부, 스크린샷 어디서든. 평소처럼 끌면 됩니다. 앱을 먼저 열 필요가 없습니다.'],
        ['<kbd>Shift</kbd>를 누르면 휠이 열립니다', '그 파일로 할 수 있는 작업이 금귤 단면 모양 휠로 커서 둘레에 펼쳐집니다. 가운데에 놓으면 입력해서 찾을 수 있습니다.'],
        ['원하는 칸에 놓으면 끝', '결과는 원본 옆에 저장되고, 화면 구석에 결과 썸네일이 뜹니다. 마우스를 올려 비교하거나 실행 취소할 수 있습니다.'],
      ],
    },
    features: {
      label: '기능',
      h2: '가벼운 변환은 무료로.<br>번거로움은 <em>Pro</em>가.',
      p: `처음 파일 ${P.welcomeTrialFiles}개는 모든 기능을, 그 뒤에도 기본 변환은 하루 ${P.freeDailyFiles}개까지 무료입니다. Pro는 제한을 풀고, 자동화 기능은 1.1부터 차례로 더해집니다.`,
      dest: {
        tag: 'Pro · 1.1 예정',
        h3: '어디에 올릴지 알면, 규격은 알아서',
        p: '커서 아래 앱과 브라우저 업로드 칸을 보고 형식·용량·픽셀 규격을 맞추는 기능을 준비하고 있습니다. 지금은 휠의 2 MB·1 MB 이하로 용량을 맞춥니다.',
        list: [['정부24', '증명사진 규격 · 민원 첨부', true], ['홈택스', '증빙서류 PDF 용량', true], ['사람인 · 잡코리아', '이력서 사진 · 첨부 파일'], ['대학 LMS', '과제 제출 형식'], ['카카오톡 · 메일', '보내기 전 최적화, 한도 초과 시 분할']],
      },
      recipe: {
        tag: 'Pro · 1.1 예정',
        h3: '다섯 단계를 한 번의 드롭으로',
        p: '블록처럼 쌓아 두면 드롭 한 번에 끝. 폴더를 지켜보다 자동으로 실행하는 기능을 준비하고 있습니다.',
        steps: ['긴 변 1600px', 'HEIC → WebP', '500 KB 이하', '위치 정보 제거', '날짜-제목으로 이름 변경'],
        watch: '스크린샷 폴더 감시 중',
      },
      privacy: { tag: '모두', zero: '0', h3: '업로드도, 수집도 없음', p: '모든 처리가 Mac 안에서. App Store 라벨 “데이터 수집 안 함” 기준.' },
      hwp: { tag: 'Pro · 1.3 예정', mark: 'HWP<span>→</span>PDF', h3: '한국 특화', p: 'HWP·HWPX 변환, 국내 사이트 프리셋, 증명사진 메이커.' },
      cta: { h3: `처음 파일 ${P.welcomeTrialFiles}개는 모든 기능 무료`, p: 'Pro 기능까지 직접 써 보고 결정하세요.' },
      note: '목적지 이름은 프리셋 대상 예시이며 각 서비스와 제휴 관계가 없습니다. 실제 한도는 각 사이트 안내를 기준으로 합니다.',
    },
    ai: {
      label: '온디바이스 AI · 1.2 예정',
      h2: '사진 한 장도 서버로 <em>보내지 않는</em> AI.',
      p: '1.2에서 추가할 AI 기능입니다. Apple의 Vision·Core ML로 Mac 안에서만 처리하고, 인터넷이 끊겨 있어도 동작하도록 만듭니다.',
      tabs: [
        ['bg', '배경 제거', '피사체만 남기고 배경을 투명하게. 증명사진 배경을 흰색으로 바꾸는 데에도 씁니다. macOS 14 이상(12–13은 인물 분리).'],
        ['up', '업스케일', '작은 이미지를 2×·4×로 키우면서 경계를 또렷하게. Apple 실리콘에서 가장 빠르고, Intel에서는 시간이 더 걸립니다.'],
        ['mask', '민감정보 마스킹', '주민등록번호·전화번호·카드번호·이메일을 찾아 가린 사본을 만듭니다. 원본은 건드리지 않습니다.'],
      ],
      before: '이전', after: '이후',
      notes: { bg: '이 Mac에서 macOS Vision으로 배경을 지운 실제 결과입니다. 사진: Unsplash.', up: '1/5로 줄였다가 다시 키운 이미지와 원본을 나란히 놓은 비교입니다. 업스케일 결과가 아닙니다.', mask: '가상의 정보로 만든 예시 문서입니다.' },
      slider: '이전/이후 비교 위치',
    },
    formats: {
      label: '지원 포맷',
      h2: '찾는 형식이 있나요?',
      p: `출시 계획 기준 목록입니다. 처음 파일 ${P.welcomeTrialFiles}개는 모든 포맷을, 이후 Free 포맷은 하루 ${P.freeDailyFiles}개까지 무료로 변환합니다.`,
      search: '포맷 검색 (예: heic, 한글, 자막)',
      filters: [['all', '전체'], ['image', '이미지'], ['audio', '오디오'], ['video', '영상'], ['doc', '문서'], ['free', 'Free'], ['pro', 'Pro']],
      cols: ['포맷', '종류', '바꿀 수 있는 형식', '요금제', '버전'],
      count: '{t}개 중 {n}개',
      empty: '일치하는 포맷이 없습니다. 필요한 형식을 지원 페이지로 알려 주세요.',
    },
    privacy: {
      label: '프라이버시',
      h2: '파일은 Mac 밖으로 <em>나가지 않습니다.</em>',
      p: '온라인 변환기처럼 서버에 올리지 않습니다. 계정도, 분석 SDK도 없습니다.',
      cards: [
        ['0', '업로드', '변환·압축·AI 모두 Mac 안에서 처리합니다. Kumquat 서버는 존재하지 않습니다.'],
        ['0', '수집하는 데이터', 'App Store 개인정보 라벨 “데이터 수집 안 함”을 목표로 합니다. 분석·광고·크래시 SDK를 넣지 않습니다.'],
        ['0', '계정', '가입이나 로그인이 없습니다. 구매는 Apple ID로 App Store에서만 이루어집니다.'],
      ],
      settingsAlt: 'Kumquat 설정 › 일반: 모든 변환은 이 Mac에서만 처리되고 계정도 분석 도구도 없다는 안내',
      settingsNote: '앱 설정 › 일반에도 같은 약속이 적혀 있습니다.',
      vsTitle: '온라인 변환기와 무엇이 다른가요',
      vsBad: ['온라인 변환기', ['파일을 서버로 업로드', '서버에서 변환', '결과를 다시 다운로드', '보관 기간은 서비스 정책에 따름']],
      vsGood: ['Kumquat', ['Mac 안에서 바로 변환', '원본 옆에 결과 저장', '인터넷 없이도 동작', '완전 오프라인 모드']],
    },
    pricing: {
      label: '가격',
      h2: '가볍게 쓰면 <em>무료.</em>',
      p: `처음 파일 ${P.welcomeTrialFiles}개는 Pro까지 모두 무료. 그 뒤에는 기본 변환 하루 ${P.freeDailyFiles}개가 무료이고, 무료 사용 중에는 광고가 표시됩니다.`,
      plans: [
        { name: 'Free', price: '무료', word: true, note: `처음 ${P.welcomeTrialFiles}개는 모든 기능 체험 · 이후 기본 변환 하루 ${P.freeDailyFiles}개 · 광고 포함`, cta: 'App Store에서 받기', feats: [`처음 파일 ${P.welcomeTrialFiles}개: Pro 포함 모든 기능`, `이후 이미지·오디오·영상·문서 기본 변환 하루 ${P.freeDailyFiles}개`, 'Shift-드래그 휠, 메뉴 막대 드롭, Finder 서비스, 단축어', '기록·통계 창, 비교·실행 취소', '무료 사용 중 광고 표시'] },
        { name: 'Pro 연간', price: P.yearly, unit: '/ 년', note: `${P.trialDays}일 무료 체험 후 자동 갱신. 언제든 해지할 수 있습니다.`, cta: `${P.trialDays}일 무료 체험`, feats: ['제한 없음 · 광고 없음', '목표 용량과 GIF·AVIF 등 확장 포맷', '목적지 인식·레시피·폴더 감시 (1.1 예정)', '온디바이스 AI·민감정보 마스킹 (1.2 예정)', 'HWP/HWPX·Office 팩 (1.3 예정)'] },
        { name: 'Pro 평생', price: P.lifetimeLaunch, was: P.lifetime, note: `출시 할인가. 구매한 메이저 버전의 모든 업데이트 포함.`, cta: '평생 이용권 구매', featured: true, badge: '출시 할인', feats: ['Pro 연간의 모든 기능 · 광고 없음', '구매한 메이저 버전 평생 사용', '다음 메이저 업그레이드 50% 할인', '가족 공유 지원'] },
      ],
      foot: `가격은 미국 App Store 기준(USD) 계획가입니다. 원화 가격은 App Store 국가별 가격표에 따라 정해지며, 구매·해지·환불은 Apple을 통해 처리됩니다. ${site.factsDate} 기준.`,
      matrix: 'Free와 Pro 전체 비교',
      mcols: ['기능', 'Free', 'Pro'],
      mrows: [
        ['기본 변환(이미지·오디오·영상·문서)', `처음 ${P.welcomeTrialFiles}개 + 하루 ${P.freeDailyFiles}개`, '제한 없음'],
        ['일괄 처리', '오늘 남은 무료 개수만큼', '제한 없음'],
        ['목표 용량(예: 2 MB 이하)', `처음 ${P.welcomeTrialFiles}개 체험`, '제한 없음'],
        ['GIF·AVIF·FLAC·Opus·WebM 등', `처음 ${P.welcomeTrialFiles}개 체험`, '✓'],
        ['기록 · 통계 창 · 실행 취소', '✓', '✓'],
        ['목적지 인식 · 국내 프리셋 (1.1 예정)', '—', '✓'],
        ['레시피 · 폴더 감시 (1.1 예정)', '—', '✓'],
        ['노치 선반 · 클립보드 자동화 (1.1 예정)', '—', '✓'],
        ['온디바이스 AI: 배경 제거·OCR·자막·업스케일 (1.2 예정)', '—', '✓'],
        ['민감정보 자동 마스킹 (1.2 예정)', '—', '✓'],
        ['HWP/HWPX · 증명사진 메이커 (1.2–1.3 예정)', '—', '✓'],
        ['광고', '표시', '없음'],
      ],
    },
    compare: {
      label: '비교',
      h2: '사실만 놓고 비교했습니다.',
      p: '확인할 수 있는 항목만 적었습니다. 다른 앱 정보는 아래 날짜에 공개 버전을 직접 확인한 내용입니다.',
      cols: ['', 'Kumquat (출시 계획)', '온라인 변환기 (일반적인 경우)', 'Tangerine 2.0.2'],
      rows: [
        ['파일 처리 위치', 'Mac 안', '서비스 서버', 'Mac 안'],
        ['무료 범위', `처음 파일 ${P.welcomeTrialFiles}개는 모든 기능, 이후 기본 변환 하루 ${P.freeDailyFiles}개(광고 포함)`, '서비스마다 다름(횟수·용량 제한이 흔함)', '처음 20회'],
        ['유료 가격', `평생 ${P.lifetime}(출시가 ${P.lifetimeLaunch}) 또는 연 ${P.yearly}`, '서비스마다 다름', '일회성 $29.99'],
        ['Intel Mac', '지원', '브라우저만 있으면 됨', '지원 안 함(Apple 실리콘 전용)'],
        ['최소 macOS', 'macOS 12', '—', 'macOS 13'],
        ['Finder 서비스 · 단축어', '1.0부터 제공', '—', '앱 번들에 없음'],
        ['App Store 개인정보 라벨', '“데이터 수집 안 함” 목표', '—', '구매 기록 수집 신고(사용자와 연결 안 됨)'],
        ['목적지 인식 · 국내 사이트 프리셋', '1.1 예정(Pro)', '—', '—'],
      ],
      foot: `Tangerine 정보: Mac App Store 설치본 2.0.2(빌드 9)의 Info.plist·개인정보 매니페스트·번들 구성과 App Store 표시 가격을 ${site.factsDate}에 확인. Tangerine은 해당 개발사의 상표이며 Kumquat과 관계가 없습니다. Kumquat 항목은 출시 계획이며 바뀔 수 있습니다.`,
    },
    faq: {
      label: 'FAQ',
      h2: '자주 묻는 질문',
      side: '여기 없는 질문은 <a href="support/">지원 페이지</a>에서 찾거나 메일로 보내 주세요.',
      items: [
        ['무료로 어디까지 쓸 수 있나요?', `처음 파일 ${P.welcomeTrialFiles}개는 Pro를 포함한 모든 기능을 무료로 써 볼 수 있습니다. 그 뒤에는 이미지·오디오·영상·문서의 기본 변환을 하루 ${P.freeDailyFiles}개(파일 기준)까지 무료로 쓰고, 일괄 처리도 그날 남은 개수만큼 됩니다. 목표 용량, GIF·AVIF·FLAC·Opus·WebM, 자동화·AI 기능은 Pro입니다.`],
        ['광고가 나오나요?', '무료 사용 중에는 앱 안에 광고가 표시됩니다. Kumquat Pro 안내이거나, 직접 계약한 스폰서 광고입니다. 광고 목록은 이 사이트에서 받아 오며, 앱은 식별자나 사용 정보를 보내지 않고 개인 맞춤·추적도 하지 않습니다. 서드파티 광고 SDK는 없습니다. Pro에서는 광고가 나오지 않습니다.'],
        ['Intel Mac이나 오래된 macOS에서도 되나요?', 'macOS 12 Monterey 이상의 Intel Mac과 Apple 실리콘 Mac 모두 지원합니다. 1.2부터 더할 AI 기능 일부는 OS 버전에 따라 켜지며, 지원하지 않는 기능은 메뉴에 나타나지 않습니다.'],
        ['파일이 인터넷으로 전송되나요?', '아니요. 변환과 AI 처리는 모두 Mac 안에서 이루어집니다. 네트워크는 광고 목록(그리고 1.1부터 목적지 프리셋 목록)을 받을 때만 쓰며, 이때도 파일이나 식별자는 보내지 않습니다. 자세한 내용은 <a href="privacy/">개인정보 처리방침</a>을 보세요.'],
        ['원본 파일이 덮어써지지 않나요?', '원본은 항상 그대로 두고 결과를 옆에 저장합니다. 변환은 메뉴 막대의 실행 취소(⌘Z), 결과 썸네일, 기록 창에서 되돌릴 수 있습니다.'],
        ['HWP 파일도 PDF로 바꿀 수 있나요?', 'HWPX와 HWP를 PDF·DOCX로 바꾸는 기능을 Pro로 준비하고 있습니다. 출시 일정은 <a href="changelog/">변경 기록</a>에서 알려 드립니다.'],
        ['구독을 해지하거나 환불받으려면?', '구매와 결제는 App Store에서만 처리합니다. 구독 해지는 시스템 설정 › Apple ID › 미디어 및 구입 항목 › 구독 관리에서, 환불 요청은 Apple의 문제 신고 페이지에서 할 수 있습니다. <a href="support/">지원</a> 페이지에 단계별로 정리했습니다.'],
      ],
    },
    final: {
      h2: '다음 업로드부터는<br>한 번에 맞게.',
      p: `처음 파일 ${P.welcomeTrialFiles}개는 모든 기능이 무료입니다. 설치하고, 파일을 끌다가 Shift를 눌러 보세요.`,
      cta: 'App Store에서 받기',
      note: 'App Store 심사 중 · 공개되면 링크가 열립니다',
      reqs: ['macOS 12 Monterey 이상', 'Intel · Apple 실리콘', '한국어 · 영어', '데이터 수집 안 함'],
    },
  },

  en: {
    title: 'Kumquat — Drop it, and it fits | File converter for Mac',
    description: 'A file converter and optimizer for Mac. Your first 10 files get every feature free, then 5 basic conversions a day stay free. Kumquat fits files to upload limits, chains steps into recipes and runs AI on device. Your files never leave your Mac. Supports Intel Macs and macOS 12.',
    hero: {
      label: 'File converter for Mac · Coming soon',
      announceTag: 'Coming soon',
      announce: `Your first ${P.welcomeTrialFiles} files get every feature free`,
      alt: 'Kumquats on a table in late sunlight',
      wheelAlt: 'The Kumquat wheel, shaped like a kumquat slice, showing JPG, PNG, HEIC, WebP, under 2 MB, under 1 MB, 1920 px and strip metadata (Korean UI)',
      toastAlt: 'Result thumbnail shown in the corner after converting',
      h1: 'Drop it,<br>and it <em>fits.</em>',
      lede: 'Start dragging a file and tap <kbd>Shift</kbd>. It turns into the format you need, and can shrink a file under 2 MB or 1 MB for uploads in the same move. Everything runs on your Mac.',
      cta: 'Get it on the App Store',
      more: 'See how it works',
      note: 'In App Store review. The link opens once the app is public.',
      chipTitle: 'receipts-scan.pdf',
      chipSub: '8.4 MB → 1.8 MB',
      tag: 'App recording goes here · 16:10',
    },
    app: {
      label: 'Real screens',
      h2: 'Convert by dragging.<br>Keep track <em>in one window.</em>',
      feats: [['stack', 'Shift while dragging, then the wheel', 'Tap ⇧ while dragging a file and the wheel opens around the cursor. Drop on the center to type and search.'], ['clock-counter-clockwise', 'History', 'A date-grouped list with thumbnails and search. Compare, undo or show any result in Finder, or drop files on the window to convert them.'], ['chart-bar', 'Stats', 'Files converted, space saved, a 14-day chart and your most-used actions. The sidebar shows trial files or today’s free conversions left.']],
      shots: { main: 'Kumquat main window: sidebar with History, Stats and Settings, showing stats or the date-grouped history list', hover: 'Hovering the result thumbnail: compare, undo, 2 MB smaller' },
      note: 'Real app screens (Korean UI). The files in the history list are demo data.',
    },
    band: [
      [`${P.welcomeTrialFiles}`, 'First files', 'Every feature free, Pro included'],
      ['0', 'Uploads & data', 'No server, no account, no analytics'],
      ['12+', 'macOS Monterey and up', 'Intel and Apple silicon'],
      [`${P.freeDailyFiles}/day`, 'Free basic conversions', 'After the trial, with ads'],
    ],
    how: {
      label: 'How it works',
      h2: 'Drag, pick, <em>drop.</em> Done.',
      p: 'No hunting through export menus. Drag, tap ⇧, drop on the slice you want.',
      file: 'kumquats.heic',
      drop: 'Tax portal · Attach receipts',
      dropSmall: 'Example screen · reads the accepted types and size limit from the upload field',
      ok: 'Fits the limit',
      steps: [
        ['Start dragging a file', 'From Finder, a mail attachment or a screenshot. Drag it the way you always do. There’s no app to open first.'],
        ['Tap <kbd>Shift</kbd> to open the wheel', 'The actions for that file fan out around your cursor in a wheel shaped like a kumquat slice. Drop on the center to type and search.'],
        ['Drop on a slice. Done.', 'The result is saved next to the original and a thumbnail appears in the corner. Hover it to compare or undo.'],
      ],
    },
    features: {
      label: 'Features',
      h2: 'Light converting is free.<br>The busywork is <em>Pro.</em>',
      p: `Your first ${P.welcomeTrialFiles} files get every feature, and after that ${P.freeDailyFiles} basic conversions a day stay free. Pro removes the limits, and automation arrives from 1.1.`,
      dest: {
        tag: 'Pro · coming in 1.1',
        h3: 'Know where it’s going, and the specs follow',
        p: 'Coming in 1.1: Kumquat reads the app under your cursor and the browser upload field, then matches formats, file size and pixel dimensions. Today, the wheel’s under 2 MB and under 1 MB slices fit the size.',
        list: [['Mail', 'Split ZIP over the attachment limit', true], ['Slack · KakaoTalk', 'Optimize before sending', true], ['Job sites', 'Résumé photo and attachments'], ['University LMS', 'Assignment formats'], ['Government & tax portals', 'ID photo specs, receipt PDFs']],
      },
      recipe: {
        tag: 'Pro · coming in 1.1',
        h3: 'Five steps, one drop',
        p: 'Coming in 1.1: stack steps like blocks and run them with one drop, or let a watched folder run them for you.',
        steps: ['Long edge 1600px', 'HEIC → WebP', 'Under 500 KB', 'Strip location data', 'Rename date-title'],
        watch: 'Watching Screenshots folder',
      },
      privacy: { tag: 'Everyone', zero: '0', h3: 'No uploads, no data collected', p: 'Everything runs on your Mac. Built for the “Data Not Collected” App Store label.' },
      hwp: { tag: 'Pro · 1.3 예정', mark: 'HWP<span>→</span>PDF', h3: 'Korea-ready', p: 'HWP and HWPX conversion, Korean site presets, an ID photo maker.' },
      cta: { h3: `Your first ${P.welcomeTrialFiles} files get every feature free`, p: 'Try Pro for real before you decide.' },
      note: 'Destination names are examples of preset targets. Kumquat is not affiliated with these services, and each site’s own instructions set the actual limits.',
    },
    ai: {
      label: 'On-device AI · coming in 1.2',
      h2: 'AI that never sends <em>a single photo</em> to a server.',
      p: 'Coming in 1.2. Built on Apple’s Vision and Core ML, it will run entirely on your Mac and keep working offline.',
      tabs: [
        ['bg', 'Remove background', 'Keep the subject, drop the background. Also handy for turning an ID photo background white. macOS 14 or later (people-only on 12–13).'],
        ['up', 'Upscale', 'Enlarge small images 2× or 4× with crisp edges. Fastest on Apple silicon, slower on Intel.'],
        ['mask', 'Redact personal info', 'Finds ID numbers, phone numbers, card numbers and emails, then makes a redacted copy. The original stays as it was.'],
      ],
      before: 'Before', after: 'After',
      notes: { bg: 'A real background-removal result made on this Mac with macOS Vision. Photo: Unsplash.', up: 'The image shrunk to 1/5 and enlarged again, beside the original. Not an upscaling result.', mask: 'A sample document with made-up details.' },
      slider: 'Before/after position',
    },
    formats: {
      label: 'Formats',
      h2: 'Looking for a format?',
      p: `This list reflects the launch plan. Your first ${P.welcomeTrialFiles} files can use every format; after that, Free formats convert ${P.freeDailyFiles} files a day.`,
      search: 'Search formats (e.g. heic, subtitles)',
      filters: [['all', 'All'], ['image', 'Image'], ['audio', 'Audio'], ['video', 'Video'], ['doc', 'Document'], ['free', 'Free'], ['pro', 'Pro']],
      cols: ['Format', 'Type', 'Converts to', 'Plan', 'Version'],
      count: '{n} of {t}',
      empty: 'No matching format. Tell us what you need on the support page.',
    },
    privacy: {
      label: 'Privacy',
      h2: 'Your files <em>never leave</em> your Mac.',
      p: 'Nothing is uploaded the way online converters do it. No account, no analytics SDK.',
      cards: [
        ['0', 'uploads', 'Converting, compressing and AI all run on your Mac. There is no Kumquat server.'],
        ['0', 'data collected', 'We aim for the App Store privacy label “Data Not Collected.” No analytics, ad or crash-reporting SDKs.'],
        ['0', 'accounts', 'No sign-up, no login. Purchases go through your Apple ID on the App Store only.'],
      ],
      settingsAlt: 'Kumquat Settings › General: every conversion runs only on this Mac, with no account and no analytics (Korean UI)',
      settingsNote: 'The same promise is written in the app’s Settings › General.',
      vsTitle: 'How it differs from online converters',
      vsBad: ['Online converter', ['Upload your file to a server', 'Convert on the server', 'Download the result', 'Retention depends on the service']],
      vsGood: ['Kumquat', ['Convert right on your Mac', 'Result saved next to the original', 'Works without internet', 'Full offline mode']],
    },
    pricing: {
      label: 'Pricing',
      h2: 'Start <em>free.</em> Stay light.',
      p: `Your first ${P.welcomeTrialFiles} files get everything, Pro included. After that, ${P.freeDailyFiles} basic conversions a day are free, and the free version shows ads.`,
      plans: [
        { name: 'Free', price: '$0', note: `Every feature for your first ${P.welcomeTrialFiles} files · then ${P.freeDailyFiles} basic conversions a day · with ads`, cta: 'Get it on the App Store', feats: [`First ${P.welcomeTrialFiles} files: every feature, Pro included`, `Then ${P.freeDailyFiles} basic image, audio, video and document conversions a day`, 'Shift-drag wheel, menu bar drop, Finder Services, Shortcuts', 'History and stats window, compare and undo', 'Shows ads while free'] },
        { name: 'Pro Yearly', price: P.yearly, unit: '/ year', note: `${P.trialDays}-day free trial, then renews yearly. Cancel anytime.`, cta: `Start ${P.trialDays}-day free trial`, feats: ['No limits · no ads', 'Target size, GIF, AVIF and more formats', 'Destinations, recipes, folder watching (coming in 1.1)', 'On-device AI and redaction (coming in 1.2)', 'HWP/HWPX and Office pack (coming in 1.3)'] },
        { name: 'Pro Lifetime', price: P.lifetimeLaunch, was: P.lifetime, note: 'Launch price. Includes every update to the major version you buy.', cta: 'Buy lifetime', featured: true, badge: 'Launch offer', feats: ['Everything in Pro Yearly · no ads', 'Use your major version for life', '50% off the next major upgrade', 'Family Sharing'] },
      ],
      foot: `Planned US App Store prices in USD. Local prices follow Apple’s price tiers for each storefront. Purchases, cancellations and refunds go through Apple. As of ${site.factsDate}.`,
      matrix: 'Compare every Free and Pro feature',
      mcols: ['Feature', 'Free', 'Pro'],
      mrows: [
        ['Basic conversions (image, audio, video, document)', `First ${P.welcomeTrialFiles} + ${P.freeDailyFiles} a day`, 'No limit'],
        ['Batch size', 'Up to today’s remaining free files', 'No limit'],
        ['Target size (e.g. under 2 MB)', `First ${P.welcomeTrialFiles} files`, 'No limit'],
        ['GIF, AVIF, FLAC, Opus, WebM and more', `First ${P.welcomeTrialFiles} files`, '✓'],
        ['History and stats window, undo', '✓', '✓'],
        ['Destination awareness and presets (coming in 1.1)', '—', '✓'],
        ['Recipes and folder watching (coming in 1.1)', '—', '✓'],
        ['Notch shelf and clipboard automation (coming in 1.1)', '—', '✓'],
        ['On-device AI: background, OCR, subtitles, upscale (coming in 1.2)', '—', '✓'],
        ['Automatic redaction (coming in 1.2)', '—', '✓'],
        ['HWP/HWPX and ID photo maker (coming in 1.2–1.3)', '—', '✓'],
        ['Ads', 'Shown', 'None'],
      ],
    },
    compare: {
      label: 'Compare',
      h2: 'A comparison that sticks to facts.',
      p: 'Only checkable items are listed. The other app was checked directly on its public version on the date below.',
      cols: ['', 'Kumquat (launch plan)', 'Online converters (typical)', 'Tangerine 2.0.2'],
      rows: [
        ['Where files are processed', 'On your Mac', 'On the service’s servers', 'On your Mac'],
        ['Free tier', `Every feature for the first ${P.welcomeTrialFiles} files, then ${P.freeDailyFiles} basic conversions a day (with ads)`, 'Varies (count and size limits are common)', 'First 20 uses'],
        ['Paid price', `Lifetime ${P.lifetime} (launch ${P.lifetimeLaunch}) or ${P.yearly}/year`, 'Varies', 'One-time $29.99'],
        ['Intel Macs', 'Supported', 'Any browser', 'Not supported (Apple silicon only)'],
        ['Minimum macOS', 'macOS 12', '—', 'macOS 13'],
        ['Finder Services, Shortcuts', 'From 1.0', '—', 'Not in the app bundle'],
        ['App Store privacy label', 'Aiming for “Data Not Collected”', '—', 'Declares purchase history (not linked to you)'],
        ['Destination awareness and site presets', 'Coming in 1.1 (Pro)', '—', '—'],
      ],
      foot: `Tangerine details: checked on ${site.factsDate} from the Mac App Store build 2.0.2 (build 9) — its Info.plist, privacy manifest and bundle contents — and the App Store price. Tangerine is a trademark of its developer and is not affiliated with Kumquat. Kumquat entries are the launch plan and may change.`,
    },
    faq: {
      label: 'FAQ',
      h2: 'Questions, answered.',
      side: 'Can’t find it here? Check the <a href="support/">support page</a> or email us.',
      items: [
        ['How much can I do for free?', `Your first ${P.welcomeTrialFiles} files can use every feature, Pro included. After that, basic image, audio, video and document conversions are free for ${P.freeDailyFiles} files a day, and batches run up to the files you have left that day. Target size, GIF, AVIF, FLAC, Opus, WebM, automation and AI are Pro.`],
        ['Are there ads?', 'The free version shows ads inside the app: either a note about Kumquat Pro or a sponsor we work with directly. The ad list is downloaded from this website; the app sends no identifiers or usage data, and nothing is personalized or tracked. There is no third-party ad SDK. Pro has no ads.'],
        ['Does it run on Intel Macs or older macOS?', 'It supports Intel and Apple silicon Macs on macOS 12 Monterey or later. Some AI features coming in 1.2 will depend on the OS version, and anything your Mac can’t run is hidden from the menus.'],
        ['Are my files sent over the internet?', 'No. Conversion and AI run on your Mac. The network is only used to download the ad list (and, from 1.1, destination presets), and neither request carries your files or any identifier. See the <a href="privacy/">Privacy Policy</a>.'],
        ['Will it overwrite my originals?', 'Never. Originals stay in place and results are saved next to them. Undo a conversion from the menu bar (⌘Z), the result thumbnail or the History window.'],
        ['Can it convert Korean HWP files?', 'HWPX and HWP to PDF and DOCX are planned for Pro. We’ll announce timing in the <a href="changelog/">changelog</a>.'],
        ['How do I cancel or get a refund?', 'All purchases go through the App Store. Cancel in System Settings › Apple ID › Media & Purchases › Manage Subscriptions, and request refunds through Apple’s Report a Problem page. Step-by-step instructions are on the <a href="support/">support</a> page.'],
      ],
    },
    final: {
      h2: 'Make your next upload<br><em>fit the first time.</em>',
      p: `Your first ${P.welcomeTrialFiles} files get every feature free. Install it, start dragging a file and tap Shift.`,
      cta: 'Get it on the App Store',
      note: 'In App Store review · the link opens once the app is public',
      reqs: ['macOS 12 Monterey or later', 'Intel · Apple silicon', 'English · Korean', 'Data Not Collected'],
    },
  },
};

export function render(ctx) {
  const c = copy[ctx.lang];
  const ko = ctx.lang === 'ko';
  const mask = maskIllustration();
  const enTo = (s) => (ko ? s : s.replace('병합', 'merge').replace('분할', 'split').replace('목표 용량', 'target size').replace(/\(오디오 추출\)/g, ' (audio only)').replace('이미지', 'images').replace('영상 → GIF', 'video → GIF'));
  const head = (h, extra = '') => `<div class="sec-head reveal"><p class="label">${h.label}</p><h2>${h.h2}</h2>${h.p ? `<p>${h.p}</p>` : ''}${extra}</div>`;

  const formatRows = formats
    .map((f) => {
      const kind = kinds[f.kind][ctx.lang];
      const search = [f.fmt, kind, f.to, f.alias, f.plan].join(' ').toLowerCase();
      return `<tr data-kind="${f.kind}" data-plan="${f.plan}" data-search="${search}"><th scope="row" class="fmt-name">${f.fmt}</th><td>${kind}</td><td>${enTo(f.to)}</td><td class="${f.plan === 'free' ? 'plan-free' : 'plan-pro'}">${f.plan === 'free' ? 'Free' : 'Pro'}</td><td class="mono">${f.release}</td></tr>`;
    })
    .join('\n              ');

  const F = c.features;
  const body = `
    <section class="hero">
      <div class="wrap hero-grid">
        <div class="hero-copy">
          <a class="announce" href="#pricing"><span class="announce-tag">${c.hero.announceTag}</span>${c.hero.announce}${icon('arrow-up-right')}</a>
          <h1>${c.hero.h1}</h1>
          <p class="lede">${c.hero.lede}</p>
          <div class="hero-actions">
            ${btn(storeLink(ctx.lang, 'home-hero'), c.hero.cta, 'btn-orange')}
            <a class="play-link" href="#how"><span class="play">${icon('play')}</span>${c.hero.more}</a>
          </div>
          <p class="hero-note">${c.hero.note}</p>
        </div>
        <figure class="arch">
          <img src="${img(ctx, 'hero-kumquats.webp')}" width="900" height="1046" alt="${c.hero.alt}" fetchpriority="high">
          ${shot(ctx, 'wheel', c.hero.wheelAlt, { cls: 'hero-wheel', eager: true })}
          ${shot(ctx, 'toastad', c.hero.toastAlt, { cls: 'hero-toast', eager: true })}
        </figure>
      </div>
      <div class="wrap band-wrap">
        <div class="band reveal">
          ${c.band.map(([n, l, s]) => `<div class="band-item"><strong>${n}</strong><span>${l}</span><small>${s}</small></div>`).join('\n          ')}
          <span class="band-mark" aria-hidden="true">${mark}</span>
        </div>
      </div>
    </section>

    <section class="section app-sec" id="app">
      <div class="wrap app-grid">
        <div class="app-copy reveal">
          <p class="label">${c.app.label}</p>
          <h2>${c.app.h2}</h2>
          <ul class="feat-list">
            ${c.app.feats.map(([ic, t, d]) => `<li><span class="feat-ico">${icon(ic)}</span><div><h3>${t}</h3><p>${d}</p></div></li>`).join('\n            ')}
          </ul>
        </div>
        <figure class="shots-stage reveal">
          ${shot(ctx, 'main', c.app.shots.main, { cls: 'st-main' })}
          ${shot(ctx, 'toasthover', c.app.shots.hover, { cls: 'st-hover' })}
          <figcaption class="fig-note">${c.app.note}</figcaption>
        </figure>
      </div>
    </section>

    <section class="section" id="how">
      <div class="wrap">
        ${head(c.how)}
        <div class="how">
          <ol class="steps">
            ${c.how.steps.map(([h, p], i) => `<li class="step${i === 0 ? ' is-active' : ''}" data-step="${i + 1}"><span class="num">0${i + 1}</span><div><h3>${h}</h3><p>${p}</p></div></li>`).join('\n            ')}
          </ol>
          <div class="how-stage">
            <div class="stage" data-step="1">
              <div class="stage-grid"></div>
              <div class="stage-wheel">${shot(ctx, 'wheel', c.hero.wheelAlt)}</div>
              <div class="stage-file">
                <span class="file-tile">${icon('file-image')}</span>
                <strong>${c.how.file}</strong>
                <div class="stage-size"><b>4.8</b> MB</div>
              </div>
              <div class="stage-result">${shot(ctx, 'toasthover', c.app.shots.hover)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="features" style="padding-top:0">
      <div class="wrap">
        ${head(F)}
        <div class="bento">
          <article class="tile t-dest reveal">
            <span class="tile-ico">${icon('map-pin-area')}</span>
            <span class="tag">${F.dest.tag}</span>
            <ul class="dest-list">${F.dest.list.map(([n, s, hot]) => `<li${hot ? ' class="hot"' : ''}><b>${n}</b><span>${s}</span></li>`).join('')}</ul>
            <h3>${F.dest.h3}</h3>
            <p>${F.dest.p}</p>
          </article>
          <article class="tile t-recipe reveal">
            <span class="tile-ico">${icon('flow-arrow')}</span>
            <span class="tag">${F.recipe.tag}</span>
            <ol class="recipe-steps">${F.recipe.steps.map((s, i) => `<li style="--i:${i}">${s}</li>`).join('')}</ol>
            <h3>${F.recipe.h3}</h3>
            <p>${F.recipe.p}</p>
            <p class="watch"><i></i>${F.recipe.watch}</p>
          </article>
          <article class="tile t-privacy reveal">
            <span class="tile-ico">${icon('shield-check')}</span>
            <span class="tag">${F.privacy.tag}</span>
            <div class="big-zero">${F.privacy.zero}</div>
            <h3>${F.privacy.h3}</h3>
            <p>${F.privacy.p}</p>
          </article>
          <article class="tile t-hwp reveal">
            <span class="tile-ico">${icon('file-text')}</span>
            <span class="tag">${F.hwp.tag}</span>
            <div class="hwp-mark">${F.hwp.mark}</div>
            <h3>${F.hwp.h3}</h3>
            <p>${F.hwp.p}</p>
          </article>
          <a class="tile t-cta reveal" href="#pricing">
            <span class="circle">${arrowSvg}</span>
            <h3>${F.cta.h3}</h3>
            <p>${F.cta.p}</p>
          </a>
        </div>
        <p class="bento-note">${F.note}${ko ? ' <a class="link-arrow" href="guides/">목적지별 가이드</a>' : ''}</p>
      </div>
    </section>

    <section class="section" id="ai" style="padding-top:0">
      <div class="wrap">
        ${head(c.ai)}
        <div class="ai-layout">
          <div class="ai-tabs" role="tablist" aria-label="${c.ai.label}">
            ${c.ai.tabs.map(([k, l, d], i) => `<button type="button" role="tab" id="tab-${k}" aria-controls="ba-${k}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}" data-caption="${c.ai.notes[k]}"><span class="n">0${i + 1}</span><span><strong>${l}</strong><small>${d}</small></span></button>`).join('\n            ')}
          </div>
          <div>
            ${c.ai.tabs
              .map(
                ([k], i) => `<div class="ba" id="ba-${k}" role="tabpanel" aria-labelledby="tab-${k}"${i === 0 ? '' : ' hidden'}>
              ${k === 'mask'
                ? `<div class="ba-layer ba-before">${mask[0]}</div><div class="ba-layer ba-after">${mask[1]}</div>`
                : `<div class="ba-layer ba-before"><img src="${img(ctx, `ai-${k}-before.webp`)}" alt="" loading="lazy"></div><div class="ba-layer ba-after${k === 'bg' ? ' checker' : ''}"><img src="${img(ctx, `ai-${k}-after.webp`)}" alt="" loading="lazy"></div>`}
              <span class="ba-label before">${c.ai.before}</span><span class="ba-label after">${c.ai.after}</span>
              <div class="ba-handle" aria-hidden="true"></div>
              <input class="ba-range" type="range" min="0" max="100" value="50" aria-label="${c.ai.slider}">
            </div>`,
              )
              .join('\n            ')}
            <p class="fig-note" aria-live="polite" data-ai-caption>${c.ai.notes.bg}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="formats" style="padding-top:0">
      <div class="wrap">
        ${head(c.formats)}
        <div class="tools">
          <label class="search"><span class="visually-hidden">${c.formats.search}</span>
            ${icon('magnifying-glass')}
            <input type="search" placeholder="${c.formats.search}" data-formats-search autocomplete="off">
          </label>
          <div class="chips" role="group" aria-label="${ko ? '필터' : 'Filter'}">
            ${c.formats.filters.map(([k, l], i) => `<button type="button" data-filter="${k}" aria-pressed="${i === 0}">${l}</button>`).join('')}
          </div>
        </div>
        <div class="table-scroll fixed-h">
          <table data-formats>
            <thead><tr>${c.formats.cols.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
            <tbody>
              ${formatRows}
            </tbody>
          </table>
          <p class="formats-empty" data-formats-empty hidden>${c.formats.empty}</p>
        </div>
        <p class="formats-count" data-formats-count data-template="${c.formats.count}" aria-live="polite"></p>
      </div>
    </section>

    <section class="section" id="privacy" style="padding-top:0">
      <div class="wrap">
        ${head(c.privacy)}
        <div class="privacy-grid">
          ${c.privacy.cards.map(([z, h, p]) => `<div class="zero reveal"><strong>${z}</strong><h3>${h}</h3><p>${p}</p></div>`).join('\n          ')}
        </div>
        <div class="privacy-foot">
          <div class="vs reveal">
            <h3>${c.privacy.vsTitle}</h3>
            <div class="vs-row">
              <div><strong>${c.privacy.vsBad[0]}</strong><ol>${c.privacy.vsBad[1].map((x) => `<li>${x}</li>`).join('')}</ol></div>
              <div class="good"><strong>${c.privacy.vsGood[0]}</strong><ol>${c.privacy.vsGood[1].map((x) => `<li>${x}</li>`).join('')}</ol></div>
            </div>
          </div>
          <figure class="privacy-shot reveal">${shot(ctx, 'settings', c.privacy.settingsAlt)}<figcaption class="fig-note">${c.privacy.settingsNote}</figcaption></figure>
        </div>
      </div>
    </section>

    <section class="section" id="pricing" style="padding-top:0">
      <div class="wrap">
        ${head(c.pricing)}
        <div class="plans">
          ${c.pricing.plans
            .map(
              (p, i) => `<article class="plan reveal${p.featured ? ' featured' : ''}">
            <div class="plan-top"><h3>${p.name}</h3>${p.badge ? `<span class="badge">${p.badge}</span>` : ''}</div>
            <p class="price"><strong${p.word ? ' class="word"' : ''}>${p.price}</strong>${p.was ? `<s>${p.was}</s>` : ''}${p.unit ? `<span>${p.unit}</span>` : ''}</p>
            <p class="plan-note">${p.note}</p>
            <ul>${p.feats.map((f) => `<li>${f}</li>`).join('')}</ul>
            ${btn(storeLink(ctx.lang, 'home-pricing-' + ['free', 'yearly', 'lifetime'][i]), p.cta, p.featured ? 'btn-orange' : 'btn-line')}
          </article>`,
            )
            .join('\n          ')}
        </div>
        <p class="price-foot">${c.pricing.foot}</p>
        <details class="matrix">
          <summary>${c.pricing.matrix}</summary>
          <div class="table-scroll">
            <table>
              <thead><tr>${c.pricing.mcols.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
              <tbody>
                ${c.pricing.mrows.map(([f, a, b]) => `<tr><th scope="row">${f}</th><td class="${a === '—' ? 'no' : ''}">${a}</td><td class="${b === '✓' ? 'yes' : ''}">${b === '✓' ? icon('check') : b}</td></tr>`).join('\n                ')}
              </tbody>
            </table>
          </div>
        </details>
      </div>
    </section>

    <section class="section" id="compare" style="padding-top:0">
      <div class="wrap">
        ${head(c.compare)}
        <div class="table-scroll">
          <table class="compare">
            <thead><tr>${c.compare.cols.map((h, i) => `<th scope="col"${i === 1 ? ' class="us"' : ''}>${h}</th>`).join('')}</tr></thead>
            <tbody>
              ${c.compare.rows.map(([k, a, b, t]) => `<tr><th scope="row">${k}</th><td class="us">${a}</td><td>${b}</td><td>${t}</td></tr>`).join('\n              ')}
            </tbody>
          </table>
        </div>
        <p class="compare-foot">${c.compare.foot}</p>
      </div>
    </section>

    <section class="section" id="faq" style="padding-top:0">
      <div class="wrap faq-layout">
        <div class="side reveal">
          <p class="label">${c.faq.label}</p>
          <h2>${c.faq.h2}</h2>
          <p>${c.faq.side}</p>
        </div>
        <div class="faq">
          ${c.faq.items.map(([q, a]) => `<details><summary>${q}<span class="plus">${icon('plus')}</span></summary><div class="answer"><p>${a}</p></div></details>`).join('\n          ')}
        </div>
      </div>
    </section>

    <section class="wrap">
      <div class="final reveal">
        <div>
          <img class="final-icon" src="${img(ctx, 'app-icon.webp')}" width="96" height="96" alt="${ko ? 'Kumquat 앱 아이콘' : 'Kumquat app icon'}">
          <h2>${c.final.h2}</h2>
          <p>${c.final.p}</p>
          <div class="final-actions">
            ${btn(storeLink(ctx.lang, 'home-final'), c.final.cta)}
            <a class="store-badge-link" href="${storeLink(ctx.lang, 'home-final-badge')}" aria-label="${ko ? 'Mac App Store에서 Kumquat 다운로드' : 'Download Kumquat on the Mac App Store'}"><img class="store-badge" src="${ctx.badge}" width="164" height="46" alt="${ko ? 'Mac App Store에서 다운로드' : 'Download on the Mac App Store'}"></a>
          </div>
          <p class="store-note">${c.final.note}</p>
        </div>
        <ul class="reqs">${c.final.reqs.map((r) => `<li>${r}</li>`).join('')}</ul>
      </div>
    </section>`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Kumquat',
    operatingSystem: 'macOS 12.0 or later',
    applicationCategory: 'UtilitiesApplication',
    description: c.description,
    offers: [
      { '@type': 'Offer', price: '0', priceCurrency: 'USD', name: 'Free' },
      { '@type': 'Offer', price: P.yearly.replace('$', ''), priceCurrency: 'USD', name: 'Pro Yearly' },
      { '@type': 'Offer', price: P.lifetime.replace('$', ''), priceCurrency: 'USD', name: 'Pro Lifetime' },
    ],
  };

  return {
    title: c.title,
    description: c.description,
    head: `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`,
    body,
  };
}
