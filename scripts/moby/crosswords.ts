// cspell:ignore offi mwords
import fs from 'node:fs/promises';
import path from 'node:path';

import { empty, quote, splitLines } from '@technobuddha/library';
import { err, locatePackageRoot } from '@technobuddha/library/node';

import { readDocumentation } from '../helpers/read-documentation.ts';
import { saveRaw } from '../helpers/save-raw.ts';
import { saveTerser } from '../helpers/save-terser.ts';

const root = await locatePackageRoot();
if (!root) {
  err('Could not find root directory');
  process.exit(1);
}

const docFirst = await readDocumentation(root, 'moby-scrabble-first');
const docSecond = await readDocumentation(root, 'moby-scrabble-second');

const firstEdition: Set<string> = new Set();
const secondEdition: Set<string> = new Set();

await Promise.all([
  fs
    .readFile(path.join(root, 'reference', 'moby', 'mwords', '113809of.fic'), 'utf-8')
    .then(async (buffer) => {
      for (const line of splitLines(buffer)) {
        if (line && !line.startsWith('#')) {
          firstEdition.add(line);
          secondEdition.add(line);
        }
      }
      return undefined;
    }),
  fs
    .readFile(path.join(root, 'reference', 'moby', 'mwords', '4160offi.cia'), 'utf-8')
    .then(async (buffer) => {
      for (const line of splitLines(buffer)) {
        if (line && !line.startsWith('#')) {
          secondEdition.add(line);
        }
      }
      return undefined;
    }),
]);

const code1: string[] = ['export const mobyCrosswords1stEdition = ['];
for (const word of Array.from(firstEdition).sort((a, b) =>
  a.localeCompare(b, 'en', { sensitivity: 'base' }),
)) {
  code1.push(`${quote(word)},`);
}
code1.push('];', empty);
const decl1 = [...docFirst, 'export declare const mobyCrosswords1stEdition: string[];', empty];

const code2 = ['export const mobyCrosswords2ndEdition = ['];
for (const word of Array.from(secondEdition).sort((a, b) =>
  a.localeCompare(b, 'en', { sensitivity: 'base' }),
)) {
  code2.push(`${quote(word)},`);
}
code2.push('];', empty);

const decl2 = [...docSecond, 'export declare const mobyCrosswords2ndEdition: string[];', empty];

await Promise.all([
  saveTerser(path.join(root, 'dist', 'moby-crosswords-1st-edition.js'), code1, { quiet: true }),
  saveTerser(path.join(root, 'dist', 'moby-crosswords-2nd-edition.js'), code2, { quiet: true }),
  saveRaw(path.join(root, 'dist', 'moby-crosswords-1st-edition.d.ts'), decl1, { quiet: true }),
  saveRaw(path.join(root, 'dist', 'moby-crosswords-2nd-edition.d.ts'), decl2, { quiet: true }),
]);
