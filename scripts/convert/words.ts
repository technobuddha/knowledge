// cspell:ignore acro fema mwords
import fs from 'node:fs/promises';
import path from 'node:path';

import { camelCase, empty, quote, splitLines } from '@technobuddha/library';
import { Iconv } from 'iconv';

import { header } from '../helpers/header.ts';
import { readDocumentation } from '../helpers/read-documentation.ts';
import { savePretty } from '../helpers/save-pretty.ts';

// prettier-ignore
const files: [string, string, number][] = [
  [ '366often.mis', 'misspelled',     0],
  [ '3897male.nam', 'male-names',     0],
  [ '6213acro.nym', 'acronyms',       0],
  [ '4946fema.len', 'female-names',   0],
  [ '10001fr.equ',  'frequent-words', 2],
  [ '74550com.mon', 'common',         0],
  [ '256772co.mpo', 'compound-words', 0],
  [ '354984si.ngl', 'single-words',   0],
];

export async function words(root: string): Promise<void> {
  // eslint - disable-next-line unicorn/text-encoding-identifier-case
  const iconv = new Iconv('Macintosh', 'utf8');

  await Promise.all(
    files.map(async ([input, output, skip]) => {
      const docs = await readDocumentation(root, `moby-${output}`);

      return fs.readFile(path.join(root, 'moby', 'mwords', input)).then(async (buffer) => {
        const words: Set<string> = new Set();

        let skipped = 0;
        for (const line of splitLines(iconv.convert(buffer).toString())) {
          if (skipped++ < skip) {
            continue;
          }
          if (line) {
            words.add(line);
          }
        }

        const code: string[] = [
          ...header,
          ...docs,
          `export const ${camelCase(`moby-${output}`)}: string[] = [`,
        ];
        for (const word of Array.from(words).sort((a, b) =>
          a.localeCompare(b, 'en', { sensitivity: 'base' }),
        )) {
          code.push(`${quote(word)},`);
        }
        code.push('];', empty);
        return savePretty(
          path.join(root, 'src', '@data', `moby-${output}.ts`),
          code.join('\n'),
          '//',
        );
      });
    }),
  );

  return undefined;
}
