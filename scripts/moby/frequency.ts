// cspell:ignore mwords
import fs from 'node:fs/promises';
import path from 'node:path';

import {
  camelCase,
  empty,
  err,
  locatePackageRoot,
  quote,
  space,
  splitLines,
} from '@technobuddha/library';
import { saveRaw, saveTerser } from '@technobuddha/project';

import { data, externalReference } from '../helpers/paths.ts';
import { readDocumentation } from '../helpers/read-documentation.ts';

const root = await locatePackageRoot();
if (!root) {
  err('Could not find root directory');
  process.exit(1);
}

// prettier-ignore
const files: [string, string, number][] = [
  ['10002fr.equ', 'frequency-usenet', 1],
]

await Promise.all(
  files.map(async ([input, output, skip]) =>
    fs
      .readFile(path.join(externalReference, 'moby', 'mwords', input), 'utf-8')
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

        const code: string[] = [`export const ${camelCase(`moby-${output}`)} = {`];
        for (const [word, freq] of Array.from(frequencies.entries()).sort(
          ([, a], [, b]) => b - a,
        )) {
          code.push(`${quote(word)}: ${freq},`);
        }
        code.push('};', empty);

        const decl = [
          ...docs,
          `export declare const ${camelCase(`moby-${output}`)}: Record<string, number>;`,
        ];

        return Promise.all([
          saveTerser(path.join(data, `moby-${output}.js`), code),
          saveRaw(path.join(data, `moby-${output}.d.ts`), decl),
        ]);
      }),
  ),
);
