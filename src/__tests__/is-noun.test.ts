import { isNoun } from '../is-noun.ts';

describe('isNoun', () => {
  it('returns true for a noun', () => {
    expect(isNoun('apple')).toBeTrue();
  });
  it('returns false for a non-noun', () => {
    expect(isNoun('run')).toBeFalse();
  });
});
