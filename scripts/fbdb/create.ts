import path from 'node:path';

import { err, locatePackageRoot } from '@technobuddha/library';
import { db } from '@technobuddha/postgres';
import { oraPromise } from 'ora';

const root = await locatePackageRoot();
if (!root) {
  err('Could not locate project root');
  process.exit(1);
}

await db.query('TRUNCATE names');
await oraPromise(
  db.query(`
    COPY names (first, first_norm, first_sound, last, last_norm, last_sound, sex, country, is_roman)
    FROM '${path.join(root, '..', 'fbdb', 'all.csv')}' WITH (format csv, header false);`),
  { text: 'Importing names' },
);

await db.query('DROP TABLE IF EXISTS last_sound');
await oraPromise(
  db.query(`
    CREATE TABLE last_sound
    AS SELECT last_sound, count(*) AS count
    FROM names GROUP BY last_sound;
  `),
  { text: 'Creating last_sound table' },
);

await db.query('DROP TABLE IF EXISTS last_norm;');
await oraPromise(
  db.query(`
    CREATE TABLE last_norm
    AS SELECT last_sound, last_norm, count(*) AS count
    FROM names GROUP BY last_sound, last_norm;
  `),
  { text: 'Creating last_name table' },
);

await db.query('DROP TABLE IF EXISTS last_name');
await oraPromise(
  db.query(`
    CREATE TABLE last_name
    AS SELECT last_norm, last, count(*) AS count
    FROM names GROUP BY last_norm, last;
  `),
  { text: 'Creating last_name table' },
);

await db.query('DROP TABLE IF EXISTS first_sound');
await oraPromise(
  db.query(`
    CREATE TABLE first_sound
    AS SELECT first_sound, count(*) AS count
    FROM names GROUP BY first_sound;
  `),
  { text: 'Creating first_sound table' },
);

await db.query('DROP TABLE IF EXISTS first_norm');
await oraPromise(
  db.query(`
    CREATE TABLE first_norm
    AS SELECT first_sound, first_norm, count(*) AS count
    FROM names GROUP BY first_sound, first_norm;
  `),
  { text: 'Creating first_norm table' },
);

await db.query('DROP TABLE IF EXISTS first_name');
await oraPromise(
  db.query(`
    CREATE TABLE first_name
    AS SELECT first_norm, first, count(*) AS count
    FROM names GROUP BY first_norm, first;
  `),
  { text: 'Creating first_name table' },
);
