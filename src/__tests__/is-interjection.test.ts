import { isInterjection } from '../is-interjection.ts';

describe('isInterjection', () => {
  test('returns true for an interjection', () => {
    expect(isInterjection('wow')).toBeTrue();
  });
  test('returns false for a non-interjection', () => {
    expect(isInterjection('run')).toBeFalse();
  });
});
