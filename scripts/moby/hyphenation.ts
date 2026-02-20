// cspell:ignore mhyph
import fs from 'node:fs/promises';
import path from 'node:path';

import { empty, quote, splitLines } from '@technobuddha/library';

import { data, reference } from '../helpers/paths.ts';
import { readDocumentation } from '../helpers/read-documentation.ts';
import { saveRaw } from '../helpers/save-raw.ts';
import { saveTerser } from '../helpers/save-terser.ts';

const docs = await readDocumentation('moby-hyphenation');

await fs
  .readFile(path.join(reference, 'moby', 'mhyph', 'mhyph.txt'), 'utf-8')
  .then(async (buffer) => {
    const hyphenation: Map<string, Set<string>> = new Map();

    for (const line of splitLines(buffer)) {
      if (line && !line.startsWith('#')) {
        const word = line.replaceAll('•', empty);

        hyphenation.set(word, (hyphenation.get(word) ?? new Set()).add(line));
      }
    }

    const code: string[] = ['export const mobyHyphenation = {'];
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

    const decl = [...docs, 'export declare const mobyHyphenation: Record<string, string[][]>;'];

    return Promise.all([
      saveTerser(path.join(data, 'moby-hyphenation.js'), code, { quiet: true }),
      saveRaw(path.join(data, 'moby-hyphenation.d.ts'), decl, { quiet: true }),
    ]);
  });
