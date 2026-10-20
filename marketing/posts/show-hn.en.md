# Hacker News: Show HN (en)

## 확인한 규칙 (2026-10-20, news.ycombinator.com/showhn.html)

- 사람들이 실제로 써 볼 수 있는 것이어야 함. 랜딩 페이지·가입 페이지·모금 페이지는 안 됨 → **출시 후에만**, 링크는 사이트가 아니라 App Store 페이지
- 가입이나 메일 입력 없이 써 볼 수 있게. Kumquat은 계정이 없지만 App Store 설치에는 Apple ID가 필요하다는 점은 댓글에서 솔직하게
- 직접 만들었고 대화할 수 있는 프로젝트여야 함
- 친구에게 추천·댓글 부탁 금지
- 제목은 “Show HN”으로 시작
- 마케팅 말투를 피하고 약점도 솔직하게. 아래 글은 그렇게 썼습니다

## 제목 (80자 이하)

> Show HN: Kumquat – a Mac file converter that opens a wheel when you tap Shift

## URL

`<APP STORE URL>` (Mac App Store 단독 배포)

## 본문 (텍스트 칸, 또는 첫 댓글)

> Hi HN, I made Kumquat, a file converter and optimizer for macOS.
>
> The idea: most conversions I do happen in the middle of a drag. I'm dragging a HEIC into a web form, or a scanned PDF into an email, and it's the wrong format or too big. So in Kumquat you start dragging a file and tap Shift, and a small wheel of actions for that file opens at the cursor. Drop on a slice and the result is saved next to the original. The original is never overwritten, and you can undo.
>
> What 1.0 does:
>
> - Images (HEIC, JPG, PNG, WebP, TIFF, BMP), audio (MP3, AAC/M4A, WAV, AIFF), video (MP4, MOV, including audio extraction), PDF to images, merge and split, DOCX/RTF/TXT/HTML to PDF, SRT/VTT subtitles
> - Target size ("under 2 MB") with a quality guard that checks text is still readable
> - Finder Quick Actions, a Share extension, Shortcuts and a menu bar drop target
>
> Everything runs locally. There's no server, no account, and no analytics, ad or crash-reporting SDK. The only network requests are for a preset list and an ad list, both static files on the website, and neither carries files or identifiers. It supports macOS 12+ on Intel and Apple silicon.
>
> Business model, since people will ask: it's a free download. Your first 10 files get every feature. After that, 5 basic conversions a day are free, with an ad. Pro removes limits and ads: $11.99/year (7-day trial) or $24.99 lifetime ($19.99 at launch).
>
> Known limits: it's Mac App Store only for now, so you need an Apple ID to install it. Recipes, folder watching and destination-aware presets are planned for 1.1, and on-device AI (background removal, OCR) for 1.2, so they aren't in this build.
>
> I'd like to hear what breaks, which formats you'd want next, and whether the Shift wheel feels natural or gets in the way.

## 예상 질문과 답 메모 (사이트에 있는 사실만)

- **왜 App Store 전용?** 결제·환불을 Apple에 맡기고 계정·서버를 두지 않기 위해서. (사실관계: 구매는 Apple ID로 App Store에서만)
- **광고는 어떻게?** 사이트의 JSON 목록을 하루 한 번쯤 받아 Mac 안에서 고름. 식별자·사용 정보 전송 없음, 서드파티 광고 SDK 없음
- **FFmpeg 쓰나?** 사이트에 없는 내용이라 답하기 전에 라이선스 고지와 맞춰 확인
- **Tangerine과 차이?** 사이트 비교표 그대로만(Intel 지원, macOS 12, 무료 범위, 가격, 2026-10-20 기준). 상대 앱 깎아내리는 말은 하지 않기

## 게시 전 확인

- [ ] 미국 평일 오전(한국 시간 밤 10시~자정)에 게시
- [ ] 1.0 지원 포맷이 위 목록과 같은지 빌드로 확인
- [ ] 첫 2시간은 댓글에 바로 답할 수 있는 시간에 올리기
