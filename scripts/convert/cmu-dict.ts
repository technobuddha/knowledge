// cspell:ignore mpron cmudict
import fs from 'node:fs/promises';
import path from 'node:path';

import { collapseWhitespace, empty, quote, space, splitLines } from '@technobuddha/library';
import { Iconv } from 'iconv';

import { header } from '../helpers/header.ts';
import { readDocumentation } from '../helpers/read-documentation.ts';
import { savePretty } from '../helpers/save-pretty.ts';

// const punctuation = [
//   '--DASH',
//   '-HYPHEN',
//   ',COMMA',
//   ';SEMI-COLON',
//   ';SEMI-COLON(2)',
//   ':COLON',
//   '!EXCLAMATION-POINT',
//   '?QUESTION-MARK',
//   '...ELLIPSIS',
//   '.DECIMAL',
//   '.DOT',
//   '.PERIOD',
//   '.POINT',
//   "'SINGLE-QUOTE",
//   '"CLOSE-QUOTE',
//   '"DOUBLE-QUOTE',
//   '"END-OF-QUOTE',
//   '"END-QUOTE',
//   '"IN-QUOTES',
//   '"QUOTE',
//   '"UNQUOTE',
//   '(BEGIN-PARENS',
//   '(LEFT-PAREN',
//   '(PAREN',
//   '(PARENTHESES',
//   '(PARENTHETICALLY',
//   '(PARENTHETICALLY(2)',
//   ')CLOSE-PAREN',
//   ')END-PARENS',
//   ')END-THE-PAREN',
//   ')PAREN',
//   ')RIGHT-PAREN',
//   ')UN-PARENTHESES',
//   '{BRACE',
//   '{LEFT-BRACE',
//   '}CLOSE-BRACE',
//   '}RIGHT-BRACE',
//   '/SLASH',
//   '&AMPERSAND',
//   '%PERCENT',
// ];

export async function cmuDict(root: string): Promise<void> {
  // eslint - disable-next-line unicorn/text-encoding-identifier-case
  const iconv = new Iconv('Macintosh', 'utf8');

  const docs = await readDocumentation(root, 'cmu-pronunciation');

  return fs.readFile(path.join(root, 'moby', 'mpron', 'cmudict0.3')).then(async (buffer) => {
    const dict: Map<string, Set<string>> = new Map();

    for (const line of splitLines(iconv.convert(buffer).toString())) {
      if (line && !line.startsWith('#')) {
        let [word, ...pronounce] = collapseWhitespace(line).split(space);

        const match = /(\(\d+\))$/v.exec(word);
        if (match) {
          word = word.slice(0, match.index);
        }

        dict.set(word, (dict.get(word) ?? new Set()).add(pronounce.join(space)));
      }
    }

    const code: string[] = [
      ...header,
      ...docs,
      'export const cmuPronunciation: Record<string, string[]> = {',
    ];
    for (const [word, pronounce] of Array.from(dict.entries()).sort(([a], [b]) =>
      a.localeCompare(b, 'en', { sensitivity: 'base' }),
    )) {
      code.push(
        `${quote(word)}: [${Array.from(pronounce)
          .map((p) => quote(p))
          .join(', ')}],`,
      );
    }
    code.push('};', empty);
    const file = [...header, ...code, empty].join('\n');
    return savePretty(path.join(root, 'src', '@data', 'cmu-pronunciation.ts'), file, '//');
  });
}
