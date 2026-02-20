<!-- cspell:ignore mlang rōmaji -->
<!-- markdownlint-disable MD041 First line in file should be a top-level heading -->

A list of 115,523 “Japanese” words.

These are words written in rōmaji (the Latin alphabet) representing Japanese words.

## Usage

```typescript
import { mobyJapanese } from '@technobuddha/knowledge';

mobyJapanese.length; // 115,523
mobyJapanese.filter((word) => word.startsWith('ab')); // Array of 132 japanese words starting with "ab"
```

::: warning
This list is almost 1.5MB in size, and can take several seconds to transmit and load into memory. This
may not be suitable for all applications, in particular web applications where load time is critical.
:::

## History

The Moby word list were amongst the largest public domain lists in the world. While these lists may still be useful, they are no longer the state-of-the-art in word lists.

### Conversion

- The original (moby/mlang/japanese.txt) file is encoded in a format used by Apple MacIntosh™ computers at the time it was written.
  - This has been converted to the more modern standard format UTF-8.
- The words were not sorted properly.
  - The the list is properly sorted.

### Corrections

[Wikipedia](https://en.wikipedia.org/wiki/Moby_Project#Languages) reports that some of these lists are contaminated.

The japanese word list has some English words mixed in such as _abnormal_, and non-words like _abcdefgh_ and _m,./_.

@group Language
@category Datasets
