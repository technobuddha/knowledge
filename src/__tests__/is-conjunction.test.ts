import { isConjunction } from '../is-conjunction.ts';

describe('isConjunction', () => {
  it('returns true for a conjunction', () => {
    expect(isConjunction('and')).toBeTrue();
  });
  it('returns false for a non-conjunction', () => {
    expect(isConjunction('run')).toBeFalse();
  });
});
