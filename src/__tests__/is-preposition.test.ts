import { isPreposition } from '../is-preposition.ts';

describe('isPreposition', () => {
  test('returns true for a preposition', () => {
    expect(isPreposition('in')).toBeTrue();
  });
  test('returns false for a non-preposition', () => {
    expect(isPreposition('run')).toBeFalse();
  });
});
