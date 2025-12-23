/* eslint-disable check-file/filename-naming-convention */
import fs from 'node:fs/promises';
import path from 'node:path';

import { out } from '@technobuddha/library/node';
import { type ColumnDefinitions, type MigrationBuilder } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.createTable('names', {
    id: { type: 'serial', primaryKey: true },
    first: { type: 'text' },
    last: { type: 'text' },
    sex: { type: 'text' },
    country: { type: 'text' },
  });

  await fs.readdir('../name_dataset/data', { withFileTypes: true }).then(async (files) => {
    for (const file of files) {
      const filePath = path.resolve(path.join(file.parentPath, file.name));

      if (path.extname(filePath) !== '.csv') {
        continue;
      }

      out('Importing FB data from', file.name, '\n');

      pgm.sql(
        `COPY names (first, last, sex, country) FROM '${filePath}' WITH (format 'csv', header false)`,
      );
    }
  });
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropTable('names');
}
