import { site, pricing, storeLink } from '../config.mjs';
import { btn, arrowSvg, mark, shot } from '../layout.mjs';
import { icon } from '../icons.mjs';
import { formats, kinds } from '../data/formats.mjs';
import { parcelArt } from '../data/illustrations.mjs';

export const path = '';
export const priority = 1.0;

const P = pricing;

// Destinations and their defaults mirror docs/REBRAND.md in the app repo (2026-10-27). Users can change every limit.
// The demo numbers (stage and budget bar) are a worked example of splitting 20 MB by file size, labeled as such on the page.

const copy = {
  ko: {
    title: 'Shrinkwrap — 보낼 곳에 맞게 줄이기 | Mac 파일 용량 맞춤',
    description: `메일 첨부, 메신저, 서류 제출, 사진 첨부. 보낼 곳을 고르고 파일을 놓으면 그곳의 한도에 맞는 새 파일을 만드는 Mac 앱입니다. 메일 첨부는 합계 20 MB를 나눠 맞추고, PDF는 글자를 살린 채 압축합니다. 처음 파일 ${P.welcomeTrialFiles}개는 모든 기능 무료. 파일은 Mac 밖으로 나가지 않습니다. Intel Mac·macOS 12 지원.`,
    hero: {
      announceTag: '출시 준비 중',
      announce: `처음 파일 ${P.welcomeTrialFiles}개는 모든 기능 무료`,
      menuAlt: 'Shrinkwrap의 보낼 곳 목록: 메일 첨부 합계 20MB, 메신저, 서류 제출 등',
      toastAlt: '줄이기가 끝난 뒤 화면 구석에 뜨는 결과 카드',
      h1: '보낼 곳에<br><em>딱 맞게.</em>',
      lede: '메일 첨부, 메신저, 서류 제출. 보낼 곳을 고르고 파일을 놓으면 그곳의 용량 한도에 맞는 새 파일을 만듭니다. 원본은 그대로 두고, 모든 처리는 Mac 안에서 합니다.',
      cta: 'App Store에서 받기',
      more: '작동 방식 보기',
      note: 'App Store 심사 중입니다. 승인되어 공개되면 링크가 열립니다.',
    },
    band: [
      ['7곳', '보낼 곳', '메일·메신저·서류 제출·사진 첨부 등'],
      [`${P.welcomeTrialFiles}개`, '처음 파일', 'Pro 포함 모든 기능 무료 체험'],
      ['0', '업로드·수집', '서버도, 계정도, 분석 SDK도 없음'],
      ['12+', 'macOS Monterey부터', 'Intel과 Apple 실리콘 모두'],
    ],
    dest: {
      label: '보낼 곳',
      h2: '어디로 <em>보내나요?</em>',
      p: 'Shrinkwrap은 보낼 곳부터 묻습니다. 고르면 그곳의 한도와 형식에 맞춰 새 파일을 만듭니다. 한도는 설정에서 바꿀 수 있습니다.',
      cols: ['보낼 곳', '기본 한도', '이렇게 맞춥니다'],
      rows: [
        ['메일 첨부', '전체 합계 20 MB', '한도를 파일 크기 비율로 나눠 각각 줄입니다. 사진은 JPG(긴 변 2560 px), 영상은 MP4, 오디오는 M4A로 만들고, PDF는 글자를 살린 채 이미지만 압축합니다.'],
        ['메신저', '파일당 25 MB', '사진은 JPG(긴 변 2048 px), 영상은 MP4, 오디오는 M4A로 만들고 PDF는 압축합니다.'],
        ['작은 업로드', '파일당 10 MB', '사진은 JPG(긴 변 2048 px), 영상은 MP4, 오디오는 M4A로 만들고 PDF는 압축합니다.'],
        ['서류 제출', '파일당 5 MB', 'HEIC 사진은 JPG(긴 변 3000 px)로, 문서는 PDF로 바꿉니다. PDF는 글자를 살린 채 이미지만 압축합니다.'],
        ['사진 첨부', '파일당 500 KB', '사진을 긴 변 1600 px의 JPG로 줄입니다.'],
        ['웹·블로그 이미지', '파일당 500 KB', '사진을 긴 변 1920 px의 WebP로 줄입니다.'],
        ['직접 지정', '파일당 2 MB', '한도를 직접 정합니다. 사진은 JPG, 영상은 MP4, 오디오는 M4A로 만들고 PDF는 압축합니다.'],
      ],
      note: `이미 한도 안이고 형식도 맞는 파일은 새로 만들지 않고 ‘이미 맞음’으로 알려 드립니다. 보낼 곳 맞춤은 Pro 기능이며, 처음 파일 ${P.welcomeTrialFiles}개는 무료로 써 볼 수 있습니다. 기본 한도는 각 서비스의 공식 한도가 아니므로, 올릴 곳의 안내와 다르면 설정에서 바꾸세요.`,
    },
    how: {
      label: '작동 방식',
      h2: '고르고, 놓고, <em>보내면</em> 끝.',
      p: '형식과 품질을 하나하나 고를 필요가 없습니다. 보낼 곳만 고르면 나머지는 Shrinkwrap이 맞춥니다.',
      steps: [
        ['어디로 보낼지 고릅니다', '메인 창, 메뉴 막대 아이콘, Finder 빠른 동작, 단축어. 어디서 시작해도 보낼 곳부터 보여 줍니다.'],
        ['파일을 놓습니다', '여러 개를 한꺼번에 놓아도 됩니다. 메일 첨부는 합계 20 MB를 파일 크기 비율로 나눠 맞춥니다.'],
        ['바로 보냅니다', '결과를 새 메일에 바로 첨부하거나, 공유 메뉴로 넘기거나, Finder에서 엽니다. 원본은 그대로 남습니다.'],
      ],
      demo: {
        q: '어디로 보내나요?',
        dests: [['메일 첨부', '합계 20 MB'], ['메신저', '파일당 25 MB'], ['서류 제출', '파일당 5 MB'], ['사진 첨부', '파일당 500 KB']],
        filesTitle: '메일 첨부 · 파일 4개',
        files: [['file-pdf', '견적서_스캔', '.pdf', '.pdf', '12.4 MB', '7.6 MB'], ['file-image', '현장사진_01', '.heic', '.jpg', '8.2 MB', '5.1 MB'], ['file-image', '현장사진_02', '.heic', '.jpg', '7.9 MB', '4.8 MB'], ['file-pdf', '사업자등록증', '.pdf', '.pdf', '3.1 MB', '1.9 MB']],
        total: ['합계 31.6 MB', '합계 19.4 MB'],
        fits: '20 MB 안',
        send: ['새 메일에 첨부', '공유', 'Finder에서 보기'],
        note: '예시 화면입니다. 실제 결과 크기는 파일마다 다릅니다.',
      },
    },
    features: {
      label: '기능',
      h2: '크기는 맞추고,<br><em>글자는</em> 지킵니다.',
      p: `보낼 곳 맞춤은 Pro 기능입니다. 처음 파일 ${P.welcomeTrialFiles}개는 모든 기능을, 그 뒤에도 형식 바꾸기는 하루 ${P.freeDailyFiles}개까지 무료입니다.`,
      budget: {
        tag: 'Pro',
        h3: '메일 첨부는 합계로 맞춥니다',
        p: '사진 여러 장과 PDF를 한 메일에 보낼 때, 전체 20 MB를 파일 크기 비율로 나눠 각각 줄입니다. 하나씩 줄여 보며 합계를 계산하지 않아도 됩니다.',
        bar: [['견적서_스캔.pdf', 7.8], ['현장사진_01', 5.2], ['현장사진_02', 5.0], ['사업자등록증.pdf', 2.0]],
        barLabel: '20 MB를 네 파일에 나눈 예시',
      },
      guard: { tag: 'Pro', big: '97%', small: '원본과의 유사도 · 예시', h3: '품질 가드', p: '글자가 뭉개질 만큼 품질을 낮춰야 할 때는 해상도부터 줄입니다. 결과마다 원본과 얼마나 닮았는지 보여 줍니다.' },
      pdf: { tag: 'Pro', mark: 'Aa', markSub: '글자는 그대로', h3: '글자를 살리는 PDF 압축', p: '메일 첨부와 서류 제출에서는 PDF의 글자는 그대로 두고, 안에 든 이미지만 압축합니다.' },
      send: { h3: '끝나면 바로 보내기', p: '메일 첨부는 새 메일에 바로 붙이고, 다른 곳은 공유 메뉴나 Finder로 넘깁니다.', chips: ['새 메일에 첨부', '공유', 'Finder에서 보기'] },
      privacy: { tag: '모두', zero: '0', h3: '업로드도, 수집도 없음', p: '모든 처리가 Mac 안에서. App Store 라벨 “데이터 수집 안 함” 기준.' },
      anywhere: {
        tag: '모두',
        h3: 'Mac 어디서든',
        p: '어디서 시작해도 보낼 곳부터 고릅니다.',
        list: [['tray-arrow-down', '메뉴 막대 아이콘에 놓기'], ['folder-open', 'Finder 빠른 동작'], ['lightning', '단축어'], ['stack', '메인 창에 놓기']],
      },
      cta: { h3: `처음 파일 ${P.welcomeTrialFiles}개는 모든 기능 무료`, p: 'Pro 기능까지 직접 써 보고 결정하세요.' },
      note: '형식만 바꾸고 싶을 때는 보낼 곳 아래 ‘다른 형식으로’를 쓰세요. 바꿀 수 있는 형식은 아래 표에 있습니다.',
      guides: '보낼 곳별 가이드',
    },
    app: {
      label: '실제 화면',
      h2: '보낼 곳도, 기록도<br><em>한 창에.</em>',
      feats: [['map-pin-area', '어디로 보내나요?', '메인 창은 보낼 곳을 고르는 화면으로 시작합니다. 고른 뒤 창에 파일을 놓으면 됩니다.'], ['clock-counter-clockwise', '기록', '날짜별로 묶인 기록에서 썸네일을 보고, 검색하고, 비교하거나 되돌리고, Finder에서 바로 엽니다.'], ['chart-bar', '통계', '줄인 파일 수와 용량, 최근 14일 그래프를 보여 줍니다. 사이드바 아래에는 남은 체험·무료 개수가 나옵니다.']],
      shots: { main: 'Shrinkwrap 메인 창: 사이드바와 보낼 곳·기록·통계 화면', hover: '결과 카드에 마우스를 올린 모습: 비교, 실행 취소, 줄어든 용량' },
      note: '실제 앱 화면입니다. 기록의 파일은 데모 데이터입니다.',
    },
    formats: {
      label: '다른 형식으로',
      h2: '형식만 바꾸고 싶다면.',
      p: `보낼 곳 아래 ‘다른 형식으로’에서 형식만 바꿀 수 있습니다. 출시 계획 기준 목록이며, 처음 파일 ${P.welcomeTrialFiles}개 이후에도 Free 포맷은 하루 ${P.freeDailyFiles}개까지 무료로 변환합니다.`,
      search: '포맷 검색 (예: heic, 한글, 자막)',
      filters: [['all', '전체'], ['image', '이미지'], ['audio', '오디오'], ['video', '영상'], ['doc', '문서'], ['free', 'Free'], ['pro', 'Pro']],
      cols: ['포맷', '종류', '바꿀 수 있는 형식', '요금제', '버전'],
      count: '{t}개 중 {n}개',
      empty: '일치하는 포맷이 없습니다. 필요한 형식을 지원 페이지로 알려 주세요.',
    },
    privacy: {
      label: '프라이버시',
      h2: '파일은 Mac 밖으로 <em>나가지 않습니다.</em>',
      p: '파일을 서버에 올려 줄이지 않습니다. 계정도, 분석 SDK도 없습니다.',
      cards: [
        ['0', '업로드', '줄이기와 변환은 모두 Mac 안에서 처리합니다. Shrinkwrap 서버는 존재하지 않습니다.'],
        ['0', '수집하는 데이터', 'App Store 개인정보 라벨 “데이터 수집 안 함”을 목표로 합니다. 분석·광고·크래시 SDK를 넣지 않습니다.'],
        ['0', '계정', '가입이나 로그인이 없습니다. 구매는 Apple ID로 App Store에서만 이루어집니다.'],
      ],
      settingsAlt: 'Shrinkwrap 설정 › 일반: 모든 처리는 이 Mac에서만 이루어지고 계정도 분석 도구도 없다는 안내',
      settingsNote: '앱 설정 › 일반에도 같은 약속이 적혀 있습니다.',
      pathTitle: '파일이 지나가는 길',
      path: ['Mac 안에서 바로 줄입니다', '원본은 그대로 두고 새 파일로 저장합니다', '새 메일이나 공유로 직접 보낼 때만 Mac 밖으로 나갑니다', '인터넷 없이도 동작하고, 완전 오프라인 모드도 있습니다'],
    },
    pricing: {
      label: '가격',
      h2: '가볍게 쓰면 <em>무료.</em>',
      p: `처음 파일 ${P.welcomeTrialFiles}개는 Pro까지 모두 무료. 그 뒤에는 기본 변환 하루 ${P.freeDailyFiles}개가 무료이고, 무료 사용 중에는 광고가 표시됩니다.`,
      plans: [
        { name: 'Free', price: '무료', word: true, note: `처음 ${P.welcomeTrialFiles}개는 모든 기능 체험 · 이후 기본 변환 하루 ${P.freeDailyFiles}개 · 광고 포함`, cta: 'App Store에서 받기', feats: [`처음 파일 ${P.welcomeTrialFiles}개: Pro 포함 모든 기능`, `이후 ‘다른 형식으로’ 기본 변환 하루 ${P.freeDailyFiles}개`, '메뉴 막대 드롭, Finder 빠른 동작, 단축어', '기록·통계 창, 비교·실행 취소', '무료 사용 중 광고 표시'] },
        { name: 'Pro 연간', price: P.yearly, unit: '/ 년', note: `${P.trialDays}일 무료 체험 후 자동 갱신. 언제든 해지할 수 있습니다.`, cta: `${P.trialDays}일 무료 체험`, feats: ['제한 없음 · 광고 없음', '보낼 곳 맞춤 7곳, 메일 첨부 합계 맞춤', '품질 가드, 글자를 살리는 PDF 압축', 'GIF·AVIF 등 확장 포맷', '앞으로 더해질 Pro 기능 포함'] },
        { name: 'Pro 평생', price: P.lifetimeLaunch, was: P.lifetime, note: `출시 할인가. 구매한 메이저 버전의 모든 업데이트 포함.`, cta: '평생 이용권 구매', featured: true, badge: '출시 할인', feats: ['Pro 연간의 모든 기능 · 광고 없음', '구매한 메이저 버전 평생 사용', '다음 메이저 업그레이드 50% 할인', '가족 공유 지원'] },
      ],
      foot: `가격은 미국 App Store 기준(USD) 계획가입니다. 원화 가격은 App Store 국가별 가격표에 따라 정해지며, 구매·해지·환불은 Apple을 통해 처리됩니다. ${site.factsDate} 기준.`,
      matrix: 'Free와 Pro 전체 비교',
      mcols: ['기능', 'Free', 'Pro'],
      mrows: [
        ['보낼 곳 맞춤(메일 첨부·메신저·서류 제출 등 7곳)', `처음 ${P.welcomeTrialFiles}개 체험`, '제한 없음'],
        ['메일 첨부 합계 맞춤 · 품질 가드 · 글자를 살리는 PDF 압축', `처음 ${P.welcomeTrialFiles}개 체험`, '✓'],
        ['다른 형식으로: 이미지·오디오·영상·문서 기본 변환', `처음 ${P.welcomeTrialFiles}개 + 하루 ${P.freeDailyFiles}개`, '제한 없음'],
        ['일괄 처리', '오늘 남은 무료 개수만큼', '제한 없음'],
        ['GIF·AVIF 등 확장 포맷', `처음 ${P.welcomeTrialFiles}개 체험`, '✓'],
        ['메뉴 막대 드롭 · Finder 빠른 동작 · 단축어', '✓', '✓'],
        ['기록 · 통계 창 · 실행 취소', '✓', '✓'],
        ['광고', '표시', '없음'],
      ],
    },
    faq: {
      label: 'FAQ',
      h2: '자주 묻는 질문',
      side: '여기 없는 질문은 <a href="support/">지원 페이지</a>에서 찾거나 메일로 보내 주세요.',
      items: [
        ['무료로 어디까지 쓸 수 있나요?', `처음 파일 ${P.welcomeTrialFiles}개는 Pro를 포함한 모든 기능을 무료로 써 볼 수 있습니다. 그 뒤에는 ‘다른 형식으로’의 기본 변환(이미지·오디오·영상·문서)을 하루 ${P.freeDailyFiles}개(파일 기준)까지 무료로 쓰고, 일괄 처리도 그날 남은 개수만큼 됩니다. 보낼 곳 맞춤과 GIF·AVIF 같은 확장 포맷은 Pro입니다.`],
        ['메일 첨부는 어떻게 20 MB에 맞추나요?', '메일 첨부를 고르고 여러 파일을 놓으면, 전체 합계 20 MB를 각 파일의 크기 비율로 나눠 파일마다 한도를 정한 뒤 줄입니다. 큰 파일일수록 더 많은 몫을 받습니다. 합계 한도는 설정에서 바꿀 수 있습니다.'],
        ['한도를 바꿀 수 있나요?', '네. 보낼 곳마다 기본 한도가 있고, 설정에서 바꿀 수 있습니다. 기본값은 각 서비스의 공식 한도가 아니므로, 올릴 곳의 안내가 다르면 그 값에 맞춰 주세요.'],
        ['글자가 뭉개지지 않나요?', '품질 가드는 품질을 지나치게 낮춰야 할 때 해상도부터 줄입니다. 메일 첨부와 서류 제출에서 PDF는 글자를 그대로 두고 안의 이미지만 압축합니다. 결과마다 원본과의 유사도를 보여 주니, 비교로 확인한 뒤 보내세요.'],
        ['광고가 나오나요?', '무료 사용 중에는 앱 안에 광고가 표시됩니다. Shrinkwrap Pro 안내이거나, 직접 계약한 스폰서 광고입니다. 광고 목록은 이 사이트에서 받아 오며, 앱은 식별자나 사용 정보를 보내지 않고 개인 맞춤·추적도 하지 않습니다. 서드파티 광고 SDK는 없습니다. Pro에서는 광고가 나오지 않습니다.'],
        ['Intel Mac이나 오래된 macOS에서도 되나요?', 'macOS 12 Monterey 이상의 Intel Mac과 Apple 실리콘 Mac 모두 지원합니다.'],
        ['파일이 인터넷으로 전송되나요?', '아니요. 줄이기와 변환은 모두 Mac 안에서 이루어집니다. 결과를 새 메일에 첨부하거나 공유할 때만, 직접 고른 앱으로 파일이 넘어갑니다. 앱이 네트워크를 쓰는 것은 광고 목록을 받을 때뿐이며, 이때도 파일이나 식별자는 보내지 않습니다. 자세한 내용은 <a href="privacy/">개인정보 처리방침</a>을 보세요.'],
        ['원본 파일이 덮어써지지 않나요?', '원본은 항상 그대로 두고 새 파일을 만듭니다. 변환은 메뉴 막대의 실행 취소(⌘Z), 결과 카드, 기록 창에서 되돌릴 수 있습니다.'],
        ['HWP 파일도 PDF로 바꿀 수 있나요?', 'HWPX와 HWP를 PDF·DOCX로 바꾸는 기능을 Pro로 준비하고 있습니다. 출시 일정은 <a href="changelog/">변경 기록</a>에서 알려 드립니다.'],
        ['구독을 해지하거나 환불받으려면?', '구매와 결제는 App Store에서만 처리합니다. 구독 해지는 시스템 설정 › Apple ID › 미디어 및 구입 항목 › 구독 관리에서, 환불 요청은 Apple의 문제 신고 페이지에서 할 수 있습니다. <a href="support/">지원</a> 페이지에 단계별로 정리했습니다.'],
      ],
    },
    final: {
      h2: '다음에 보낼 파일부터<br>한 번에 맞게.',
      p: `처음 파일 ${P.welcomeTrialFiles}개는 모든 기능이 무료입니다. 설치하고, 보낼 곳을 고른 뒤 파일을 놓아 보세요.`,
      cta: 'App Store에서 받기',
      note: 'App Store 심사 중 · 공개되면 링크가 열립니다',
      reqs: ['macOS 12 Monterey 이상', 'Intel · Apple 실리콘', '한국어 · 영어', '데이터 수집 안 함'],
    },
  },

  en: {
    title: 'Shrinkwrap — Fit files to any limit | Mac file size',
    description: `Email attachments, chat, online forms, photo uploads. Pick where a file is going, drop it in, and Shrinkwrap makes a new copy that fits the limit. Email attachments share a 20 MB total, and PDFs keep their text. Your first ${P.welcomeTrialFiles} files get every feature free. Your files never leave your Mac. Supports Intel Macs and macOS 12.`,
    hero: {
      announceTag: 'Coming soon',
      announce: `Your first ${P.welcomeTrialFiles} files get every feature free`,
      menuAlt: 'Shrinkwrap destination list: email attachment 20 MB total, messenger, online forms and more',
      toastAlt: 'Result card shown in the corner after shrinking',
      h1: 'Sized to fit<br><em>where it’s going.</em>',
      lede: 'Email, chat, online forms. Pick where a file is going and drop it in. Shrinkwrap makes a new copy that fits the limit, leaves the original alone, and does it all on your Mac.',
      cta: 'Get it on the App Store',
      more: 'See how it works',
      note: 'In App Store review. The link opens once the app is public.',
    },
    band: [
      ['7', 'Destinations', 'Email, chat, forms, photo uploads and more'],
      [`${P.welcomeTrialFiles}`, 'First files', 'Every feature free, Pro included'],
      ['0', 'Uploads & data', 'No server, no account, no analytics'],
      ['12+', 'macOS Monterey and up', 'Intel and Apple silicon'],
    ],
    dest: {
      label: 'Destinations',
      h2: 'Where is it <em>going?</em>',
      p: 'Shrinkwrap asks where a file is going first. Pick a destination and it makes a new file that fits that limit and format. You can change every limit in Settings.',
      cols: ['Destination', 'Default limit', 'What it does'],
      rows: [
        ['Email attachment', '20 MB in total', 'Splits the total across your files by size, then shrinks each one. Photos become JPG (2560 px long edge), video MP4 and audio M4A. PDFs keep their text; only the images inside are compressed.'],
        ['Messenger', '25 MB per file', 'Photos become JPG (2048 px long edge), video MP4 and audio M4A. PDFs are compressed.'],
        ['Small upload', '10 MB per file', 'Photos become JPG (2048 px long edge), video MP4 and audio M4A. PDFs are compressed.'],
        ['Online forms', '5 MB per file', 'HEIC photos become JPG (3000 px long edge) and documents become PDF. PDFs keep their text; only the images inside are compressed.'],
        ['Photo upload', '500 KB per file', 'Photos become JPG, 1600 px on the long edge.'],
        ['Web images', '500 KB per file', 'Photos become WebP, 1920 px on the long edge.'],
        ['Custom', '2 MB per file', 'Set your own limit. Photos become JPG, video MP4 and audio M4A. PDFs are compressed.'],
      ],
      note: `Files that already fit in the right format aren’t remade; Shrinkwrap tells you they already fit. Destinations are a Pro feature, free for your first ${P.welcomeTrialFiles} files. The defaults aren’t official limits of any service, so if the place you’re uploading to says otherwise, change them in Settings.`,
    },
    how: {
      label: 'How it works',
      h2: 'Pick, drop, <em>send.</em>',
      p: 'No export dialogs, no guessing at quality settings. Choose where the file is going and Shrinkwrap handles the rest.',
      steps: [
        ['Pick where it’s going', 'The main window, the menu bar icon, Finder Quick Actions and Shortcuts all start by asking for a destination.'],
        ['Drop your files', 'One file or a whole batch. For email, the 20 MB total is split across the files by size.'],
        ['Send it right away', 'Attach the results to a new Mail message, pass them to the share menu, or show them in Finder. Your originals stay as they were.'],
      ],
      demo: {
        q: 'Where is it going?',
        dests: [['Email attachment', '20 MB in total'], ['Messenger', '25 MB per file'], ['Online forms', '5 MB per file'], ['Photo upload', '500 KB per file']],
        filesTitle: 'Email attachment · 4 files',
        files: [['file-pdf', 'quote-scan', '.pdf', '.pdf', '12.4 MB', '7.6 MB'], ['file-image', 'site-photo-01', '.heic', '.jpg', '8.2 MB', '5.1 MB'], ['file-image', 'site-photo-02', '.heic', '.jpg', '7.9 MB', '4.8 MB'], ['file-pdf', 'business-license', '.pdf', '.pdf', '3.1 MB', '1.9 MB']],
        total: ['31.6 MB in total', '19.4 MB in total'],
        fits: 'Under 20 MB',
        send: ['New Mail message', 'Share', 'Show in Finder'],
        note: 'Example screen. Actual sizes depend on your files.',
      },
    },
    features: {
      label: 'Features',
      h2: 'Shrinks the size.<br>Keeps the <em>text.</em>',
      p: `Destinations are Pro. Your first ${P.welcomeTrialFiles} files get every feature, and after that ${P.freeDailyFiles} format conversions a day stay free.`,
      budget: {
        tag: 'Pro',
        h3: 'Email attachments fit as a set',
        p: 'Sending a few photos and a PDF in one email? Shrinkwrap splits the 20 MB total across the files by size and shrinks each one, so you don’t have to trim files one by one and add up the sizes.',
        bar: [['quote-scan.pdf', 7.8], ['site-photo-01', 5.2], ['site-photo-02', 5.0], ['business-license.pdf', 2.0]],
        barLabel: 'Example: 20 MB split across four files',
      },
      guard: { tag: 'Pro', big: '97%', small: 'Similarity to the original · example', h3: 'Quality guard', p: 'When fitting the limit would mean crushing the quality, Shrinkwrap lowers the resolution first so text stays legible. Every result shows how closely it matches the original.' },
      pdf: { tag: 'Pro', mark: 'Aa', markSub: 'text stays as is', h3: 'PDF compression that keeps text', p: 'For email attachments and online forms, the text in a PDF stays as it is. Only the images inside are compressed.' },
      send: { h3: 'Send it straight away', p: 'Email attachments go straight into a new Mail message. Everything else goes to the share menu or Finder.', chips: ['New Mail message', 'Share', 'Show in Finder'] },
      privacy: { tag: 'Everyone', zero: '0', h3: 'No uploads, no data collected', p: 'Everything runs on your Mac. Built for the “Data Not Collected” App Store label.' },
      anywhere: {
        tag: 'Everyone',
        h3: 'Anywhere on your Mac',
        p: 'Wherever you start, you pick the destination first.',
        list: [['tray-arrow-down', 'Drop on the menu bar icon'], ['folder-open', 'Finder Quick Actions'], ['lightning', 'Shortcuts'], ['stack', 'Drop on the main window']],
      },
      cta: { h3: `Your first ${P.welcomeTrialFiles} files get every feature free`, p: 'Try Pro for real before you decide.' },
      note: 'Just need a different format? Format conversions sit right under the destinations. The table below lists them.',
    },
    app: {
      label: 'Real screens',
      h2: 'Destinations and history,<br><em>in one window.</em>',
      feats: [['map-pin-area', 'Where is it going?', 'The main window opens on the destinations. Pick one, then drop files on the window.'], ['clock-counter-clockwise', 'History', 'A date-grouped list with thumbnails and search. Compare, undo or show any result in Finder.'], ['chart-bar', 'Stats', 'Files shrunk, space saved and a 14-day chart. The sidebar shows trial files or today’s free conversions left.']],
      shots: { main: 'Shrinkwrap main window: sidebar with destinations, history and stats', hover: 'Hovering the result card: compare, undo and the size saved' },
      note: 'Real app screens (Korean UI). The files in the history list are demo data.',
    },
    formats: {
      label: 'Other formats',
      h2: 'Just need another format?',
      p: `Format conversions sit under the destinations. This list reflects the launch plan; after your first ${P.welcomeTrialFiles} files, Free formats convert ${P.freeDailyFiles} files a day.`,
      search: 'Search formats (e.g. heic, subtitles)',
      filters: [['all', 'All'], ['image', 'Image'], ['audio', 'Audio'], ['video', 'Video'], ['doc', 'Document'], ['free', 'Free'], ['pro', 'Pro']],
      cols: ['Format', 'Type', 'Converts to', 'Plan', 'Version'],
      count: '{n} of {t}',
      empty: 'No matching format. Tell us what you need on the support page.',
    },
    privacy: {
      label: 'Privacy',
      h2: 'Your files <em>never leave</em> your Mac.',
      p: 'Nothing is uploaded to a server to be shrunk. No account, no analytics SDK.',
      cards: [
        ['0', 'uploads', 'Shrinking and converting all run on your Mac. There is no Shrinkwrap server.'],
        ['0', 'data collected', 'We aim for the App Store privacy label “Data Not Collected.” No analytics, ad or crash-reporting SDKs.'],
        ['0', 'accounts', 'No sign-up, no login. Purchases go through your Apple ID on the App Store only.'],
      ],
      settingsAlt: 'Shrinkwrap Settings › General: everything runs only on this Mac, with no account and no analytics (Korean UI)',
      settingsNote: 'The same promise is written in the app’s Settings › General.',
      pathTitle: 'Where your files go',
      path: ['Shrunk right on your Mac', 'The original stays; the result is saved as a new file', 'Files leave your Mac only when you send them by Mail or Share', 'Works without internet, with a full offline mode'],
    },
    pricing: {
      label: 'Pricing',
      h2: 'Start <em>free.</em> Stay light.',
      p: `Your first ${P.welcomeTrialFiles} files get everything, Pro included. After that, ${P.freeDailyFiles} basic conversions a day are free, and the free version shows ads.`,
      plans: [
        { name: 'Free', price: '$0', note: `Every feature for your first ${P.welcomeTrialFiles} files · then ${P.freeDailyFiles} basic conversions a day · with ads`, cta: 'Get it on the App Store', feats: [`First ${P.welcomeTrialFiles} files: every feature, Pro included`, `Then ${P.freeDailyFiles} basic format conversions a day`, 'Menu bar drop, Finder Quick Actions, Shortcuts', 'History and stats window, compare and undo', 'Shows ads while free'] },
        { name: 'Pro Yearly', price: P.yearly, unit: '/ year', note: `${P.trialDays}-day free trial, then renews yearly. Cancel anytime.`, cta: `Start ${P.trialDays}-day free trial`, feats: ['No limits · no ads', 'All 7 destinations, email total budget', 'Quality guard and text-preserving PDF compression', 'GIF, AVIF and more formats', 'Future Pro features included'] },
        { name: 'Pro Lifetime', price: P.lifetimeLaunch, was: P.lifetime, note: 'Launch price. Includes every update to the major version you buy.', cta: 'Buy lifetime', featured: true, badge: 'Launch offer', feats: ['Everything in Pro Yearly · no ads', 'Use your major version for life', '50% off the next major upgrade', 'Family Sharing'] },
      ],
      foot: `Planned US App Store prices in USD. Local prices follow Apple’s price tiers for each storefront. Purchases, cancellations and refunds go through Apple. As of ${site.factsDate}.`,
      matrix: 'Compare every Free and Pro feature',
      mcols: ['Feature', 'Free', 'Pro'],
      mrows: [
        ['Destinations (email, messenger, online forms and 4 more)', `First ${P.welcomeTrialFiles} files`, 'No limit'],
        ['Email total budget, quality guard, text-preserving PDF compression', `First ${P.welcomeTrialFiles} files`, '✓'],
        ['Basic format conversions (image, audio, video, document)', `First ${P.welcomeTrialFiles} + ${P.freeDailyFiles} a day`, 'No limit'],
        ['Batch size', 'Up to today’s remaining free files', 'No limit'],
        ['GIF, AVIF and more formats', `First ${P.welcomeTrialFiles} files`, '✓'],
        ['Menu bar drop, Finder Quick Actions, Shortcuts', '✓', '✓'],
        ['History and stats window, undo', '✓', '✓'],
        ['Ads', 'Shown', 'None'],
      ],
    },
    faq: {
      label: 'FAQ',
      h2: 'Questions, answered.',
      side: 'Can’t find it here? Check the <a href="support/">support page</a> or email us.',
      items: [
        ['How much can I do for free?', `Your first ${P.welcomeTrialFiles} files can use every feature, Pro included. After that, basic image, audio, video and document conversions are free for ${P.freeDailyFiles} files a day, and batches run up to the files you have left that day. Destinations and extra formats like GIF and AVIF are Pro.`],
        ['How does email fit everything under 20 MB?', 'Choose Email attachment and drop several files. Shrinkwrap splits the 20 MB total across them in proportion to their size, gives each file its share, and shrinks it to fit. Bigger files get a bigger share. You can change the total in Settings.'],
        ['Can I change the limits?', 'Yes. Every destination has a default limit you can change in Settings. The defaults aren’t official limits of any service, so match whatever the place you’re uploading to asks for.'],
        ['Will text get blurry?', 'When fitting a limit would mean crushing the quality, the quality guard lowers the resolution first. For email attachments and online forms, PDFs keep their text and only the images inside are compressed. Each result shows its similarity to the original, so you can compare before you send.'],
        ['Are there ads?', 'The free version shows ads inside the app: either a note about Shrinkwrap Pro or a sponsor we work with directly. The ad list is downloaded from this website; the app sends no identifiers or usage data, and nothing is personalized or tracked. There is no third-party ad SDK. Pro has no ads.'],
        ['Does it run on Intel Macs or older macOS?', 'It supports Intel and Apple silicon Macs on macOS 12 Monterey or later.'],
        ['Are my files sent over the internet?', 'No. Shrinking and converting run on your Mac. Files leave it only when you attach results to a new Mail message or share them, and then they go to the app you picked. The app uses the network only to download the ad list, and that request carries no files or identifiers. See the <a href="privacy/">Privacy Policy</a>.'],
        ['Will it overwrite my originals?', 'Never. Originals stay in place and results are saved as new files. Undo a conversion from the menu bar (⌘Z), the result card or the History window.'],
        ['Can it convert Korean HWP files?', 'HWPX and HWP to PDF and DOCX are planned for Pro. We’ll announce timing in the <a href="changelog/">changelog</a>.'],
        ['How do I cancel or get a refund?', 'All purchases go through the App Store. Cancel in System Settings › Apple ID › Media & Purchases › Manage Subscriptions, and request refunds through Apple’s Report a Problem page. Step-by-step instructions are on the <a href="support/">support</a> page.'],
      ],
    },
    final: {
      h2: 'Make your next attachment<br><em>fit the first time.</em>',
      p: `Your first ${P.welcomeTrialFiles} files get every feature free. Install it, pick where a file is going and drop it in.`,
      cta: 'Get it on the App Store',
      note: 'In App Store review · the link opens once the app is public',
      reqs: ['macOS 12 Monterey or later', 'Intel · Apple silicon', 'English · Korean', 'Data Not Collected'],
    },
  },
};

export function render(ctx) {
  const c = copy[ctx.lang];
  const ko = ctx.lang === 'ko';
  const enTo = (s) => (ko ? s : s.replace('병합', 'merge').replace('분할', 'split').replace(/\(오디오 추출\)/g, ' (audio only)').replace('이미지', 'images').replace('영상 → GIF', 'video → GIF'));
  const head = (h, extra = '') => `<div class="sec-head reveal"><p class="label">${h.label}</p><h2>${h.h2}</h2>${h.p ? `<p>${h.p}</p>` : ''}${extra}</div>`;

  const formatRows = formats
    .map((f) => {
      const kind = kinds[f.kind][ctx.lang];
      const search = [f.fmt, kind, f.to, f.alias, f.plan].join(' ').toLowerCase();
      return `<tr data-kind="${f.kind}" data-plan="${f.plan}" data-search="${search}"><th scope="row" class="fmt-name">${f.fmt}</th><td>${kind}</td><td>${enTo(f.to)}</td><td class="${f.plan === 'free' ? 'plan-free' : 'plan-pro'}">${f.plan === 'free' ? 'Free' : 'Pro'}</td><td class="mono">${f.release}</td></tr>`;
    })
    .join('\n              ');

  const D = c.how.demo;
  const F = c.features;
  const budgetTotal = F.budget.bar.reduce((sum, [, mb]) => sum + mb, 0);
  const body = `
    <section class="hero">
      <div class="wrap hero-grid">
        <div class="hero-copy">
          <a class="announce" href="#pricing"><span class="announce-tag">${c.hero.announceTag}</span>${c.hero.announce}${icon('arrow-up-right')}</a>
          <h1>${c.hero.h1}</h1>
          <p class="lede">${c.hero.lede}</p>
          <div class="hero-actions">
            ${btn(storeLink(ctx.lang, 'home-hero'), c.hero.cta, 'btn-accent')}
            <a class="play-link" href="#how"><span class="play">${icon('play')}</span>${c.hero.more}</a>
          </div>
          <p class="hero-note">${c.hero.note}</p>
        </div>
        <figure class="arch">
          <div class="arch-art">${parcelArt()}</div>
          ${shot(ctx, 'dropmenu', c.hero.menuAlt, { cls: 'hero-menu', eager: true })}
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

    <section class="section" id="destinations">
      <div class="wrap">
        ${head(c.dest)}
        <div class="table-scroll reveal">
          <table class="dest-table">
            <thead><tr>${c.dest.cols.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
            <tbody>
              ${c.dest.rows.map(([n, l, d]) => `<tr><th scope="row">${n}</th><td class="dest-limit">${l}</td><td>${d}</td></tr>`).join('\n              ')}
            </tbody>
          </table>
        </div>
        <p class="dest-note">${c.dest.note}</p>
      </div>
    </section>

    <section class="section" id="how" style="padding-top:0">
      <div class="wrap">
        ${head(c.how)}
        <div class="how">
          <ol class="steps">
            ${c.how.steps.map(([h, p], i) => `<li class="step${i === 0 ? ' is-active' : ''}" data-step="${i + 1}"><span class="num">0${i + 1}</span><div><h3>${h}</h3><p>${p}</p></div></li>`).join('\n            ')}
          </ol>
          <div class="how-stage">
            <div class="stage" data-step="1">
              <div class="stage-grid"></div>
              <div class="pane pane-1">
                <p class="pane-title">${D.q}</p>
                <ul class="pane-dests">${D.dests.map(([n, l], i) => `<li${i === 0 ? ' class="on"' : ''}><b>${n}</b><span>${l}</span></li>`).join('')}</ul>
              </div>
              <div class="pane pane-files">
                <p class="pane-title">${D.filesTitle}</p>
                <ul class="pane-list">${D.files.map(([ic, n, e1, e2, a, b]) => `<li><span class="file-tile">${icon(ic)}</span><b>${n}<span class="sa">${e1}</span><span class="sb">${e2}</span></b><span class="sz"><span class="sa">${a}</span><span class="sb">${b}</span></span></li>`).join('')}</ul>
                <p class="pane-total"><span class="sa">${D.total[0]}</span><span class="sb">${D.total[1]}<em>${icon('check')}${D.fits}</em></span></p>
                <div class="pane-send">${D.send.map((s, i) => `<span class="${i === 0 ? 'primary' : ''}">${s}</span>`).join('')}</div>
              </div>
            </div>
            <p class="fig-note">${D.note}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="features" style="padding-top:0">
      <div class="wrap">
        ${head(F)}
        <div class="bento">
          <article class="tile t-budget reveal">
            <span class="tile-ico">${icon('sliders-horizontal')}</span>
            <span class="tag">${F.budget.tag}</span>
            <figure class="budget">
              <div class="budget-bar">${F.budget.bar.map(([, mb], i) => `<i style="--w:${((mb / budgetTotal) * 100).toFixed(1)}%;--i:${i}"></i>`).join('')}</div>
              <ul class="budget-legend">${F.budget.bar.map(([n, mb], i) => `<li style="--i:${i}"><b>${n}</b><span>${mb.toFixed(1)} MB</span></li>`).join('')}</ul>
              <figcaption>${F.budget.barLabel}</figcaption>
            </figure>
            <h3>${F.budget.h3}</h3>
            <p>${F.budget.p}</p>
          </article>
          <article class="tile t-guard reveal">
            <span class="tile-ico">${icon('frame-corners')}</span>
            <span class="tag">${F.guard.tag}</span>
            <div class="guard-num">${F.guard.big}<small>${F.guard.small}</small></div>
            <h3>${F.guard.h3}</h3>
            <p>${F.guard.p}</p>
          </article>
          <article class="tile t-pdf reveal">
            <span class="tile-ico">${icon('file-pdf')}</span>
            <span class="tag">${F.pdf.tag}</span>
            <div class="pdf-mark">${F.pdf.mark}<span>${F.pdf.markSub}</span></div>
            <h3>${F.pdf.h3}</h3>
            <p>${F.pdf.p}</p>
          </article>
          <article class="tile t-send reveal">
            <span class="tile-ico">${icon('arrow-up-right')}</span>
            <div class="send-chips">${F.send.chips.map((s, i) => `<span class="${i === 0 ? 'primary' : ''}">${s}</span>`).join('')}</div>
            <h3>${F.send.h3}</h3>
            <p>${F.send.p}</p>
          </article>
          <article class="tile t-privacy reveal">
            <span class="tile-ico">${icon('shield-check')}</span>
            <span class="tag">${F.privacy.tag}</span>
            <div class="big-zero">${F.privacy.zero}</div>
            <h3>${F.privacy.h3}</h3>
            <p>${F.privacy.p}</p>
          </article>
          <article class="tile t-anywhere reveal">
            <span class="tile-ico">${icon('map-pin-area')}</span>
            <span class="tag">${F.anywhere.tag}</span>
            <ul class="anywhere-list">${F.anywhere.list.map(([ic, t]) => `<li>${icon(ic)}<span>${t}</span></li>`).join('')}</ul>
            <h3>${F.anywhere.h3}</h3>
            <p>${F.anywhere.p}</p>
          </article>
          <a class="tile t-cta reveal" href="#pricing">
            <span class="circle">${arrowSvg}</span>
            <h3>${F.cta.h3}</h3>
            <p>${F.cta.p}</p>
          </a>
        </div>
        <p class="bento-note">${F.note}${ko ? ` <a class="link-arrow" href="guides/">${F.guides}</a>` : ''}</p>
      </div>
    </section>

    <section class="section app-sec" id="app" style="padding-top:0">
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
            <h3>${c.privacy.pathTitle}</h3>
            <ol class="file-path">${c.privacy.path.map((x) => `<li>${x}</li>`).join('')}</ol>
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
            ${btn(storeLink(ctx.lang, 'home-pricing-' + ['free', 'yearly', 'lifetime'][i]), p.cta, p.featured ? 'btn-accent' : 'btn-line')}
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
                ${c.pricing.mrows.map(([f, a, b]) => `<tr><th scope="row">${f}</th><td class="${a === '—' ? 'no' : ''}">${a === '✓' ? icon('check') : a}</td><td class="${b === '✓' ? 'yes' : ''}">${b === '✓' ? icon('check') : b}</td></tr>`).join('\n                ')}
              </tbody>
            </table>
          </div>
        </details>
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
          <span class="final-mark" aria-hidden="true">${mark}</span>
          <h2>${c.final.h2}</h2>
          <p>${c.final.p}</p>
          <div class="final-actions">
            ${btn(storeLink(ctx.lang, 'home-final'), c.final.cta)}
            <a class="store-badge-link" href="${storeLink(ctx.lang, 'home-final-badge')}" aria-label="${ko ? 'Mac App Store에서 Shrinkwrap 다운로드' : 'Download Shrinkwrap on the Mac App Store'}"><img class="store-badge" src="${ctx.badge}" width="164" height="46" alt="${ko ? 'Mac App Store에서 다운로드' : 'Download on the Mac App Store'}"></a>
          </div>
          <p class="store-note">${c.final.note}</p>
        </div>
        <ul class="reqs">${c.final.reqs.map((r) => `<li>${r}</li>`).join('')}</ul>
      </div>
    </section>`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: site.name,
    operatingSystem: 'macOS 12.0 or later',
    applicationCategory: 'UtilitiesApplication',
    description: c.description,
    offers: [
      { '@type': 'Offer', price: '0', priceCurrency: 'USD', name: 'Free' },
      { '@type': 'Offer', price: P.yearly.replace('$', ''), priceCurrency: 'USD', name: `${site.name} Pro Yearly` },
      { '@type': 'Offer', price: P.lifetime.replace('$', ''), priceCurrency: 'USD', name: `${site.name} Pro Lifetime` },
    ],
  };

  return {
    title: c.title,
    description: c.description,
    head: `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`,
    body,
  };
}
