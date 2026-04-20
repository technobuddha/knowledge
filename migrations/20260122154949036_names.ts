/* eslint-disable check-file/filename-naming-convention */
import { type ColumnDefinitions, type MigrationBuilder } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.createTable('names', {
    id: { type: 'serial', primaryKey: true },
    first: { type: 'text' },
    first_norm: { type: 'text' },
    first_sound: { type: 'text' },
    last: { type: 'text' },
    last_norm: { type: 'text' },
    last_sound: { type: 'text' },
    sex: { type: 'text' },
    country: { type: 'text', notNull: true },
    is_roman: { type: 'boolean', notNull: true },
  });
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropTable('names');
}
