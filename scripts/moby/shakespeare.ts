// cspell:ignore shakespe mshak
import fs from 'node:fs/promises';
import path from 'node:path';

import {
  clean,
  cleanEnd,
  empty,
  quote,
  splitLines,
  titleCase,
  untabify,
} from '@technobuddha/library';
import { saveRaw, saveTerser } from '@technobuddha/project';

import { data, externalReference } from '../helpers/paths.ts';
import { readDocumentation } from '../helpers/read-documentation.ts';

type GENRE = 'comedy' | 'history' | 'poetry' | 'tragedy' | 'glossary';

// prettier-ignore
const titles: [string, GENRE][] = [
  ["ALL'S WELL THAT ENDS WELL",   'comedy'],
  ['ANTONY AND CLEOPATRA',        'tragedy'],
  ['AS YOU LIKE IT',              'comedy'],
  ['THE COMEDY OF ERRORS',        'comedy'],
  ['CORIOLANUS',                  'tragedy'],
  ['CYMBELINE',                   'comedy'],
  ['GLOSSARY',                    'glossary'],
  ['HAMLET',                      'tragedy'],
  ['JULIUS CAESAR',               'tragedy'],
  ['1 KING HENRY IV',             'history'],
  ['2 KING HENRY IV',             'history'],
  ['KING HENRY V',                'history'],
  ['1 KING HENRY VI',             'history'],
  ['2 KING HENRY VI',             'history'],
  ['3 KING HENRY VI',             'history'],
  ['KING HENRY VIII',             'history'],
  ['KING JOHN',                   'history'],
  ['KING LEAR',                   'tragedy'],
  ['KING RICHARD II',             'history'],
  ['KING RICHARD III',            'history'],
  ["LOVE's LABOUR'S LOST",        'comedy'],
  ['MEASURE FOR MEASURE',         'comedy'],
  ['THE MERRY WIVES OF WINDSOR',  'comedy'],
  ['OTHELLO',                     'tragedy'],
  ['A LOVER’S COMPLAINT',         'poetry'],
  ['MACBETH',                     'tragedy'],
  ['MUCH ADO ABOUT NOTHING',      'comedy'],
  ['PERICLES, PRINCE OF TYRE',    'comedy'],
  ['THE RAPE OF LUCRECE',         'poetry'],
  ['ROMEO AND JULIET',            'tragedy'],
  ['SONNETS',                     'poetry'],
  ['THE TEMPEST',                 'comedy'],
  ['TROILUS AND CRESSIDA',        'comedy'],
  ['THE TWO GENTLEMEN OF VERONA', 'comedy'],
  ['THE TAMING OF THE SHREW',     'comedy'],
  ['TIMON OF ATHENS',             'tragedy'],
  ['TITUS ANDRONICUS',            'tragedy'],
  ['TWELFTH NIGHT',               'comedy'],
  ['VENUS AND ADONIS',            'poetry'],
  ['THE WINTER’S TALE',           'comedy'],
];

const doc = await readDocumentation('moby-shakespeare');

const code = ['export const mobyShakespeare = {'];
function shake(name: string, content: string[]): void {
  const matches = /(\d+)\s+(.*)/v.exec(name);
  const title = titleCase((matches ? `${matches[2]}, part ${matches[1]}` : name).toLowerCase())
    .replace('Viii', 'VIII')
    .replace('Vi', 'VI')
    .replace('Iv', 'IV')
    .replace('Iii', 'III')
    .replace('Ii', 'II');

  code.push(
    `${quote(title)}: `,
    `{ title: ${quote(title)}, genre: '${titles.find(([t]) => t === title)?.[1] ?? 'tragedy'}', content: [`,
    ...content.map((line) => `${quote(line)},`),
    '] },',
  );
}

await fs
  .readFile(path.join(externalReference, 'moby', 'mshak', 'shakespe.are'), 'ascii')
  .then(async (raw) => {
    const text = untabify(raw, 20);

    let book: string[] = [];
    let current: string | null = null;
    for (const line of splitLines(text)) {
      if (!line.startsWith('#') && line !== 'grady@netcom.com') {
        const title = titles.find(([t]) => line.trim() === t)?.[0];

        if (title && title !== current) {
          if (current) {
            shake(current, book);
          }
          book = [];
          current = title;
        }
        if (book.length > 0 || clean(line) !== empty) {
          book.push(cleanEnd(line));
        }
      }
    }

    if (book.length > 0 && current) {
      shake(current, book);
    }

    code.push('};', empty);

    const decl = [
      "export type Genre = 'comedy' | 'history' | 'poetry' | 'tragedy' | 'glossary';",
      'export type Work = { title: string, genre: Genre, content: string[] };',
      empty,
      ...doc,
      'export declare const mobyShakespeare: Record<string, Work>;',
    ];

    return Promise.all([
      saveTerser(path.join(data, 'moby-shakespeare.js'), code),
      saveRaw(path.join(data, 'moby-shakespeare.d.ts'), decl),
    ]);
  });
