import { cp, mkdir, readdir, rm } from 'node:fs/promises';
import { join } from 'node:path';

const root = process.cwd();
const output = join(root, 'dist');
const excluded = new Set([
  '.git',
  '.github',
  '.gitignore',
  '.wrangler',
  'dist',
  'node_modules',
  'README.md',
  'package.json',
  'package-lock.json',
  'build.mjs'
]);

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

const entries = await readdir(root, { withFileTypes: true });
let copied = 0;

for (const entry of entries) {
  if (excluded.has(entry.name) || entry.name.startsWith('.')) continue;

  await cp(join(root, entry.name), join(output, entry.name), {
    recursive: entry.isDirectory()
  });
  copied += 1;
}

console.log(`Static site build complete: ${copied} root entries copied to dist/.`);
