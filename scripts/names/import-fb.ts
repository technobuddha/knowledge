import fs from 'node:fs/promises';
import path from 'node:path';

import {
  clean,
  collapseWhitespace,
  err,
  isLowerCase,
  locatePackageRoot,
  out,
  readLines,
  removeDiacritics,
  space,
} from '@technobuddha/library';
import ansi from 'ansi-escapes';

const root = await locatePackageRoot();
if (!root) {
  err('Could not find root directory');
  process.exit(1);
}

function isLatin(name: string): boolean {
  return /^[A-Za-z\- ]+$/v.test(name);
}

function cleanName(name: string): string {
  return clean(
    collapseWhitespace(
      name
        .split(space)
        .filter((l) => l.length > 1 || isLowerCase(l))
        .join(space),
    ),
  );
}

out(ansi.clearScreen);

const dump = path.join(root, '..', 'name_dataset', 'data');
const files = await fs.readdir(dump);

// const wl = await writeLines(path.join(root, '..', 'name_dataset', 'all.csv'));

let count = 0;
let len = 0;
for (const file of files) {
  out(ansi.cursorTo(2, 2), ansi.eraseEndLine, file);

  for await (const line of readLines(path.join(dump, file))) {
    let [first, last, gender, country] = line.split(',');

    first = cleanName(first);
    last = cleanName(last);

    const romanFirst = removeDiacritics(first);
    const romanLast = removeDiacritics(last);

    if (!isLatin(romanFirst) || !isLatin(romanLast)) {
      count++;
      len += first.length + last.length;
    }

    // const soundFirst = soundex(romanFirst);
    // const soundLast = soundex(romanLast);

    // await wl.writeLine(
    //   `${first},${romanFirst},${soundFirst},${last},${romanLast},${soundLast},${gender},${country}`,
    // );
    // if (++count % 1_000_000 === 0) {
    //   out(ansi.cursorTo(2, 4), ansi.eraseEndLine, formatNumber(count, '#,0'));
    // }
  }
}

console.log('\nNon-latin names:', count, len);
console.log('Average length:', (len / count).toFixed(2));

//await wl.close();
