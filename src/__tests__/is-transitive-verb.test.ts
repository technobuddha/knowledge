import { isTransitiveVerb } from '../is-transitive-verb.ts';

describe('isTransitiveVerb', () => {
  it('returns true for a transitive verb', () => {
    expect(isTransitiveVerb('run')).toBeTrue();
  });
  it('returns false for a non-transitive verb', () => {
    expect(isTransitiveVerb('apple')).toBeFalse();
  });
});
