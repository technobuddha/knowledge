// cspell:ignore mobypron mpron leit motiv zinnwaldite
import fs from 'node:fs/promises';
import path from 'node:path';

import { empty, parseCsv, quote, removeComments } from '@technobuddha/library';

import { data, externalReference } from '../helpers/paths.ts';
import { readDocumentation } from '../helpers/read-documentation.ts';
import { saveRaw } from '../helpers/save-raw.ts';
import { saveTerser } from '../helpers/save-terser.ts';

const genders = ['cat', 'dog', 'bunny', 'fake', 'female', 'male', 'surname'] as const;
type Gender = (typeof genders)[number];

type Genders = { [key in (typeof genders)[number]]?: boolean };
const names = new Map<string, Genders>();

async function read(file: string, gender: Gender): Promise<void> {
  return fs.readFile(path.join(externalReference, 'names', `${file}.csv`), 'utf-8').then((csv) => {
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
  return fs.readFile(path.join(externalReference, 'names', `${file}.csv`), 'utf-8').then((csv) => {
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
  return fs.readFile(path.join(externalReference, 'names', `${file}.csv`), 'utf-8').then((csv) => {
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
    .readFile(path.join(externalReference, 'names', `${file}.jsonc`), 'utf-8')
    .then((data) => {
      for (let name of JSON.parse(removeComments(data))) {
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

const docs = await readDocumentation('names');
const code: string[] = ['export const names = {'];

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

const decl = [
  'export type Genders = {',
  ...genders.map((g) => `  ${g}?: boolean;`),
  '};',
  empty,
  ...docs,
  'export declare const names: Record<string, Genders>;',
];

await Promise.all([
  saveTerser(path.join(data, 'names.js'), code, { quiet: true }),
  saveRaw(path.join(data, 'names.d.ts'), decl, { quiet: true }),
]);
