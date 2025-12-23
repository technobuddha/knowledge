// cspell:ignore mwords usaconst
import fs from 'node:fs/promises';
import path from 'node:path';

import { cleanEnd, emDash, empty, quote, splitLines } from '@technobuddha/library';
import { err, locateRootDirectory } from '@technobuddha/library/node';

import { header } from '../helpers/header.ts';
import { readDocumentation } from '../helpers/read-documentation.ts';
import { savePretty } from '../helpers/save-pretty.ts';

const root = await locateRootDirectory();
if (!root) {
  err('Could not find root directory');
  process.exit(1);
}

// Replace box drawing characters with em dash
const correction = /\u2500/gv; // box drawings light horizontal

const doc = await readDocumentation(root, 'moby-constitution');

const code = [...header, ...doc, empty, empty, 'export const mobyConstitution: string[] = ['];

await fs
  .readFile(path.join(root, 'reference', 'moby', 'mwords', 'usaconst.itu'), 'utf-8')
  .then(async (raw) => {
    for (const line of splitLines(raw)) {
      if (!line.startsWith('#')) {
        code.push(`${quote(cleanEnd(line.replaceAll(correction, emDash)))},`);
      }
    }
    code.push('];', empty);

    return savePretty(
      path.join(root, 'src', '@data', 'moby-constitution.ts'),
      code.join('\n'),
      '//',
    );
  });
