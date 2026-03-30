import { isTransitiveVerb } from '../is-transitive-verb.ts';

describe('isTransitiveVerb', () => {
  test('returns true for a transitive verb', () => {
    expect(isTransitiveVerb('run')).toBeTrue();
  });
  test('returns false for a non-transitive verb', () => {
    expect(isTransitiveVerb('apple')).toBeFalse();
  });
});
