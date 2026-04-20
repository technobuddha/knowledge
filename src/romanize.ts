import { build, empty, splitChars } from '@technobuddha/library';

import { romanization } from './@data/romanization.ts';

export function romanize(text: string): string {
  return build(splitChars(text).map((c) => romanization[c.codePointAt(0)!] ?? empty));
}
