// Local preview of dist/, mounted under the same base path GitHub Pages uses
// (e.g. /Kumquat-Page/), so relative links and the 404 page behave like production.

import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import { site } from './src/config.mjs';

const dist = fileURLToPath(new URL('./dist/', import.meta.url));
const base = new URL(site.url).pathname;
const port = Number(process.env.PORT) || 4321;
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
};

createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost');
  if (!url.pathname.startsWith(base)) {
    res.writeHead(302, { Location: base });
    return res.end();
  }
  let path = normalize(decodeURIComponent(url.pathname.slice(base.length)));
  if (path.startsWith('..')) path = '';
  let file = join(dist, path);
  try {
    if ((await stat(file)).isDirectory()) {
      if (!url.pathname.endsWith('/')) {
        res.writeHead(301, { Location: url.pathname + '/' });
        return res.end();
      }
      file = join(file, 'index.html');
    }
    const body = await readFile(file);
    res.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    res.end(body);
  } catch {
    res.writeHead(404, { 'Content-Type': types['.html'] });
    res.end(await readFile(join(dist, '404.html')).catch(() => 'Not found'));
  }
}).listen(port, () => console.log(`Preview: http://localhost:${port}${base}`));
