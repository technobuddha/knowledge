import { partOfSpeech } from './part-of-speech.ts';

/**
 * Determines if a word is a pronoun (code 'r') according to the Moby Parts of Speech dataset
 * {@link mobyPartsOfSpeech}.
 *
 * ::: warning
 * This function relies on the full parts of speech dataset, which is almost 5MB in size, and can
 * take several seconds to transmit and load into memory.  This may not be suitable for
 * all applications, in particular web applications where load time is critical.
 * :::
 *
 * @param word - The word to check.
 * @returns True if the word is a pronoun, otherwise false.
 *
 * @example
 * isPronoun('he'); // true
 * isPronoun('run'); // false
 *
 * @group Parts of Speech
 * @category Classification
 */
export function isPronoun(word: string): boolean {
  return partOfSpeech(word)?.includes('r') ?? false;
}
