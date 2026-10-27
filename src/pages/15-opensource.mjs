import { site } from '../config.mjs';
import { docPage } from '../layout.mjs';
import { windowsSources } from '../data/windows-sources.mjs';

export const path = 'opensource/';
export const priority = 0.3;

// Where the LGPL sources are. Mac: inside the app bundle. Windows: release assets on this (public) repo, linked
// from the app's license notices (Windows app repo docs/LICENSES.md). Shrinkwrap's own code stays private.

const repo = 'https://github.com/bbdyno/Kumquat-Page/releases';

function size(bytes) {
  if (bytes >= 1_000_000) return `${(bytes / 1_000_000).toFixed(1)} MB`;
  if (bytes >= 1_000) return `${Math.round(bytes / 1_000)} KB`;
  return `${bytes} B`;
}

function fileTable(release, labels) {
  const groups = [['ffmpeg', labels.ffmpeg], ['libvips', labels.libvips]];
  return groups.map(([group, title]) => {
    const rows = release.files.filter(([, g]) => g === group).map(([name, , bytes, hash]) =>
      `<tr><td><a href="${repo}/download/${release.tag}/${name}">${name}</a></td><td class="mono" style="white-space:nowrap">${size(bytes)}</td><td class="mono" style="word-break:break-all;font-size:.78em">${hash}</td></tr>`).join('\n              ');
    return `<h3>${title}</h3>
          <div class="table-scroll"><table>
            <thead><tr><th scope="col">${labels.file}</th><th scope="col">${labels.size}</th><th scope="col">SHA-256</th></tr></thead>
            <tbody>
              ${rows}
            </tbody>
          </table></div>`;
  }).join('\n          ') + `
          <p>${labels.all}: <a href="${repo}/download/${release.tag}/SHA256SUMS.txt">SHA256SUMS.txt</a></p>`;
}

function total(release) {
  return size(release.files.reduce((sum, [, , bytes]) => sum + bytes, 0));
}

const ko = (ctx) => {
  const release = windowsSources[0];
  return docPage(ctx, {
    eyebrow: '오픈소스',
    title: '오픈소스 구성 요소와 소스 코드',
    lede: 'Shrinkwrap은 영상·오디오 변환에 FFmpeg를, Windows 판은 이미지 변환에 libvips를 씁니다. 이 구성 요소는 LGPL로 배포되며, 원본 소스를 누구나 무료로 받을 수 있습니다. Shrinkwrap 자체 코드는 오픈소스가 아닙니다.',
    aside: `<h2>목차</h2><ol><li><a href="#mac">Mac</a></li><li><a href="#windows">Windows</a></li><li><a href="#rights">사용자의 권리</a></li></ol>`,
    body: `          <h2 id="mac">Mac</h2>
          <p>Mac 앱은 FFmpeg 7.1.1(LAME 3.100, Opus 1.5.2, libvpx 1.15.0 포함)을 별도 도우미 프로그램으로 실행합니다. 원본 소스와 빌드 스크립트, 체크섬은 앱 안에 함께 들어 있습니다.</p>
          <p><code>Contents/Resources/OpenSource</code><br>Finder에서 응용 프로그램 폴더의 Shrinkwrap을 오른쪽 클릭 › 패키지 내용 보기 › Contents › Resources › OpenSource. 라이선스 원문은 앱의 설정 › 정보 › 오픈소스 라이선스에서 볼 수 있습니다.</p>

          <h2 id="windows">Windows</h2>
          <p>Windows 앱은 FFmpeg 도우미(<code>Helpers</code> 폴더)와 이미지 라이브러리 <code>libvips-42.dll</code>을 함께 배포합니다. 앱 용량을 줄이려고 원본 소스(${total(release)})는 앱에 넣지 않고 여기서 받을 수 있게 했습니다. 앱 설치 폴더의 <code>OpenSource</code> 폴더에는 파일 목록과 체크섬, 빌드 스크립트가 있습니다.</p>
          <p>이 파일들은 해당 버전의 Shrinkwrap을 배포하는 동안, 그리고 그 뒤로도 최소 3년 동안 무료로 받을 수 있게 둡니다. 묶음 전체: <a href="${repo}/tag/${release.tag}">${release.tag}</a> (${release.versions})</p>
          ${fileTable(release, { ffmpeg: 'FFmpeg 도우미', libvips: 'libvips-42.dll', all: '모든 파일의 체크섬', file: '파일', size: '크기' })}

          <h2 id="rights">사용자의 권리</h2>
          <p>Shrinkwrap의 이용 조건은 이 구성 요소에 대한 LGPL상의 권리를 제한하지 않습니다. 여기에는 구성 요소를 수정하거나 바꿔 끼울 권리, 그 수정을 디버깅하기 위해 역설계할 권리가 포함됩니다. 바꿔 끼우는 방법은 앱 안 라이선스 고지와 <code>OpenSource</code> 폴더의 README에 있습니다.</p>
          <p>문의: <a href="mailto:${site.email}">${site.email}</a></p>`,
  });
};

const en = (ctx) => {
  const release = windowsSources[0];
  return docPage(ctx, {
    eyebrow: 'Open source',
    title: 'Open source components and source code',
    lede: 'Shrinkwrap uses FFmpeg for video and audio, and the Windows version uses libvips for images. These components are licensed under the LGPL, and their source code is free for anyone to download. Shrinkwrap’s own code is not open source.',
    aside: `<h2>Contents</h2><ol><li><a href="#mac">Mac</a></li><li><a href="#windows">Windows</a></li><li><a href="#rights">Your rights</a></li></ol>`,
    body: `          <h2 id="mac">Mac</h2>
          <p>The Mac app runs FFmpeg 7.1.1 (with LAME 3.100, Opus 1.5.2 and libvpx 1.15.0) as a separate helper program. Its original source code, build script and checksums are included inside the app.</p>
          <p><code>Contents/Resources/OpenSource</code><br>In Finder, right-click Shrinkwrap in Applications › Show Package Contents › Contents › Resources › OpenSource. License texts are in the app under Settings › About › Open Source Licenses.</p>

          <h2 id="windows">Windows</h2>
          <p>The Windows app ships the FFmpeg helper (in the <code>Helpers</code> folder) and the image library <code>libvips-42.dll</code>. To keep the app small, their source code (${total(release)}) is not inside the app; download it here. The <code>OpenSource</code> folder in the app’s installation folder lists the files with their checksums and holds the build scripts.</p>
          <p>These files stay available free of charge for as long as that version of Shrinkwrap is offered, and for at least three years after that. Whole set: <a href="${repo}/tag/${release.tag}">${release.tag}</a> (${release.versions})</p>
          ${fileTable(release, { ffmpeg: 'FFmpeg helper', libvips: 'libvips-42.dll', all: 'Checksums of every file', file: 'File', size: 'Size' })}

          <h2 id="rights">Your rights</h2>
          <p>Nothing in Shrinkwrap’s license terms restricts your rights under the LGPL for these components, including modifying or replacing them and reverse engineering for debugging such modifications. How to replace them is explained in the app’s license notices and in the README files in the <code>OpenSource</code> folder.</p>
          <p>Contact: <a href="mailto:${site.email}">${site.email}</a></p>`,
  });
};

export function render(ctx) {
  return ctx.lang === 'ko'
    ? { title: '오픈소스', description: 'Shrinkwrap이 쓰는 오픈소스 구성 요소(FFmpeg, libvips)와 원본 소스 코드 받기.', body: ko(ctx) }
    : { title: 'Open source', description: 'Open source components in Shrinkwrap (FFmpeg, libvips) and where to download their source code.', body: en(ctx) };
}
