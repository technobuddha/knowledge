import { escapeJS, quote } from '@technobuddha/library';

import { type UnicodeData } from '../../src/@data/unicode-data.ts';

import { uEscape } from './u-escape.ts';

export function uDisplay({
  category,
  combining,
  character,
  codePoint,
  name,
}: Partial<UnicodeData>): string {
  if (combining) {
    const comment = combining === 233 || combining === 234 ? `x${character}x` : `x${character}`;
    return `${quote(uEscape(codePoint!))} // ${comment} ${name}`;
  } else if (category === 'Cs') {
    return `${quote(uEscape(codePoint!))} // ${name}`;
  }
  return `${quote(escapeJS(character!))} // ${name}`;
}
