import { isPlural } from '../is-plural.ts';

describe('isPlural', () => {
  test('returns true for a plural', () => {
    expect(isPlural('apples')).toBeTruthy();
  });
  test('returns false for a non-plural', () => {
    expect(isPlural('apple')).toBeFalsy();
  });
});
