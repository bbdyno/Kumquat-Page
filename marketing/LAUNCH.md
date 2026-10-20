# Kumquat 출시 마케팅 체크리스트 (비용 0원)

출시 4주 전부터 출시 4주 후까지 할 일입니다. 돈이 드는 항목은 넣지 않았습니다. 이 폴더(`marketing/`)는 사이트 빌드에 들어가지 않습니다(`build.mjs`는 `src/pages/`와 `public/`만 읽습니다).

- 작성일: 2026-10-20
- 출시일(D): **미정**. 날짜가 정해지면 각 항목 옆 `(____-__-__)`에 적어 넣으세요.
- 게시, 계정 만들기, 메일 보내기는 아직 아무것도 하지 않았습니다. 모두 직접 하셔야 합니다.

## 0. 먼저 지킬 원칙

1. **사실은 사이트 문구와 똑같이.** 가격·무료 범위·요구 사양은 `src/config.mjs`와 `src/pages/00-home.mjs`가 기준입니다.
   - 무료: 처음 파일 10개는 모든 기능(Pro 포함), 이후 기본 변환 하루 5개(광고 포함)
   - Pro 평생 $24.99(출시가 $19.99), Pro 연간 $11.99(7일 무료 체험), 광고 없음. 미국 App Store 기준 USD 계획가
   - macOS 12 이상, Intel·Apple 실리콘, 한국어·영어
   - 서버·계정·분석 SDK 없음. 개인정보 라벨은 사이트에 “데이터 수집 안 함” **목표**로 적혀 있으니, 실제 라벨이 App Store에 뜬 걸 확인한 뒤에만 “Data Not Collected”라고 단정해서 쓰세요.
2. **1.0에 들어간 기능만 “지금 된다”고 쓰기.** 사이트 변경 기록(`src/pages/14-changelog.mjs`) 기준으로 1.0은 Shift-드래그 휠, 메뉴 막대 드롭, Finder 빠른 동작, 공유 확장, 단축어, 목표 용량과 품질 가드, 처음 10개 체험과 하루 5개 무료입니다. 목적지 인식·레시피·폴더 감시는 1.1, 온디바이스 AI·증명사진 메이커는 1.2, HWP·Office 팩은 1.3 이후 **계획**입니다. 초안은 모두 이 기준으로 썼습니다. 출시 빌드가 이와 다르면 초안부터 고치세요.
3. **추천·투표 부탁 금지.** Product Hunt, Hacker News, AlternativeTo 모두 금지합니다. “한번 써 보고 의견 주세요”까지만.
4. **채널 규칙은 게시 직전에 다시 확인.** 아래 초안마다 확인한 규칙과 날짜(2026-10-20)를 적어 두었습니다. 규칙은 바뀝니다.

## 1. 파일 목록

| 파일 | 용도 |
| --- | --- |
| `posts/producthunt.en.md` | Product Hunt 런칭 문구와 메이커 첫 댓글 |
| `posts/show-hn.en.md` | Hacker News Show HN |
| `posts/reddit-macapps.en.md` | Reddit r/macapps |
| `posts/geeknews-show-gn.ko.md` | GeekNews Show GN |
| `posts/disquiet.ko.md` | 디스콰이엇 프로덕트 등록과 런칭 포스트 |
| `posts/alternativeto.en.md` | AlternativeTo 등록 문구(Tangerine 대안) |
| `pitch/reviewer-email.md` | 리뷰어·유튜버 피치 메일(한/영) |

## 2. 일정

### D-28 (____-__-__) 준비

- [ ] **App Store Connect 피처링 추천(Featuring Nominations)** 제출. 메뉴: App Store Connect › 앱 › Featuring Nominations. Apple은 출시 **최소 2주 전**, 넓게 검토받으려면 **최대 3개월 전**을 권합니다(developer.apple.com/app-store/getting-featured, 2026-10-20 확인). 그러니 출시일이 정해지는 즉시 내는 게 가장 좋고, 늦어도 D-14는 넘기지 마세요.
  - 유형: 새 앱 출시(App Launch)
  - 강조할 점(사실만): Mac 전용 네이티브 유틸리티, 모든 처리가 Mac 안에서, Intel Mac과 macOS 12까지 지원, 한국어·영어 현지화, Finder 빠른 동작·공유 확장·단축어 1.0부터
  - 한국 스토어프런트용으로 한국어 설명도 함께. 피처링은 스토어프런트별로 큐레이션됩니다.
  - 선정되면 프로모션 아트워크 요청 메일이 올 수 있으니 App Store 프로모션 아트워크 가이드라인을 미리 읽어 두기
- [ ] **ASO 필드 확정** (아래 3장). 스크린샷은 실제 1.0 빌드 화면으로 찍기. 사이트의 UI 예시를 스크린샷으로 쓰면 안 됩니다.
- [ ] Product Hunt·Hacker News·r/macapps·GeekNews에서 **내 계정으로 평소 활동 시작**(남의 글에 진짜 댓글 달기). 런칭 직전에만 나타나는 계정은 티가 납니다. 계정이 없으면 직접 만드세요.
- [ ] 리뷰어 목록 만들기(이름·매체·연락 경로). `pitch/reviewer-email.md`의 대상 기준 참고. 목록 파일은 저장소에 커밋하지 말고 로컬에만.

### D-21 (____-__-__) 검색 등록

사이트맵: `https://bbdyno.github.io/Kumquat-Page/sitemap.xml` (빌드가 생성)

- [ ] **Google Search Console**
  - `bbdyno.github.io`는 DNS를 바꿀 수 없으니 “도메인” 속성은 불가. **URL 접두어** 속성으로 `https://bbdyno.github.io/Kumquat-Page/` 등록
  - 소유 확인: HTML 태그(메타 태그)나 HTML 파일. 메타 태그는 `src/layout.mjs`의 `<head>`에, HTML 파일은 `public/`에 넣고 배포하면 `/Kumquat-Page/` 아래에 올라갑니다. (이 작업은 사이트 수정이라 이번 커밋에는 넣지 않았습니다)
  - Sitemaps 메뉴에 `sitemap.xml` 제출, URL 검사에서 `/`와 `/en/` 색인 요청
  - 참고: 빌드가 만드는 `robots.txt`는 `/Kumquat-Page/robots.txt`에 놓여서 크롤러가 읽지 않습니다(robots.txt는 호스트 루트만 읽음). 사이트맵을 직접 제출하면 문제없습니다.
- [ ] **네이버 서치어드바이저** (searchadvisor.naver.com)
  - 웹마스터 도구 › 사이트 등록에 `https://bbdyno.github.io/Kumquat-Page` 입력, HTML 파일 또는 메타 태그로 소유 확인
  - 하위 경로(`/Kumquat-Page`) 사이트를 받아 주는지는 확인하지 못했습니다(searchadvisor.naver.com은 크롬 확장에서도 안전 제한으로 열리지 않음). 등록 화면에서 직접 확인하고, 거절되면 사용자 도메인 구입(README TODO 3번) 뒤로 미루기
  - 요청 › 사이트맵 제출에 사이트맵 URL, 웹 페이지 수집에 홈·가이드 페이지 URL
- [ ] **Daum** (2026-10-20 크롬으로 Daum 고객센터 도움말 확인)
  - Daum 웹마스터도구 Beta는 “도메인을 소유한 웹 사이트 관리자만 이용 가능”하고, 개인 블로그·SNS 계정은 쓸 수 없습니다. `bbdyno.github.io/Kumquat-Page`는 도메인 소유가 아니라서 **지금은 웹마스터도구 등록이 안 됩니다.** 사용자 도메인을 산 뒤에 등록하세요.
  - 웹마스터도구가 생기면: PIN 코드 발급(사이트 URL + PIN 8~12자 + 이용 동의 → URL 인증키 발급) 후, **수집 Seed URL**에 사이트맵 URL 제출. 사이트맵 안의 모든 URL은 처음 수집 요청한 URL과 같은 호스트여야 합니다. 수집까지 수개월 걸릴 수 있다고 적혀 있습니다. 이용 동의는 24개월 뒤 초기화되니 그때 PIN을 다시 발급
  - **지금 할 수 있는 방법:** Daum 고객센터 “내 사이트의 문서를 웹문서 검색결과에 나오게 하고 싶어요” 도움말 4단계대로 **문의하기로 웹문서 등록 요청**. 단, 같은 도움말이 “개발 중인 문서”와 “정보가 부족한 문서”를 제외 대상으로 들고 있으니, 홈의 “출시 전” 안내를 뺀 **출시 후(D0 이후)**에 요청하세요
- [ ] (선택, 무료) Bing Webmaster Tools는 Google Search Console 속성을 가져오기로 바로 등록할 수 있습니다.

### D-14 (____-__-__) 리뷰어 사전 연락

- [ ] 피처링 추천을 아직 안 냈다면 오늘이 Apple이 말하는 최소 기한
- [ ] 출시 전 리뷰어에게 `pitch/reviewer-email.md` 발송(직접). 출시 전에는 오퍼 코드를 만들 수 없어서(아래 4장) **TestFlight 외부 테스트 초대**로 빌드를 줍니다. TestFlight 외부 테스트는 베타 앱 심사를 거쳐야 하니 D-21쯤 빌드를 올려 두세요.
- [ ] 디스콰이엇 **프로덕트 등록** 신청(검토 후 승인). 본인이 만든 제품만 등록 가능. 런칭 포스트는 출시일에.
- [ ] Product Hunt 런칭 초안 작성·예약. 갤러리 이미지 2장 이상(권장 1270×760), 썸네일 240×240.

### D-7 (____-__-__) 마무리

- [ ] 1.0 빌드 기능과 초안 문구 대조(0장 2번). 빠진 기능이 있으면 초안에서 빼기
- [ ] App Store 제품 페이지 미리보기 확인: 이름, 부제, 스크린샷 문구, 개인정보 라벨
- [ ] 사이트 `src/config.mjs`의 `APP_ID`·`PROVIDER_TOKEN`·`site.email` 채우기, 홈의 “출시 전” 안내 제거 준비(README TODO 1·2번)
- [ ] 출시 시각 정하기. Product Hunt 하루는 태평양 시간 00:01 시작: 한국 시간으로 **11월 1일 이전 출시면 16:01(PDT), 11월 2일 이후면 17:01(PST)** (2026년 미국 서머타임 종료는 11월 1일)

### D0 (____-__-__) 출시일

- [ ] App Store 출시 확인 → 사이트 배포(App Store 링크 교체)
- [ ] **오퍼 코드 생성**(Pro 평생, 무료 오퍼, 1회용 코드). 앱이 Ready for Distribution이고 인앱 구입이 승인된 뒤에야 만들 수 있습니다. 생성 후 최대 1시간 뒤부터 사용 가능
- [ ] 사전 연락한 리뷰어에게 코드 전달(1인 1코드, 직접 발송)
- [ ] Product Hunt 런칭(`posts/producthunt.en.md`), 메이커 첫 댓글 바로 달기. 하루 동안 댓글에 답하기
- [ ] 디스콰이엇 제품 페이지에 런칭 포스트(`posts/disquiet.ko.md`)
- [ ] GeekNews Show GN(`posts/geeknews-show-gn.ko.md`). 한국 시간 오전 권장

### D+1 ~ D+3 (____-__-__)

- [ ] Hacker News Show HN(`posts/show-hn.en.md`). 미국 평일 오전(한국 시간 밤 10시~자정)
- [ ] AlternativeTo 등록(`posts/alternativeto.en.md`). 출시 전 앱은 거절되므로 반드시 출시 후. 검토 대기열이 길다고 FAQ에 적혀 있습니다
- [ ] r/macapps(`posts/reddit-macapps.en.md`). 게시 전에 사이드바 규칙 직접 확인, 필요하면 모드메일로 먼저 문의
- [ ] App Store 리뷰에 답글(좋은 리뷰·나쁜 리뷰 모두)

### D+7 (____-__-__)

- [ ] 답이 없는 리뷰어에게 한 번만 후속 메일. 두 번 이상은 보내지 않기
- [ ] Search Console·서치어드바이저에서 색인 상태 확인, Daum 고객센터에 웹문서 등록 요청(위 D-21 항목)
- [ ] 첫 주 문의·리뷰에서 나온 버그와 질문 정리 → 지원 페이지 FAQ 보강

### D+14 (____-__-__) 앱 안 교차 홍보 준비

- [ ] 아래 5장의 광고 슬롯 제안 검토. 사이트 문구 수정과 앱 쪽 OS 필터가 먼저 필요합니다

### D+28 (____-__-__) 정리

- [ ] 오퍼 코드 사용 현황 확인(App Store Connect)
- [ ] 1.1 업데이트 계획이 잡히면 **업데이트 피처링 추천**을 다시 제출(목적지 인식은 “의미 있는 업데이트”에 해당)
- [ ] GeekNews는 같은 프로젝트를 일정 기간 안에 다시 올릴 수 없습니다. 1.1은 큰 변화가 생기고 그 기간이 지난 뒤에만 다시 Show GN
- [ ] r/macapps 개발자 글은 30일에 한 번이라는 설명이 있으니(제3자 요약, 확인 필요) 다음 글은 D+30 이후

## 3. ASO 필드

App Store Connect 한도: 이름 30자, 부제 30자, 키워드 100자(쉼표 구분, 공백 불필요). 이름·부제에 있는 단어는 키워드에 다시 넣지 않습니다. 다른 앱 이름(Tangerine 등)과 서비스 상표(홈택스·정부24 등)는 키워드에 넣지 마세요(App Store 심사 지침 2.3.7).

| 필드 | 한국어 | 영어 |
| --- | --- | --- |
| 이름 | Kumquat: File Converter (23자) | Kumquat: File Converter (23자) |
| 부제 | 올릴 곳에 맞춰 파일 변환·압축 (17자) | Convert files to fit uploads (28자) |
| 키워드 | `HEIC,JPG,PNG,PDF,WebP,MP3,MP4,용량줄이기,사진변환,이미지,동영상,PDF압축,리사이즈,일괄변환,자막,오프라인` (72자) | `heic,jpg,png,pdf,webp,compress,resize,image,photo,video,mp3,mp4,optimizer,shrink,batch,offline,size` (99자) |

- 한국어 키워드는 72자지만 UTF-8로는 134바이트입니다. App Store Connect 입력란이 글자 수로 세는지 확인하고, 넘치면 `오프라인`, `자막`부터 빼세요.
- HWP·한글·증명사진·배경 제거는 해당 기능이 나오는 버전(1.2·1.3)에 키워드에 추가합니다. 지금 넣으면 없는 기능으로 검색 유입이 생깁니다.

**프로모션 텍스트**(170자, 심사 없이 수시 변경 가능)

- 한국어: `출시 기념: Pro 평생 이용권 $19.99(정가 $24.99). 처음 파일 10개는 모든 기능을 무료로 써 볼 수 있고, 이후에도 기본 변환은 하루 5개까지 무료입니다.`
- 영어: `Launch offer: Pro Lifetime $19.99 (regularly $24.99). Your first 10 files get every feature free, and 5 basic conversions a day stay free after that.`
- 원화 표시 스토어에서는 달러 금액이 어색할 수 있으니, 한국 스토어 가격표가 나오면 금액을 빼거나 원화로 바꾸세요.

**스크린샷 문구**(실제 1.0 화면 위에. Pro 기능은 Pro라고 표시)

| # | 화면 | 한국어 | 영어 |
| --- | --- | --- | --- |
| 1 | Shift-드래그 휠 | 끌다가 Shift 한 번, 바로 변환 | Tap Shift while dragging. Done. |
| 2 | 목표 용량 + 품질 가드 | “2MB 이하”로 줄여도 글자는 또렷하게 (Pro) | Under 2 MB, text still sharp (Pro) |
| 3 | Finder 빠른 동작·공유 확장 | Finder에서도, 공유 메뉴에서도 | Right from Finder and the Share menu |
| 4 | 비교·실행 취소 | 원본은 그대로, 언제든 되돌리기 | Originals stay. Undo anytime. |
| 5 | 무료 범위 안내 화면 | 처음 10개는 모든 기능 무료 | Your first 10 files: every feature free |
| 6 | 설정·개인정보 | 업로드 없음, 계정 없음, 모두 Mac 안에서 | No uploads, no account, all on your Mac |

## 4. 리뷰어용 코드

- Kumquat은 **무료 다운로드 + 인앱 구입**이라 앱 프로모 코드는 의미가 없습니다. 리뷰어에게 줄 것은 Pro입니다.
- 인앱 구입 프로모 코드는 2026-03-26부터 새로 만들 수 없습니다. 대신 **오퍼 코드**(Offer Codes)를 씁니다.
- 만들기: 인앱 구입(Pro 평생) › Offer Codes › **Free Offer**, **1회용 코드(one-time-use)**. 배치당 500개부터라 한 번에 500개가 생기지만 쓰는 것만 나눠 주면 됩니다. 만료는 최대 6개월
- 조건: 앱이 Ready for Distribution, 인앱 구입이 Approved여야 생성 가능 → **출시일 전에는 못 만듭니다.** 출시 전 리뷰는 TestFlight로
- 사용: 1회용 코드는 리딤 URL이나 App Store 앱(계정 › 기프트 카드 또는 코드 사용)에서 입력. 앱 안 입력은 macOS 15 이상 + StoreKit 구현이 필요하니, 리뷰어에게는 리딤 URL을 주는 게 확실합니다
- 앱당 활성 오퍼 10개, 분기당 100만 개 한도(Apple 문서, 2026-10-20 확인)
- 누가 어떤 코드를 받았는지는 로컬 메모에만 기록하고 커밋하지 않기

## 5. 앱 안 광고 슬롯으로 교차 홍보 (제안, JSON은 수정하지 않음)

무료 사용자에게 광고를 띄우는 슬롯(`public/ads/v1.json`, 지금은 `ads: []`)을 내 다른 앱 홍보에 쓰면 돈이 들지 않습니다. 다만 바로 넣기 전에 걸리는 게 세 가지 있습니다.

1. **사이트 문구와 안 맞음.** FAQ·개인정보 처리방침·약관은 광고를 “Kumquat Pro 안내 또는 직접 계약한 스폰서”라고 설명합니다. 같은 개발자의 다른 앱은 둘 다 아닙니다. 먼저 이 세 곳에 “개발자의 다른 앱 소개”를 추가하세요(`00-home.mjs` FAQ, `10-privacy.mjs`, `11-terms.mjs`).
2. **OS 버전 필터가 없음.** Kumquat은 macOS 12부터인데 Branchlane은 macOS 14, Remora는 macOS 15부터입니다(각 프로젝트의 `Project.swift`). 지금 JSON 형식에는 OS 조건이 없어서 macOS 12·13 사용자에게 설치 못 하는 앱이 뜹니다. 앱에서 `minMacOS` 같은 필드를 읽어 거르도록 한 뒤에 넣으세요. 식별자를 보내지 않는 원칙은 그대로 지켜집니다(판단은 Mac 안에서).
3. **Remora는 아직 출시 전**(Remora-Page 기준). 출시 후에 추가합니다.

넣을 때의 항목 예시(README의 형식 그대로 + 제안 필드 `minMacOS`):

```json
{
  "version": 1,
  "updated": "YYYY-MM-DD",
  "ads": [
    {
      "id": "branchlane-ko-1",
      "advertiser": "Branchlane (같은 개발자)",
      "headline": "Branchlane — Mac에서 끝나는 프라이빗 Git",
      "body": "계정도, 클라우드도, 서버도 없는 네이티브 Git 클라이언트.",
      "url": "https://apps.apple.com/kr/app/branchlane/id6785129372?mt=12",
      "locale": "ko",
      "minMacOS": "14.0",
      "start": "YYYY-MM-DD",
      "end": "YYYY-MM-DD"
    },
    {
      "id": "branchlane-en-1",
      "advertiser": "Branchlane (same developer)",
      "headline": "Branchlane — Private, native Git for Mac",
      "body": "No account. No cloud. No Branchlane server.",
      "url": "https://apps.apple.com/app/id6785129372",
      "locale": "en",
      "minMacOS": "14.0",
      "start": "YYYY-MM-DD",
      "end": "YYYY-MM-DD"
    },
    {
      "id": "remora-en-1",
      "advertiser": "Remora (same developer)",
      "headline": "Remora - SSH Client for iPhone, iPad and Mac",
      "body": "Terminal, SFTP and key management for free. No account, no tracking.",
      "url": "<Remora App Store URL after release>",
      "locale": "en",
      "minMacOS": "15.0",
      "start": "YYYY-MM-DD",
      "end": "YYYY-MM-DD"
    }
  ]
}
```

- 문구는 각 앱 사이트의 제목·설명에서 가져왔습니다(Branchlane-Page, Remora-Page). Remora 한국어 항목은 Remora-Page `ko/`의 설명으로 같은 방식으로 만들면 됩니다.
- App Store 링크에 `pt`(제공자 토큰)와 `ct=kumquat-ad`를 붙이면 App Store Connect에서 Kumquat 광고로 들어온 설치를 따로 볼 수 있습니다. 링크에 사용자 정보는 들어가지 않습니다.
- 비율 제안: Kumquat Pro 안내와 번갈아 노출. 같은 앱 광고가 매번 뜨면 피로도가 높습니다.
- 반대 방향도 가능: Remora(macOS)와 Branchlane에 Kumquat 소개를 넣을 수 있습니다. 각 앱의 광고 정책 문서와 개인정보 문구를 먼저 확인하세요.
