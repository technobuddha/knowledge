/* eslint-disable check-file/filename-naming-convention */
import { type ColumnDefinitions, type MigrationBuilder } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.addColumns('names', {
    normalized_first: { type: 'text' },
    normalized_last: { type: 'text' },
  });

  pgm.sql(`
    UPDATE names SET
      normalized_first = normalize_name(first),
      normalized_last = normalize_name(last)
  `);
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropFunction('normalize_name', ['str text']);
  pgm.dropColumns('names', ['normalized_first', 'normalized_last']);
}
