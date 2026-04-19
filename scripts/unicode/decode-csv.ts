import { empty } from '@technobuddha/library';

import { type UnicodeData } from './unicode-data.ts';

export function decodeCsv(entry: Record<string, string>): UnicodeData {
  const codePoint = Number.parseInt(entry[0], 16);
  const character = String.fromCodePoint(codePoint);
  const name = entry[1];
  const category = entry[2];
  const combining = Number(entry[3]);
  const bidirectional = entry[4];
  const decomposition = entry[5];
  const decimalDigit = entry[6] === empty ? undefined : Number(entry[6]);
  const digit = entry[7] === empty ? undefined : Number(entry[7]);
  const numeric = entry[8] === empty ? undefined : entry[8];
  const mirrored = entry[9] === 'Y';
  const unicode1Name = entry[10] === empty ? undefined : entry[10];
  const comment = entry[11] === empty ? undefined : entry[11];
  const upperCase = entry[12] ? String.fromCodePoint(Number.parseInt(entry[12], 16)) : undefined;
  const lowerCase = entry[13] ? String.fromCodePoint(Number.parseInt(entry[13], 16)) : undefined;
  const titleCase = entry[14] ? String.fromCodePoint(Number.parseInt(entry[14], 16)) : undefined;

  const display =
    combining ?
      combining === 233 || combining === 234 ?
        `o${character}o`
      : `${character}o`
    : category === 'Cs' ? 'surrogate'
    : category.startsWith('C') ? '◌'
    : name.startsWith('VARIATION SELECTOR') ? `◌${character}`
    : name === 'COMBINING GRAPHEME JOINER' ? `◌${character}`
    : name === 'LINE SEPARATOR' ? '◌'
    : name === 'PARAGRAPH SEPARATOR' ? '◌'
    : character === '\\' ? '\\\\'
    : character;

  return {
    character,
    codePoint,
    name,
    display,
    category,
    combining,
    bidirectional,
    decomposition,
    decimalDigit,
    digit,
    numeric,
    mirrored,
    unicode1Name,
    comment,
    upperCase,
    lowerCase,
    titleCase,
  };
}
