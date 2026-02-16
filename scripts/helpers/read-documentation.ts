import fs from 'node:fs/promises';
import path from 'node:path';

export async function readDocumentation(root: string, filename: string): Promise<string[]> {
  return fs
    .readFile(path.join(root, 'documentation', `${filename}.md`), 'utf-8')
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
