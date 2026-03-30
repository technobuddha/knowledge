import { isPronoun } from '../is-pronoun.ts';

describe('isPronoun', () => {
  test('returns true for a pronoun', () => {
    expect(isPronoun('he')).toBeTrue();
  });
  test('returns false for a non-pronoun', () => {
    expect(isPronoun('run')).toBeFalse();
  });
});
