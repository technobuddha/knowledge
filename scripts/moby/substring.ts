// cspell:ignore popul kjvf mwords
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
const files: [string, string][] = [
  ['467popul.arf', 'substring-fiction'],
  ['1185kjvf.req', 'substring-king-james'],
];

async function substring(root: string): Promise<void> {
  await Promise.all(
    files.map(async ([input, output]) =>
      fs
        .readFile(path.join(root, 'reference', 'moby', 'mwords', input), 'utf-8')
        .then(async (buffer) => {
          const docs = await readDocumentation(root, `moby-${output}`);

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

          await saveTerser(path.join(root, 'dist', `moby-${output}.js`), code, { quiet: true });

          const decl = [
            ...docs,
            `export declare const ${camelCase(`moby-${output}`)}: Record<string, number>;`,
          ];
          return saveRaw(path.join(root, 'dist', `moby-${output}.d.ts`), decl, { quiet: true });
        }),
    ),
  );

  return undefined;
}

await substring(root);
