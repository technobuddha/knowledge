import { isAdjective } from '../is-adjective.ts';

describe('isAdjective', () => {
  test('returns true for an adjective', () => {
    expect(isAdjective('quick')).toBeTrue();
  });
  test('returns false for a non-adjective', () => {
    expect(isAdjective('run')).toBeFalse();
  });
});
