import { cp, mkdir, rm } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = process.cwd();
const dist = resolve(root, 'dist');
const files = [
  'index.html',
  'styles.css',
  'app.js',
  'og-pordosol.svg',
  'robots.txt',
  'sitemap.xml',
  '_headers',
  'Catálogo.Pôr.do.Sol.pdf'
];

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const file of files) {
  await cp(resolve(root, file), resolve(dist, file));
}

// Copiar pasta de assets de produção para dist
await cp(resolve(root, 'assets'), resolve(dist, 'assets'), { recursive: true });

console.log(`✓ Cloudflare build pronto em dist/ (${files.length} arquivos + pasta assets/)`);
