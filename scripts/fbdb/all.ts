import fs from 'node:fs/promises';
import path from 'node:path';

import { empty, escapeCsv, soundex, transliterate } from '@technobuddha/library';
import { err, locatePackageRoot, readLines, writeLines } from '@technobuddha/library/node';
import chalk from 'chalk';
import cliProgress from 'cli-progress';

const root = await locatePackageRoot();
if (!root) {
  err('Could not locate project root');
  process.exit(1);
}

const countries = await fs
  .readdir(path.join(root, '..', 'fbdb', 'data'), { withFileTypes: true })
  .then((files) =>
    files
      .filter((file) => path.extname(file.name) === '.csv')
      .map((file) => path.resolve(path.join(file.parentPath, file.name))),
  );

const b1 = new cliProgress.SingleBar({
  format: `Countries |${chalk.cyan('{bar}')}| {percentage}% || {value}/{total} || ETA {eta_formatted}`,
  barCompleteChar: '\u2588',
  barIncompleteChar: '\u2591',
  hideCursor: true,
});

b1.start(countries.length, 0);

const target = path.join(root, '..', 'fbdb', 'all.csv');
const wl = await writeLines(target);

for (const country of countries) {
  for await (const line of readLines(country)) {
    const [first, last, sex, country] = line.split(',');

    const normFirst = transliterate(first)
      .toUpperCase()
      .replaceAll(/['`\s\-]/gv, empty);
    const normLast = transliterate(last)
      .toUpperCase()
      .replaceAll(/['`\s\-]/gv, empty);

    const soundFirst = normFirst ? soundex(normFirst) : empty;
    const soundLast = normLast ? soundex(normLast) : empty;

    const isRoman = /^[A-Z]+$/v.test(normFirst) && /^[A-Z]+$/v.test(normLast) ? 't' : 'f';

    await wl.writeLine(
      `${escapeCsv(first)},${escapeCsv(normFirst)},${escapeCsv(soundFirst)},${escapeCsv(last)},${escapeCsv(normLast)},${escapeCsv(soundLast)},${escapeCsv(sex)},${escapeCsv(country)},${isRoman}`,
    );
  }
  b1.increment();
}

await wl.close();
b1.stop();
