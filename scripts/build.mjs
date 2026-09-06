import { cp, mkdir, rm } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = process.cwd();
const dist = resolve(root, 'dist');
const files = ['index.html', 'og-pordosol.svg', 'robots.txt', 'sitemap.xml', '_headers'];

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const file of files) {
  await cp(resolve(root, file), resolve(dist, file));
}

console.log(`✓ Cloudflare build pronto em dist/ (${files.length} arquivos)`);
