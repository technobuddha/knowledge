import { isInterjection } from '../is-interjection.ts';

describe('isInterjection', () => {
  it('returns true for an interjection', () => {
    expect(isInterjection('wow')).toBeTrue();
  });
  it('returns false for a non-interjection', () => {
    expect(isInterjection('run')).toBeFalse();
  });
});
