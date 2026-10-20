import { docPage, storeCta } from '../layout.mjs';
import { guides } from './_guides.mjs';

export const path = 'guides/';
export const langs = ['ko'];
export const priority = 0.7;

export function render(ctx) {
  const cards = guides
    .map((g) => `<a class="card" href="${g.slug}/"><span class="pill ${g.pill === '무료로 가능' ? 'free' : ''}">${g.pill}</span><h2>${g.title}</h2><p>${g.summary}</p><span class="arrow">읽기 →</span></a>`)
    .join('\n            ');
  return {
    title: '목적지 가이드 · 업로드 규격 맞추기',
    description: '홈택스, 정부24 등 국내 사이트에 파일을 올릴 때 형식과 용량, 사진 규격을 맞추는 방법을 Mac 기준으로 정리했습니다.',
    body: docPage(ctx, {
      eyebrow: '목적지 가이드',
      title: '올릴 곳마다 다른 규격, 한 번에 맞추기',
      lede: '“파일 용량이 너무 큽니다”, “허용되지 않는 형식입니다”를 만났을 때 Mac에서 해결하는 방법입니다. 기본 앱으로 하는 방법을 먼저, Kumquat으로 줄이는 방법을 뒤에 적었습니다.',
      body: `          <div class="card-grid">
            ${cards}
          </div>
          <div class="callout"><p>가이드는 계속 추가합니다. 다뤄 줬으면 하는 사이트가 있으면 <a href="../support/#report">지원 페이지</a>로 알려 주세요.</p></div>
          ${storeCta(ctx, 'guides-index')}`,
    }),
  };
}
