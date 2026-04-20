import { partOfSpeech } from './part-of-speech.ts';

/**
 * Determines if a word is a transitive verb (code 't') according to the Moby Parts of Speech dataset
 * {@link mobyPartsOfSpeech}.
 *
 * ::: warning
 * This function relies on the full parts of speech dataset, which is almost 5MB in size, and can
 * take several seconds to transmit and load into memory.  This may not be suitable for
 * all applications, in particular web applications where load time is critical.
 * :::
 *
 * @param word - The word to check.
 * @returns True if the word is a transitive verb, otherwise false.
 *
 * @example
 * isTransitiveVerb('run'); // true (if 'run' includes 't')
 * isTransitiveVerb('apple'); // false
 *
 * @group Parts of Speech
 * @category Classification
 */
export function isTransitiveVerb(word: string): boolean {
  return partOfSpeech(word)?.includes('t') ?? false;
}
