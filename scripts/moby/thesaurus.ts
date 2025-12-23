// cspell:ignore mthes mobythes
import fs from 'node:fs/promises';
import path from 'node:path';

import { empty, quote, splitLines } from '@technobuddha/library';
import { err, locateRootDirectory } from '@technobuddha/library/node';

import { header } from '../helpers/header.ts';
import { readDocumentation } from '../helpers/read-documentation.ts';
import { savePretty } from '../helpers/save-pretty.ts';

const root = await locateRootDirectory();
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
      return savePretty(
        path.join(root, 'src', '@data', 'moby-thesaurus.ts'),
        code.join('\n'),
        '//',
      );
    });
}

await thesaurus(root);
