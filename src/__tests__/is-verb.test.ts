import { isVerb } from '../is-verb.ts';

describe('isVerb', () => {
  test('returns true for a verb', () => {
    expect(isVerb('run')).toBeTrue();
  });
  test('returns false for a non-verb', () => {
    expect(isVerb('apple')).toBeFalse();
  });
});
