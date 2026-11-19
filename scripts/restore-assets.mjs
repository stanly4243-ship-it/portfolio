import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
async function restore(directory) {
  for (const item of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, item.name);
    if (item.isDirectory()) await restore(path);
    else if (path.endsWith('.base64')) await writeFile(path.slice(0, -7), Buffer.from(await readFile(path, 'utf8'), 'base64'));
  }
}
await restore('itcs/public');
