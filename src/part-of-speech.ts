import { mobyPartsOfSpeech } from './@data/moby-parts-of-speech.ts';

/**
 * Regular expression to match all non-letter Unicode characters.
 *
 * @group PartOfSpeech
 * @category Utility
 * @internal
 */
const reKill = /[^\p{L}]/gv;

/**
 * Returns the part(s) of speech for a given word according to the Moby Parts of Speech dataset
 * {@link mobyPartsOfSpeech}.
 *
 * The lookup is case-insensitive and will attempt to match the word in its original, lower, and upper case forms.
 * If no direct match is found, it will also try a normalized form (removing non-letter characters and lowercasing).
 *
 * If no entry is found, the function returns `undefined`.
 *
 * ::: warning
 * This function relies on the full parts of speech dataset, which is almost 5MB in size, and can
 * take several seconds to transmit and load into memory.  This may not be suitable for
 * all applications, in particular web applications where load time is critical.
 * :::
 *
 *
 * @param word - The word to look up.
 * @returns The part(s) of speech string, or undefined if not found.
 *

 * @example
 * ```typescript
 * partOfSpeech('run'); // e.g., "Vit"
 * partOfSpeech('RUN'); // e.g., "Vit"
 * partOfSpeech('running!'); // e.g., "Vit"
 * ```
 *
 * @group Parts of Speech
 * @category Classification
 */
export function partOfSpeech(word: string): string | undefined {
  let pos = mobyPartsOfSpeech[word];

  if (!pos) {
    pos = mobyPartsOfSpeech[word.toLowerCase()];
  }

  if (!pos) {
    pos = mobyPartsOfSpeech[word.toUpperCase()];
  }

  if (!pos) {
    const base = word.replaceAll(reKill, '').toLowerCase();

    for (const [entry, partsOfSpeech] of Object.entries(mobyPartsOfSpeech)) {
      if (entry.replaceAll(reKill, '').toLowerCase() === base) {
        pos = partsOfSpeech;
        break;
      }
    }
  }

  return pos;
}
