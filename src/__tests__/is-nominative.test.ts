import { isNominative } from '../is-nominative.ts';

describe('isNominative', () => {
  test('returns true for a nominative', () => {
    expect(isNominative('I')).toBeTruthy();
  });
  test('returns false for a non-nominative', () => {
    expect(isNominative('run')).toBeFalsy();
  });
});
