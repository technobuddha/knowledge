import path from 'node:path';

import { empty, escapeJS, isMark, isPrintable, quote } from '@technobuddha/library';
import { err, locateRootDirectory } from '@technobuddha/library/node';

import { unicodeData } from '../../src/@data/unicode-data.ts';

import { header } from '../helpers/header.ts';
import { readDocumentation } from '../helpers/read-documentation.ts';
import { savePretty } from '../helpers/save-pretty.ts';

import { asciiTransform } from './ascii-transform.ts';
import { uDisplay } from '../helpers/u-display.ts';

const root = await locateRootDirectory();
if (!root) {
  err('Could not find root directory');
  process.exit(1);
}

const unaccent: Map<string, string> = new Map(Object.entries(asciiTransform));

const doc = await readDocumentation(root, 'unaccent');

const code: string[] = [
  // '/* eslint-disable @typescript-eslint/naming-convention */',
  ...header,
  ...doc,
  empty,
  // '// prettier-ignore',
  'export const unaccent: Record<number, string> = {',
];

for (const [char, info] of Object.entries(unicodeData).sort(
  ([, { codePoint: cp1 }], [, { codePoint: cp2 }]) => cp1 - cp2,
)) {
  const { codePoint, name } = info;
  const unaccented = unaccent.has(char) ? quote(escapeJS(unaccent.get(char)!)) : 'undefined';
  code.push(
    `0x${codePoint.toString(16).toUpperCase().padStart(6, '0')}: ${unaccented},  ${uDisplay(info)}  ${name}`,
  );
}

// for (const [from, to] of Array.from(unaccent.entries()).sort(
//   ([a], [b]) => a.codePointAt(0)! - b.codePointAt(0)!,
// )) {
//   code.push(`${quote(escapeJS(from))}: ${quote(escapeJS(to))},`);
// }
code.push('};', empty);

await savePretty(path.join(root, 'src', '@data', 'unaccent.ts'), code.join('\n'), '//');
