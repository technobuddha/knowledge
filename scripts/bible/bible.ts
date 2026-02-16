/* eslint-disable no-console */
/* eslint-disable no-return-assign */
// cspell:disable
import fs from 'node:fs/promises';
import path from 'node:path';

import { empty, escapeJS, parseCsv, quote, space, unique } from '@technobuddha/library';
import { err, locatePackageRoot } from '@technobuddha/library/node';

import { header } from '../helpers/header.ts';
import { readDocumentation } from '../helpers/read-documentation.ts';
import { savePretty } from '../helpers/save-pretty.ts';

const root = await locatePackageRoot();
if (!root) {
  err('Could not find root directory');
  process.exit(1);
}

/*
  'wife',
  'SA',
  'Peter',
*/

const codeToBook: Record<string, string> = {
  'GEN': 'Genesis',
  'EXO': 'Exodus',
  'LEV': 'Leviticus',
  'NUM': 'Numbers',
  'DUE': 'Deuteronomy',
  'JOS': 'Joshua',
  'JDG': 'Judges',
  'RUT': 'Ruth',
  '1SA': '1 Samuel',
  '2SA': '2 Samuel',
  '1KI': '1 Kings',
  '1Ki': '1 Kings', // case
  '2KI': '2 Kings',
  '1CH': '1 Chronicles',
  '2CH': '2 Chronicles',
  'EZR': 'Ezra',
  'NEH': 'Nehemiah',
  'EST': 'Esther',
  'JOB': 'Job',
  'Psalm': 'Psalms',
  'PRO': 'Proverbs',
  'ECC': 'Ecclesiastes',
  'SOS': 'Song of Songs',
  'ISA': 'Isaiah',
  'JER': 'Jeremiah',
  'EZK': 'Ezekiel',
  'DAN': 'Daniel',
  'HOS': 'Hosea',
  'JOL': 'Joel',
  'AMO': 'Amos',
  'OBA': 'Obadiah',
  'JON': 'Jonah',
  'NAH': 'Nahum',
  'HAB': 'Habakkuk',
  'ZEP': 'Zephaniah',
  'HAG': 'Haggai',
  'ZEC': 'Zechariah',
  'MAL': 'Malachi',
  'MAT': 'Matthew',
  'MRK': 'Mark',
  'LUK': 'Luke',
  'JHN': 'John',
  'ACT': 'Acts',
  'ROM': 'Romans',
  '1CO': '1 Corinthians',
  '2CO': '2 Corinthians',
  'GAL': 'Galatians',
  'EPH': 'Ephesians',
  'PHP': 'Philippians',
  'COL': 'Colossians',
  '1TI': '1 Timothy',
  '2TI': '2 Timothy',
  'TIT': 'Titus',
  'PHM': 'Philemon',
  'HEB': 'Hebrews',
  'JAS': 'James',
  '1PE': '1 Peter',
  '2PE': '2 Peter',
  '1JN': '1 John',
  '2JN': '2 John',
  '3JN': '3 John',
  'JUD': 'Jude',
  'REV': 'Revelation',
};

function noVowels(s: string): string {
  return s.replaceAll(/[aeiou]/giv, '*');
}

function readKJV(
  assignTo: Record<string, string>[],
): (bible: Record<string, string>[]) => Generator<string> {
  return function* kjv(bible: Record<string, string>[]) {
    assignTo.push(...bible);

    let book = empty;
    let chapter = 0;

    for (const row of bible) {
      const rowBook = row['0'];
      const rowChapter = Number(row['1']);
      const rowVerse = Number(row['2']);
      const text = row['3'];

      if (book !== rowBook) {
        if (book) {
          yield '}},';
        }
        yield `${quote(escapeJS(rowBook))}: {`;
        book = rowBook;
        chapter = 0;
      }

      if (chapter !== rowChapter) {
        if (chapter) {
          yield '},';
        }
        yield `${rowChapter}: {`;
        chapter = rowChapter;
      }
      yield `${rowVerse}: ${quote(escapeJS(text))},`;
    }
    yield '},},';
  };
}

const kjv: Record<string, string>[] = [];
let doc = await readDocumentation(root, 'king-james-bible');
let code: string[] = [
  ...header,
  ...doc,
  empty,
  'export const kingJamesBible: Record<string, Record<number, Record<number, string>>> = {',
  ...(await fs
    .readFile(path.join(root, 'reference', 'bible', 'kjv.csv'), 'utf-8')
    .then((content) => parseCsv(content, { comment: '#' }))
    .then(readKJV(kjv))),
  '};',
  empty,
];
await savePretty(path.join(root, 'src', '@data', 'king-james-bible.ts'), code.join('\n'));

let nkjv: Record<string, string>[] = [];
doc = await readDocumentation(root, 'new-king-james-bible');
code = [
  ...header,
  ...doc,
  empty,
  'export const newKingJamesBible: Record<string, Record<number, Record<number, string>>> = {',
  ...(await fs
    .readFile(path.join(root, 'reference', 'bible', 'nkjv.csv'), 'utf-8')
    .then((content) => parseCsv(content, { comment: '#' }))
    .then((csv) => (nkjv = csv))
    .then(readKJV(nkjv))),
  '};',
  empty,
];
await savePretty(path.join(root, 'src', '@data', 'new-king-james-bible.ts'), code.join('\n'));

const hitchcock = await fs
  .readFile(path.join(root, 'reference', 'bible', 'hitchcock-names.csv'), 'utf-8')
  .then((content) =>
    parseCsv(content, { comment: '#' }).reduce((acc, cur) => {
      acc[cur.Name] = cur.Meaning;
      return acc;
    }, {}),
  );

const nvHitchcock = Object.fromEntries(
  Object.entries(hitchcock).map(([name, meaning]) => [noVowels(name), meaning]),
);

type Person = {
  id: string;
  name: string;
  surname?: string;
  uniqueAttribute?: string;
  gender: string;
  tribe?: string;
  notes?: string;
  nameInstance: number;
  sequence: number;
  hitchcock?: string;
};

const person = await fs
  .readFile(path.join(root, 'reference', 'bible', 'person.csv'), 'utf-8')
  .then((content) =>
    parseCsv(content, { comment: '#' }).map(
      (p) =>
        ({
          id: p.person_id,
          name: p.person_name,
          surname: p.surname || undefined,
          uniqueAttribute: p.unique_attribute || undefined,
          gender: p.sex === 'male' ? 'M' : 'F',
          tribe: p.tribe || undefined,
          notes: p.person_notes || undefined,
          nameInstance: Number(p.name_instance),
          sequence: Number(p.person_sequence),
          hitchcock: hitchcock[p.person_name],
        }) as Person,
    ),
  );

type Name = {
  hitchcock?: boolean;
  nvHitchcock?: boolean;
  person?: boolean;
  male?: boolean;
  female?: boolean;
  angel?: boolean;
  kjv?: number;
  nkjv?: number;
};

const check: Record<string, Name> = {};

for (const p of person) {
  check[p.name] ??= {};
  check[p.name].person = true;
}

for (const h of Object.keys(hitchcock)) {
  check[h] ??= {};
  check[h].hitchcock = true;
}

for (const c of Object.keys(check)) {
  if (noVowels(c) in nvHitchcock) {
    check[c] ??= {};
    check[c].nvHitchcock = true;
  }
}

await fs
  .readFile(path.join(root, 'reference', 'copylists', 'biblical-female-names.csv'), 'utf-8')
  .then((content) => parseCsv(content, { comment: '#', hasHeaders: false }))
  .then((data) => {
    for (const row of data) {
      check[row[1]] ??= {};
      check[row[1]].female = true;
    }
  });

await fs
  .readFile(path.join(root, 'reference', 'copylists', 'biblical-male-names.csv'), 'utf-8')
  .then((content) => parseCsv(content, { comment: '#', hasHeaders: false }))
  .then((data) => {
    for (const row of data) {
      check[row[1]] ??= {};
      check[row[1]].male = true;
    }
  });

await fs
  .readFile(path.join(root, 'reference', 'copylists', 'angel-names.csv'), 'utf-8')
  .then((content) => parseCsv(content, { comment: '#', hasHeaders: false }))
  .then((data) => {
    for (const row of data) {
      check[row[1]] ??= {};
      check[row[1]].angel = true;
    }
  });

// const searchKJV = kjv.map((row) => row['3']).join('\n');
// const searchNKJV = nkjv.map((row) => row['3']).join('\n');

// for (const [n, c] of Object.entries(check)) {
//   c.kjv = (searchKJV.match(new RegExp(`\\b${n}('s)?\\b`, 'vg')) ?? []).length;
//   c.nkjv = (searchNKJV.match(new RegExp(`\\b${n}('s)?\\b`, 'vg')) ?? []).length;
// }

// console.log(
//   Object.entries(check).filter(([n, c]) => !n.includes(space) && c.person && !c.nvHitchcock),
// );

console.log(
  unique(
    Object.values(person).flatMap(
      ({ uniqueAttribute }) => uniqueAttribute?.match(/([A-Z0-9]+)(?: *\(?\d+:\d+)/iv)?.[1] ?? '',
    ),
  ),
);

/*

| person     | kjv        | nkjv       | hitchcock   |
| ---------- | ---------- | ---------- | ----------- |
| Methushael | Methusael  | Methushael | Methusael   |
| Enosh      | Enos       | Ē´nosh     | Enos        |
| Mahalalel  | Mahalaleel | Mahalalel  | Mahaleleel  |
| Japheth    | Japheth    | Japheth    | Japet       |
| Tiras      | Tiras      | Tiras      | * missing * | meaning = "desirable"
| Put        | Phut       | Put        | * missing * | unknown meaning

*/
