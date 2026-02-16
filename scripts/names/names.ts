// cspell:ignore mobypron mpron leit motiv zinnwaldite
import fs from 'node:fs/promises';
import path from 'node:path';

import { empty, parseCsv, quote, strip } from '@technobuddha/library';
import { err, locatePackageRoot } from '@technobuddha/library/node';

import { header } from '../helpers/header.ts';
import { readDocumentation } from '../helpers/read-documentation.ts';
import { savePretty } from '../helpers/save-pretty.ts';

const root = await locatePackageRoot();
if (!root) {
  err('Could not find root directory');
  process.exit(1);
}

const genders = ['cat', 'dog', 'bunny', 'fake', 'female', 'male', 'surname'] as const;
type Gender = (typeof genders)[number];

type Genders = { [key in (typeof genders)[number]]?: boolean };
const names = new Map<string, Genders>();

async function read(file: string, gender: Gender): Promise<void> {
  return fs.readFile(path.join(root!, 'reference', 'names', `${file}.csv`), 'utf-8').then((csv) => {
    for (const entry of parseCsv(csv, { lineSeparator: '\n' })) {
      const name = entry.name.toUpperCase();
      if (name) {
        const curr = names.get(name);

        if (curr) {
          names.set(name, { ...curr, [gender]: true });
        } else {
          names.set(name, { [gender]: true });
        }
      }
    }

    return undefined;
  });
}

async function readMFN(file: string): Promise<void> {
  return fs.readFile(path.join(root!, 'reference', 'names', `${file}.csv`), 'utf-8').then((csv) => {
    for (const entry of parseCsv(csv, { lineSeparator: '\n' })) {
      if (entry.name) {
        const name = entry.name.toUpperCase();
        const curr = names.get(name) ?? {};

        if (entry.male === '1') {
          curr.male = true;
        }

        if (entry.female === '1') {
          curr.female = true;
        }

        if (entry.neutral === '1') {
          curr.surname = true;
        }

        names.set(name, curr);
      }
    }

    return undefined;
  });
}

async function readSex(file: string): Promise<void> {
  return fs.readFile(path.join(root!, 'reference', 'names', `${file}.csv`), 'utf-8').then((csv) => {
    for (const entry of parseCsv(csv, { lineSeparator: '\n' })) {
      if (entry.name) {
        const name = entry.name.toUpperCase();
        const curr = names.get(name) ?? {};

        if (entry.sex === 'M') {
          curr.male = true;
        }
        if (entry.sex === 'F') {
          curr.female = true;
        }
        names.set(name, curr);
      }
    }

    return undefined;
  });
}

async function readJson(file: string, gender: Gender): Promise<void> {
  return fs
    .readFile(path.join(root!, 'reference', 'names', `${file}.jsonc`), 'utf-8')
    .then((data) => {
      for (let name of JSON.parse(strip(data, { comments: true }))) {
        name = name.toUpperCase();
        const curr = names.get(name) ?? {};
        curr[gender] = true;
        names.set(name, curr);
      }

      return undefined;
    });
}
const files: [string, Gender][] = [
  ['catNames', 'cat'],
  ['dogNames', 'dog'],
  ['Dog_Names', 'dog'],
  ['bunnyNames', 'bunny'],
  ['fakeNames', 'fake'],
  ['femaleNames', 'female'],
  ['maleNames', 'male'],
  ['surnames', 'surname'],
  ['last', 'surname'],
];

for (const [file, gender] of files) {
  await read(file, gender);
}

await readMFN('names');
await readSex('givenNames');
await readSex('baby');

await readJson('male-dog-names', 'dog');
await readJson('female-dog-names', 'dog');

const docs = await readDocumentation(root, 'names');
const code: string[] = [
  ...header,
  ...docs,
  empty,
  'export type Genders = {',
  ...genders.map((g) => `${g}?: boolean;`),
  '};',
  empty,
  'export const names: Record<string, Genders> = {',
];

for (const [name, genders] of Array.from(names.entries()).sort(([a], [b]) =>
  a.localeCompare(b, 'en', { sensitivity: 'base' }),
)) {
  code.push(
    `${quote(name)}: { ${Object.entries(genders)
      .filter(([, v]) => v)
      .map(([k]) => `${k}: true`)
      .join(', ')} },`,
  );
}

code.push('};', empty);

await savePretty(path.join(root, 'src', '@data', 'names.ts'), code.join('\n'), '//');
