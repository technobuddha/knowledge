import { isVerb } from '../is-verb.ts';

describe('isVerb', () => {
  it('returns true for a verb', () => {
    expect(isVerb('run')).toBeTrue();
  });
  it('returns false for a non-verb', () => {
    expect(isVerb('apple')).toBeFalse();
  });
});
