// cspell:ignore nade mobyposi
import fs from 'node:fs/promises';
import path from 'node:path';

import { empty, quote, splitLines } from '@technobuddha/library';
import { saveRaw, saveTerser } from '@technobuddha/project';

import { data, externalReference } from '../helpers/paths.ts';
import { readDocumentation } from '../helpers/read-documentation.ts';

const docs = await readDocumentation('moby-parts-of-speech');

await fs
  .readFile(path.join(externalReference, 'moby', 'mpos', 'mobyposi.i'), 'utf-8')
  .then(async (buffer) => {
    const words = new Map<string, string>();

    for (const line of splitLines(buffer)) {
      if (line && !line.startsWith('#')) {
        let [word, pos] = line.split('◊');
        // Corrections to the moby database
        if (word === 'shari"ah') {
          word = "shari'ah";
        } else if (word === 'mari,nade') {
          continue;
        }

        let parts = words.get(word) ?? empty;
        for (const char of pos) {
          if (!parts.includes(char)) {
            parts += char;
          }
        }
        words.set(word, parts);
      }
    }

    const code: string[] = ['export const mobyPartsOfSpeech = {'];
    for (const [word, pos] of Array.from(words.entries()).sort(([a], [b]) =>
      a.localeCompare(b, 'en', { sensitivity: 'base' }),
    )) {
      code.push(`${quote(word)}: ${quote(pos)},`);
    }
    code.push('};', empty);

    const decl = [...docs, 'export declare const mobyPartsOfSpeech: Record<string, string>;'];

    return Promise.all([
      saveTerser(path.join(data, 'moby-parts-of-speech.js'), code),
      saveRaw(path.join(data, 'moby-parts-of-speech.d.ts'), decl),
    ]);
  });
