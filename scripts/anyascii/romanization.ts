/* eslint-disable no-bitwise */
import path from 'node:path';

import { empty, escapeJS, quote } from '@technobuddha/library';

import { data, externalReference } from '../helpers/paths.ts';
import { readDocumentation } from '../helpers/read-documentation.ts';
import { readLicense } from '../helpers/read-license.ts';
import { saveRaw } from '../helpers/save-raw.ts';
import { saveTerser } from '../helpers/save-terser.ts';

const { default: block } = await import(path.join(externalReference, 'anyascii', 'block.js'));

const romanize: Map<number, string> = new Map();
for (let blockNum = 0; blockNum < 0x10ff; ++blockNum) {
  const romanized = block(blockNum);
  if (romanized) {
    const entries = romanized.split('\t');
    for (let i = 0; i < entries.length; ++i) {
      const codePoint = (blockNum << 8) + i;
      if (entries[i]) {
        romanize.set(codePoint, entries[i]);
      }
    }
  }
}

for (let i = 32; i < 127; ++i) {
  romanize.set(i, String.fromCodePoint(i));
}

const doc = await readDocumentation('romanization');
const license = await readLicense(
  path.join(externalReference, 'anyascii', 'LICENSE'),
  'https://github.com/anyascii/anyascii',
);

const code = ['export const romanization = {'];

for (const [codePoint, romanized] of Array.from(romanize.entries()).sort(([a], [b]) => a - b)) {
  code.push(`${quote(escapeJS(String.fromCodePoint(codePoint)))}: ${quote(escapeJS(romanized))},`);
}
code.push('};', empty);

const decl = [
  ...license,
  empty,
  ...doc,
  'export declare const romanization: Record<string, string>;',
  empty,
];

await Promise.all([
  saveTerser(path.join(data, 'romanization.js'), code, { quiet: true }),
  saveRaw(path.join(data, 'romanization.d.ts'), decl, { quiet: true }),
]);
