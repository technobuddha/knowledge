import { err, locateRootDirectory } from '@technobuddha/library/node';

import { cmuDict } from './convert/cmu-dict.ts';
import { crosswords } from './convert/crosswords.ts';
import { hyphenation } from './convert/hyphenation.ts';
import { language } from './convert/language.ts';
import { partsOfSpeech } from './convert/parts-of-speech.ts';
import { substring } from './convert/substring.ts';
import { thesaurus } from './convert/thesaurus.ts';
import { words } from './convert/words.ts';

const root = await locateRootDirectory();
if (!root) {
  err('Could not find root directory');
  process.exit(1);
}

await Promise.all([
  partsOfSpeech(root),
  thesaurus(root),
  hyphenation(root),
  crosswords(root),
  words(root),
  language(root),
  cmuDict(root),
  substring(root),
]);

process.exit(0);
