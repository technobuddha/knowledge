import fs from 'node:fs/promises';
import path from 'node:path';

import { documentation } from './paths.ts';

export async function readDocumentation(filename: string): Promise<string[]> {
  return fs
    .readFile(path.join(documentation, `${filename}.md`), 'utf-8')
    .then((content) => [
      '/**',
      ...content
        .split('\n')
        .filter((l) => !l.startsWith('<!--'))
        .map((l) => ` * ${l}`),
      ' */',
    ])
    .catch(() => []);
}
