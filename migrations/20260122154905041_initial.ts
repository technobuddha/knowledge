/* eslint-disable check-file/filename-naming-convention */
import { type ColumnDefinitions, type MigrationBuilder } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.createExtension('citext', { ifNotExists: true });
  pgm.createExtension('fuzzystrmatch', { ifNotExists: true });
  pgm.createExtension('ltree', { ifNotExists: true });
  pgm.createExtension('pgcrypto', { ifNotExists: true });
  pgm.createExtension('unaccent', { ifNotExists: true });
  pgm.createExtension('uuid-ossp', { ifNotExists: true });

  pgm.createFunction(
    'normalize_name',
    ['str text'],
    { returns: 'text', replace: true, language: 'sql' },
    `SELECT
      LOWER(
        TRIM(
          REGEXP_REPLACE(
            REGEXP_REPLACE(
              UNACCENT(NORMALIZE(str, NFKC)),
              '(^|\\s|\\-)\\S(?=\\-|\\s|$)',
              ' ',
              'g'),
            '\\s+',
            ' ',
            'g')));`,
  );
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropFunction('normalize_name', ['str text'], { ifExists: true });
  pgm.dropExtension('uuid-ossp', { ifExists: true });
  pgm.dropExtension('unaccent', { ifExists: true });
  pgm.dropExtension('pgcrypto', { ifExists: true });
  pgm.dropExtension('ltree', { ifExists: true });
  pgm.dropExtension('fuzzystrmatch', { ifExists: true });
  pgm.dropExtension('citext', { ifExists: true });
}
