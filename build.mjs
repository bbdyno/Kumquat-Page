// Zero-dependency static build: src/pages/*.mjs + public/ → dist/.
// Korean lives at the site root, English under /en/. All internal links are relative,
// so the output works under /Kumquat-Page/ on GitHub Pages and on a custom domain.

import { readdir, mkdir, writeFile, cp, rm } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { site, storeBadge } from './src/config.mjs';
import { layout } from './src/layout.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const dist = join(here, 'dist');
const pagesDir = join(here, 'src/pages');

const outDirFor = (lang, path) => (lang === 'en' ? 'en/' : '') + path;

async function loadPages() {
  const files = (await readdir(pagesDir)).filter((f) => f.endsWith('.mjs') && !f.startsWith('_')).sort();
  return Promise.all(files.map(async (f) => import(pathToFileURL(join(pagesDir, f)).href)));
}

async function build() {
  await rm(dist, { recursive: true, force: true });
  await cp(join(here, 'public'), dist, { recursive: true });

  const pages = await loadPages();
  const sitemap = [];

  for (const mod of pages) {
    const langs = mod.langs || ['ko', 'en'];
    const alternates = langs.map((lang) => ({ lang, outDir: outDirFor(lang, mod.path) }));

    for (const lang of langs) {
      const outDir = outDirFor(lang, mod.path);
      const depth = outDir.split('/').filter(Boolean).length;
      const root = mod.absoluteRoot ? new URL(site.url).pathname : '../'.repeat(depth);
      const langRoot = root + (lang === 'en' ? 'en/' : '');
      const ctx = {
        lang,
        outDir,
        root,
        alternates,
        isHome: mod.path === '',
        badge: storeBadge(lang),
        href: (p) => (p === '' ? langRoot || './' : langRoot + p),
        t: (ko, en) => (lang === 'ko' ? ko : en),
      };
      const page = await mod.render(ctx);
      const file = join(dist, outDir, mod.fileName || 'index.html');
      await mkdir(dirname(file), { recursive: true });
      await writeFile(file, layout(ctx, page));
      if (!mod.noIndex) sitemap.push({ outDir, alternates, priority: mod.priority ?? 0.6 });
    }
  }

  const urls = sitemap
    .map(
      (u) => `  <url>
    <loc>${site.url}${u.outDir}</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
    <priority>${u.priority}</priority>
${u.alternates.map((a) => `    <xhtml:link rel="alternate" hreflang="${a.lang}" href="${site.url}${a.outDir}"/>`).join('\n')}
  </url>`,
    )
    .join('\n');
  await writeFile(
    join(dist, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`,
  );
  await writeFile(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site.url}sitemap.xml\n`);

  console.log(`Built ${sitemap.length} indexed pages into dist/`);
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
