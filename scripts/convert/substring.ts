// cspell:ignore popul kjvf mwords
import fs from 'node:fs/promises';
import path from 'node:path';

import { camelCase, empty, quote, splitLines } from '@technobuddha/library';
import { Iconv } from 'iconv';

import { header } from '../helpers/header.ts';
import { readDocumentation } from '../helpers/read-documentation.ts';
import { savePretty } from '../helpers/save-pretty.ts';

// prettier-ignore
const files: [string, string][] = [
  ['467popul.arf', 'substring-fiction'],
  ['1185kjvf.req', 'substring-king-james'],
];

export async function substring(root: string): Promise<void> {
  // eslint - disable-next-line unicorn/text-encoding-identifier-case
  const iconv = new Iconv('Macintosh', 'utf8');

  await Promise.all(
    files.map(async ([input, output]) =>
      fs.readFile(path.join(root, 'moby', 'mwords', input)).then(async (buffer) => {
        const docs = await readDocumentation(root, `moby-${output}`);

        const substrings: Map<string, number> = new Map();
        for (const line of splitLines(iconv.convert(buffer).toString())) {
          if (line) {
            const [freq, chars] = line.split('<');

            substrings.set(chars.slice(0, -1), Number(freq));
          }
        }
        const code: string[] = [
          ...header,
          ...docs,
          `export const ${camelCase(`moby-${output}`)}: Record<string, number> = {`,
        ];
        for (const [chars, freq] of Array.from(substrings.entries()).sort(
          ([, a], [, b]) => b - a,
        )) {
          code.push(`${quote(chars)}: ${freq},`);
        }
        code.push('};', empty);
        return savePretty(
          path.join(root, 'src', '@data', `moby-${output}.ts`),
          code.join('\n'),
          '//',
        );
      }),
    ),
  );

  return undefined;
}
