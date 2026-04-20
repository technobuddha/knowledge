// cspell:ignore mwords usaconst
import fs from 'node:fs/promises';
import path from 'node:path';

import {
  cleanEnd,
  emDash,
  empty,
  err,
  locatePackageRoot,
  quote,
  splitLines,
} from '@technobuddha/library';
import { saveRaw, saveTerser } from '@technobuddha/project';

import { data, externalReference } from '../helpers/paths.ts';
import { readDocumentation } from '../helpers/read-documentation.ts';

const root = await locatePackageRoot();
if (!root) {
  err('Could not find root directory');
  process.exit(1);
}

// Replace box drawing characters with em dash
const correction = /\u2500/gv; // box drawings light horizontal

const doc = await readDocumentation(root, 'moby-constitution');

await fs
  .readFile(path.join(externalReference, 'moby', 'mwords', 'usaconst.itu'), 'utf-8')
  .then(async (raw) => {
    const code: string[] = ['export const mobyConstitution = ['];

    for (const line of splitLines(raw)) {
      if (!line.startsWith('#')) {
        code.push(`${quote(cleanEnd(line.replaceAll(correction, emDash)))},`);
      }
    }
    code.push('];', empty);

    const decl = [...doc, empty, 'export declare const mobyConstitution: string[];'];

    return Promise.all([
      saveTerser(path.join(data, 'moby-constitution.js'), code),
      saveRaw(path.join(data, 'moby-constitution.d.ts'), decl),
    ]);
  });
