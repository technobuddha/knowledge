import fs from 'node:fs/promises';

import { empty, splitLines, unbannerize } from '@technobuddha/library';

export async function readLicense(filename: string, url: string): Promise<string[]> {
  return fs
    .readFile(filename, 'utf-8')
    .then((content) => unbannerize(content))
    .then((content) => [
      '/**',
      `* Loosely based on concepts and portions of ${url}`,
      '* but extensively rewritten and adapted for this library.',
      '* ',
      ...splitLines(content).map((l) => `* ${l}`),
      '*/',
    ])
    .catch(() => []);
}
