import '../env.ts';

import fs from 'node:fs/promises';
import path from 'node:path';

import { empty, escapeJS, parseCsv, quote, splitLines } from '@technobuddha/library';
import { db } from '@technobuddha/postgres';
import { saveRaw, saveTerser } from '@technobuddha/project';

import { data, externalReference } from '../helpers/paths.ts';
import { readDocumentation } from '../helpers/read-documentation.ts';
import { readLicense } from '../helpers/read-license.ts';

import { decodeCsv } from './decode-csv.ts';

const typedef = await fs.readFile(path.join(import.meta.dirname, 'unicode-data.ts'), 'utf-8');

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

      for (const {
        codePoint,
        character,
        name,
        display,
        category,
        combining,
        bidirectional,
        decomposition,
        decimalDigit,
        digit,
        numeric,
        mirrored,
        unicode1Name,
        comment,
        upperCase,
        lowerCase,
        titleCase,
      } of csv.map(decodeCsv)) {
        code.push(
          `${quote(`\\u{${codePoint.toString(16).toUpperCase()}}`)}: {`,
          `character: ${quote(escapeJS(character))},`,
          `name: ${quote(name)},`,
          `display: ${quote(display)},`,
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
      typedef,
      empty,
      ...doc,
      'export declare const unicodeData: Record<string, UnicodeData>;',
    ];

    return Promise.all([
      saveTerser(path.join(data, 'unicode-data.js'), code.join('\n')),
      saveRaw(path.join(data, 'unicode-data.d.ts'), decl),
    ]);
  });
