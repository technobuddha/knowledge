import { isIntransitiveVerb } from '../is-intransitive-verb.ts';

describe('isIntransitiveVerb', () => {
  it('returns true for an intransitive verb', () => {
    expect(isIntransitiveVerb('run')).toBeTrue();
  });
  it('returns false for a non-intransitive verb', () => {
    expect(isIntransitiveVerb('apple')).toBeFalse();
  });
});
