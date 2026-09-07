import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');

console.log('--- Iniciando Build da Pôr do Sol V3 ---');

if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    for (const child of fs.readdirSync(src)) {
      copyRecursive(path.join(src, child), path.join(dest, child));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

const filesToCopy = ['index.html', 'styles.css', 'app.js', '_headers', 'robots.txt', 'sitemap.xml'];
for (const file of filesToCopy) {
  const src = path.join(rootDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(distDir, file));
    console.log(`✓ Copiado: ${file}`);
  }
}

const assetsSrc = path.join(rootDir, 'assets');
if (fs.existsSync(assetsSrc)) {
  copyRecursive(assetsSrc, path.join(distDir, 'assets'));
  console.log('✓ Copiada pasta assets/');
}

console.log('--- Build finalizado com sucesso em dist/ ---');
