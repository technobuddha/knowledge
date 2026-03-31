import fs from 'node:fs/promises';

import { splitLines, unbannerize } from '@technobuddha/library';

function escapeTsDoc(content: string): string {
  return content.replaceAll(/([<>])/gv, '\\$1');
}

export async function readLicense(filename: string, url: string): Promise<string[]> {
  return fs
    .readFile(filename, 'utf-8')
    .then((content) => unbannerize(content))
    .then((content) => [
      '/**',
      ` * Loosely based on concepts and portions of ${url}`,
      ' * but extensively rewritten and adapted for this library.',
      ' * ',
      ...splitLines(content).map((l) => ` * ${escapeTsDoc(l)}`),
      ' */',
    ])
    .catch(() => []);
}
