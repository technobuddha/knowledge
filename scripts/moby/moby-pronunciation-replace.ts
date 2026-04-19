import { build, empty, splitChars } from '@technobuddha/library';

export function replace(text: string, from: string, to: string): string {
  const result: string[] = [];

  let slash = false;
  let token = empty;

  for (const char of splitChars(text.replaceAll('//Oi//', '/Oi/'))) {
    if (char === '/') {
      if (slash) {
        const full = `/${token}/`;
        result.push(full === from ? to : full);
        slash = false;
        token = empty;
      } else {
        slash = true;
        token = empty;
      }
    } else if (slash) {
      token += char;
    } else {
      result.push(char === from ? to : char);
    }
  }

  if (slash) {
    const full = `/${token}`;
    result.push(full === from ? to : full);
  }

  return build(result);
}
