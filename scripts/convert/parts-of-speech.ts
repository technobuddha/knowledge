// cspell:ignore nade mobyposi
import fs from 'node:fs/promises';
import path from 'node:path';

import { empty, quote, splitLines } from '@technobuddha/library';
import { Iconv } from 'iconv';

import { header } from '../helpers/header.ts';
import { readDocumentation } from '../helpers/read-documentation.ts';
import { savePretty } from '../helpers/save-pretty.ts';

export async function partsOfSpeech(root: string): Promise<void> {
  // eslint - disable-next-line unicorn/text-encoding-identifier-case
  const iconv = new Iconv('Macintosh', 'utf8');

  const docs = await readDocumentation(root, 'moby-parts-of-speech');

  return fs.readFile(path.join(root, 'moby', 'mpos', 'mobyposi.i')).then(async (buffer) => {
    const words = new Map<string, string>();

    let num = 0;
    for (const line of splitLines(iconv.convert(buffer).toString())) {
      num++;
      if (line) {
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

    const code: string[] = [
      ...header,
      ...docs,
      'export const mobyPartsOfSpeech: Record<string, string> = {',
    ];
    for (const [word, pos] of Array.from(words.entries()).sort(([a], [b]) =>
      a.localeCompare(b, 'en', { sensitivity: 'base' }),
    )) {
      code.push(`${quote(word)}: ${quote(pos)},`);
    }
    code.push('};', empty);
    const file = code.join('\n');

    return savePretty(path.join(root, 'src', '@data', 'moby-parts-of-speech.ts'), file, '//');
  });
}
