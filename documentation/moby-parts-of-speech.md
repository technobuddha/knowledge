<!-- cspell:ignore mpron mobypron nade -->

# Moby Part-of-Speech II

## Usage

```typescript
import { partsOfSpeech } from '@technobuddha/moby';

partsOfSpeech['engineer']; // "Nt"
Object.keys(partsOfSpeech); // Array of all 233,339 words
Object.entries(partsOfSpeech)
  .filter(([, pos]) => pos.includes('A'))
  .map(([word]) => word); // All 50,471 adjectives
```

::: warning
The full parts of speech dataset, is almost 5MB in size, and can take several seconds to transmit
and load into memory. This may not be suitable for all applications, in particular web applications
where load time is critical.
:::

## Parts of Speech

A dictionary of 233,339 words and their associated parts of speech.

Each word in the dictionary is assigned one or more of the codes listed below:

| Part-of-speech            | Code |
| ------------------------- | ---- |
| Noun                      | N    |
| Plural                    | p    |
| Noun phrase               | h    |
| Verb (usually participle) | V    |
| Transitive verb           | t    |
| Intransitive verb         | i    |
| Adjective                 | A    |
| Adverb                    | v    |
| Conjunction               | C    |
| Preposition               | P    |
| Interjection              | !    |
| Pronoun                   | r    |
| Definite article          | D    |
| Indefinite article        | I    |
| Nominative                | o    |

The first code assigned to a word is its primary part of speech; subsequent codes indicate other possible parts of speech. For example, the word **engineer** is assigned the codes "Nt" which means that **engineer** has two main uses in English; the principal part-of-speech is as a noun:

> That engineer could write in assembly with one hand and in LLM's with the other"

And, its secondary part-of-speech is as a transitive verb:

> We sure engineered that software to death.

In many cases, the **-ed**, **-ing**, **-ly**, and **-ic** forms of words are not explicitly listed; the participle forms of verbs will be usually marked simply with the **"V"** sign rather than the more specific **"t"** or **"i"** codes. Words such as **be**, which often have more than one entry in a dictionary, have one listing with all the parts-of-speech for all senses concatenated.

Foreign words commonly used in English usually include their diacritical marks.

## History

This was the largest part-of-speech list in the world when it was written.
It was created by Grady Ward and released as part of the Moby Project into the public domain in 1996.

### Conversion

- The original (moby/mpron/mobypron.unc) file is encoded in a format used by Apple MacIntosh™ computers at the time it was written.
  - This has been converted to the more modern standard format UTF-8.
- The `◊` (lozenge or ASCII character 215) was used as a delimiter between the word and its part(s) of speech.
  - In this version, the dictionary is presented as a ”lookup” object where the word is the key and the value is a string of its part(s) of speech.

### Corrections

| Duplicate | Line           | #1    | #2      | Used    |
| --------- | -------------- | ----- | ------- | ------- |
| Adygei    | 2665, 2666     | "h"   | "N"     | "hN"    |
| ae        | 2989, 2991     | "AN"  | "N"     | "AN"    |
| ax        | 14369, 143970  | "N"   | "Nt"    | "Nt"    |
| color     | 38751, 38752   | "N"   | "NVti"  | "NVti"  |
| cor       | 43054, 43055   | "!N"  | "N"     | "!N"    |
| di        | 55111, 55113   | "N"   | "NP"    | "NP"    |
| et        | 64556, 64559   | "C"   | "N"     | "CN"    |
| gauffer   | 76433, 76434   | "NV"  | "th"    | "NVth"  |
| honor     | 89725, 89726   | "Nt"  | "NV"    | "NtV"   |
| Jewish    | 10249, 10250   | "AN"  | "h"     | "ANh"   |
| marinade  | 116908, 116979 | "N"   | "NV"    | "NV"    |
| mass      | 117665, 117667 | "N"   | "NV"    | "NV"    |
| rms       | 172599, 172601 | "N"   | "p"     | "Np"    |
| sculp     | 176165, 178166 | "N"   | "t"     | "Nt"    |
| trig      | 206608, 206009 | "AtN" | "N"     | "AtN"   |
| up        | 226685, 226686 | "N"   | "VvPAN" | "VvPAN" |
| vel       | 244108, 224109 | "C"   | "N"     | "CN"    |

| Correct Word | Line           | Typo      |
| ------------ | -------------- | --------- |
| shari'ah     | 182305         | shari"ah  |
| marinade     | 116908, 116979 | mari,nade |

@group Parts of Speech
@category Datasets
