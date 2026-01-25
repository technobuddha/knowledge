/* eslint-disable check-file/filename-naming-convention */
import { type ColumnDefinitions, type MigrationBuilder } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.addColumns('names', {
    sound_first: { type: 'text' },
    sound_last: { type: 'text' },
  });

  pgm.sql(`
    UPDATE names SET
      sound_first = soundex(first),
      sound_last = soundex(last)
  `);
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropColumns('names', ['sound_first', 'sound_last']);
}
