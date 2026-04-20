import { isIndefiniteArticle } from '../is-indefinite-article.ts';

describe('isIndefiniteArticle', () => {
  test('returns true for an indefinite article', () => {
    expect(isIndefiniteArticle('a')).toBeTruthy();
  });
  test('returns false for a non-indefinite article', () => {
    expect(isIndefiniteArticle('the')).toBeFalsy();
  });
});
