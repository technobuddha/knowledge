import fs from 'node:fs/promises';

import { bannerize, type BannerStyle, empty } from '@technobuddha/library';
import { fileExists } from '@technobuddha/library/node';
import { app } from '@technobuddha/project';
import { fileOperation } from '@technobuddha/project/library';
import { format } from 'prettier';

export async function savePretty(
  filepath: string,
  code: string | string[],
  comment: BannerStyle | null = '//',
  message?: string[],
): Promise<void> {
  const content = Array.isArray(code) ? code.join('\n') : code;

  if (content === empty) {
    return fileExists(filepath).then((exists) => {
      if (exists) {
        fileOperation(filepath, 'deleted');
        void fs.rm(filepath, { force: true });
      }
      return undefined;
    });
  }

  let bannerized = comment ? bannerize(content, comment, message) : content;
  if (bannerized.at(-1) !== '\n') {
    bannerized += '\n';
  }

  const formatted = await format(bannerized, { filepath, ...app.prettier() });

  const original = await fs.readFile(filepath, 'utf-8').catch(() => empty);
  if (original !== formatted) {
    fileOperation(filepath, original ? 'updated' : 'created');
  }

  return fs.writeFile(filepath, formatted, 'utf-8');
}
