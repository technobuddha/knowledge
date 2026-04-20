import { isNoun } from '../is-noun.ts';

describe('isNoun', () => {
  test('returns true for a noun', () => {
    expect(isNoun('apple')).toBeTrue();
  });
  test('returns false for a non-noun', () => {
    expect(isNoun('run')).toBeFalse();
  });
});
