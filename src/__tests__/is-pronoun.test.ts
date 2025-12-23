import { isPronoun } from '../is-pronoun.ts';

describe('isPronoun', () => {
  it('returns true for a pronoun', () => {
    expect(isPronoun('he')).toBeTrue();
  });
  it('returns false for a non-pronoun', () => {
    expect(isPronoun('run')).toBeFalse();
  });
});
