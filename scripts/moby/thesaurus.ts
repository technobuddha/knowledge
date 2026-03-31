// cspell:ignore mthes mobythes
import fs from 'node:fs/promises';
import path from 'node:path';

import { empty, quote, splitLines } from '@technobuddha/library';

import { data, externalReference } from '../helpers/paths.ts';
import { readDocumentation } from '../helpers/read-documentation.ts';
import { saveRaw } from '../helpers/save-raw.ts';
import { saveTerser } from '../helpers/save-terser.ts';

const docs = await readDocumentation('moby-thesaurus');

await fs
  .readFile(path.join(externalReference, 'moby', 'mthes', 'mobythes.aur'), 'utf-8')
  .then(async (buffer) => {
    const thesaurus: Map<string, number[]> = new Map();

    let group = 0;
    for (const line of splitLines(buffer)) {
      if (!line.startsWith('#')) {
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
    }

    const code: string[] = ['export const mobyThesaurus = {'];
    for (const [word, groups] of Array.from(thesaurus.entries()).sort(([a], [b]) =>
      a.localeCompare(b, 'en', { sensitivity: 'base' }),
    )) {
      code.push(`${quote(word)}: [${groups.join(', ')}],`);
    }
    code.push('};', empty);

    const decl = [...docs, 'export declare const mobyThesaurus: Record<string, number[]>;'];

    return Promise.all([
      saveTerser(path.join(data, 'moby-thesaurus.js'), code, { quiet: true }),
      saveRaw(path.join(data, 'moby-thesaurus.d.ts'), decl, { quiet: true }),
    ]);
  });
