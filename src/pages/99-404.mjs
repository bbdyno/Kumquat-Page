// GitHub Pages serves /404.html at any missing URL, so links here start from the site's base path.
export const path = '';
export const fileName = '404.html';
export const langs = ['ko'];
export const absoluteRoot = true;
export const noIndex = true;

export function render(ctx) {
  return {
    title: '페이지를 찾을 수 없습니다 · Page not found',
    description: '요청한 페이지가 없습니다.',
    head: '<meta name="robots" content="noindex">',
    body: `    <section class="notfound wrap">
      <p class="eyebrow">404</p>
      <h1>여기엔 아무것도 없어요.</h1>
      <p>주소가 바뀌었거나 삭제된 페이지입니다. <span lang="en">This page doesn’t exist.</span></p>
      <p><a class="button" href="${ctx.root}">홈으로</a> <a class="button button-ghost" href="${ctx.root}en/" lang="en">English home</a></p>
    </section>`,
  };
}
