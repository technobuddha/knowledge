import { isConjunction } from '../is-conjunction.ts';

describe('isConjunction', () => {
  test('returns true for a conjunction', () => {
    expect(isConjunction('and')).toBeTrue();
  });
  test('returns false for a non-conjunction', () => {
    expect(isConjunction('run')).toBeFalse();
  });
});
