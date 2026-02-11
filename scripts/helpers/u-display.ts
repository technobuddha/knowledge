import { escapeJS } from '@technobuddha/library';

import { type UnicodeData } from '../../src/@data/unicode-data.ts';

export function uDisplay({ category, combining, character }: Partial<UnicodeData>): string {
  if (combining) {
    return `// ${combining === 233 || combining === 234 ? `x${character}x` : `x${character}`}`;
  } else if (category === 'Cs') {
    return '// surrogate';
  }
  return `// ${escapeJS(character!)}`;
}
