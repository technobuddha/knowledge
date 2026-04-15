import '#env';

import fs from 'node:fs/promises';
import path from 'node:path';

import { empty, escapeJS, parseCsv, quote, splitLines } from '@technobuddha/library';
import { db } from '@technobuddha/postgres';

import { data, externalReference } from '../helpers/paths.ts';
import { readDocumentation } from '../helpers/read-documentation.ts';
import { readLicense } from '../helpers/read-license.ts';
import { saveRaw } from '../helpers/save-raw.ts';
import { saveTerser } from '../helpers/save-terser.ts';
import { uDisplay } from '../helpers/u-display.ts';
import { uEscape } from '../helpers/u-escape.ts';

await fs
  .readFile(path.join(externalReference, 'unicode', 'unicode-data.txt'), 'utf-8')
  .then(async (unicodeData) => {
    const csv = parseCsv(
      splitLines(unicodeData)
        .filter((line) => line && !line.startsWith('#'))
        .join('\n'),
      { delimiter: ';', hasHeaders: false },
    );

    const doc = await readDocumentation('unicode-data');
    const license = await readLicense(
      path.join(externalReference, 'unicode', 'license.txt'),
      'https://www.unicode.org/Public',
    );
    const code: string[] = ['export const unicodeData = {'];

    await db.tx(async (t) => {
      await t.query('TRUNCATE unicode_data;');

      for (const entry of csv) {
        const codePoint = Number.parseInt(entry[0], 16);
        const character = String.fromCodePoint(codePoint);
        const name = entry[1];
        const category = entry[2];
        const combining = Number(entry[3]);
        const bidirectional = entry[4];
        const decomposition = entry[5];
        const decimalDigit = entry[6] === empty ? undefined : Number(entry[6]);
        const digit = entry[7] === empty ? undefined : Number(entry[7]);
        const numeric = entry[8] === empty ? undefined : entry[8];
        const mirrored = entry[9] === 'Y';
        const unicode1Name = entry[10] === empty ? undefined : entry[10];
        const comment = entry[11] === empty ? undefined : entry[11];
        const upperCase =
          entry[12] ? String.fromCodePoint(Number.parseInt(entry[12], 16)) : undefined;
        const lowerCase =
          entry[13] ? String.fromCodePoint(Number.parseInt(entry[13], 16)) : undefined;
        const titleCase =
          entry[14] ? String.fromCodePoint(Number.parseInt(entry[14], 16)) : undefined;

        code.push(
          `${quote(uEscape(codePoint))}: {`,
          `character: ${quote(combining ? uEscape(codePoint) : escapeJS(character))}, ${uDisplay({ category, combining, character })}`,
          `name: ${quote(name)},`,
          `codePoint: 0x${codePoint.toString(16)},`,
          `category: ${quote(category)},`,
        );
        if (combining) {
          code.push(`combining: ${combining},`);
        }
        code.push(`bidirectional: ${quote(bidirectional)},`);
        if (decomposition) {
          code.push(`decomposition: ${quote(decomposition)},`);
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

        await t.none(
          `
        INSERT INTO unicode_data (
          code_point,
          name,
          category,
          combining,
          bidirectional,
          decomposition,
          decimal_digit,
          digit,
          numeric,
          mirrored,
          unicode1_name,
          comment,
          upper_case,
          lower_case,
          title_case
        ) VALUES (
          $[codePoint],
          $[name],
          $[category],
          $[combining],
          $[bidirectional],
          $[decomposition],
          $[decimalDigit],
          $[digit],
          $[numeric],
          $[mirrored],
          $[unicode1Name],
          $[comment],
          $[upperCase],
          $[lowerCase],
          $[titleCase]
        );
      `,
          {
            codePoint,
            character,
            name,
            category,
            combining,
            bidirectional,
            decomposition: decomposition ?? null,
            decimalDigit: decimalDigit ?? null,
            digit: digit ?? null,
            numeric: numeric ?? null,
            mirrored,
            unicode1Name: unicode1Name ?? null,
            comment: comment ?? null,
            upperCase: upperCase ?? null,
            lowerCase: lowerCase ?? null,
            titleCase: titleCase ?? null,
          },
        );
      }
    });

    code.push('};', empty);

    const decl = [
      ...license,
      empty,
      'export type UnicodeData = {',
      '  character: string;',
      '  codePoint: number;',
      '  name: string;',
      '  category: string;',
      '  combining?: number;',
      '  bidirectional: string;',
      '  decomposition?: string;',
      '  decimalDigit?: number;',
      '  digit?: number;',
      '  numeric?: string;',
      '  mirrored?: boolean;',
      '  unicode1Name?: string;',
      '  comment?: string;',
      '  upperCase?: string;',
      '  lowerCase?: string;',
      '  titleCase?: string;',
      '};',
      empty,
      ...doc,
      'export declare const unicodeData: Record<string, UnicodeData>;',
    ];

    return Promise.all([
      saveTerser(path.join(data, 'unicode-data.js'), code.join('\n'), {
        quiet: true,
      }),
      saveRaw(path.join(data, 'unicode-data.d.ts'), decl, { quiet: true }),
    ]);
  });
