import { isDefiniteArticle } from '../is-definite-article.ts';

describe('isDefiniteArticle', () => {
  test('returns true for a definite article', () => {
    expect(isDefiniteArticle('the')).toBeTruthy();
    expect(isDefiniteArticle('those')).toBeTruthy();
    expect(isDefiniteArticle('these')).toBeTruthy();
  });
  test('returns false for a non-definite article', () => {
    expect(isDefiniteArticle('a')).toBeFalsy();
    expect(isDefiniteArticle('run')).toBeFalsy();
  });
});
