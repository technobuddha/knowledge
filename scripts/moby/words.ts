// cspell:ignore acro fema mwords
import fs from 'node:fs/promises';
import path from 'node:path';

import { camelCase, empty, quote, splitLines } from '@technobuddha/library';
import { err, locatePackageRoot } from '@technobuddha/library/node';

import { readDocumentation } from '../helpers/read-documentation.ts';
import { saveRaw } from '../helpers/save-raw.ts';
import { saveTerser } from '../helpers/save-terser.ts';

const root = await locatePackageRoot();
if (!root) {
  err('Could not find root directory');
  process.exit(1);
}

// prettier-ignore
const files: [string, string, number][] = [
  [ '366often.mis', 'misspelled',     0],
  [ '3897male.nam', 'male-names',     0],
  [ '6213acro.nym', 'acronyms',       0],
  [ '4946fema.len', 'female-names',   0],
  [ '10001fr.equ',  'frequent-words', 1],
  [ '74550com.mon', 'common',         0],
  [ '256772co.mpo', 'compound-words', 0],
  [ '354984si.ngl', 'single-words',   0],
];

async function words(root: string): Promise<void> {
  await Promise.all(
    files.map(async ([input, output, skip]) => {
      const docs = await readDocumentation(root, `moby-${output}`);

      return fs
        .readFile(path.join(root, 'reference', 'moby', 'mwords', input), 'utf-8')
        .then(async (buffer) => {
          const words: Set<string> = new Set();

          let skipped = 0;
          for (const line of splitLines(buffer)) {
            if (line && !line.startsWith('#')) {
              if (skipped++ < skip) {
                continue;
              }
              words.add(line);
            }
          }

          const code: string[] = [`export const ${camelCase(`moby-${output}`)} = [`];
          for (const word of Array.from(words).sort((a, b) =>
            a.localeCompare(b, 'en', { sensitivity: 'base' }),
          )) {
            code.push(`${quote(word)},`);
          }
          code.push('];', empty);
          await saveTerser(path.join(root, 'dist', `moby-${output}.js`), code, { quiet: true });

          const decl = [...docs, `export declare const ${camelCase(`moby-${output}`)}: string[];`];
          return saveRaw(path.join(root, 'dist', `moby-${output}.d.ts`), decl, { quiet: true });
        });
    }),
  );

  return undefined;
}

await words(root);
