// cspell:ignore freescrabbledictionary
import fs from 'node:fs/promises';
import path from 'node:path';

import { empty, quote, range, strip } from '@technobuddha/library';
import { err, locatePackageRoot } from '@technobuddha/library/node';

import { readDocumentation } from '../helpers/read-documentation.ts';
import { saveRaw } from '../helpers/save-raw.ts';
import { saveTerser } from '../helpers/save-terser.ts';

const root = await locatePackageRoot();
if (!root) {
  err('Could not find root directory');
  process.exit(1);
}

const doc = await readDocumentation(root, 'freescrabbledictionary');

const code = ['export const fsd = ['];

for (const letter of range('a', 'z')) {
  await fs
    .readFile(
      path.join(root, 'reference', 'freescrabbledictionary', `words-${letter}.jsonc`),
      'utf-8',
    )
    .then(async (raw) => {
      const json = JSON.parse(strip(raw, { comments: true })) as { word: string }[];

      for (const { word } of json) {
        code.push(`${quote(word)},`);
      }
    });
}
code.push('];', empty);

await saveTerser(path.join(root, 'dist', 'fsd.js'), code, { quiet: true });

const decl = [...doc, 'export declare const fsd: string[];'];
await saveRaw(path.join(root, 'dist', 'fsd.d.ts'), decl, { quiet: true });
