// cspell:ignore mlang
import fs from 'node:fs/promises';
import path from 'node:path';

import { camelCase, empty, escapeJS, splitLines } from '@technobuddha/library';
import { err, locatePackageRoot } from '@technobuddha/library/node';

import { header } from '../helpers/header.ts';
import { readDocumentation } from '../helpers/read-documentation.ts';
import { savePretty } from '../helpers/save-pretty.ts';

const root = await locatePackageRoot();
if (!root) {
  err('Could not find root directory');
  process.exit(1);
}

// prettier-ignore
const files: string[] = ['french','german', 'italian', 'japanese', 'spanish'];

async function language(root: string): Promise<void> {
  // eslint - disable-next-line unicorn/text-encoding-identifier-case

  await Promise.all(
    files.map(async (input) => {
      const docs = await readDocumentation(root, `moby-${input}`);

      return fs
        .readFile(path.join(root, 'reference', 'moby', 'mlang', `${input}.txt`), 'utf-8')
        .then(async (buffer) => {
          const words: Set<string> = new Set();

          for (let line of splitLines(buffer)) {
            if (line && !line.startsWith('#')) {
              switch (input) {
                case 'french': {
                  line = line.replaceAll('a^', 'â');
                  line = line.replaceAll('e^', 'ê');
                  line = line.replaceAll('i^', 'î');
                  line = line.replaceAll('o^', 'ô');
                  line = line.replaceAll('u^', 'û');

                  line = line.replaceAll("e'", 'é');
                  line = line.replaceAll("r'", 'ŕ');
                  line = line.replaceAll("u'", 'ú');
                  line = line.replaceAll("n'", 'ń');
                  line = line.replaceAll("s'", 'ś');
                  line = line.replaceAll('a`', 'à');
                  line = line.replaceAll('e`', 'è');
                  line = line.replaceAll('u`', 'ù');
                  line = line.replaceAll('i"', 'ï');
                  line = line.replaceAll('e"', 'ë');
                  line = line.replaceAll('u"', 'ü');
                  line = line.replaceAll('c.', 'ċ');
                  line = line.replaceAll('c/', 'ç');

                  break;
                }

                case 'spanish': {
                  line = line.replaceAll('a`', 'à');
                  line = line.replaceAll('e`', 'è');
                  line = line.replaceAll('i`', 'ì');
                  line = line.replaceAll('o`', 'ò');
                  line = line.replaceAll('u`', 'ù');
                  line = line.replaceAll('\\', 'ñ');
                  line = line.replaceAll('{', 'ú');
                  line = line.replaceAll('/', 'ó');
                  break;
                }

                // no default
              }
              words.add(line);
            }
          }

          const code: string[] = [
            ...header,
            ...docs,
            `export const ${camelCase(`moby-${input}`)}: string[] = [`,
          ];
          for (const word of Array.from(words).sort((a, b) =>
            a.localeCompare(b, 'en', { sensitivity: 'base' }),
          )) {
            code.push(`"${escapeJS(word, { quote: 'double' })}",`);
          }
          code.push('];', empty);
          return savePretty(
            path.join(root, 'src', '@data', `moby-${input}.ts`),
            code.join('\n'),
            '//',
          );
        });
    }),
  );

  return undefined;
}

await language(root);
