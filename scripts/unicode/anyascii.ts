/* eslint-disable no-bitwise */
import path from 'node:path';

import { empty, escapeJS, quote } from '@technobuddha/library';
import { err, locateRootDirectory } from '@technobuddha/library/node';

import { header } from '../helpers/header.ts';
import { readDocumentation } from '../helpers/read-documentation.ts';
import { savePretty } from '../helpers/save-pretty.ts';

const root = await locateRootDirectory();
if (!root) {
  err('Could not find root directory');
  process.exit(1);
}

const { default: block } = await import(path.join(root, 'reference', 'anyascii', 'block.js'));

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

const doc = await readDocumentation(root, 'romanization');
const code = [
  ...header,
  ...doc,
  empty,
  '// prettier-ignore',
  'export const romanization: string[] = [',
];

let array = empty;
let index = 0;
for (const [codePoint, romanized] of Array.from(romanize.entries()).sort(([a], [b]) => a - b)) {
  while (index++ < codePoint) {
    array += ',';
  }
  array += `${quote(escapeJS(romanized))},`;
}
code.push(array, '];', empty);

await savePretty(path.join(root, 'src', '@data', 'romanization.ts'), code.join('\n'), '//');
