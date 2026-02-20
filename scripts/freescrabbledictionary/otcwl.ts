// cspell:ignore freescrabbledictionary
import fs from 'node:fs/promises';
import path from 'node:path';

import { empty, quote, range, strip } from '@technobuddha/library';

import { data, reference } from '../helpers/paths.ts';
import { readDocumentation } from '../helpers/read-documentation.ts';
import { saveRaw } from '../helpers/save-raw.ts';
import { saveTerser } from '../helpers/save-terser.ts';

const doc = await readDocumentation('freescrabbledictionary');

const code = ['export const fsd = ['];

for (const letter of range('a', 'z')) {
  await fs
    .readFile(path.join(reference, 'freescrabbledictionary', `words-${letter}.jsonc`), 'utf-8')
    .then(async (raw) => {
      const json = JSON.parse(strip(raw, { comments: true })) as { word: string }[];

      for (const { word } of json) {
        code.push(`${quote(word)},`);
      }
    });
}
code.push('];', empty);

const decl = [...doc, 'export declare const fsd: string[];'];

await Promise.all([
  saveTerser(path.join(data, 'fsd.js'), code, { quiet: true }),
  saveRaw(path.join(data, 'fsd.d.ts'), decl, { quiet: true }),
]);
