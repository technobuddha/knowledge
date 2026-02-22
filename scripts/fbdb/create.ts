import { err, locatePackageRoot } from '@technobuddha/library/node';
import { db } from '@technobuddha/postgres';
import { oraPromise } from 'ora';

const root = await locatePackageRoot();
if (!root) {
  err('Could not locate project root');
  process.exit(1);
}

await db.query('DROP TABLE IF EXISTS last_sound');
await oraPromise(
  db.query(`
    CREATE TABLE last_sound
    AS SELECT sound_last, count(*) AS count
    FROM names GROUP BY sound_last;
  `),
  { text: 'Creating last_sound table' },
);

await db.query('DROP TABLE IF EXISTS last_name');
await oraPromise(
  db.query(`
    CREATE TABLE last_name
    AS SELECT sound_last, normalized_last, count(*) AS count
    FROM names GROUP BY sound_last, normalized_last;
  `),
  { text: 'Creating last_name table' },
);

await db.query('DROP TABLE IF EXISTS last_variation');
await oraPromise(
  db.query(`
    CREATE TABLE last_variation
    AS SELECT normalized_last, last, count(*) AS count
    FROM names GROUP BY normalized_last, last;
  `),
  { text: 'Creating last_variation table' },
);

await db.query('DROP TABLE IF EXISTS first_sound');
await oraPromise(
  db.query(`
    CREATE TABLE first_sound
    AS SELECT sound_first, count(*) AS count
    FROM names GROUP BY sound_first;
  `),
  { text: 'Creating first_sound table' },
);

await db.query('DROP TABLE IF EXISTS first_name');
await oraPromise(
  db.query(`
    CREATE TABLE first_name
    AS SELECT sound_first, normalized_first, count(*) AS count
    FROM names GROUP BY sound_first, normalized_first;
  `),
  { text: 'Creating first_name table' },
);

await db.query('DROP TABLE IF EXISTS first_variation');
await oraPromise(
  db.query(`
    CREATE TABLE first_variation
    AS SELECT normalized_first, first, count(*) AS count
    FROM names GROUP BY normalized_first, first;
  `),
  { text: 'Creating first_variation table' },
);
