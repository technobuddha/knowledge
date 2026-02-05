/* eslint-disable check-file/filename-naming-convention */
import { type ColumnDefinitions, type MigrationBuilder } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.sql(`
    DELETE FROM names WHERE normalized_first !~ '^[a-z\\-\\' ]+$' OR normalized_last !~ '^[a-z\\-\\' ]+$'
  `);
}

export async function down(_pgm: MigrationBuilder): Promise<void> {
  //
}
