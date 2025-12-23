import { isNounPhrase } from '../is-noun-phrase.ts';

describe('isNounPhrase', () => {
  test('returns true for a noun phrase', () => {
    expect(isNounPhrase('by and large')).toBeTruthy();
  });
  test('returns false for a non-noun phrase', () => {
    expect(isNounPhrase('run')).toBeFalsy();
  });
});
