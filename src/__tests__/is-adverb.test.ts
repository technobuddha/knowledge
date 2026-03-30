import { isAdverb } from '../is-adverb.ts';

describe('isAdverb', () => {
  test('returns true for an adverb', () => {
    expect(isAdverb('quickly')).toBeTrue();
  });
  test('returns false for a non-adverb', () => {
    expect(isAdverb('run')).toBeFalse();
  });
});
