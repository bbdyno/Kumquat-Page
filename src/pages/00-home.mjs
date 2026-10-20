import { site, pricing, storeLink } from '../config.mjs';
import { placeholder, storeCta, btn, arrowSvg } from '../layout.mjs';
import { formats, kinds } from '../data/formats.mjs';
import { aiIllustrations } from '../data/illustrations.mjs';

export const path = '';
export const priority = 1.0;

const P = pricing;

const copy = {
  ko: {
    title: 'Kumquat — 드롭하면, 목적지에 딱 맞게 | Mac 파일 변환',
    description: 'Mac용 파일 변환·최적화 앱. 기본 변환은 횟수 제한 없이 무료, 업로드 용량에 맞춰 자동 규격화, 여러 단계를 묶는 레시피, 온디바이스 AI. 파일은 Mac 밖으로 나가지 않습니다. Intel Mac·macOS 12 지원.',
    hero: {
      label: 'Mac 파일 변환 · 출시 준비 중',
      h1: '드롭하면,<br><em>목적지에</em> 딱 맞게.',
      lede: '파일을 끌다가 <kbd>Shift</kbd>를 한 번. 원하는 형식과 크기로 바로 바뀌고, <span class="nowrap">홈택스·정부24·메일</span>처럼 올릴 곳의 제한까지 알아서 맞춥니다. 모든 처리는 내 Mac 안에서만.',
      cta: 'App Store에서 받기',
      more: '작동 방식 보기',
      note: '출시 전입니다. App Store 링크는 캠페인 링크 자리표시자입니다.',
      chipTitle: '증빙_스캔.pdf',
      chipSub: '8.4 MB → 1.8 MB',
      shift: '드래그 중',
      tag: '앱 녹화 영상 자리 · 16:10',
    },
    slice: ['JPG', 'PNG', 'PDF', '2MB 이하', 'WebP', 'HEIC'],
    band: [
      ['∞', '기본 변환', '횟수·기간 제한 없이 무료'],
      ['0', '업로드·수집', '서버도, 계정도, 분석 SDK도 없음'],
      ['12+', 'macOS Monterey부터', 'Intel과 Apple 실리콘 모두'],
      [`${P.proTrialCredits}회`, 'Pro 기능 체험', '기능마다 무료로 써 보기'],
    ],
    how: {
      label: '작동 방식',
      h2: '끌어서, 고르고, <em>놓으면</em> 끝.',
      p: '변환 메뉴를 찾아 헤매지 않아도 됩니다. 파일이 갈 곳을 알면, 형식과 용량은 Kumquat이 맞춥니다.',
      file: '종합소득세_증빙_스캔.pdf',
      drop: '홈택스 · 증빙서류 첨부',
      dropSmall: '예시 화면 · 업로드 칸의 허용 형식과 용량 한도를 읽어 옵니다',
      ok: '✓ 한도 안으로',
      tag: '인터랙션 예시 · 앱 녹화로 교체 예정',
      steps: [
        ['파일을 끌기 시작합니다', 'Finder, 메일 첨부, 스크린샷 어디서든. 평소처럼 끌면 됩니다. 앱을 먼저 열 필요가 없습니다.'],
        ['<kbd>Shift</kbd>를 누르면 휠이 열립니다', '그 파일로 할 수 있는 작업만 커서 둘레에 펼쳐집니다. 자주 쓰는 순서대로, 키보드로 “we”만 쳐도 WebP가 골라집니다.'],
        ['업로드 칸에 놓으면, 한도 안으로', '허용 형식과 용량 한도에 맞춰 줄이고, 글자가 뭉개지지 않았는지 품질 가드로 한 번 더 확인합니다. 원본은 그대로 남습니다.'],
      ],
    },
    features: {
      label: '기능',
      h2: '변환은 무료로.<br>번거로움은 <em>Pro</em>가.',
      p: '매일 하는 변환은 횟수 제한 없이 무료입니다. 반복 작업을 없애는 자동화가 Pro입니다.',
      dest: {
        tag: 'Pro',
        h3: '어디에 올릴지 알면, 규격은 알아서',
        p: '커서 아래 앱과 브라우저 업로드 칸을 보고 형식·용량·픽셀 규격을 맞춥니다. 국내 사이트 프리셋은 앱 업데이트 없이 갱신됩니다.',
        list: [['정부24', '증명사진 규격 · 민원 첨부', true], ['홈택스', '증빙서류 PDF 용량', true], ['사람인 · 잡코리아', '이력서 사진 · 첨부 파일'], ['대학 LMS', '과제 제출 형식'], ['카카오톡 · 메일', '보내기 전 최적화, 한도 초과 시 분할']],
      },
      recipe: {
        tag: 'Pro',
        h3: '다섯 단계를 한 번의 드롭으로',
        p: '블록처럼 쌓아 두면 드롭 한 번에 끝. 폴더를 지켜보다 자동으로 실행합니다.',
        steps: ['긴 변 1600px', 'HEIC → WebP', '500 KB 이하', '위치 정보 제거', '날짜-제목으로 이름 변경'],
        watch: '스크린샷 폴더 감시 중',
      },
      privacy: { tag: '무료', zero: '0', h3: '업로드도, 수집도 없음', p: '모든 처리가 Mac 안에서. App Store 라벨 “데이터 수집 안 함” 기준.' },
      hwp: { tag: 'Pro', mark: 'HWP<span>→</span>PDF', h3: '한국 특화', p: 'HWP·HWPX 변환, 국내 사이트 프리셋, 증명사진 메이커.' },
      cta: { h3: `Pro 기능마다 ${P.proTrialCredits}회 무료`, p: '구매 전에 충분히 써 보세요.' },
      note: '목적지 이름은 프리셋 대상 예시이며 각 서비스와 제휴 관계가 없습니다. 실제 한도는 각 사이트 안내를 기준으로 합니다.',
    },
    ai: {
      label: '온디바이스 AI',
      h2: '사진 한 장도 서버로 <em>보내지 않는</em> AI.',
      p: 'Apple의 Vision·Core ML로 Mac 안에서만 처리합니다. 인터넷이 끊겨 있어도 동작합니다.',
      tabs: [
        ['bg', '배경 제거', '피사체만 남기고 배경을 투명하게. 증명사진 배경을 흰색으로 바꾸는 데에도 씁니다. macOS 14 이상(12–13은 인물 분리).'],
        ['up', '업스케일', '작은 이미지를 2×·4×로 키우면서 경계를 또렷하게. Apple 실리콘에서 가장 빠르고, Intel에서는 시간이 더 걸립니다.'],
        ['mask', '민감정보 마스킹', '주민등록번호·전화번호·카드번호·이메일을 찾아 가린 사본을 만듭니다. 원본은 건드리지 않습니다.'],
      ],
      before: '이전', after: '이후',
      tag: '예시 일러스트 · 실제 결과로 교체 예정',
      slider: '이전/이후 비교 위치',
    },
    formats: {
      label: '지원 포맷',
      h2: '찾는 형식이 있나요?',
      p: '출시 계획 기준 목록입니다. Free 포맷은 횟수 제한 없이 변환합니다.',
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
      label2: 'App Store 개인정보 라벨 캡처 자리',
      vsTitle: '온라인 변환기와 무엇이 다른가요',
      vsBad: ['온라인 변환기', ['파일을 서버로 업로드', '서버에서 변환', '결과를 다시 다운로드', '보관 기간은 서비스 정책에 따름']],
      vsGood: ['Kumquat', ['Mac 안에서 바로 변환', '원본 옆에 결과 저장', '인터넷 없이도 동작', '완전 오프라인 모드']],
    },
    pricing: {
      label: '가격',
      h2: '매일 쓰는 변환은 <em>무료.</em>',
      p: `자동화가 필요해지면 Pro로. Pro 기능도 기능별 ${P.proTrialCredits}회씩 무료로 써 볼 수 있습니다.`,
      plans: [
        { name: 'Free', price: '무료', word: true, note: '설치하면 바로. 기간·횟수 제한 없음.', cta: 'App Store에서 받기', feats: ['이미지·오디오·영상·문서 기본 변환 무제한', 'Shift-드래그 휠, Finder 빠른 동작, 메뉴바 드롭', '비포/애프터 미리보기, 24시간 기록, 실행 취소', '목표 용량 하루 5회', '한 번에 10개 일괄 처리'] },
        { name: 'Pro 연간', price: P.yearly, unit: '/ 년', note: `${P.trialDays}일 무료 체험 후 자동 갱신. 언제든 해지할 수 있습니다.`, cta: `${P.trialDays}일 무료 체험`, feats: ['Free의 모든 기능', '목적지 인식, 국내 사이트 프리셋', '레시피 무제한, 폴더 감시', '온디바이스 AI, 민감정보 마스킹', 'HWP/HWPX, Office 팩, 포맷 확장'] },
        { name: 'Pro 평생', price: P.lifetimeLaunch, was: P.lifetime, note: `출시 할인가. 구매한 메이저 버전의 모든 업데이트 포함.`, cta: '평생 이용권 구매', featured: true, badge: '출시 할인', feats: ['Pro 연간의 모든 기능', '구매한 메이저 버전 평생 사용', '다음 메이저 업그레이드 50% 할인', '가족 공유 지원'] },
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
      label: '비교',
      h2: '사실만 놓고 비교했습니다.',
      p: '확인할 수 있는 항목만 적었습니다. 다른 앱 정보는 아래 날짜에 공개 버전을 직접 확인한 내용입니다.',
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
      label: 'FAQ',
      h2: '자주 묻는 질문',
      side: '여기 없는 질문은 <a href="support/">지원 페이지</a>에서 찾거나 메일로 보내 주세요.',
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
      cta: 'App Store에서 받기',
      note: '출시 전 · 캠페인 링크 자리표시자',
      reqs: ['macOS 12 Monterey 이상', 'Intel · Apple 실리콘', '한국어 · 영어', '데이터 수집 안 함'],
    },
  },

  en: {
    title: 'Kumquat — Drop it, and it fits | File converter for Mac',
    description: 'A file converter and optimizer for Mac. Basic conversions are free with no limits. Kumquat fits files to upload limits, chains steps into recipes and runs AI on device. Your files never leave your Mac. Supports Intel Macs and macOS 12.',
    hero: {
      label: 'File converter for Mac · Coming soon',
      h1: 'Drop it,<br>and it <em>fits.</em>',
      lede: 'Start dragging a file and tap <kbd>Shift</kbd>. It turns into the format and size you need, and fits the limits of wherever you’re dropping it. Everything runs on your Mac.',
      cta: 'Get it on the App Store',
      more: 'See how it works',
      note: 'Not released yet. The App Store link is a placeholder campaign link.',
      chipTitle: 'receipts-scan.pdf',
      chipSub: '8.4 MB → 1.8 MB',
      shift: 'while dragging',
      tag: 'App recording goes here · 16:10',
    },
    slice: ['JPG', 'PNG', 'PDF', 'Under 2MB', 'WebP', 'HEIC'],
    band: [
      ['∞', 'Basic conversions', 'Free, with no count or time limit'],
      ['0', 'Uploads & data', 'No server, no account, no analytics'],
      ['12+', 'macOS Monterey and up', 'Intel and Apple silicon'],
      [`${P.proTrialCredits}×`, 'Pro feature tries', 'Try each one free first'],
    ],
    how: {
      label: 'How it works',
      h2: 'Drag, pick, <em>drop.</em> Done.',
      p: 'No hunting through export menus. Once Kumquat knows where a file is going, it takes care of the format and the size.',
      file: 'tax-receipts-scan.pdf',
      drop: 'Tax portal · Attach receipts',
      dropSmall: 'Example screen · reads the accepted types and size limit from the upload field',
      ok: '✓ Fits the limit',
      tag: 'Interaction sketch · to be replaced with a recording',
      steps: [
        ['Start dragging a file', 'From Finder, a mail attachment or a screenshot. Drag it the way you always do. There’s no app to open first.'],
        ['Tap <kbd>Shift</kbd> to open the wheel', 'Only the actions that make sense for that file fan out around your cursor, most-used first. Type “we” and WebP is picked.'],
        ['Drop it on the upload field, and it fits', 'Kumquat matches the accepted formats and size limit, then checks with a quality guard that text is still readable. The original stays untouched.'],
      ],
    },
    features: {
      label: 'Features',
      h2: 'Converting is free.<br>The busywork is <em>Pro.</em>',
      p: 'The conversions you do every day are free with no limits. Pro is the automation that removes repeat work.',
      dest: {
        tag: 'Pro',
        h3: 'Know where it’s going, and the specs follow',
        p: 'Kumquat reads the app under your cursor and the browser upload field, then matches formats, file size and pixel dimensions. Presets update without an app update.',
        list: [['Mail', 'Split ZIP over the attachment limit', true], ['Slack · KakaoTalk', 'Optimize before sending', true], ['Job sites', 'Résumé photo and attachments'], ['University LMS', 'Assignment formats'], ['Government & tax portals', 'ID photo specs, receipt PDFs']],
      },
      recipe: {
        tag: 'Pro',
        h3: 'Five steps, one drop',
        p: 'Stack steps like blocks and run them with one drop, or let a watched folder run them for you.',
        steps: ['Long edge 1600px', 'HEIC → WebP', 'Under 500 KB', 'Strip location data', 'Rename date-title'],
        watch: 'Watching Screenshots folder',
      },
      privacy: { tag: 'Free', zero: '0', h3: 'No uploads, no data collected', p: 'Everything runs on your Mac. Built for the “Data Not Collected” App Store label.' },
      hwp: { tag: 'Pro', mark: 'HWP<span>→</span>PDF', h3: 'Korea-ready', p: 'HWP and HWPX conversion, Korean site presets, an ID photo maker.' },
      cta: { h3: `${P.proTrialCredits} free tries of every Pro feature`, p: 'Try it properly before you buy.' },
      note: 'Destination names are examples of preset targets. Kumquat is not affiliated with these services, and each site’s own instructions set the actual limits.',
    },
    ai: {
      label: 'On-device AI',
      h2: 'AI that never sends <em>a single photo</em> to a server.',
      p: 'Built on Apple’s Vision and Core ML, it runs entirely on your Mac and keeps working offline.',
      tabs: [
        ['bg', 'Remove background', 'Keep the subject, drop the background. Also handy for turning an ID photo background white. macOS 14 or later (people-only on 12–13).'],
        ['up', 'Upscale', 'Enlarge small images 2× or 4× with crisp edges. Fastest on Apple silicon, slower on Intel.'],
        ['mask', 'Redact personal info', 'Finds ID numbers, phone numbers, card numbers and emails, then makes a redacted copy. The original stays as it was.'],
      ],
      before: 'Before', after: 'After',
      tag: 'Illustration · to be replaced with real results',
      slider: 'Before/after position',
    },
    formats: {
      label: 'Formats',
      h2: 'Looking for a format?',
      p: 'This list reflects the launch plan. Free formats convert with no limits.',
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
      label2: 'App Store privacy label screenshot goes here',
      vsTitle: 'How it differs from online converters',
      vsBad: ['Online converter', ['Upload your file to a server', 'Convert on the server', 'Download the result', 'Retention depends on the service']],
      vsGood: ['Kumquat', ['Convert right on your Mac', 'Result saved next to the original', 'Works without internet', 'Full offline mode']],
    },
    pricing: {
      label: 'Pricing',
      h2: 'Everyday conversions are <em>free.</em>',
      p: `Go Pro when you want automation. Every Pro feature includes ${P.proTrialCredits} free tries.`,
      plans: [
        { name: 'Free', price: '$0', note: 'Ready when installed. No time or usage limits.', cta: 'Get it on the App Store', feats: ['Unlimited basic image, audio, video and document conversions', 'Shift-drag wheel, Finder Quick Actions, menu bar drop', 'Before/after preview, 24-hour history, undo', 'Target size 5 times a day', 'Batches of 10 files'] },
        { name: 'Pro Yearly', price: P.yearly, unit: '/ year', note: `${P.trialDays}-day free trial, then renews yearly. Cancel anytime.`, cta: `Start ${P.trialDays}-day free trial`, feats: ['Everything in Free', 'Destination awareness and site presets', 'Unlimited recipes and folder watching', 'On-device AI and redaction', 'HWP/HWPX, Office pack, more formats'] },
        { name: 'Pro Lifetime', price: P.lifetimeLaunch, was: P.lifetime, note: 'Launch price. Includes every update to the major version you buy.', cta: 'Buy lifetime', featured: true, badge: 'Launch offer', feats: ['Everything in Pro Yearly', 'Use your major version for life', '50% off the next major upgrade', 'Family Sharing'] },
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
      label: 'Compare',
      h2: 'A comparison that sticks to facts.',
      p: 'Only checkable items are listed. The other app was checked directly on its public version on the date below.',
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
      label: 'FAQ',
      h2: 'Questions, answered.',
      side: 'Can’t find it here? Check the <a href="support/">support page</a> or email us.',
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
      h2: 'Make your next upload<br><em>fit the first time.</em>',
      p: 'Basic conversions are free. Install it, start dragging a file and tap Shift.',
      cta: 'Get it on the App Store',
      note: 'Not released yet · placeholder campaign link',
      reqs: ['macOS 12 Monterey or later', 'Intel · Apple silicon', 'English · Korean', 'Data Not Collected'],
    },
  },
};

// The Shift wheel drawn as a kumquat cross-section: rind, pith, six segments. Original artwork.
function sliceSvg(labels, { hot = 3, hotAttr = false, id = 's' } = {}) {
  const cx = 200, cy = 200, r1 = 30, r2 = 170;
  const n = labels.length;
  const gap = 0.05;
  const p = (r, a) => `${(cx + r * Math.cos(a)).toFixed(1)} ${(cy + r * Math.sin(a)).toFixed(1)}`;
  const segs = labels.map((label, i) => {
    const a0 = (i / n) * Math.PI * 2 - Math.PI / 2 - Math.PI / n + gap;
    const a1 = ((i + 1) / n) * Math.PI * 2 - Math.PI / 2 - Math.PI / n - gap;
    const d = `M${p(r1, a0)} L${p(r2, a0)} A${r2} ${r2} 0 0 1 ${p(r2, a1)} L${p(r1, a1)} A${r1} ${r1} 0 0 0 ${p(r1, a0)}Z`;
    const am = (a0 + a1) / 2;
    const isHot = i === hot;
    const fill = isHot ? `url(#${id}-hot)` : `url(#${id}-seg)`;
    const hotFill = `url(#${id}-hot)`;
    const attrs = hotAttr && isHot ? ` data-hot-fill="${hotFill}"` : '';
    const segFill = hotAttr ? `url(#${id}-seg)` : fill;
    return `<path d="${d}" fill="${segFill}"${attrs} class="seg${hotAttr && isHot ? ' seg-hot' : ''}"/><text class="slice-label${isHot && !hotAttr ? ' hot' : ''}${hotAttr && isHot ? ' label-hot' : ''}" x="${(cx + 108 * Math.cos(am)).toFixed(1)}" y="${(cy + 108 * Math.sin(am)).toFixed(1)}">${label}</text>`;
  });
  return `<svg viewBox="0 0 400 400" aria-hidden="true">
              <defs>
                <radialGradient id="${id}-rind" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#ffa24a"/><stop offset="1" stop-color="#e2550f"/></radialGradient>
                <radialGradient id="${id}-seg" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffd6a0"/><stop offset=".7" stop-color="#ffab5c"/><stop offset="1" stop-color="#f88a35"/></radialGradient>
                <radialGradient id="${id}-hot" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ff8a3d"/><stop offset="1" stop-color="#d9480c"/></radialGradient>
              </defs>
              <circle cx="200" cy="200" r="196" fill="url(#${id}-rind)"/>
              <circle cx="200" cy="200" r="182" fill="#fff1dc"/>
              ${segs.join('\n              ')}
              <circle cx="200" cy="200" r="16" fill="#fff1dc"/>
            </svg>`;
}

export function render(ctx) {
  const c = copy[ctx.lang];
  const ko = ctx.lang === 'ko';
  const ill = aiIllustrations();
  const enTo = (s) => (ko ? s : s.replace('병합', 'merge').replace('분할', 'split').replace('목표 용량', 'target size').replace(/\(오디오 추출\)/g, ' (audio only)').replace('이미지', 'images'));
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
          <p class="label">${c.hero.label}</p>
          <h1>${c.hero.h1}</h1>
          <p class="lede">${c.hero.lede}</p>
          <div class="hero-actions">
            ${btn(storeLink(ctx.lang, 'home-hero'), c.hero.cta, 'btn-orange')}
            <a class="link-arrow" href="#how">${c.hero.more}</a>
          </div>
          <p class="hero-note">${c.hero.note}</p>
        </div>
        <div class="arch" role="img" aria-label="${ko ? '귤 단면 모양의 변환 휠 일러스트' : 'Illustration of the conversion wheel drawn as a kumquat slice'}">
          <div class="shift-hint"><kbd>⇧ Shift</kbd>${c.hero.shift}</div>
          <div class="drop-chip"><span class="file-ico">PDF</span><span><b>${c.hero.chipTitle}</b><small>${c.hero.chipSub}</small></span></div>
          <div class="slice">${sliceSvg(c.slice, { id: 'hs' })}</div>
          <span class="ph-tag">${c.hero.tag}</span>
        </div>
      </div>
      <div class="wrap band-wrap">
        <div class="band reveal">
          ${c.band.map(([n, l, s]) => `<div class="band-item"><strong>${n}</strong><span>${l}</span><small>${s}</small></div>`).join('\n          ')}
          <span class="band-mark" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9" stroke="currentColor" stroke-width="1.2"/></svg></span>
        </div>
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
            <div class="stage" data-step="1" data-from="8.4" data-to="1.8">
              <div class="stage-grid"></div>
              <span class="ph-tag">${c.how.tag}</span>
              <div class="stage-wheel">${sliceSvg(c.slice, { id: 'ws', hotAttr: true })}</div>
              <div class="stage-file">
                <div class="file-ico">PDF</div>
                <strong>${c.how.file}</strong>
                <div class="stage-size"><b data-size>8.4</b> MB</div>
                <div class="stage-bar"><i></i></div>
              </div>
              <div class="stage-drop">
                <span class="ok">${c.how.ok}</span>
                <strong>${c.how.drop}</strong>
                <small>${c.how.dropSmall}</small>
              </div>
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
            <span class="tag">${F.dest.tag}</span>
            <ul class="dest-list">${F.dest.list.map(([n, s, hot]) => `<li${hot ? ' class="hot"' : ''}><b>${n}</b><span>${s}</span></li>`).join('')}</ul>
            <h3>${F.dest.h3}</h3>
            <p>${F.dest.p}</p>
          </article>
          <article class="tile t-recipe reveal">
            <span class="tag">${F.recipe.tag}</span>
            <ol class="recipe-steps">${F.recipe.steps.map((s, i) => `<li style="--i:${i}">${s}</li>`).join('')}</ol>
            <h3>${F.recipe.h3}</h3>
            <p>${F.recipe.p}</p>
            <p class="watch"><i></i>${F.recipe.watch}</p>
          </article>
          <article class="tile t-privacy reveal">
            <span class="tag">${F.privacy.tag}</span>
            <div class="big-zero">${F.privacy.zero}</div>
            <h3>${F.privacy.h3}</h3>
            <p>${F.privacy.p}</p>
          </article>
          <article class="tile t-hwp reveal">
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
        <p class="bento-note">${F.note}${ko ? ' <a href="guides/">목적지별 가이드 →</a>' : ''}</p>
      </div>
    </section>

    <section class="section" id="ai" style="padding-top:0">
      <div class="wrap">
        ${head(c.ai)}
        <div class="ai-layout">
          <div class="ai-tabs" role="tablist" aria-label="${c.ai.label}">
            ${c.ai.tabs.map(([k, l, d], i) => `<button type="button" role="tab" id="tab-${k}" aria-controls="ba-${k}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}"><span class="n">0${i + 1}</span><span><strong>${l}</strong><small>${d}</small></span></button>`).join('\n            ')}
          </div>
          <div>
            ${c.ai.tabs
              .map(
                ([k], i) => `<div class="ba" id="ba-${k}" role="tabpanel" aria-labelledby="tab-${k}"${i === 0 ? '' : ' hidden'}>
              <div class="ba-layer ba-before">${ill[k][0]}</div>
              <div class="ba-layer ba-after">${ill[k][1]}</div>
              <span class="ba-label before">${c.ai.before}</span><span class="ba-label after">${c.ai.after}</span>
              <div class="ba-handle" aria-hidden="true"></div>
              <input class="ba-range" type="range" min="0" max="100" value="50" aria-label="${c.ai.slider}">
              <span class="ph-tag">${c.ai.tag}</span>
            </div>`,
              )
              .join('\n            ')}
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="formats" style="padding-top:0">
      <div class="wrap">
        ${head(c.formats)}
        <div class="tools">
          <label class="search"><span class="visually-hidden">${c.formats.search}</span>
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M20 20l-3.5-3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
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
          ${placeholder(c.privacy.label2, 'auto')}
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
                ${c.pricing.mrows.map(([f, a, b]) => `<tr><th scope="row">${f}</th><td class="${a === '—' ? 'no' : ''}">${a}</td><td class="${b === '✓' ? 'yes' : ''}">${b}</td></tr>`).join('\n                ')}
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
          ${c.faq.items.map(([q, a]) => `<details><summary>${q}</summary><div class="answer"><p>${a}</p></div></details>`).join('\n          ')}
        </div>
      </div>
    </section>

    <section class="wrap">
      <div class="final reveal">
        <div>
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
