// cspell:ignore freescrabbledictionary
import fs from 'node:fs/promises';
import path from 'node:path';

import { empty, quote, range, strip } from '@technobuddha/library';
import { err, locateRootDirectory } from '@technobuddha/library/node';

import { header } from '../helpers/header.ts';
import { readDocumentation } from '../helpers/read-documentation.ts';
import { savePretty } from '../helpers/save-pretty.ts';

const root = await locateRootDirectory();
if (!root) {
  err('Could not find root directory');
  process.exit(1);
}

const doc = await readDocumentation(root, 'freescrabbledictionary');

const code = [...header, ...doc, empty, empty, 'export const fsd: string[] = ['];

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

await savePretty(path.join(root, 'src', '@data', 'fsd-otcwl.ts'), code.join('\n'), '//');
