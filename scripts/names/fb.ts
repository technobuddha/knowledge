import fs from 'node:fs/promises';
import path from 'node:path';

import {
  camelCase,
  clean,
  collapseWhitespace,
  decodeText,
  empty,
  escapeJS,
  quote,
  removeDiacritics,
  space,
} from '@technobuddha/library';
import { err, locateRootDirectory } from '@technobuddha/library/node';
import LineByLine from 'n-readlines';

// import { header } from '../helpers/header.ts';
// import { readDocumentation } from '../helpers/read-documentation.ts';
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
const lastCountry: Map<string, { count: number; dist: Record<string, number> }> = new Map();

for (const file of files) {
  const country = path.parse(file).name;

  const lastName: Map<string, number> = new Map();
  const firstM: Map<string, number> = new Map();
  const firstF: Map<string, number> = new Map();
  const firstX: Map<string, number> = new Map();
  const firstA: Map<string, number> = new Map();

  const liner = new LineByLine(path.join(dump, file));

  let line: Buffer | null;
  while ((line = liner.next())) {
    let [first, last, gender] = decodeText(line, 'utf-8').split(',');
    first = removeDiacritics(clean(collapseWhitespace(first)))
      .split(space)
      .filter((p) => p.length > 1)
      .join(space);

    if (first && isLatin(first)) {
      switch (gender) {
        case 'M': {
          firstM.set(first, (firstM.get(first) ?? 0) + 1);
          break;
        }

        case 'F': {
          firstF.set(first, (firstF.get(first) ?? 0) + 1);
          break;
        }

        case empty: {
          firstX.set(first, (firstX.get(first) ?? 0) + 1);
          break;
        }

        // no default
      }

      firstA.set(first, (firstA.get(first) ?? 0) + 1);
    }

    if (last && isLatin(last)) {
      lastName.set(last, (lastName.get(last) ?? 0) + 1);

      const lc = lastCountry.get(last) ?? { count: 0, dist: {} };
      lc.count++;
      lc.dist[country] = (lc.dist[country] ?? 0) + 1;
      lastCountry.set(last, lc);
    }
  }

  for (const [name, count] of firstX.entries()) {
    const m = firstM.get(name) ?? 0;
    const f = firstF.get(name) ?? 0;

    if (m === 0 && f === 0) {
      continue;
    }

    const ratioM = m / (m + f);
    const ratioF = f / (m + f);

    if (ratioM > 0) {
      firstM.set(name, (firstM.get(name) ?? 0) + Math.ceil(count * ratioM));
    }
    if (ratioF > 0) {
      firstF.set(name, (firstF.get(name) ?? 0) + Math.ceil(count * ratioF));
    }
  }

  for (const [names, gender, portion] of [
    [firstM, '-male', 'fore'],
    [firstF, '-female', 'fore'],
    [firstA, '-all', 'fore'],
    [lastName, '', 'sur'],
  ] as const) {
    const filename = `${portion}name${gender}-${country.toLowerCase()}`;

    const code: string[] = [`export const ${camelCase(filename)}: Record<string, number> = {`];
    for (const [name, count] of Array.from(names.entries()).sort(([, a], [, b]) => b - a)) {
      if (count >= 10) {
        code.push(`${quote(escapeJS(name))}: ${count},`);
      }
    }
    code.push('};', '');

    await savePretty(path.join(root, 'reference', 'fb', `${filename}.ts`), code.join('\n'));
  }
}

const code: string[] = [`export const surnameCountry: Record<string, Record<string, number>> = {`];
for (const [name, info] of Array.from(lastCountry.entries()).sort(
  ([, a], [, b]) => b.count - a.count,
)) {
  if (info.count >= 50) {
    let line = `${quote(escapeJS(name))}: { `;
    for (const [country, count] of Object.entries(info.dist).sort(([, a], [, b]) => b - a)) {
      line += `${quote(country)}: ${count}, `;
    }
    line += '},';
    code.push(line);
  }
}
code.push('};', '');

await savePretty(path.join(root, 'reference', 'fb', `surname-country.ts`), code.join('\n'));
