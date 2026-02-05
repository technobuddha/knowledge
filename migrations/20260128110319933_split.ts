/* eslint-disable check-file/filename-naming-convention */
import { type ColumnDefinitions, type MigrationBuilder } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.sql(`
    CREATE TABLE last_sound
    AS SELECT sound_last, count(*) AS count
    FROM names GROUP BY sound_last;
  `);

  pgm.sql(`
    CREATE TABLE last_name
    AS SELECT sound_last, normalized_last, count(*) AS count
    FROM names GROUP BY sound_last, normalized_last;
  `);

  pgm.sql(`
    CREATE TABLE last_variation
    AS SELECT normalized_last, last, count(*) AS count
    FROM names GROUP BY normalized_last, last;
  `);
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropTable('last_sound');
  pgm.dropTable('last_name');
  pgm.dropTable('last_variation');
}
