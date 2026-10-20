import { site, pricing, storeLink } from '../config.mjs';
import { placeholder, storeCta } from '../layout.mjs';
import { formats, kinds } from '../data/formats.mjs';

export const path = '';
export const priority = 1.0;

const P = pricing;

const copy = {
  ko: {
    title: 'Kumquat — 드롭하면, 목적지에 딱 맞게 | Mac 파일 변환',
    description: 'Mac용 파일 변환·최적화 앱. 기본 변환은 횟수 제한 없이 무료, 업로드 용량에 맞춰 자동 규격화, 여러 단계를 묶는 레시피, 온디바이스 AI. 파일은 Mac 밖으로 나가지 않습니다. Intel Mac·macOS 12 지원.',
    hero: {
      eyebrow: 'Mac용 파일 변환 · 출시 준비 중',
      h1: '드롭하면,<br><span class="accent">목적지에 딱 맞게.</span>',
      lede: '파일을 끌다가 <kbd>Shift</kbd>를 한 번. 원하는 형식과 크기로 바로 바뀌고, 홈택스·정부24·메일처럼 올릴 곳의 제한까지 알아서 맞춥니다. 모든 처리는 내 Mac 안에서만.',
      note: '출시 전입니다. 배지 링크는 캠페인 링크 자리표시자입니다.',
      meta: ['기본 변환 무제한 무료', 'Intel · Apple 실리콘', 'macOS 12 이상'],
      video: '앱 녹화 루프 영상 자리 (16:10, 무음 자동 재생)',
      wheelHint: '드래그 중 Shift → 휠에서 놓을 곳 선택',
      ghost: '어떻게 동작하나요',
    },
    wheel: ['JPG', 'PNG', 'PDF', '2 MB 이하', 'WebP', 'HEIC'],
    stats: [
      ['무제한', '기본 변환, 횟수 제한 없이 무료'],
      ['0', '업로드·계정·수집하는 데이터'],
      ['12+', 'macOS Monterey부터 지원'],
      ['Universal', 'Intel과 Apple 실리콘 모두'],
    ],
    demo: {
      eyebrow: '스크롤해 보세요',
      h2: '끌어서, 고르고, 놓으면 끝.',
      p: '변환 메뉴를 찾아 헤매지 않아도 됩니다. 파일이 갈 곳을 알면, 형식과 용량은 Kumquat이 맞춥니다.',
      file: '종합소득세_증빙_스캔.pdf',
      upload: '홈택스 · 증빙서류 첨부',
      uploadSmall: '예시 화면 · 업로드 칸의 허용 형식과 용량 한도를 읽어 옵니다',
      check: '한도 안으로 맞춤',
      tag: '인터랙션 예시 · 실제 앱 녹화로 교체 예정',
      steps: [
        ['파일을 끌기 시작합니다', 'Finder, 메일 첨부, 스크린샷 어디서든. 평소처럼 파일을 끌면 됩니다. 앱을 먼저 열 필요가 없습니다.'],
        ['<kbd>Shift</kbd>를 누르면 휠이 열립니다', '그 파일로 할 수 있는 작업만 커서 둘레에 펼쳐집니다. 자주 쓰는 순으로 정렬되고, 키보드로 “we”만 쳐도 WebP가 골라집니다.'],
        ['업로드 칸에 놓으면, 한도 안으로', '목적지의 허용 형식과 용량 한도에 맞춰 줄이고, 글자가 뭉개지지 않았는지 품질 가드로 한 번 더 확인합니다. 원본은 그대로 남습니다.'],
      ],
    },
    dest: {
      eyebrow: '목적지 인식',
      h2: '어디에 올릴지 알면, 규격은 알아서.',
      p: '커서 아래 앱과 브라우저 업로드 칸을 보고 허용 형식·용량·픽셀 규격을 맞춥니다. 국내 사이트 프리셋은 앱 업데이트 없이 갱신됩니다.',
      note: '아래 이름은 프리셋 대상 예시이며, 각 서비스와 제휴 관계가 없습니다. 실제 한도는 각 사이트의 안내를 기준으로 합니다.',
      items: [
        ['정', '정부24', '증명사진 규격·민원 첨부'],
        ['홈', '홈택스', '증빙서류 PDF 용량 맞춤'],
        ['사', '사람인', '이력서 사진·포트폴리오'],
        ['잡', '잡코리아', '이력서 첨부 파일'],
        ['L', '대학 LMS', '과제 제출 용량·형식'],
        ['스', '스마트스토어', '상품 이미지 규격'],
        ['K', '카카오톡', '보내기 전 사진·영상 최적화'],
        ['M', '메일', '첨부 한도 초과 시 분할 ZIP'],
      ],
    },
    recipe: {
      eyebrow: '레시피',
      h2: '매번 하던 다섯 단계를, 한 번의 드롭으로.',
      p: '리사이즈, 변환, 압축, 메타데이터 제거, 이름 규칙, 이동까지 블록처럼 쌓아 두면 드롭 한 번에 끝납니다. 폴더를 지켜보다가 새 파일이 들어오면 자동으로 실행할 수도 있습니다.',
      bullets: ['폴더 감시: 스크린샷 폴더에 들어오는 순간 자동 처리', '레시피 파일(.kumquatrecipe)로 팀과 공유', '자연어로 “블로그용으로 1600px, WebP, 위치 정보 빼고”'],
      card: '블로그 업로드용',
      chip: 'Pro',
      steps: [['긴 변 1600px로 리사이즈', 'resize'], ['HEIC → WebP', 'convert'], ['500 KB 이하로', 'target'], ['위치 정보·촬영 정보 제거', 'strip'], ['날짜-제목 규칙으로 이름 바꾸기', 'rename'], ['“업로드 대기” 폴더로 이동', 'move']],
      watch: '~/Desktop/스크린샷 폴더 감시 중 · 새 파일 2개 처리됨',
    },
    ai: {
      eyebrow: '온디바이스 AI',
      h2: '사진 한 장도 서버에 보내지 않는 AI.',
      p: 'Apple의 Vision·Core ML로 Mac 안에서만 처리합니다. 인터넷이 끊겨 있어도 동작합니다.',
      tabs: [['bg', '배경 제거'], ['up', '업스케일'], ['mask', '민감정보 마스킹']],
      before: '이전', after: '이후',
      tag: '예시 일러스트 · 실제 결과 이미지로 교체 예정',
      captions: {
        bg: '피사체만 남기고 배경을 투명하게. 증명사진 배경을 흰색으로 바꾸는 데에도 씁니다. (macOS 14 이상, 12–13은 인물 분리)',
        up: '작은 이미지를 2×·4×로 키우면서 경계를 또렷하게. Apple 실리콘에서 가장 빠르고, Intel에서는 시간이 더 걸립니다.',
        mask: '주민등록번호·전화번호·카드번호·이메일을 찾아 가린 사본을 만듭니다. 원본은 건드리지 않습니다.',
      },
      slider: '이전/이후 비교 위치',
    },
    formats: {
      eyebrow: '지원 포맷',
      h2: '찾는 형식이 있나요?',
      p: '출시 계획 기준 목록입니다. Free 포맷은 횟수 제한 없이 변환합니다.',
      search: '포맷 검색 (예: heic, 한글, 자막)',
      filters: [['all', '전체'], ['image', '이미지'], ['audio', '오디오'], ['video', '영상'], ['doc', '문서'], ['free', 'Free'], ['pro', 'Pro']],
      cols: ['포맷', '종류', '바꿀 수 있는 형식', '요금제', '버전'],
      count: '{t}개 중 {n}개 표시',
      empty: '일치하는 포맷이 없습니다. 필요한 형식을 지원 페이지로 알려 주세요.',
    },
    privacy: {
      eyebrow: '프라이버시',
      h2: '파일은 Mac 밖으로 나가지 않습니다.',
      p: '온라인 변환기처럼 서버에 올리지 않습니다. 계정도, 분석 SDK도 없습니다.',
      cards: [
        ['0', '업로드', '변환·압축·AI 모두 Mac 안에서 처리합니다. Kumquat 서버는 존재하지 않습니다.'],
        ['0', '수집하는 데이터', 'App Store 개인정보 라벨 “데이터 수집 안 함”을 목표로 합니다. 분석·광고·크래시 SDK를 넣지 않습니다.'],
        ['0', '계정', '가입이나 로그인이 없습니다. 구매는 Apple ID로 App Store에서만 이루어집니다.'],
      ],
      label: 'App Store 개인정보 라벨 캡처 자리',
      vsTitle: '온라인 변환기와 무엇이 다른가요',
      vsBad: ['온라인 변환기', ['파일을 서버로 업로드', '서버에서 변환', '결과를 다시 다운로드', '보관 기간은 서비스 정책에 따름']],
      vsGood: ['Kumquat', ['Mac 안에서 바로 변환', '원본 옆에 결과 저장', '인터넷 없이도 동작', '완전 오프라인 모드 지원']],
    },
    pricing: {
      eyebrow: '가격',
      h2: '매일 쓰는 변환은 무료. 자동화는 Pro.',
      p: `Pro 기능도 기능별 ${P.proTrialCredits}회씩 무료로 써 볼 수 있습니다.`,
      plans: [
        { name: 'Free', sub: '설치하면 바로. 기간·횟수 제한 없음.', price: '무료', unit: '', note: '영구 무료', cta: 'App Store에서 받기', feats: ['이미지·오디오·영상·문서 기본 변환 무제한', 'Shift-드래그 휠, Finder 빠른 동작, 메뉴바 드롭', '비포/애프터 미리보기, 24시간 기록, 실행 취소', '목표 용량 하루 5회', '한 번에 10개 일괄 처리'] },
        { name: 'Pro 연간', sub: '항상 최신 기능을 쓰고 싶다면.', price: P.yearly, unit: '/ 년', note: `${P.trialDays}일 무료 체험 후 자동 갱신, 언제든 해지`, cta: `${P.trialDays}일 무료 체험`, feats: ['Free의 모든 기능', '목적지 인식, 국내 사이트 프리셋', '레시피 무제한, 폴더 감시', '온디바이스 AI, 민감정보 마스킹', 'HWP/HWPX, Office 팩, 포맷 확장'] },
        { name: 'Pro 평생', sub: '한 번 사서 계속 쓰기.', price: P.lifetimeLaunch, was: P.lifetime, unit: '', note: `출시 할인가 · 정가 ${P.lifetime}. 구매한 메이저 버전의 모든 업데이트 포함`, cta: '평생 이용권 구매', featured: true, badge: '출시 할인', feats: ['Pro 연간의 모든 기능', '구매한 메이저 버전 평생 사용', '다음 메이저 업그레이드 50% 할인', '가족 공유 지원'] },
      ],
      foot: `가격은 미국 App Store 기준(USD) 계획가입니다. 원화 가격은 App Store 국가별 가격표에 따라 정해지며, 구매·해지·환불은 Apple을 통해 처리됩니다. ${site.factsDate} 기준.`,
      matrix: 'Free와 Pro 전체 비교',
      mcols: ['기능', 'Free', 'Pro'],
      mrows: [
        ['기본 변환(이미지·오디오·영상·문서)', '무제한', '무제한'],
        ['일괄 처리', '10개씩', '무제한'],
        ['목표 용량(예: 2 MB 이하)', '하루 5회', '무제한 + 품질 가드'],
        ['기록 · 실행 취소', '24시간', '30일 · 원본 보관함'],
        ['목적지 인식 · 국내 프리셋', `${P.proTrialCredits}회 체험`, '✓'],
        ['레시피 · 폴더 감시', `${P.proTrialCredits}회 체험`, '✓'],
        ['온디바이스 AI(배경 제거·OCR·자막·업스케일)', `${P.proTrialCredits}회 체험`, '✓'],
        ['민감정보 자동 마스킹', `${P.proTrialCredits}회 체험`, '✓'],
        ['HWP/HWPX · 증명사진 메이커', `${P.proTrialCredits}회 체험`, '✓'],
        ['노치 선반 · 클립보드 자동화', '기본 선반 1칸', '✓'],
        ['WebM·MKV·FLAC·AVIF 등 포맷 확장', '—', '✓'],
      ],
    },
    compare: {
      eyebrow: '비교',
      h2: '사실만 놓고 비교했습니다.',
      p: '확인할 수 있는 항목만 적었습니다. 다른 앱의 정보는 아래 날짜에 공개된 버전을 직접 확인한 내용입니다.',
      cols: ['', 'Kumquat (출시 계획)', '온라인 변환기 (일반적인 경우)', 'Tangerine 2.0.2'],
      rows: [
        ['파일 처리 위치', 'Mac 안', '서비스 서버', 'Mac 안'],
        ['무료 범위', '기본 변환 횟수 제한 없음', '서비스마다 다름(횟수·용량 제한이 흔함)', '처음 20회'],
        ['유료 가격', `평생 ${P.lifetime}(출시가 ${P.lifetimeLaunch}) 또는 연 ${P.yearly}`, '서비스마다 다름', '일회성 $29.99'],
        ['Intel Mac', '지원', '브라우저만 있으면 됨', '지원 안 함(Apple 실리콘 전용)'],
        ['최소 macOS', 'macOS 12', '—', 'macOS 13'],
        ['Finder 빠른 동작 · 공유 확장 · 단축어', '1.0부터 제공', '—', '앱 번들에 없음'],
        ['App Store 개인정보 라벨', '“데이터 수집 안 함” 목표', '—', '구매 기록 수집 신고(사용자와 연결 안 됨)'],
        ['목적지 인식 · 국내 사이트 프리셋', '제공(Pro)', '—', '—'],
      ],
      foot: `Tangerine 정보: Mac App Store 설치본 2.0.2(빌드 9)의 Info.plist·개인정보 매니페스트·번들 구성과 App Store 표시 가격을 ${site.factsDate}에 확인. Tangerine은 해당 개발사의 상표이며 Kumquat과 관계가 없습니다. Kumquat 항목은 출시 계획이며 바뀔 수 있습니다.`,
    },
    faq: {
      eyebrow: 'FAQ',
      h2: '자주 묻는 질문',
      items: [
        ['정말 기본 변환이 계속 무료인가요?', '네. 이미지·오디오·영상·문서의 기본 변환은 횟수와 기간 제한 없이 무료입니다. 목적지 인식, 레시피, AI 같은 자동화 기능이 Pro이며, Pro 기능도 기능별로 몇 번씩 무료로 써 볼 수 있습니다.'],
        ['Intel Mac이나 오래된 macOS에서도 되나요?', 'macOS 12 Monterey 이상의 Intel Mac과 Apple 실리콘 Mac 모두 지원합니다. 배경 제거·번역 등 일부 AI 기능은 OS 버전에 따라 단계적으로 켜지며, 지원하지 않는 기능은 메뉴에 나타나지 않습니다.'],
        ['파일이 인터넷으로 전송되나요?', '아니요. 변환과 AI 처리는 모두 Mac 안에서 이루어집니다. 네트워크는 목적지 프리셋 목록을 갱신할 때만 쓰며, 설정에서 완전 오프라인 모드로 끌 수 있습니다. 자세한 내용은 <a href="privacy/">개인정보 처리방침</a>을 보세요.'],
        ['원본 파일이 덮어써지지 않나요?', '원본은 항상 그대로 두고 결과를 옆에 저장합니다. 마지막 작업은 실행 취소할 수 있고, Pro에서는 원본 보관함 보존 기간을 정할 수 있습니다.'],
        ['HWP 파일도 PDF로 바꿀 수 있나요?', 'HWPX와 HWP를 PDF·DOCX로 바꾸는 기능을 Pro로 준비하고 있습니다. 출시 일정은 <a href="changelog/">변경 기록</a>에서 알려 드립니다.'],
        ['구독을 해지하거나 환불받으려면?', '구매와 결제는 App Store에서만 처리합니다. 구독 해지는 시스템 설정 › Apple ID › 미디어 및 구입 항목 › 구독 관리에서, 환불 요청은 Apple의 문제 신고 페이지에서 할 수 있습니다. <a href="support/">지원</a> 페이지에 단계별로 정리했습니다.'],
      ],
    },
    final: {
      h2: '다음 업로드부터는<br>한 번에 맞게.',
      p: '기본 변환은 무료입니다. 설치하고, 파일을 끌다가 Shift를 눌러 보세요.',
      reqs: ['macOS 12 Monterey 이상', 'Intel · Apple 실리콘', '한국어 · 영어', '데이터 수집 안 함'],
    },
  },

  en: {
    title: 'Kumquat — Drop it, and it fits | File converter for Mac',
    description: 'A file converter and optimizer for Mac. Basic conversions are free with no limits. Kumquat fits files to upload limits, chains steps into recipes and runs AI on device. Your files never leave your Mac. Supports Intel Macs and macOS 12.',
    hero: {
      eyebrow: 'File converter for Mac · Coming soon',
      h1: 'Drop it,<br><span class="accent">and it fits.</span>',
      lede: 'Start dragging a file and tap <kbd>Shift</kbd>. It turns into the format and size you need, and fits the limits of wherever you’re dropping it. Everything runs on your Mac.',
      note: 'Not released yet. The badge points to a placeholder campaign link.',
      meta: ['Unlimited free conversions', 'Intel · Apple silicon', 'macOS 12 or later'],
      video: 'App recording loop goes here (16:10, muted autoplay)',
      wheelHint: 'Shift while dragging → pick where to drop',
      ghost: 'See how it works',
    },
    wheel: ['JPG', 'PNG', 'PDF', 'Under 2 MB', 'WebP', 'HEIC'],
    stats: [
      ['Unlimited', 'free basic conversions'],
      ['0', 'uploads, accounts, data collected'],
      ['12+', 'runs on macOS Monterey and later'],
      ['Universal', 'Intel and Apple silicon'],
    ],
    demo: {
      eyebrow: 'Scroll to see it',
      h2: 'Drag, pick, drop. Done.',
      p: 'No hunting through export menus. Once Kumquat knows where a file is going, it takes care of the format and the size.',
      file: 'tax-receipts-scan.pdf',
      upload: 'Tax portal · Attach receipts',
      uploadSmall: 'Example screen · reads the accepted types and size limit from the upload field',
      check: 'Fits the limit',
      tag: 'Interaction sketch · to be replaced with an app recording',
      steps: [
        ['Start dragging a file', 'From Finder, a mail attachment or a screenshot. Drag it the way you always do. There’s no app to open first.'],
        ['Tap <kbd>Shift</kbd> to open the wheel', 'Only the actions that make sense for that file fan out around your cursor, most-used first. Type “we” and WebP is picked.'],
        ['Drop it on the upload field, and it fits', 'Kumquat matches the accepted formats and size limit, then checks with a quality guard that text is still readable. The original stays untouched.'],
      ],
    },
    dest: {
      eyebrow: 'Destination aware',
      h2: 'Know where it’s going, and the specs follow.',
      p: 'Kumquat looks at the app under your cursor and the browser upload field, then matches the allowed formats, file size and pixel dimensions. Presets update without an app update.',
      note: 'Names below are examples of preset targets. Kumquat is not affiliated with any of these services, and each site’s own instructions set the actual limits.',
      items: [
        ['M', 'Mail', 'Split ZIP when over the attachment limit'],
        ['S', 'Slack', 'Images sized for messages'],
        ['K', 'KakaoTalk', 'Optimize photos and video before sending'],
        ['L', 'University LMS', 'Assignment size and format'],
        ['J', 'Job sites', 'Résumé photo and attachments'],
        ['G', 'Government portals', 'ID photo specs, document uploads'],
        ['T', 'Tax portals', 'Receipt PDFs under the limit'],
        ['S', 'Online stores', 'Product image specs'],
      ],
    },
    recipe: {
      eyebrow: 'Recipes',
      h2: 'Five steps you repeat, in one drop.',
      p: 'Stack resize, convert, compress, strip metadata, rename and move like blocks, then run them all with one drop. Or let Kumquat watch a folder and run the recipe when a new file lands.',
      bullets: ['Folder watching: process screenshots the moment they appear', 'Share recipes with your team as .kumquatrecipe files', 'Describe it in plain words: “1600px for the blog, WebP, no location”'],
      card: 'Blog upload',
      chip: 'Pro',
      steps: [['Resize long edge to 1600px', 'resize'], ['HEIC → WebP', 'convert'], ['Under 500 KB', 'target'], ['Remove location and camera data', 'strip'], ['Rename as date-title', 'rename'], ['Move to “Ready to upload”', 'move']],
      watch: 'Watching ~/Desktop/Screenshots · 2 new files processed',
    },
    ai: {
      eyebrow: 'On-device AI',
      h2: 'AI that never sends a single photo to a server.',
      p: 'Built on Apple’s Vision and Core ML, it runs entirely on your Mac and keeps working offline.',
      tabs: [['bg', 'Remove background'], ['up', 'Upscale'], ['mask', 'Redact personal info']],
      before: 'Before', after: 'After',
      tag: 'Illustration · to be replaced with real results',
      captions: {
        bg: 'Keep the subject, drop the background. Also handy for turning an ID photo background white. (macOS 14 or later; people-only on 12–13)',
        up: 'Enlarge small images 2× or 4× with crisp edges. Fastest on Apple silicon, slower on Intel.',
        mask: 'Finds ID numbers, phone numbers, card numbers and email addresses, then makes a redacted copy. The original stays as it was.',
      },
      slider: 'Before/after position',
    },
    formats: {
      eyebrow: 'Formats',
      h2: 'Looking for a format?',
      p: 'This list reflects the launch plan. Free formats convert with no limits.',
      search: 'Search formats (e.g. heic, subtitles)',
      filters: [['all', 'All'], ['image', 'Image'], ['audio', 'Audio'], ['video', 'Video'], ['doc', 'Document'], ['free', 'Free'], ['pro', 'Pro']],
      cols: ['Format', 'Type', 'Converts to', 'Plan', 'Version'],
      count: 'Showing {n} of {t}',
      empty: 'No matching format. Tell us what you need on the support page.',
    },
    privacy: {
      eyebrow: 'Privacy',
      h2: 'Your files never leave your Mac.',
      p: 'Nothing is uploaded the way online converters do it. No account, no analytics SDK.',
      cards: [
        ['0', 'uploads', 'Converting, compressing and AI all run on your Mac. There is no Kumquat server.'],
        ['0', 'data collected', 'We aim for the App Store privacy label “Data Not Collected.” No analytics, ad or crash-reporting SDKs.'],
        ['0', 'accounts', 'No sign-up, no login. Purchases go through your Apple ID on the App Store only.'],
      ],
      label: 'App Store privacy label screenshot goes here',
      vsTitle: 'How it differs from online converters',
      vsBad: ['Online converter', ['Upload your file to a server', 'Convert on the server', 'Download the result', 'Retention depends on the service']],
      vsGood: ['Kumquat', ['Convert right on your Mac', 'Result saved next to the original', 'Works without internet', 'Full offline mode']],
    },
    pricing: {
      eyebrow: 'Pricing',
      h2: 'Everyday conversions are free. Automation is Pro.',
      p: `Every Pro feature includes ${P.proTrialCredits} free tries.`,
      plans: [
        { name: 'Free', sub: 'Ready when installed. No time or usage limits.', price: '$0', unit: '', note: 'Free forever', cta: 'Get it on the App Store', feats: ['Unlimited basic image, audio, video and document conversions', 'Shift-drag wheel, Finder Quick Actions, menu bar drop', 'Before/after preview, 24-hour history, undo', 'Target size 5 times a day', 'Batches of 10 files'] },
        { name: 'Pro Yearly', sub: 'Always on the latest features.', price: P.yearly, unit: '/ year', note: `${P.trialDays}-day free trial, then renews yearly. Cancel anytime.`, cta: `Start ${P.trialDays}-day free trial`, feats: ['Everything in Free', 'Destination awareness and site presets', 'Unlimited recipes and folder watching', 'On-device AI and redaction', 'HWP/HWPX, Office pack, more formats'] },
        { name: 'Pro Lifetime', sub: 'Buy once, keep it.', price: P.lifetimeLaunch, was: P.lifetime, unit: '', note: `Launch price · regularly ${P.lifetime}. Includes every update to the major version you buy.`, cta: 'Buy lifetime', featured: true, badge: 'Launch offer', feats: ['Everything in Pro Yearly', 'Use your major version for life', '50% off the next major upgrade', 'Family Sharing'] },
      ],
      foot: `Planned US App Store prices in USD. Local prices follow Apple’s price tiers for each storefront. Purchases, cancellations and refunds go through Apple. As of ${site.factsDate}.`,
      matrix: 'Compare every Free and Pro feature',
      mcols: ['Feature', 'Free', 'Pro'],
      mrows: [
        ['Basic conversions (image, audio, video, document)', 'Unlimited', 'Unlimited'],
        ['Batch size', '10 at a time', 'Unlimited'],
        ['Target size (e.g. under 2 MB)', '5 a day', 'Unlimited + quality guard'],
        ['History and undo', '24 hours', '30 days + originals vault'],
        ['Destination awareness and presets', `${P.proTrialCredits} tries`, '✓'],
        ['Recipes and folder watching', `${P.proTrialCredits} tries`, '✓'],
        ['On-device AI (background, OCR, subtitles, upscale)', `${P.proTrialCredits} tries`, '✓'],
        ['Automatic redaction', `${P.proTrialCredits} tries`, '✓'],
        ['HWP/HWPX and ID photo maker', `${P.proTrialCredits} tries`, '✓'],
        ['Notch shelf and clipboard automation', 'One basic shelf', '✓'],
        ['More formats: WebM, MKV, FLAC, AVIF and more', '—', '✓'],
      ],
    },
    compare: {
      eyebrow: 'Compare',
      h2: 'A comparison that sticks to facts.',
      p: 'Only checkable items are listed. Information about the other app was checked directly on the public version on the date below.',
      cols: ['', 'Kumquat (launch plan)', 'Online converters (typical)', 'Tangerine 2.0.2'],
      rows: [
        ['Where files are processed', 'On your Mac', 'On the service’s servers', 'On your Mac'],
        ['Free tier', 'Unlimited basic conversions', 'Varies (count and size limits are common)', 'First 20 uses'],
        ['Paid price', `Lifetime ${P.lifetime} (launch ${P.lifetimeLaunch}) or ${P.yearly}/year`, 'Varies', 'One-time $29.99'],
        ['Intel Macs', 'Supported', 'Any browser', 'Not supported (Apple silicon only)'],
        ['Minimum macOS', 'macOS 12', '—', 'macOS 13'],
        ['Finder Quick Actions, Share extension, Shortcuts', 'From 1.0', '—', 'Not in the app bundle'],
        ['App Store privacy label', 'Aiming for “Data Not Collected”', '—', 'Declares purchase history (not linked to you)'],
        ['Destination awareness and site presets', 'Yes (Pro)', '—', '—'],
      ],
      foot: `Tangerine details: checked on ${site.factsDate} from the Mac App Store build 2.0.2 (build 9) — its Info.plist, privacy manifest and bundle contents — and the App Store price. Tangerine is a trademark of its developer and is not affiliated with Kumquat. Kumquat entries are the launch plan and may change.`,
    },
    faq: {
      eyebrow: 'FAQ',
      h2: 'Questions',
      items: [
        ['Are basic conversions really free for good?', 'Yes. Basic image, audio, video and document conversions have no count or time limit. Automation such as destination awareness, recipes and AI is Pro, and you can try each Pro feature a few times for free.'],
        ['Does it run on Intel Macs or older macOS?', 'It supports Intel and Apple silicon Macs on macOS 12 Monterey or later. Some AI features turn on depending on the OS version, and anything your Mac can’t run is hidden from the menus.'],
        ['Are my files sent over the internet?', 'No. Conversion and AI run on your Mac. The network is only used to refresh the list of destination presets, and you can switch to full offline mode in Settings. See the <a href="privacy/">Privacy Policy</a>.'],
        ['Will it overwrite my originals?', 'Never. Originals stay in place and results are saved next to them. You can undo the last action, and Pro lets you choose how long the originals vault keeps copies.'],
        ['Can it convert Korean HWP files?', 'HWPX and HWP to PDF and DOCX are planned for Pro. We’ll announce timing in the <a href="changelog/">changelog</a>.'],
        ['How do I cancel or get a refund?', 'All purchases go through the App Store. Cancel in System Settings › Apple ID › Media & Purchases › Manage Subscriptions, and request refunds through Apple’s Report a Problem page. Step-by-step instructions are on the <a href="support/">support</a> page.'],
      ],
    },
    final: {
      h2: 'Make your next upload<br>fit the first time.',
      p: 'Basic conversions are free. Install it, start dragging a file and tap Shift.',
      reqs: ['macOS 12 Monterey or later', 'Intel · Apple silicon', 'English · Korean', 'Data Not Collected'],
    },
  },
};

function wheelSvg(labels, { hot = 3, file = 'scan.pdf', size = '8.4 MB', hotAttr = false } = {}) {
  const cx = 200, cy = 200, r1 = 92, r2 = 186;
  const n = labels.length;
  const gap = 0.035;
  const slices = labels.map((label, i) => {
    const a0 = (i / n) * Math.PI * 2 - Math.PI / 2 + gap;
    const a1 = ((i + 1) / n) * Math.PI * 2 - Math.PI / 2 - gap;
    const p = (r, a) => `${(cx + r * Math.cos(a)).toFixed(1)} ${(cy + r * Math.sin(a)).toFixed(1)}`;
    const d = `M${p(r1, a0)} L${p(r2, a0)} A${r2} ${r2} 0 0 1 ${p(r2, a1)} L${p(r1, a1)} A${r1} ${r1} 0 0 0 ${p(r1, a0)}Z`;
    const am = (a0 + a1) / 2;
    const lr = (r1 + r2) / 2;
    const isHot = i === hot;
    const attr = isHot && hotAttr ? ' data-hot' : '';
    return `<path class="wheel-slice${isHot && !hotAttr ? ' is-hot' : ''}"${attr} d="${d}"/><text class="wheel-label${isHot && !hotAttr ? ' is-hot' : ''}"${attr} x="${(cx + lr * Math.cos(am)).toFixed(1)}" y="${(cy + lr * Math.sin(am)).toFixed(1)}">${label}</text>`;
  });
  return `<svg viewBox="0 0 400 400" aria-hidden="true">
              <circle class="wheel-ring" cx="200" cy="200" r="190" opacity=".5"/>
              ${slices.join('\n              ')}
              ${file ? `<g class="wheel-file"><rect x="152" y="160" width="96" height="80" rx="14"/><text x="200" y="196">${file}</text><text class="size" x="200" y="216">${size}</text></g>` : ''}
            </svg>`;
}

function aiIllustrations() {
  // Original vector illustrations. Fake sample data only.
  const person = (fill) => `<g fill="${fill}"><circle cx="400" cy="215" r="58"/><rect x="382" y="262" width="36" height="40" rx="12"/><path d="M276 500c6-104 56-200 124-200s118 96 124 200z"/></g>`;
  const checker = `<defs><pattern id="chk" width="28" height="28" patternUnits="userSpaceOnUse"><rect width="28" height="28" fill="#f2efe9"/><rect width="14" height="14" fill="#dcd6cc"/><rect x="14" y="14" width="14" height="14" fill="#dcd6cc"/></pattern><linearGradient id="sky" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7fb2d9"/><stop offset=".6" stop-color="#e9b98c"/><stop offset="1" stop-color="#c46c3c"/></linearGradient><linearGradient id="skin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a2b22"/><stop offset="1" stop-color="#1f1712"/></linearGradient></defs>`;
  const bgBefore = `<svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">${checker}<rect width="800" height="500" fill="url(#sky)"/><circle cx="640" cy="120" r="46" fill="#fff3d6" opacity=".8"/><path d="M0 380l140-90 120 60 160-120 180 110 200-70v230H0z" fill="#5b6e4e" opacity=".75"/>${person('url(#skin)')}</svg>`;
  const bgAfter = `<svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">${checker}<rect width="800" height="500" fill="url(#chk)"/>${person('url(#skin)')}</svg>`;
  const scene = (blur) => `<svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice"><defs><filter id="px${blur}"><feGaussianBlur stdDeviation="${blur}"/></filter><linearGradient id="dusk${blur}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2b2350"/><stop offset=".55" stop-color="#e2765a"/><stop offset="1" stop-color="#f6c48a"/></linearGradient></defs><g filter="url(#px${blur})"><rect width="800" height="500" fill="url(#dusk${blur})"/><circle cx="400" cy="300" r="70" fill="#ffe1a8"/><path d="M0 360l120-70 90 40 150-110 140 90 120-60 180 100v150H0z" fill="#3b2c4a"/><path d="M0 420l160-50 140 30 180-70 160 50 160-30v150H0z" fill="#211a30"/>${Array.from({ length: 22 }, (_, i) => `<circle cx="${(i * 37 + 20) % 800}" cy="${(i * 53) % 160 + 20}" r="${(i % 3) + 1}" fill="#fff" opacity=".8"/>`).join('')}</g></svg>`;
  const docLines = (masked) => {
    const rows = [
      ['성명 / Name', '홍길동', false],
      ['주민등록번호 / ID No.', masked ? '██████-███████' : '900101-1234567', true],
      ['연락처 / Phone', masked ? '010-████-████' : '010-1234-5678', true],
      ['이메일 / Email', masked ? '█████@█████.com' : 'gildong@example.com', true],
      ['주소 / Address', '서울시 예시구 예시로 12', false],
    ];
    return `<svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice"><rect width="800" height="500" fill="#e9e4dc"/><rect x="110" y="40" width="580" height="440" rx="10" fill="#fffdf9" stroke="#d8d0c4"/><text x="150" y="96" font-family="-apple-system, sans-serif" font-size="22" font-weight="700" fill="#1b1712">신청서 / Application (sample)</text><rect x="150" y="114" width="500" height="2" fill="#e8590c"/>${rows
      .map(([k, v, s], i) => `<text x="150" y="${178 + i * 62}" font-family="-apple-system, sans-serif" font-size="14" fill="#857b6f">${k}</text><text x="410" y="${178 + i * 62}" font-family="ui-monospace, Menlo, monospace" font-size="18" fill="#1b1712">${v}</text>${masked && s ? `<rect x="402" y="${157 + i * 62}" width="${v.length * 10.9 + 16}" height="30" rx="5" fill="none" stroke="#e8590c" stroke-width="1.5"/>` : ''}<rect x="150" y="${198 + i * 62}" width="500" height="1" fill="#eee7dd"/>`)
      .join('')}</svg>`;
  };
  return {
    bg: [bgBefore, bgAfter],
    up: [scene(6), scene(0)],
    mask: [docLines(false), docLines(true)],
  };
}

export function render(ctx) {
  const c = copy[ctx.lang];
  const ko = ctx.lang === 'ko';
  const ill = aiIllustrations();
  const enTo = (s) => (ko ? s : s.replace('병합', 'merge').replace('분할', 'split').replace('목표 용량', 'target size').replace(/\(오디오 추출\)/g, ' (audio only)').replace('이미지', 'images'));

  const formatRows = formats
    .map((f) => {
      const kind = kinds[f.kind][ctx.lang];
      const search = [f.fmt, kind, f.to, f.alias, f.plan].join(' ').toLowerCase();
      return `<tr data-kind="${f.kind}" data-plan="${f.plan}" data-search="${search}"><th scope="row">${f.fmt}</th><td>${kind}</td><td>${enTo(f.to)}</td><td><span class="pill ${f.plan === 'free' ? 'free' : ''}">${f.plan === 'free' ? 'Free' : 'Pro'}</span></td><td class="mono">${f.release}</td></tr>`;
    })
    .join('\n                ');

  const body = `
    <section class="hero">
      <div class="wrap">
        <p class="eyebrow">${c.hero.eyebrow}</p>
        <h1>${c.hero.h1}</h1>
        <p class="lede">${c.hero.lede}</p>
        <div class="hero-actions">
          ${storeCta(ctx, 'home-hero')}
          <a class="button button-ghost" href="#demo">${c.hero.ghost}</a>
        </div>
        <p class="hero-meta">${c.hero.meta.map((m) => `<span>${m}</span>`).join('')}</p>
        <p class="store-note">${c.hero.note}</p>
        <div class="window reveal">
          <div class="window-bar"><i></i><i></i><i></i><span class="window-title">Kumquat</span></div>
          ${placeholder(c.hero.video, '16 / 10', `<div class="wheel-art">${wheelSvg(c.wheel, { file: ko ? '스캔.pdf' : 'scan.pdf' })}<p class="wheel-hint">${c.hero.wheelHint}</p></div>`)}
        </div>
      </div>
    </section>

    <section aria-label="${ko ? '요약' : 'At a glance'}">
      <div class="wrap">
        <div class="stats">
          ${c.stats.map(([n, l]) => `<div class="stat"><strong>${n}</strong><span>${l}</span></div>`).join('\n          ')}
        </div>
      </div>
    </section>

    <section class="section" id="demo">
      <div class="wrap" id="features">
        <div class="section-head">
          <p class="eyebrow">${c.demo.eyebrow}</p>
          <h2>${c.demo.h2}</h2>
          <p>${c.demo.p}</p>
        </div>
        <div class="scrolly">
          <div class="scrolly-steps">
            ${c.demo.steps.map(([h, p], i) => `<div class="scrolly-step${i === 0 ? ' is-active' : ''}" data-step="${i + 1}"><p class="num">0${i + 1}</p><h3>${h}</h3><p>${p}</p></div>`).join('\n            ')}
          </div>
          <div class="scrolly-stage">
            <div class="stage" data-step="1" data-from="8.4" data-to="1.8">
              <span class="placeholder-tag">${c.demo.tag}</span>
              <div class="stage-wheel">${wheelSvg(c.wheel, { file: '', hotAttr: true })}</div>
              <div class="stage-file">
                <div class="doc-icon">PDF</div>
                <strong>${c.demo.file}</strong>
                <div class="stage-size"><b data-size>8.4</b> MB</div>
                <div class="stage-bar"><i></i></div>
              </div>
              <div class="stage-upload">
                <span class="check">✓ ${c.demo.check}</span>
                <strong>${c.demo.upload}</strong>
                <small>${c.demo.uploadSmall}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-tint" id="destinations">
      <div class="wrap">
        <div class="section-head reveal">
          <p class="eyebrow">${c.dest.eyebrow} <span class="pill">Pro</span></p>
          <h2>${c.dest.h2}</h2>
          <p>${c.dest.p}</p>
        </div>
        <div class="dest-grid">
          ${c.dest.items.map(([m, n, s]) => `<div class="dest reveal"><span class="dest-mark" aria-hidden="true">${m}</span><strong>${n}</strong><span>${s}</span></div>`).join('\n          ')}
        </div>
        <p class="dest-note">${c.dest.note}${ko ? ` <a href="guides/">목적지별 가이드 보기 →</a>` : ''}</p>
      </div>
    </section>

    <section class="section" id="recipes">
      <div class="wrap split">
        <div class="reveal">
          <p class="eyebrow">${c.recipe.eyebrow}</p>
          <h2>${c.recipe.h2}</h2>
          <p>${c.recipe.p}</p>
          <ul class="checks">${c.recipe.bullets.map((b) => `<li>${b}</li>`).join('')}</ul>
        </div>
        <div class="recipe">
          <div class="recipe-head"><strong>🍊 ${c.recipe.card}</strong><span class="pill">${c.recipe.chip}</span></div>
          <ol class="recipe-steps">
            ${c.recipe.steps.map(([t, k], i) => `<li style="--i:${i}">${t}<em>${k}</em></li>`).join('\n            ')}
          </ol>
          <div class="recipe-watch"><span class="dot" aria-hidden="true"></span>${c.recipe.watch}</div>
        </div>
      </div>
    </section>

    <section class="section section-tint" id="ai">
      <div class="wrap">
        <div class="section-head reveal">
          <p class="eyebrow">${c.ai.eyebrow} <span class="pill">Pro</span></p>
          <h2>${c.ai.h2}</h2>
          <p>${c.ai.p}</p>
        </div>
        <div class="ai-tabs" role="tablist" aria-label="${c.ai.eyebrow}">
          ${c.ai.tabs.map(([k, l], i) => `<button type="button" role="tab" id="tab-${k}" aria-controls="ba-${k}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}" data-caption="${c.ai.captions[k]}">${l}</button>`).join('\n          ')}
        </div>
        ${c.ai.tabs
          .map(
            ([k], i) => `<div class="ba" id="ba-${k}" role="tabpanel" aria-labelledby="tab-${k}"${i === 0 ? '' : ' hidden'}>
          <span class="placeholder-tag">${c.ai.tag}</span>
          <div class="ba-layer ba-before">${ill[k][0]}</div>
          <div class="ba-layer ba-after">${ill[k][1]}</div>
          <span class="ba-label before">${c.ai.before}</span><span class="ba-label after">${c.ai.after}</span>
          <div class="ba-handle" aria-hidden="true"></div>
          <input class="ba-range" type="range" min="0" max="100" value="50" aria-label="${c.ai.slider}">
        </div>`,
          )
          .join('\n        ')}
        <p class="ai-caption" aria-live="polite" data-ai-caption>${c.ai.captions.bg}</p>
      </div>
    </section>

    <section class="section" id="formats">
      <div class="wrap">
        <div class="section-head reveal">
          <p class="eyebrow">${c.formats.eyebrow}</p>
          <h2>${c.formats.h2}</h2>
          <p>${c.formats.p}</p>
        </div>
        <div class="formats-tools">
          <label class="search"><span class="visually-hidden">${c.formats.search}</span>
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="M20 20l-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            <input type="search" placeholder="${c.formats.search}" data-formats-search autocomplete="off">
          </label>
          <div class="chips" role="group" aria-label="${ko ? '필터' : 'Filter'}">
            ${c.formats.filters.map(([k, l], i) => `<button type="button" data-filter="${k}" aria-pressed="${i === 0}">${l}</button>`).join('')}
          </div>
        </div>
        <div class="table-wrap fixed-h">
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

    <section class="section section-tint" id="privacy">
      <div class="wrap">
        <div class="section-head reveal">
          <p class="eyebrow">${c.privacy.eyebrow}</p>
          <h2>${c.privacy.h2}</h2>
          <p>${c.privacy.p}</p>
        </div>
        <div class="privacy-grid">
          ${c.privacy.cards.map(([z, h, p]) => `<div class="zero-card reveal"><div class="zero">${z}</div><h3>${h}</h3><p>${p}</p></div>`).join('\n          ')}
        </div>
        <div class="privacy-row">
          <div class="vs reveal">
            <h3>${c.privacy.vsTitle}</h3>
            <div class="vs-row">
              <div class="vs-col"><strong>${c.privacy.vsBad[0]}</strong><ol>${c.privacy.vsBad[1].map((x) => `<li>${x}</li>`).join('')}</ol></div>
              <div class="vs-col good"><strong>${c.privacy.vsGood[0]}</strong><ol>${c.privacy.vsGood[1].map((x) => `<li>${x}</li>`).join('')}</ol></div>
            </div>
          </div>
          ${placeholder(c.privacy.label, 'auto')}
        </div>
      </div>
    </section>

    <section class="section" id="pricing">
      <div class="wrap">
        <div class="section-head reveal">
          <p class="eyebrow">${c.pricing.eyebrow}</p>
          <h2>${c.pricing.h2}</h2>
          <p>${c.pricing.p}</p>
        </div>
        <div class="price-grid">
          ${c.pricing.plans
            .map(
              (p, i) => `<div class="plan reveal${p.featured ? ' featured' : ''}">
            ${p.badge ? `<span class="pill plan-badge">${p.badge}</span>` : ''}
            <h3>${p.name}</h3>
            <p class="plan-sub">${p.sub}</p>
            <p class="price"><strong>${p.price}</strong>${p.was ? `<s>${p.was}</s>` : ''}${p.unit ? `<span>${p.unit}</span>` : ''}</p>
            <p class="price-note">${p.note}</p>
            <ul>${p.feats.map((f) => `<li>${f}</li>`).join('')}</ul>
            <a class="button ${p.featured ? 'button-accent' : i === 0 ? 'button-ghost' : ''}" href="${storeLink(ctx.lang, 'home-pricing-' + ['free', 'yearly', 'lifetime'][i])}">${p.cta}</a>
          </div>`,
            )
            .join('\n          ')}
        </div>
        <p class="price-foot">${c.pricing.foot}</p>
        <details class="matrix">
          <summary>${c.pricing.matrix}</summary>
          <div class="table-wrap">
            <table>
              <thead><tr>${c.pricing.mcols.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
              <tbody>
                ${c.pricing.mrows.map(([f, a, b]) => `<tr><th scope="row">${f}</th><td class="${a === '—' ? 'no' : ''}">${a}</td><td class="${b === '✓' ? 'yes' : ''}">${b}</td></tr>`).join('\n                ')}
              </tbody>
            </table>
          </div>
        </details>
      </div>
    </section>

    <section class="section section-tint" id="compare">
      <div class="wrap">
        <div class="section-head reveal">
          <p class="eyebrow">${c.compare.eyebrow}</p>
          <h2>${c.compare.h2}</h2>
          <p>${c.compare.p}</p>
        </div>
        <div class="table-wrap">
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

    <section class="section" id="faq">
      <div class="wrap">
        <div class="section-head reveal">
          <p class="eyebrow">${c.faq.eyebrow}</p>
          <h2>${c.faq.h2}</h2>
        </div>
        <div class="faq">
          ${c.faq.items.map(([q, a]) => `<details><summary>${q}</summary><div class="answer"><p>${a}</p></div></details>`).join('\n          ')}
        </div>
      </div>
    </section>

    <section class="wrap">
      <div class="final reveal">
        <h2>${c.final.h2}</h2>
        <p>${c.final.p}</p>
        ${storeCta(ctx, 'home-final')}
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
