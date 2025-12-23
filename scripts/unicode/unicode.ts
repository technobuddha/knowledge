import fs from 'node:fs/promises';
import path from 'node:path';

import { empty, escapeJS, parseCsv, quote, splitLines } from '@technobuddha/library';
import { err, locateRootDirectory } from '@technobuddha/library/node';

import { header } from '../helpers/header.ts';
import { readDocumentation } from '../helpers/read-documentation.ts';
import { savePretty } from '../helpers/save-pretty.ts';

const root = await locateRootDirectory();
if (!root) {
  err('Could not find root directory');
  process.exit(1);
}

function uEscape(codePoint: number): string {
  return codePoint <= 0xffff ?
      `\\u${codePoint.toString(16).toUpperCase().padStart(4, '0')}`
    : `\\u{${codePoint.toString(16).toUpperCase()}}`;
}

await fs
  .readFile(path.join(root, 'reference', 'unicode', 'unicode-data.txt'), 'utf-8')
  .then(async (data) => {
    const csv = parseCsv(
      splitLines(data)
        .filter((line) => line && !line.startsWith('#'))
        .join('\n'),
      { delimiter: ';', hasHeaders: false },
    );

    const doc = await readDocumentation(root, 'unicode-data');
    const code: string[] = [
      ...header,
      ...doc,
      empty,
      'export type UnicodeData = {',
      '  character: string;',
      '  codePoint: number;',
      '  name: string;',
      '  category: string;',
      '  combining: number;',
      '  bidirectional: string;',
      '  decomposition: string;',
      '  decimalDigit?: number;',
      '  digit?: number;',
      '  numeric?: number;',
      '  mirrored: boolean;',
      '  unicode1Name: string;',
      '  comment: string;',
      '  upperCase: string;',
      '  lowerCase: string;',
      '  titleCase: string;',
      '};',
      empty,
      'export const unicodeData: Record<string, UnicodeData> = {',
    ];

    for (const entry of csv) {
      const codePoint = Number.parseInt(entry[0], 16);
      const character = String.fromCodePoint(codePoint);
      const name = entry[1];
      const category = entry[2];
      const combining = Number(entry[3]);
      const bidirectional = entry[4];
      const decomposition = Number.parseInt(entry[5], 16);
      const decimalDigit = entry[6] === empty ? undefined : Number(entry[6]);
      const digit = entry[7] === empty ? undefined : Number(entry[7]);
      const numeric = entry[8] === empty ? undefined : Number(entry[8]);
      const mirrored = entry[9] === 'Y';
      const unicode1Name = entry[10];
      const comment = entry[11];
      const upperCase =
        entry[12] ? String.fromCodePoint(Number.parseInt(entry[12], 16)) : undefined;
      const lowerCase =
        entry[13] ? String.fromCodePoint(Number.parseInt(entry[13], 16)) : undefined;
      const titleCase =
        entry[14] ? String.fromCodePoint(Number.parseInt(entry[14], 16)) : undefined;

      code.push(`${quote(uEscape(codePoint))}: {`);

      if (combining) {
        const char = uEscape(codePoint);
        const comment = combining === 233 || combining === 234 ? `x${character}x` : `x${character}`;
        code.push(`character: ${quote(char)}, // combining: ${comment}`);
      } else if (category === 'Cs') {
        code.push(`character: ${quote(uEscape(codePoint))}, // surrogate`);
      } else {
        code.push(`character: ${quote(escapeJS(character))},`);
      }

      code.push(`name: ${quote(name)},`, `category: ${quote(category)},`);
      if (combining) {
        code.push(`combining: ${combining},`);
      }
      code.push(`bidirectional: ${quote(bidirectional)},`);
      if (decomposition) {
        code.push(`decomposition: ${quote(String.fromCodePoint(decomposition))},`);
      }
      if (decimalDigit != null) {
        code.push(`decimalDigit: ${decimalDigit},`);
      }
      if (digit != null) {
        code.push(`digit: ${digit},`);
      }
      if (numeric != null) {
        code.push(`numeric: ${numeric},`);
      }
      if (mirrored) {
        code.push(`mirrored: ${mirrored},`);
      }
      if (unicode1Name) {
        code.push(`unicode1Name: ${quote(unicode1Name)},`);
      }
      if (comment) {
        code.push(`comment: ${quote(comment)},`);
      }
      if (upperCase) {
        code.push(`upperCase: ${quote(upperCase)},`);
      }
      if (lowerCase) {
        code.push(`lowerCase: ${quote(lowerCase)},`);
      }
      if (titleCase) {
        code.push(`titleCase: ${quote(titleCase)},`);
      }
      code.push('},');
    }
    code.push('};', empty);

    await savePretty(path.join(root, 'src', '@data', 'unicode-data.ts'), code.join('\n'), '//');

    return undefined;
  });
