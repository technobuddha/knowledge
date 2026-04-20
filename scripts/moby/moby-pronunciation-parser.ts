import { empty, splitChars } from '@technobuddha/library';

export function* parse(text: string): Generator<string> {
  let slash = false;
  let token = empty;

  for (const char of splitChars(text.replaceAll('//Oi//', '/Oi/'))) {
    if (char === '/') {
      if (slash) {
        yield `/${token}/`;
        slash = false;
        token = empty;
      } else {
        slash = true;
        token = empty;
      }
    } else if (slash) {
      token += char;
    } else {
      yield char;
    }
  }

  if (slash) {
    yield `/${token}`;
  }
}
