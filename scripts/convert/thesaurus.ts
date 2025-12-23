// cspell:ignore mthes mobythes
import fs from 'node:fs/promises';
import path from 'node:path';

import { empty, quote, splitLines } from '@technobuddha/library';
import { Iconv } from 'iconv';

import { header } from '../helpers/header.ts';
import { readDocumentation } from '../helpers/read-documentation.ts';
import { savePretty } from '../helpers/save-pretty.ts';

export async function thesaurus(root: string): Promise<void> {
  // eslint - disable-next-line unicorn/text-encoding-identifier-case
  const iconv = new Iconv('Macintosh', 'utf8');

  const docs = await readDocumentation(root, 'moby-thesaurus');

  // cspell: ignore mobyposi
  return fs.readFile(path.join(root, 'moby', 'mthes', 'mobythes.aur')).then(async (buffer) => {
    const thesaurus: Map<string, number[]> = new Map();

    let group = 0;
    for (const line of splitLines(iconv.convert(buffer).toString())) {
      group++;
      for (const word of line.split(',')) {
        const trimmed = word.trim();
        if (trimmed.length > 0) {
          const entries = thesaurus.get(trimmed) ?? [];
          entries.push(group);
          thesaurus.set(trimmed, entries);
        }
      }
    }

    const code: string[] = [
      ...header,
      ...docs,
      'export const mobyThesaurus: Record<string, number[]> = {',
    ];
    for (const [word, groups] of Array.from(thesaurus.entries()).sort(([a], [b]) =>
      a.localeCompare(b, 'en', { sensitivity: 'base' }),
    )) {
      code.push(`${quote(word)}: [${groups.join(', ')}],`);
    }
    code.push('};', empty);
    return savePretty(path.join(root, 'src', '@data', 'moby-thesaurus.ts'), code.join('\n'), '//');
  });
}
