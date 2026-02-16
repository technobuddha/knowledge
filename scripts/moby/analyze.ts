// cspell:disable
/* eslint-disable @typescript-eslint/prefer-destructuring */
import '@

import fs from 'node:fs/promises';
import path from 'node:path';

import { quote, space, splitLines } from '@technobuddha/library';
import { err, locatePackageRoot } from '@technobuddha/library/node';

import { lookup } from './helpers/lookup.ts';
import { parse } from './helpers/moby-pronunciation-parser.ts';
import { exceptions } from './moby/data/exceptions.ts';
import { spacedWords } from './moby/data/spaced-words.ts';

const root = await locatePackageRoot();
if (!root) {
  err('Could not find root directory');
  process.exit(1);
}

async function rateLimit(func: () => Promise<void>, delay = 1000): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      void func().then(() => resolve());
    }, delay);
  });
}

const validTokens = new Set<string>([
  "'",
  ',',
  '_',
  ' ',

  '/&/',
  '/-/',
  '/@/',
  '/[@]/',
  '/A/',
  '/aI/',
  '/AU/',
  'b',
  'd',
  '/D/',
  '/dZ/',
  '/E/',
  '/eI/',
  'f',
  'g',
  'h',
  '/hw/',
  '/i/',
  '/I/',
  '/j/',
  '/ju/',
  'k',
  'l',
  'm',
  'n',
  '/N/',
  '/O/',
  '/Oi/',
  '/oU/',
  'p',
  'r',
  's',
  '/S/',
  't',
  '/T/',
  '/tS/',
  '/u/',
  '/U/',
  'v',
  'w',
  'z',
  '/Z/',

  'A',
  // 'e', // no doc 98 occurences
  // 'i', // no doc 68 occurences
  'N',
  // 'o', // no doc 48 occurences
  'R',
  // 'S', // no doc 37 occurences
  // 'u', // no doc 52 occurences
  'V', // no doc 30 occurences
  // 'W', // no doc 60 occurences
  '/x/',
  '/y/',
  'Y',
  // '/z/', // no doc 18
  // 'Z', // no doc 29 occurences

  '/(@)/', // 3237 occurences
  // 'a', // 73 occurences
]);

const counts = new Map<string, [number, string, string][]>();

await fs
  .readFile(path.join(root, 'reference', 'moby', 'mpron', 'mobypron.unc'), 'utf-8')
  .then(async (buffer) => {
    let num = 0;

    // await fs.writeFile(
    //   path.join(root, 'reference', 'pron.txt'),
    //   iconv
    //     .convert(buffer)
    //     .toString()
    //     .replaceAll(/[\r\n]+/gv, '\n'),
    //   'utf-8',
    // );

    for (let line of splitLines(buffer)) {
      num++;
      if (line) {
        for (const [spacedWord, replacement] of Object.entries(spacedWords)) {
          if (line.startsWith(spacedWord)) {
            line = line.replace(spacedWord, replacement);
            break;
          }
        }

        const [w, ...p] = line.split(space);
        let word = w.replaceAll('_', space);
        let pronounce = p.join(space);

        if (word in exceptions) {
          const exception = exceptions[word];

          if ('to' in exception) {
            pronounce = exception.to;
          }

          if ('word' in exception) {
            word = exception.word;
          }
        }

        for (const token of parse(pronounce)) {
          if (!validTokens.has(token)) {
            counts.set(token, [...(counts.get(token) ?? []), [num, word, pronounce]]);
          }
        }
      }
    }

    const code: string[] = [];

    // for (const [token, count] of Array.from(counts.entries()).sort(
    //   ([, a], [, b]) => b.length - a.length,
    // )) {
    for (const [token, count] of counts.entries()) {
      for (const [line, word, pronounce] of count) {
        await rateLimit(async () => {
          const phonetic = await lookup(word);

          code.push(
            // `${quote(word)}: { from: ${quote(pronounce)}, to: ${quote(replace(pronounce, 'W', 'w'))}, line: ${line} }, // W\n`,
            `${quote(word)}: { from: ${quote(pronounce)}, to: ${quote(pronounce)}, line: ${line} }, // ${token}`,
          );
          if (phonetic) {
            code.push(`  // Phonetic: ${phonetic}\n`);
          }
        });
      }
    }

    await fs.appendFile(
      path.join(root, 'scripts', 'helpers', 'moby-pronunciation-exceptions.ts'),
      code.join('\n'),
      'utf-8',
    );
  });
