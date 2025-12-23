import fs from 'node:fs/promises';
import path from 'node:path';

import {
  clean,
  collapseWhitespace,
  empty,
  formatNumber,
  isLowerCase,
  removeDiacritics,
  soundex,
  space,
} from '@technobuddha/library';
import { err, locateRootDirectory, out, readLines } from '@technobuddha/library/node';
import { db } from '@technobuddha/postgres';
import ansi from 'ansi-escapes';

const root = await locateRootDirectory();
if (!root) {
  err('Could not find root directory');
  process.exit(1);
}

function isLatin(name: string): boolean {
  return /^[A-Za-z\- ]+$/v.test(name);
}

function cleanName(name: string): string {
  return clean(
    collapseWhitespace(
      name
        .split(space)
        .filter((l) => l.length > 1 || isLowerCase(l))
        .join(space),
    ),
  );
}

out(ansi.clearScreen);
out(ansi.cursorTo(2, 2), ansi.eraseEndLine, 'preparing database');

await db.none('DROP TABLE IF EXISTS last;');
await db.none('DROP TABLE IF EXISTS names;');
await db.none(`
CREATE TABLE names (
  id integer primary key,
  first text,
  normFirst text,
  soundFirst text,
  last text,
  normLast text,
  soundLast text,
  gender varchar(1),
  country varchar(2)
);`);

out(ansi.cursorTo(2, 2), ansi.eraseEndLine, 'enumerating import files');
const dump = path.join(root, '..', 'name_dataset', 'data');
const files = await fs.readdir(dump);

let id = 0;
for (const file of files) {
  let count = 0;
  const csv: string[] = [];

  out(ansi.cursorTo(2, 2), ansi.eraseEndLine, file);

  for await (const line of readLines(path.join(dump, file))) {
    let [first, last, gender, country] = line.split(',');
    first = cleanName(first);
    last = cleanName(last);

    const normFirst = removeDiacritics(first.toLowerCase());
    const normLast = removeDiacritics(last.toLowerCase());

    const soundFirst = soundex(normFirst);
    const soundLast = soundex(normLast);

    if (normLast && normFirst && isLatin(normLast) && isLatin(normFirst)) {
      csv.push(
        `${id++},${first},${normFirst},${soundFirst},${last},${normLast},${soundLast},${gender},${country}\n`,
      );

      if (csv.length >= 1000000) {
        out(ansi.cursorTo(2, 4), ansi.eraseEndLine, formatNumber(id, '#,0'));
        await fs.writeFile('/tmp/import.csv', csv.join(empty), 'utf-8');
        await db.none(
          `COPY names (id, first, normFirst, soundFirst, last, normLast, soundLast, gender, country) FROM '/tmp/import.csv' WITH (format 'csv', header false);`,
        );
        csv.length = 0;
      }
      count++;
    }
  }

  if (csv.length > 0) {
    out(ansi.cursorTo(2, 4), ansi.eraseEndLine, formatNumber(id, '#,0'));
    await fs.writeFile('/tmp/import.csv', csv.join(empty), 'utf-8');
    await db.none(
      `COPY names (id, first, normFirst, soundFirst, last, normLast, soundLast, gender, country) FROM '/tmp/import.csv' WITH (format 'csv', header false);`,
    );
  }
  csv.length = 0;

  globalThis.gc?.();
}

// out(ansi.cursorTo(2, 2), ansi.eraseDown, 'creating index');
// await db.none('CREATE INDEX idx_last_base ON last (base);');

// out(ansi.cursorTo(2, 2), ansi.eraseDown, 'deleting deficient entries');
// await db.none(`
//   BEGIN WORK;
//   LOCK TABLE last IN EXCLUSIVE MODE;
//   DELETE FROM last WHERE base IN (SELECT base FROM last GROUP BY base HAVING COUNT(*) < 50);
//   COMMIT WORK;
//   `);
