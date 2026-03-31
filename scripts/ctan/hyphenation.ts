import fs from 'node:fs/promises';
import path from 'node:path';

import { empty, escapeJS, quote, splitLines } from '@technobuddha/library';

import { data, externalReference } from '../helpers/paths.ts';
import { readDocumentation } from '../helpers/read-documentation.ts';
import { saveRaw } from '../helpers/save-raw.ts';
import { saveTerser } from '../helpers/save-terser.ts';

const copyright: string[] = [];
const patterns: string[] = [];
const exceptions: string[] = [];
let mode: 'comments' | 'license' | 'patterns' | 'exceptions' = 'comments';

await fs.readFile(path.join(externalReference, 'ctan', 'hyph-en-us.tex'), 'utf-8').then((data) => {
  const lines = splitLines(data);
  for (const line of lines) {
    if (!line.trim()) {
      continue;
    }

    if (line.startsWith('%')) {
      if (mode === 'comments') {
        if (line.startsWith('% copyright:')) {
          copyright.push(line.slice(12).trim());
        } else if (line.startsWith('% licence:')) {
          mode = 'license';
        }
      } else if (mode === 'license') {
        if (line.includes('text: >')) {
          // ignore this line
        } else if (line.endsWith(':')) {
          // end of license section
          mode = 'comments';
        } else {
          copyright.push(line.slice(2).trim());
        }
      }
      continue;
    }

    if (line.startsWith('\\patterns{')) {
      mode = 'patterns';
      continue;
    }

    if (line.startsWith('\\hyphenation{')) {
      mode = 'exceptions';
      continue;
    }

    if (line.startsWith('}')) {
      mode = 'comments';
      continue;
    }

    switch (mode) {
      case 'comments':
      case 'license': {
        break;
      }

      case 'patterns': {
        patterns.push(line);
        break;
      }

      case 'exceptions': {
        exceptions.push(line);
        break;
      }

      // no default
    }
  }
});

const doc = await readDocumentation('hyphenation');

const code = [
  'export const hyphenation = {',
  'patterns: [',
  ...patterns.map((pattern) => `${quote(escapeJS(pattern))},`),
  '],',
  'exceptions: [',
  ...exceptions.map((exception) => `${quote(escapeJS(exception))},`),
  '],',
  '};',
];

const decl = [
  ...copyright.map((line) => `// ${line}`),
  empty,
  ...doc,
  'export declare const hyphenation: { patterns: string[]; exceptions: string[] };',
];

await Promise.all([
  saveTerser(path.join(data, 'hyphenation.js'), code, { quiet: true }),
  saveRaw(path.join(data, 'hyphenation.d.ts'), decl, { quiet: true }),
]);
