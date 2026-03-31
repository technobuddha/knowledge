/* eslint-disable @typescript-eslint/prefer-destructuring */
// cspell:ignore mobypron mpron leit motiv zinnwaldite
import fs from 'node:fs/promises';
import path from 'node:path';

import { empty, quote, space, splitLines } from '@technobuddha/library';

import { parse } from '../helpers/moby-pronunciation-parser.ts';
import { data, externalReference } from '../helpers/paths.ts';
import { readDocumentation } from '../helpers/read-documentation.ts';
import { saveRaw } from '../helpers/save-raw.ts';
import { saveTerser } from '../helpers/save-terser.ts';

import { exceptions } from './data/exceptions.ts';
import { ipaPhones } from './data/phonemes.ts';
import { spacedWords } from './data/spaced-words.ts';

function toIPA(phone: string): string {
  const ipaPhone = ipaPhones[phone];
  if (!ipaPhone) {
    throw new Error(`Unknown phone: ${phone}`);
  }
  return ipaPhone.ipa;
}

const ipaLetters: [string, string][] = [
  ['@', 'ʌ'], // sounds like the "u" in "cup":          kʌp
  ['A', 'æ'], // AE
  ['E', 'e'], // ??
  ['O', 'ɔ'], // AO
  ['N', 'n'], // N
  ['R', 'r'], // R?
  ['S', 's'], // S
  ['W', 'w'], // W
  ['V', 'v'], // V
  ['U', 'u'], // UW
  ['Y', 'u'], // ??
  ['Z', 'z'], // Zq
];

const docs = await readDocumentation('moby-pronunciation-ipa');

await fs
  .readFile(path.join(externalReference, 'moby', 'mpron', 'mobypron.unc'), 'utf-8')
  .then(async (buffer) => {
    const words = new Map<string, Set<string>>();

    for (let line of splitLines(buffer)) {
      if (line && !line.startsWith('#')) {
        for (const [spacedWord, replacement] of Object.entries(spacedWords)) {
          if (line.startsWith(spacedWord)) {
            line = line.replace(spacedWord, replacement);
            break;
          }
        }

        const [w, ...p] = line.split(space);
        let word = w.replaceAll('_', space);
        let pronounce = p.join(space);

        if (word in exceptions) {
          const exception = exceptions[word];

          if ('to' in exception) {
            pronounce = exception.to;
          }
          if ('word' in exception) {
            word = exception.word;
          }
        }

        const ipa = ['/', ...Array.from(parse(pronounce).map((phone) => toIPA(phone))), '/'].join(
          empty,
        );

        words.set(word, (words.get(word) ?? new Set()).add(ipa));
      }
    }

    const code: string[] = ['export const mobyPronunciationIPA = {'];
    for (const [word, pron] of Array.from(words.entries()).sort(([a], [b]) =>
      a.localeCompare(b, 'en', { sensitivity: 'base' }),
    )) {
      code.push(
        `${quote(word)}: [${Array.from(pron)
          .map((p) => quote(p))
          .join(', ')}],`,
      );
    }
    code.push('};', empty);

    const decl = [...docs, 'export declare const mobyPronunciationIPA: Record<string, string[]>;'];

    return Promise.all([
      saveTerser(path.join(data, 'moby-pronunciation-ipa.js'), code, {
        quiet: true,
      }),
      saveRaw(path.join(data, 'moby-pronunciation-ipa.d.ts'), decl, {
        quiet: true,
      }),
    ]);
  });
