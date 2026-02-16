import fs from 'node:fs/promises';
import path from 'node:path';

import { empty } from '@technobuddha/library';
import { fileExists } from '@technobuddha/library/node';
import { fileOperation } from '@technobuddha/project/library';

export type SaveOptions = {
  /** if true, suppresses logging of file operations */
  quiet?: boolean;
};

export async function saveRaw(
  filePath: string,
  code: string | string[],
  { quiet = false }: SaveOptions = {},
): Promise<void> {
  const contents = Array.isArray(code) ? code.join('\n') : code;

  if (contents.trim() === empty) {
    return fileExists(filePath).then((exists) => {
      if (exists) {
        if (!quiet) {
          fileOperation(filePath, 'deleted');
        }
        void fs.rm(filePath, { force: true });
      }
      return undefined;
    });
  }

  await fs.mkdir(path.dirname(filePath), { recursive: true });

  await fs
    .readFile(filePath, 'utf-8')
    .then(async (original) => {
      if (original !== contents) {
        if (!quiet) {
          fileOperation(filePath, 'updated');
        }
        return fs.writeFile(filePath, contents, 'utf-8');
      }
    })
    .catch(async () => {
      if (!quiet) {
        fileOperation(filePath, 'created');
      }
      return fs.writeFile(filePath, contents, 'utf-8');
    });
}
