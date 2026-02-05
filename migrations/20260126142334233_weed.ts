/* eslint-disable check-file/filename-naming-convention */
import { type ColumnDefinitions, type MigrationBuilder } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.sql(`
    DELETE FROM names WHERE first IN (SELECT first FROM names GROUP BY FIRST HAVING COUNT(*) < 5);
  `);

  pgm.sql(`
    DELETE FROM names WHERE normalized_first IN (SELECT normalized_first FROM names GROUP BY normalized_first HAVING COUNT(*) < 25);`);

  pgm.sql(`
    DELETE FROM names WHERE last IN (SELECT last FROM names GROUP BY LAST HAVING COUNT(*) < 5);
  `);

  pgm.sql(`
    DELETE FROM names WHERE normalized_last IN (SELECT normalized_last FROM names GROUP BY normalized_last HAVING COUNT(*) < 25);
  `);
}

export async function down(_pgm: MigrationBuilder): Promise<void> {
  //
}
