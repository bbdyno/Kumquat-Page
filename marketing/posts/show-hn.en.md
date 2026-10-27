# Hacker News: Show HN (en)

## 확인한 규칙 (2026-10-20, news.ycombinator.com/showhn.html)

- 사람들이 실제로 써 볼 수 있는 것이어야 함. 랜딩 페이지·가입 페이지·모금 페이지는 안 됨 → **출시 후에만**, 링크는 사이트가 아니라 App Store 페이지
- 가입이나 메일 입력 없이 써 볼 수 있게. Shrinkwrap은 계정이 없지만 App Store 설치에는 Apple ID가 필요하다는 점은 댓글에서 솔직하게
- 직접 만들었고 대화할 수 있는 프로젝트여야 함
- 친구에게 추천·댓글 부탁 금지
- 제목은 “Show HN”으로 시작
- 마케팅 말투를 피하고 약점도 솔직하게. 아래 글은 그렇게 썼습니다

## 제목 (80자 이하)

> Show HN: Shrinkwrap – fit files to an email, chat or upload limit on your Mac

## URL

`<APP STORE URL>` (Mac App Store 단독 배포)

## 본문 (텍스트 칸, 또는 첫 댓글)

> Hi HN, I made Shrinkwrap, a macOS app that fits files to where they're going.
>
> Most of my "convert this file" moments are really "this won't fit" moments: attachments over the mail limit, a scanned PDF over a form's 5 MB, a video a chat app rejects. So instead of asking which format and quality you want, Shrinkwrap asks where the file is going. You pick a destination, drop files, and it writes new copies that fit. Originals are never touched.
>
> What 1.0 does:
>
> - Seven destinations with editable defaults: email attachment (20 MB in total), messenger (25 MB per file), small upload (10 MB), online forms (5 MB; HEIC to JPG, documents to PDF), photo upload (500 KB JPG), web images (500 KB WebP) and custom
> - For email, the total is split across the files in proportion to their size, then each file is shrunk to its share
> - A quality guard: if hitting the size would mean a very low lossy quality, it lowers resolution first; each result shows an SSIM-based similarity to the original
> - PDFs for email and online forms keep their text; only embedded images are recompressed
> - Files that already fit in the right format are reported as such and not rewritten
> - Results can go straight into a new Mail message, the share sheet or Finder
> - Menu bar drop, Finder Quick Actions and Shortcuts, plus plain format conversion, crop/rotate, copy as PNG/JPG, QR reading, and a history/stats window
>
> Everything runs locally. There's no server, no account, and no analytics, ad or crash-reporting SDK. The only network request in 1.0 is for the ad list, a static file on the website, and it carries no files or identifiers. It supports macOS 12+ on Intel and Apple silicon.
>
> Business model, since people will ask: it's a free download. Your first 10 files get every feature. After that, 5 basic conversions a day are free, with an ad. Destinations are Pro: $11.99/year (7-day trial) or $24.99 lifetime ($19.99 at launch).
>
> Known limits: it's Mac App Store only for now, so you need an Apple ID to install it. The default limits are mine, not official limits of any service, so you may need to adjust them. Recipes, folder watching and automatic destination detection are planned, not in this build.
>
> I'd like to hear which destinations you'd add, what breaks, and whether the defaults match the limits you run into.

## 예상 질문과 답 메모 (사이트에 있는 사실만)

- **왜 App Store 전용?** 결제·환불을 Apple에 맡기고 계정·서버를 두지 않기 위해서. (사실관계: 구매는 Apple ID로 App Store에서만)
- **광고는 어떻게?** 사이트의 JSON 목록을 하루 한 번쯤 받아 Mac 안에서 고름. 식별자·사용 정보 전송 없음, 서드파티 광고 SDK 없음
- **FFmpeg 쓰나?** 네. 사이트 오픈소스 페이지(`/en/opensource/`)의 내용 그대로 답하기
- **다른 앱과 차이?** 다른 앱 이름을 꺼내거나 비교하지 않기. Shrinkwrap이 하는 일(보낼 곳 기준, 메일 합계 맞춤, 글자를 살리는 PDF 압축, 모두 Mac 안에서)만 설명
- **유사도는 어떻게 재나?** 구조적 유사도(SSIM). 앱 코드 기준으로 답하고, 정확한 임계값은 확인 후 답하기

## 게시 전 확인

- [ ] 미국 평일 오전(한국 시간 밤 10시~자정)에 게시
- [ ] 1.0 보낼 곳·기본 한도가 위 목록과 같은지 빌드로 확인
- [ ] 첫 2시간은 댓글에 바로 답할 수 있는 시간에 올리기
