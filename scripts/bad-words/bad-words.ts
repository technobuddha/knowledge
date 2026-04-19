import fs from 'node:fs/promises';
import path from 'node:path';

import { empty, escapeJS, parseCsv, quote, readLines } from '@technobuddha/library';
import { saveRaw, saveTerser } from '@technobuddha/project';

import { data, externalReference } from '../helpers/paths.ts';
import { readDocumentation } from '../helpers/read-documentation.ts';

const files = [
  { name: 'AFINN-en-165.txt', language: 'en' },
  // { name: 'AFINN-da-32.txt', language: 'da' },
  // { name: 'AFINN-fi-165.txt', language: 'fi' },
  // { name: 'AFINN-fr-165.txt', language: 'fi' },
  // { name: 'AFINN-pl-165.txt', language: 'fi' },
  // { name: 'AFINN-sv-165.txt', language: 'fi' },
  // { name: 'AFINN-tr-165.txt', language: 'fi' },
  // { name: 'AFINN-emoticon-8.txt', language: 'emoticon' },
];

type BadWord = { afinn?: number; biglou?: true };
const badWords: Map<string, BadWord> = new Map();

for (const { name } of files) {
  await fs.readFile(path.join(externalReference, 'afinn', name), 'utf-8').then((data) => {
    for (const line of parseCsv(data, { delimiter: '\t', comment: '#', hasHeaders: false })) {
      const { 0: word, 1: score } = line;

      const bw = badWords.get(word) ?? {};
      bw.afinn = Number(score);
      badWords.set(word, bw);
    }
  });
}

for await (const line of readLines(path.join(externalReference, 'biglou', 'bad-words.txt'))) {
  const word = line.trim();

  if (word && !word.startsWith('#')) {
    const bw = badWords.get(word) ?? {};
    bw.biglou = true;
    badWords.set(word, bw);
  }
}

const doc = await readDocumentation('bad-words');

const code = ['export const badWords = {'];
for (const [word, bw] of badWords.entries()) {
  code.push(`${quote(escapeJS(word))}: ${JSON.stringify(bw)},`);
}
code.push('};', empty);

const decl = [
  // ...copyright.map((line) => `// ${line}`),
  'export type BadWord = { afinn?: number; biglou?: true; };',
  empty,
  ...doc,
  'export declare const badWords: Record<string, BadWord>;',
];

await Promise.all([
  saveTerser(path.join(data, 'bad-words.js'), code),
  saveRaw(path.join(data, 'bad-words.d.ts'), decl),
]);
