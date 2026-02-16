// cspell:ignore mwords
import fs from 'node:fs/promises';
import path from 'node:path';

import { camelCase, empty, quote, space, splitLines } from '@technobuddha/library';
import { err, locatePackageRoot } from '@technobuddha/library/node';

import { header } from '../helpers/header.ts';
import { readDocumentation } from '../helpers/read-documentation.ts';
import { savePretty } from '../helpers/save-pretty.ts';

const root = await locatePackageRoot();
if (!root) {
  err('Could not find root directory');
  process.exit(1);
}

// prettier-ignore
const files: [string, string, number][] = [
  ['10002fr.equ', 'frequency-usenet', 1],
]

async function frequency(root: string): Promise<void> {
  await Promise.all(
    files.map(async ([input, output, skip]) =>
      fs
        .readFile(path.join(root, 'reference', 'moby', 'mwords', input), 'utf-8')
        .then(async (buffer) => {
          const docs = await readDocumentation(root, `moby-${output}`);
          const frequencies: Map<string, number> = new Map();

          let skipped = 0;
          for (const line of splitLines(buffer)) {
            if (line && !line.startsWith('#')) {
              if (skipped++ < skip) {
                continue;
              }
              const [freq, word] = line.split(space);
              frequencies.set(word, Number(freq));
            }
          }

          const code: string[] = [
            ...header,
            ...docs,
            `export const ${camelCase(`moby-${output}`)}: Record<string, number> = {`,
          ];
          for (const [word, freq] of Array.from(frequencies.entries()).sort(
            ([, a], [, b]) => b - a,
          )) {
            code.push(`${quote(word)}: ${freq},`);
          }
          code.push('};', empty);
          const file = [...header, ...code, empty].join('\n');
          return savePretty(path.join(root, 'src', '@data', `moby-${output}.ts`), file, '//');
        }),
    ),
  );
}

await frequency(root);
