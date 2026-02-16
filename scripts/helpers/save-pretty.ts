import fs from 'node:fs/promises';
import path from 'node:path';

import { bannerize, type BannerStyle, empty } from '@technobuddha/library';
import { fileExists, out } from '@technobuddha/library/node';
import { app } from '@technobuddha/project';
import { fileOperation } from '@technobuddha/project/library';
import chalk from 'chalk';
import { format } from 'prettier';

export async function savePretty(
  filepath: string,
  content: string,
  comment: BannerStyle | null = '//',
  message?: string[],
): Promise<void> {
  if (content === empty) {
    return fileExists(filepath).then((exists) => {
      if (exists) {
        fileOperation(filepath, 'delete');
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
    fileOperation(filepath, original ? 'update' : 'create');
  }

  return fs.writeFile(filepath, formatted, 'utf-8');
}
