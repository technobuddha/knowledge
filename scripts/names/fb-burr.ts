import fs from 'node:fs/promises';
import path from 'node:path';

import {
  clean,
  collapseWhitespace,
  empty,
  formatNumber,
  isLowerCase,
  removeDiacritics,
  space,
} from '@technobuddha/library';
import { err, locateRootDirectory, out, readLines } from '@technobuddha/library/node';
import { db } from '@technobuddha/postgres';

const root = await locateRootDirectory();
if (!root) {
  err('Could not find root directory');
  process.exit(1);
}

await db.none('DROP TABLE IF EXISTS last;');
await db.none(`
CREATE TABLE last (
  id integer primary key,
  last text,
  base text,
  country varchar(2)
);`);

const dump = path.join(root, '..', 'name_dataset', 'data');

function isLatin(name: string): boolean {
  return /^[A-Za-z\- ]+$/v.test(name);
}

const files = await fs.readdir(dump);

let id = 0;
for (const file of files) {
  let count = 0;
  const csv: string[] = [];
  out('<', file, '\n');

  for await (const line of readLines(path.join(dump, file))) {
    let [, last, , country] = line.split(',');
    last = clean(collapseWhitespace(last))
      .normalize('NFC')
      .split(space)
      .filter((l) => l.length > 1 || isLowerCase(l))
      .join(space);
    const base = removeDiacritics(last);

    if (last && isLatin(base)) {
      csv.push(`${id++},${last},${base},${country}\n`);

      if (csv.length >= 1000000) {
        out(`>importing ${formatNumber(csv.length, '#,0')} total ${formatNumber(id, '#,0')}\n`);
        await fs.writeFile('/tmp/burr.csv', csv.join(empty), 'utf-8');
        await db.none(
          `COPY last (id, last, base, country) FROM '/tmp/burr.csv' WITH (format 'csv', header false);`,
        );
        csv.length = 0;
      }
      count++;
    }
  }

  if (csv.length > 0) {
    out(`>importing ${formatNumber(csv.length, '#,0')} total ${formatNumber(id, '#,0')}\n`);
    await fs.writeFile('/tmp/burr.csv', csv.join(empty), 'utf-8');
    await db.none(
      `COPY last (id, last, base, country) FROM '/tmp/burr.csv' WITH (format 'csv', header false);`,
    );
  }
  csv.length = 0;

  globalThis.gc?.();
}

out('=> creating index\n');
await db.none('CREATE INDEX idx_last_base ON last (base);');

out('=> deleting deficient entries\n');
await db.none(`
  BEGIN WORK;
  LOCK TABLE last IN EXCLUSIVE MODE;
  DELETE FROM last WHERE base IN (SELECT base FROM last GROUP BY base HAVING COUNT(*) < 50);
  COMMIT WORK;
  `);
