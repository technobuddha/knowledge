import fs from 'node:fs/promises';
import path from 'node:path';

import { empty, parseCsv, quote, unbannerize } from '@technobuddha/library';
import { err, locatePackageRoot } from '@technobuddha/library/node';

import { header } from '../helpers/header.ts';
import { readDocumentation } from '../helpers/read-documentation.ts';
import { readLicense } from '../helpers/read-license.ts';
import { savePretty } from '../helpers/save-pretty.ts';

const root = await locatePackageRoot();
if (!root) {
  err('Could not find root directory');
  process.exit(1);
}

await fs
  .readFile(path.join(root, 'reference', 'unicode', 'unicode-data.txt'), 'utf-8')
  .then(async (data) => {
    const csv = parseCsv(unbannerize(data), { delimiter: ';', hasHeaders: false });

    const doc = await readDocumentation(root, 'unicode-character-classes');
    const license = await readLicense(
      path.join('reference', 'unicode', 'license.txt'),
      'https://www.unicode.org/Public',
    );
    const code: string[] = [
      ...header,
      ...license,
      empty,
      ...doc,
      empty,
      '// prettier-ignore',
      'export const unicodeCharacterClasses: (string|undefined)[] = [',
    ];

    let array = empty;
    let index = 0;
    for (const entry of csv) {
      const codePoint = Number.parseInt(entry[0], 16);
      const category = entry[2];

      while (index++ < codePoint) {
        array += ',';
      }
      array += `${quote(category)},`;
    }
    code.push(array, '];', empty);

    await savePretty(
      path.join(root, 'src', '@data', 'unicode-character-class.ts'),
      code.join('\n'),
      '//',
    );

    return undefined;
  });
