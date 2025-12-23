import { isPreposition } from '../is-preposition.ts';

describe('isPreposition', () => {
  it('returns true for a preposition', () => {
    expect(isPreposition('in')).toBeTrue();
  });
  it('returns false for a non-preposition', () => {
    expect(isPreposition('run')).toBeFalse();
  });
});
