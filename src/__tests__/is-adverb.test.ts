import { isAdverb } from '../is-adverb.ts';

describe('isAdverb', () => {
  it('returns true for an adverb', () => {
    expect(isAdverb('quickly')).toBeTrue();
  });
  it('returns false for a non-adverb', () => {
    expect(isAdverb('run')).toBeFalse();
  });
});
