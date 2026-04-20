import { partOfSpeech } from '../part-of-speech.ts';

describe('partOfSpeech', () => {
  test('returns part of speech for exact match (run, apple)', () => {
    expect(partOfSpeech('run')).toBe('Vit');
    expect(partOfSpeech('apple')).toBe('N');
  });

  test('is case-insensitive', () => {
    expect(partOfSpeech('RUN')).toEqual(partOfSpeech('run'));
    expect(partOfSpeech('apple')).toEqual(partOfSpeech('APPLE'));
  });

  test('matches after removing non-letter characters', () => {
    expect(partOfSpeech("O'Neill")).toEqual(partOfSpeech('oneill'));
    expect(partOfSpeech('co-operate')).toEqual(partOfSpeech('cooperate'));
  });

  test('returns undefined for unknown word', () => {
    expect(partOfSpeech('xyzzy')).toBeUndefined();
  });

  test('matches after normalization', () => {
    expect(partOfSpeech('Running!')).toEqual(partOfSpeech('running'));
  });
});
