// Planned formats, from docs/PLAN.md §2. `plan` is free or pro; `release` is the planned app version.
// GIF output, target size and the extended formats are Pro (every format is open during the first 10 files).
// Keep this list in step with the app; the landing page table is generated from it.

export const kinds = {
  image: { ko: '이미지', en: 'Image' },
  audio: { ko: '오디오', en: 'Audio' },
  video: { ko: '영상', en: 'Video' },
  doc: { ko: '문서', en: 'Document' },
};

export const formats = [
  { fmt: 'HEIC', kind: 'image', to: 'JPG · PNG · WebP · TIFF · PDF', plan: 'free', release: '1.0', alias: 'heif 아이폰 사진' },
  { fmt: 'JPG / JPEG', kind: 'image', to: 'PNG · WebP · HEIC · TIFF · BMP · PDF', plan: 'free', release: '1.0', alias: '사진' },
  { fmt: 'PNG', kind: 'image', to: 'JPG · WebP · HEIC · TIFF · BMP · PDF', plan: 'free', release: '1.0', alias: '스크린샷' },
  { fmt: 'WebP', kind: 'image', to: 'JPG · PNG · HEIC · TIFF · PDF', plan: 'free', release: '1.0', alias: '' },
  { fmt: 'TIFF', kind: 'image', to: 'JPG · PNG · WebP · HEIC · PDF', plan: 'free', release: '1.0', alias: '스캔' },
  { fmt: 'GIF', kind: 'image', to: 'JPG · PNG · WebP · MP4 · 영상 → GIF', plan: 'pro', release: '1.0', alias: '움짤 gif 만들기' },
  { fmt: 'BMP', kind: 'image', to: 'JPG · PNG · WebP', plan: 'free', release: '1.0', alias: '' },
  { fmt: 'AVIF', kind: 'image', to: 'JPG · PNG · WebP', plan: 'pro', release: '1.0', alias: '' },
  { fmt: 'JPEG XL', kind: 'image', to: 'JPG · PNG · WebP', plan: 'pro', release: '1.3', alias: 'jxl' },
  { fmt: 'MP3', kind: 'audio', to: 'AAC/M4A · WAV · AIFF', plan: 'free', release: '1.0', alias: '음악' },
  { fmt: 'AAC / M4A', kind: 'audio', to: 'MP3 · WAV · AIFF', plan: 'free', release: '1.0', alias: '녹음 음성메모' },
  { fmt: 'WAV', kind: 'audio', to: 'MP3 · AAC/M4A · AIFF', plan: 'free', release: '1.0', alias: '' },
  { fmt: 'AIFF', kind: 'audio', to: 'MP3 · AAC/M4A · WAV', plan: 'free', release: '1.0', alias: '' },
  { fmt: 'FLAC', kind: 'audio', to: 'MP3 · AAC/M4A · WAV', plan: 'pro', release: '1.3', alias: '무손실' },
  { fmt: 'Opus / OGG', kind: 'audio', to: 'MP3 · AAC/M4A · WAV', plan: 'pro', release: '1.3', alias: '' },
  { fmt: 'MP4', kind: 'video', to: 'MOV · MP3/M4A(오디오 추출)', plan: 'free', release: '1.0', alias: 'h.264 hevc 동영상' },
  { fmt: 'MOV', kind: 'video', to: 'MP4 · MP3/M4A(오디오 추출)', plan: 'free', release: '1.0', alias: '화면 녹화 동영상' },
  { fmt: 'WebM / MKV / AVI', kind: 'video', to: 'MP4 · MOV', plan: 'pro', release: '1.3', alias: '동영상 av1' },
  { fmt: 'PDF', kind: 'doc', to: 'JPG · PNG · 병합 · 분할', plan: 'free', release: '1.0', alias: '압축' },
  { fmt: 'DOCX / RTF / TXT / HTML', kind: 'doc', to: 'PDF', plan: 'free', release: '1.0', alias: 'word 워드' },
  { fmt: 'SRT / VTT', kind: 'doc', to: 'VTT / SRT', plan: 'free', release: '1.0', alias: '자막' },
  { fmt: 'HWPX / HWP', kind: 'doc', to: 'PDF · DOCX', plan: 'pro', release: '1.3', alias: '한글 한컴' },
  { fmt: 'PPTX / XLSX', kind: 'doc', to: 'PDF · 이미지', plan: 'pro', release: '1.3', alias: '파워포인트 엑셀 office' },
  { fmt: 'Keynote / Numbers / Pages', kind: 'doc', to: 'PDF · 이미지', plan: 'pro', release: '1.3', alias: 'iwork' },
  { fmt: 'EPUB', kind: 'doc', to: 'PDF', plan: 'pro', release: '1.3', alias: '전자책' },
];
