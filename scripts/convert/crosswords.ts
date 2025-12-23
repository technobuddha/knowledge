// cspell:ignore offi mwords
import fs from 'node:fs/promises';
import path from 'node:path';

import { empty, quote, splitLines } from '@technobuddha/library';
import { Iconv } from 'iconv';

import { header } from '../helpers/header.ts';
import { readDocumentation } from '../helpers/read-documentation.ts';
import { savePretty } from '../helpers/save-pretty.ts';

export async function crosswords(root: string): Promise<void> {
  // eslint - disable-next-line unicorn/text-encoding-identifier-case
  const iconv = new Iconv('Macintosh', 'utf8');

  const docFirst = await readDocumentation(root, 'moby-scrabble-first');
  const docDelta = await readDocumentation(root, 'moby-scrabble-delta');
  const docSecond = await readDocumentation(root, 'moby-scrabble-second');

  const firstEdition: Set<string> = new Set();
  const delta: Set<string> = new Set();
  const secondEdition: Set<string> = new Set();

  await Promise.all([
    fs.readFile(path.join(root, 'moby', 'mwords', '113809of.fic')).then(async (buffer) => {
      for (const line of splitLines(iconv.convert(buffer).toString())) {
        if (line) {
          firstEdition.add(line);
          secondEdition.add(line);
        }
      }
      return undefined;
    }),
    fs.readFile(path.join(root, 'moby', 'mwords', '4160offi.cia')).then(async (buffer) => {
      for (const line of splitLines(iconv.convert(buffer).toString())) {
        if (line) {
          delta.add(line);
          secondEdition.add(line);
        }
      }
      return undefined;
    }),
  ]);

  const code1st: string[] = [
    ...header,
    ...docFirst,
    'export const mobyCrosswords1stEdition: string[] = [',
  ];
  for (const word of Array.from(firstEdition).sort((a, b) =>
    a.localeCompare(b, 'en', { sensitivity: 'base' }),
  )) {
    code1st.push(`${quote(word)},`);
  }
  code1st.push('];', empty);

  const codeDelta: string[] = [
    ...header,
    ...docDelta,
    'export const mobyCrosswordsDelta: string[] = [',
  ];
  for (const word of Array.from(delta).sort((a, b) =>
    a.localeCompare(b, 'en', { sensitivity: 'base' }),
  )) {
    codeDelta.push(`${quote(word)},`);
  }
  codeDelta.push('];', empty);

  const code2nd: string[] = [
    ...header,
    ...docSecond,
    'export const mobyCrosswords2ndEdition: string[] = [',
  ];
  for (const word of Array.from(secondEdition).sort((a, b) =>
    a.localeCompare(b, 'en', { sensitivity: 'base' }),
  )) {
    code2nd.push(`${quote(word)},`);
  }
  code2nd.push('];', empty);

  await Promise.all([
    savePretty(
      path.join(root, 'src', '@data', 'moby-crosswords-1st-edition.ts'),
      code1st.join('\n'),
      '//',
    ),
    savePretty(
      path.join(root, 'src', '@data', 'moby-crosswords-delta.ts'),
      codeDelta.join('\n'),
      '//',
    ),
    savePretty(
      path.join(root, 'src', '@data', 'moby-crosswords-2nd-edition.ts'),
      code2nd.join('\n'),
      '//',
    ),
  ]);
}
