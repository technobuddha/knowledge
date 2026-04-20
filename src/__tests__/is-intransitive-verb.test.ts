import { isIntransitiveVerb } from '../is-intransitive-verb.ts';

describe('isIntransitiveVerb', () => {
  test('returns true for an intransitive verb', () => {
    expect(isIntransitiveVerb('run')).toBeTrue();
  });
  test('returns false for a non-intransitive verb', () => {
    expect(isIntransitiveVerb('apple')).toBeFalse();
  });
});
