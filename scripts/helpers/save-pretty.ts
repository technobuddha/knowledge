import fs from 'node:fs/promises';
import path from 'node:path';

import { bannerize, type BannerStyle, empty } from '@technobuddha/library';
import { fileExists, out } from '@technobuddha/library/node';
import { app } from '@technobuddha/project';
import chalk from 'chalk';
import { format } from 'prettier';

export async function savePretty(
  filepath: string,
  content: string,
  comment: BannerStyle | null = '//',
): Promise<void> {
  if (content === empty) {
    return fileExists(filepath).then((exists) => {
      if (exists) {
        out(filepath, ': ', chalk.red('deleted'), '\n');
        void fs.rm(filepath, { force: true });
      }
      return undefined;
    });
  }

  let bannerized = comment ? bannerize(content, comment) : content;
  if (bannerized.at(-1) !== '\n') {
    bannerized += '\n';
  }

  // const formatted = await resolveConfig(filepath).then(async (config) => {
  //   return format(bannerized, {
  //     ...config,
  //     filepath,
  //   });
  // });

  const formatted = await format(bannerized, { filepath, ...app.prettier() });

  const original = await fs.readFile(filepath, 'utf8').catch(() => empty);
  if (original !== formatted) {
    out(
      path.relative(process.cwd(), filepath).padEnd(60),
      original ? chalk.yellow('updated') : chalk.green('created'),
      '\n',
    );
  }

  return fs.writeFile(filepath, formatted, 'utf8');
}
