import fs from 'node:fs/promises';
import path from 'node:path';

import { soundex, toASCII } from '@technobuddha/library';
import { err, locatePackageRoot, readLines, writeLines } from '@technobuddha/library/node';
import { db } from '@technobuddha/postgres';
import chalk from 'chalk';
import cliProgress from 'cli-progress';
import { oraPromise } from 'ora';

const root = await locatePackageRoot();
if (!root) {
  err('Could not locate project root');
  process.exit(1);
}

const countries = await fs
  .readdir(path.join(root, '..', 'name_dataset', 'data'), { withFileTypes: true })
  .then((files) =>
    files
      .filter((file) => path.extname(file.name) === '.csv')
      .map((file) => path.resolve(path.join(file.parentPath, file.name))),
  );

const b1 = new cliProgress.SingleBar({
  format: `Countries |${chalk.cyan('{bar}')}| {percentage}% || {value}/{total} || ETA {eta_formatted}`,
  barCompleteChar: '\u2588',
  barIncompleteChar: '\u2591',
  hideCursor: true,
});

b1.start(countries.length, 0);

const target = path.join(root, '..', 'name_dataset', 'all.csv');
const wl = await writeLines(target);

for (const country of countries) {
  for await (const line of readLines(country)) {
    const [first, last, sex, country] = line.split(',');

    const normFirst = toASCII(first).toUpperCase();
    const normLast = toASCII(last).toUpperCase();

    if (/^[A-Z'\-]+$/v.test(normFirst) && /^[A-Z'\-]+$/v.test(normLast)) {
      await wl.writeLine(
        `${first},${normFirst},${soundex(normFirst)},${last},${normLast},${soundex(normLast)},${sex},${country}`,
      );
    }
  }
  b1.increment();
}

await wl.close();
b1.stop();

await db.query('TRUNCATE names;');
await oraPromise(
  db.query(
    `COPY names (first, normalized_first, sound_first, last, normalized_last, sound_last, sex, country ) FROM '${target}' WITH (format 'csv', header false);`,
  ),
  { text: 'Importing names into database' },
);

await oraPromise(
  db.query(`
    DELETE FROM names WHERE first IN (SELECT first FROM names GROUP BY FIRST HAVING COUNT(*) < 5);
  `),
  { text: 'Weeding out rare first names' },
);

await oraPromise(
  db.query(`
      DELETE FROM names WHERE normalized_first IN (SELECT normalized_first FROM names GROUP BY normalized_first HAVING COUNT(*) < 25);
    `),
  { text: 'Weeding out rare normalized first names' },
);

await oraPromise(
  db.query(`
      DELETE FROM names WHERE last IN (SELECT last FROM names GROUP BY LAST HAVING COUNT(*) < 5);
    `),
  { text: 'Weeding out rare last names' },
);

await oraPromise(
  db.query(`
      DELETE FROM names WHERE normalized_last IN (SELECT normalized_last FROM names GROUP BY normalized_last HAVING COUNT(*) < 25);
    `),
  { text: 'Weeding out rare normalized last names' },
);

await oraPromise(
  db.query(`
    CREATE TABLE last_sound
    AS SELECT sound_last, count(*) AS count
    FROM names GROUP BY sound_last;
  `),
  { text: 'Creating last_sound table' },
);

await oraPromise(
  db.query(`
    CREATE TABLE last_name
    AS SELECT sound_last, normalized_last, count(*) AS count
    FROM names GROUP BY sound_last, normalized_last;
  `),
  { text: 'Creating last_name table' },
);

await oraPromise(
  db.query(`
    CREATE TABLE last_variation
    AS SELECT normalized_last, last, count(*) AS count
    FROM names GROUP BY normalized_last, last;
  `),
  { text: 'Creating last_variation table' },
);
