import { cp, mkdir, writeFile } from 'node:fs/promises';
await mkdir('dist/itcs', { recursive: true });
await cp('index.html', 'dist/index.html');
await cp('itcs/dist', 'dist/itcs', { recursive: true });
await writeFile('dist/.nojekyll', '');
