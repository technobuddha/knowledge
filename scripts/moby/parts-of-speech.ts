// cspell:ignore nade mobyposi
import fs from 'node:fs/promises';
import path from 'node:path';

import { empty, quote, splitLines } from '@technobuddha/library';
import { err, locatePackageRoot } from '@technobuddha/library/node';

import { readDocumentation } from '../helpers/read-documentation.ts';
import { saveRaw } from '../helpers/save-raw.ts';
import { saveTerser } from '../helpers/save-terser.ts';

const root = await locatePackageRoot();
if (!root) {
  err('Could not find root directory');
  process.exit(1);
}

async function partsOfSpeech(root: string): Promise<void> {
  const docs = await readDocumentation(root, 'moby-parts-of-speech');

  return fs
    .readFile(path.join(root, 'reference', 'moby', 'mpos', 'mobyposi.i'), 'utf-8')
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

      let code: string[] = ['export const mobyPartsOfSpeech = {'];
      for (const [word, pos] of Array.from(words.entries()).sort(([a], [b]) =>
        a.localeCompare(b, 'en', { sensitivity: 'base' }),
      )) {
        code.push(`${quote(word)}: ${quote(pos)},`);
      }
      code.push('};', empty);
      await saveTerser(path.join(root, 'dist', 'moby-parts-of-speech.js'), code, { quiet: true });

      code = [...docs, 'export declare const mobyPartsOfSpeech: Record<string, string>;'];
      return saveRaw(path.join(root, 'dist', 'moby-parts-of-speech.d.ts'), code, { quiet: true });
    });
}

await partsOfSpeech(root);
