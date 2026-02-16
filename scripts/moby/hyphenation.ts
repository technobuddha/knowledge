// cspell:ignore mhyph
import fs from 'node:fs/promises';
import path from 'node:path';

import { empty, quote, splitLines } from '@technobuddha/library';
import { err, locatePackageRoot } from '@technobuddha/library/node';

import { header } from '../helpers/header.ts';
import { readDocumentation } from '../helpers/read-documentation.ts';
import { savePretty } from '../helpers/save-pretty.ts';

const root = await locatePackageRoot();
if (!root) {
  err('Could not find root directory');
  process.exit(1);
}

async function hyphenation(root: string): Promise<void> {
  const docs = await readDocumentation(root, 'moby-hyphenation');

  return fs
    .readFile(path.join(root, 'reference', 'moby', 'mhyph', 'mhyph.txt'), 'utf-8')
    .then(async (buffer) => {
      const hyphenation: Map<string, Set<string>> = new Map();

      for (const line of splitLines(buffer)) {
        if (line && !line.startsWith('#')) {
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

await hyphenation(root);
