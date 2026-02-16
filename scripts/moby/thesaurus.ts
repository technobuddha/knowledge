// cspell:ignore mthes mobythes
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

async function thesaurus(root: string): Promise<void> {
  const docs = await readDocumentation(root, 'moby-thesaurus');

  // cspell: ignore mobyposi
  return fs
    .readFile(path.join(root, 'reference', 'moby', 'mthes', 'mobythes.aur'), 'utf-8')
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
      await saveTerser(path.join(root, 'dist', 'moby-thesaurus.js'), code, { quiet: true });

      const decl = [...docs, 'export declare const mobyThesaurus: Record<string, number[]>;'];
      return saveRaw(path.join(root, 'dist', 'moby-thesaurus.d.ts'), decl, { quiet: true });
    });
}

await thesaurus(root);
