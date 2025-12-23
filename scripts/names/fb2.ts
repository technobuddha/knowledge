import fs from 'node:fs/promises';
import path from 'node:path';

import {
  clean,
  collapseWhitespace,
  decodeText,
  empty,
  escapeJS,
  formatNumber,
  quote,
  removeDiacritics,
  space,
} from '@technobuddha/library';
import { err, locateRootDirectory, out } from '@technobuddha/library/node';
import LineByLine from 'n-readlines';

import { savePretty } from '../helpers/save-pretty.ts';

const root = await locateRootDirectory();
if (!root) {
  err('Could not find root directory');
  process.exit(1);
}

const dump = path.join(root, '..', 'name_dataset', 'data');

function isLatin(name: string): boolean {
  return /^[\p{Script=Latin}\p{M}\- ]+$/v.test(name);
}

const files = await fs.readdir(dump);
const names: Record<
  string,
  { count: number; country: Record<string, number>; gender: Record<string, number> }
> = {};

let num = 0;
for (const file of files) {
  const liner = new LineByLine(path.join(dump, file));

  let line: Buffer | null;
  while ((line = liner.next())) {
    let [, last, gender, country] = decodeText(line, 'utf-8').split(',');
    last = clean(collapseWhitespace(last));

    if (last && isLatin(last)) {
      if (!(last in names)) {
        num++;
        if (num % 10000 === 0) {
          out(file, space, formatNumber(num, '#,0'), '\r');
        }
      }

      names[last] ??= { count: 0, country: {}, gender: {} };
      names[last].count += 1;
      names[last].country[country] ??= 0;
      names[last].country[country] += 1;
      names[last].gender[gender] ??= 0;
      names[last].gender[gender] += 1;
    }
  }
}

for (const name of Object.keys(names)) {
  if (name in names) {
    const base = removeDiacritics(name);

    if (base !== name) {
      if (base in names) {
        out('add diacritics', name, base);

        names[name].count += names[base].count;
        for (const [country, count] of Object.entries(names[base].country)) {
          names[name].country[country] ??= 0;
          names[name].country[country] += count;
        }
        for (const [gender, count] of Object.entries(names[base].gender)) {
          names[name].gender[gender] ??= 0;
          names[name].gender[gender] += count;
        }
        delete names[base];
      }
    }
  }
}

const code: string[] = [
  'export type Name = {',
  '  count: number;',
  '  country: Record<string, number>;',
  '  gender: Record<string, number>;',
  '};',
  empty,
  `export const surnameCountry: Record<string, Name>> = {`,
];
for (const [name, info] of Object.entries(names).sort(([, a], [, b]) => b.count - a.count)) {
  if (info.count >= 50) {
    let line = `${quote(escapeJS(name))}: { `;

    line += `count: ${info.count}, country: { `;
    for (const [country, count] of Object.entries(info.country).sort(([, a], [, b]) => b - a)) {
      line += `${quote(country)}: ${count}, `;
    }
    line += '}, gender: {';
    for (const [gender, count] of Object.entries(info.gender).sort(([, a], [, b]) => b - a)) {
      line += `${quote(gender)}: ${count}, `;
    }
    line += '},';
    code.push(line);
  }
}
code.push('};', '');

await savePretty(path.join(root, 'reference', 'fb', `names.ts`), code.join('\n'));
