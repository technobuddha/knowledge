// cspell:ignore mhyph
import fs from 'node:fs/promises';
import path from 'node:path';

import { empty, quote, splitLines } from '@technobuddha/library';
import { Iconv } from 'iconv';

import { header } from '../helpers/header.ts';
import { readDocumentation } from '../helpers/read-documentation.ts';
import { savePretty } from '../helpers/save-pretty.ts';

export async function hyphenation(root: string): Promise<void> {
  // eslint - disable-next-line unicorn/text-encoding-identifier-case
  const iconv = new Iconv('Macintosh', 'utf8');

  const docs = await readDocumentation(root, 'moby-hyphenation');

  // cspell: ignore mobyposi
  return fs.readFile(path.join(root, 'moby', 'mhyph', 'mhyph.txt')).then(async (buffer) => {
    const hyphenation: Map<string, Set<string>> = new Map();

    for (const line of splitLines(iconv.convert(buffer).toString())) {
      if (line) {
        const word = line.replaceAll('•', empty);

        hyphenation.set(word, (hyphenation.get(word) ?? new Set()).add(line));
      }
    }
    const code: string[] = [
      ...header,
      ...docs,
      'export const mobyHyphenation: Record<string, string[][]> = {',
    ];
    for (const [word, hyphenations] of Array.from(hyphenation.entries()).sort(([a], [b]) =>
      a.localeCompare(b, 'en', { sensitivity: 'base' }),
    )) {
      const hype = Array.from(hyphenations).map(
        (h) =>
          `[${h
            .split('•')
            .map((s) => quote(s))
            .join(', ')}]`,
      );
      code.push(`${quote(word)}: [${hype.join(', ')}],`);
    }
    code.push('};', empty);
    return savePretty(
      path.join(root, 'src', '@data', 'moby-hyphenation.ts'),
      code.join('\n'),
      '//',
    );
  });
}
