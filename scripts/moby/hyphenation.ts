// cspell:ignore mhyph
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

const docs = await readDocumentation(root, 'moby-hyphenation');

await fs
  .readFile(path.join(root, 'reference', 'moby', 'mhyph', 'mhyph.txt'), 'utf-8')
  .then(async (buffer) => {
    const hyphenation: Map<string, Set<string>> = new Map();

    for (const line of splitLines(buffer)) {
      if (line && !line.startsWith('#')) {
        const word = line.replaceAll('•', empty);

        hyphenation.set(word, (hyphenation.get(word) ?? new Set()).add(line));
      }
    }

    let code: string[] = ['export const mobyHyphenation = {'];
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
    await saveTerser(path.join(root, 'dist', 'moby-hyphenation.js'), code, { quiet: true });

    code = [...docs, 'export declare const mobyHyphenation: Record<string, string[][]>;'];
    return saveRaw(path.join(root, 'dist', 'moby-hyphenation.d.ts'), code, { quiet: true });
  });
