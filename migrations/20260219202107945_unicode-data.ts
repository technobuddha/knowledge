/* eslint-disable check-file/filename-naming-convention */
import { type ColumnDefinitions, type MigrationBuilder } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.createTable('unicode_data', {
    code_point: { type: 'serial', primaryKey: true },
    name: { type: 'text', notNull: true },
    category: { type: 'text', notNull: true },
    combining: { type: 'integer', notNull: true },
    bidirectional: { type: 'text', notNull: true },
    decomposition: { type: 'text' },
    decimal_digit: { type: 'integer' },
    digit: { type: 'integer' },
    numeric: { type: 'text' },
    mirrored: { type: 'boolean', notNull: true },
    unicode1_name: { type: 'text' },
    comment: { type: 'text' },
    upper_case: { type: 'text' },
    lower_case: { type: 'text' },
    title_case: { type: 'text' },
  });
  //
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropTable('unicode_data');
}
