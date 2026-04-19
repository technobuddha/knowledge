// cspell:ignore popul kjvf mwords
import fs from 'node:fs/promises';
import path from 'node:path';

import { camelCase, empty, quote, splitLines } from '@technobuddha/library';
import { saveRaw, saveTerser } from '@technobuddha/project';

import { data, externalReference } from '../helpers/paths.ts';
import { readDocumentation } from '../helpers/read-documentation.ts';

// prettier-ignore
const files: [string, string][] = [
  ['467popul.arf', 'substring-fiction'],
  ['1185kjvf.req', 'substring-king-james'],
];

await Promise.all(
  files.flatMap(async ([input, output]) =>
    fs
      .readFile(path.join(externalReference, 'moby', 'mwords', input), 'utf-8')
      .then(async (buffer) => {
        const docs = await readDocumentation(`moby-${output}`);

        const substrings: Map<string, number> = new Map();
        for (const line of splitLines(buffer)) {
          if (line && !line.startsWith('#')) {
            const [freq, chars] = line.split('<');

            substrings.set(chars.slice(0, -1), Number(freq));
          }
        }
        const code: string[] = [`export const ${camelCase(`moby-${output}`)} = {`];
        for (const [chars, freq] of Array.from(substrings.entries()).sort(
          ([, a], [, b]) => b - a,
        )) {
          code.push(`${quote(chars)}: ${freq},`);
        }
        code.push('};', empty);

        const decl = [
          ...docs,
          `export declare const ${camelCase(`moby-${output}`)}: Record<string, number>;`,
        ];

        return [
          saveTerser(path.join(data, `moby-${output}.js`), code),
          saveRaw(path.join(data, `moby-${output}.d.ts`), decl),
        ];
      }),
  ),
);
