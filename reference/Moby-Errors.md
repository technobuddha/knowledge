# Moby-Errors

This file lists possible errors or inconsistencies found in the Moby Parts-of-Speech II database (`moby-parts-of-speech.ts`).

## Known Data Issues

| Word         | Expected Code | Notes                                         |
| ------------ | ------------- | --------------------------------------------- |
| a            | I             | Not marked as indefinite article              |
| an           | I             | Present, but not marked as indefinite article |
| I            | o             | Not marked as nominative                      |
| he           | o             | Not marked as nominative                      |
| we           | o             | Not marked as nominative                      |
| apples       | p             | Not marked as plural                          |
| by and large | h             | Not marked as noun phrase                     |

If you wish to update the dataset, please review these cases in the source file.
