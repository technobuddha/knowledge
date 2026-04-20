<!-- cspell:ignore mlang -->
<!-- markdownlint-disable MD041 First line in file should be a top-level heading -->

A list of 86,059 spanish words.

## Usage

```typescript
import { mobySpanish } from '@technobuddha/knowledge';

mobySpanish.length; // 86,059
mobySpanish.filter((word) => word.startsWith('ab')); // Array of 693 spanish words starting with "ab"
```

::: warning
This list is over 1MB in size, and can take several seconds to transmit and load into memory. This
may not be suitable for all applications, in particular web applications where load time is critical.
:::

## History

The Moby word list were amongst the largest public domain lists in the world. While these lists may still be useful, they are no longer the state-of-the-art in word lists.

### Conversion

- The original (moby/mlang/spanish.txt) file is encoded in a format used by Apple MacIntosh™ computers at the time it was written.
  - This has been converted to the more modern standard format UTF-8.
- An custom format for entering accented characters, which was not documented.
  - An educated guess was made to convert these to standard unicode accented characters, see below.
- The words were not sorted properly.
  - The the list is properly sorted.

### Corrections

| Sequence | Replacement |
| -------- | ----------- |
| a`       | à           |
| e`       | è           |
| i`       | ì           |
| o`       | ò           |
| u`       | ù           |
| \        | ñ           |
| \{       | ú           |
| /        | ó           |

[Wikipedia](https://en.wikipedia.org/wiki/Moby_Project#Languages) reports that some of these lists are contaminated.

The spanish word list appears to be relatively clean.

@group Language
@category Datasets
