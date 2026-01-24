# 🚨
# 🚨 Source: https://github.com/words/emoji-emotion/archive/refs/heads/main.zip::emoji-emotion-main/readme.md
# 🚨
# emoji-emotion

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of emoji rated for valence.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`emojiEmotion`](#emojiemotion)
*   [Data](#data)
*   [Support](#support)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Related](#related)
*   [Contribute](#contribute)
*   [Security](#security)
*   [License](#license)

## What is this?

This is a list of unicode emoji rated for [valence][valence-wiki] (“goodness”
vs “badness”).

## When should I use this?

This package can be used for sentiment analysis of emoji.
You can use [`afinn-165`][afinn-165] for English words.
Use [`gemoji`][gemoji] for more info on emoji.

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+, 16.0+), install with [npm][]:

```sh
npm install emoji-emotion
```

In Deno with [`esm.sh`][esmsh]:

```js
import {emojiEmotion} from 'https://esm.sh/emoji-emotion@3'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {emojiEmotion} from 'https://esm.sh/emoji-emotion@3?bundle'
</script>
```

## Use

```js
import {emojiEmotion} from 'emoji-emotion'

console.log(emojiEmotion.slice(0, 5))
```

Yields:

```js
[ { name: '100', emoji: '💯', polarity: 3 },
  { name: 'angry', emoji: '😠', polarity: -3 },
  { name: 'anguished', emoji: '😧', polarity: -3 },
  { name: 'astonished', emoji: '😲', polarity: 2 },
  { name: 'black_heart', emoji: '🖤', polarity: 3 } ]
```

## API

This package exports the identifier `emojiEmotion`.
There is no default export.

### `emojiEmotion`

List of emoji rated for valence (`Array<Info>`).

##### `Info`

Emoji rated for valence.

##### `info.name`

Name of emoji, according to [`gemoji`][gemoji] (`string`).

##### `info.emoji`

Unicode emoji (`string`).

##### `info.polarity`

Integer between minus five (negative) and plus five (positive) (`number`).

## Data

The included emoji are the faces and cats defined by [Unicode][].
The polarity was hand classified (by one person) based on the names of these
emoji (sometimes synonyms) and their [AFINN-165][] values.
Special care was given to **not** classify based on the images (as [different
vendors use different pictograms][checkmoji]), but only on words and how they
are used.

Some emoji receive arguably confusing polarities, such as
`stuck_out_tongue_closed_eyes` (`0`), due to being used for both positive and
negative emotions.

## Support

<!--support start-->

| Emoji | Name(s) | Polarity |
| - | - | - |
| 👿 | imp | -4 |
| 🖕 | middle\_finger; fu | -4 |
| 😾 | pouting\_cat | -4 |
| 😡 | rage; pout | -4 |
| 😠 | angry | -3 |
| 😧 | anguished | -3 |
| 💔 | broken\_heart | -3 |
| 💩 | hankey; poop; shit | -3 |
| 😱 | scream | -3 |
| 🙀 | scream\_cat | -3 |
| 😈 | smiling\_imp | -3 |
| 😭 | sob | -3 |
| 😟 | worried | -3 |
| 👎 | -1; thumbsdown | -2 |
| 😰 | cold\_sweat | -2 |
| 😖 | confounded | -2 |
| 😕 | confused | -2 |
| 😢 | cry | -2 |
| 😿 | crying\_cat\_face | -2 |
| 😞 | disappointed | -2 |
| 🤕 | face\_with\_head\_bandage | -2 |
| 😨 | fearful | -2 |
| 😳 | flushed | -2 |
| ☹️ | frowning\_face | -2 |
| 😬 | grimacing | -2 |
| 🤥 | lying\_face | -2 |
| 🤢 | nauseated\_face | -2 |
| 😮 | open\_mouth | -2 |
| 😣 | persevere | -2 |
| 💀 | skull | -2 |
| ☠️ | skull\_and\_crossbones | -2 |
| 🤧 | sneezing\_face | -2 |
| 😫 | tired\_face | -2 |
| 😒 | unamused | -2 |
| 😩 | weary | -2 |
| 😥 | disappointed\_relieved | -1 |
| 😵 | dizzy\_face | -1 |
| 🤒 | face\_with\_thermometer | -1 |
| 👊 | fist\_oncoming; facepunch; punch | -1 |
| 😦 | frowning | -1 |
| 👻 | ghost | -1 |
| 😯 | hushed | -1 |
| 😷 | mask | -1 |
| 🤓 | nerd\_face | -1 |
| 😔 | pensive | -1 |
| 🙄 | roll\_eyes | -1 |
| 🙁 | slightly\_frowning\_face | -1 |
| 😜 | stuck\_out\_tongue\_winking\_eye | -1 |
| 😓 | sweat | -1 |
| 🤔 | thinking | -1 |
| 🤐 | zipper\_mouth\_face | -1 |
| 🤡 | clown\_face | 0 |
| 🤤 | drooling\_face | 0 |
| 😑 | expressionless | 0 |
| 🤑 | money\_mouth\_face | 0 |
| 😐 | neutral\_face | 0 |
| 😶 | no\_mouth | 0 |
| 😴 | sleeping | 0 |
| 😪 | sleepy | 0 |
| 😝 | stuck\_out\_tongue\_closed\_eyes | 0 |
| 😤 | triumph | 0 |
| 🙃 | upside\_down\_face | 0 |
| 🤝 | handshake | 1 |
| 😆 | laughing; satisfied | 1 |
| 🙏 | pray | 1 |
| 🙂 | slightly\_smiling\_face | 1 |
| 😛 | stuck\_out\_tongue | 1 |
| 😎 | sunglasses | 1 |
| 👍 | +1; thumbsup | 2 |
| 😲 | astonished | 2 |
| 😊 | blush | 2 |
| 🤠 | cowboy\_hat\_face | 2 |
| 🤞 | crossed\_fingers | 2 |
| 😁 | grin | 2 |
| 😀 | grinning | 2 |
| 🤗 | hugs | 2 |
| 💋 | kiss | 2 |
| 😗 | kissing | 2 |
| 😽 | kissing\_cat | 2 |
| 😚 | kissing\_closed\_eyes | 2 |
| 😙 | kissing\_smiling\_eyes | 2 |
| 👄 | lips | 2 |
| 👌 | ok\_hand | 2 |
| ☺️ | relaxed | 2 |
| 😌 | relieved | 2 |
| 😄 | smile | 2 |
| 😸 | smile\_cat | 2 |
| 😃 | smiley | 2 |
| 😺 | smiley\_cat | 2 |
| 😏 | smirk | 2 |
| 😼 | smirk\_cat | 2 |
| 😅 | sweat\_smile | 2 |
| ✌️ | v | 2 |
| 💯 | 100 | 3 |
| 🖤 | black\_heart | 3 |
| 💙 | blue\_heart | 3 |
| 👏 | clap | 3 |
| 💘 | cupid | 3 |
| 💝 | gift\_heart | 3 |
| 💚 | green\_heart | 3 |
| ❤️ | heart | 3 |
| 😍 | heart\_eyes | 3 |
| 😻 | heart\_eyes\_cat | 3 |
| 💓 | heartbeat | 3 |
| 💗 | heartpulse | 3 |
| 😇 | innocent | 3 |
| 😂 | joy | 3 |
| 😹 | joy\_cat | 3 |
| 😘 | kissing\_heart | 3 |
| 💜 | purple\_heart | 3 |
| 💞 | revolving\_hearts | 3 |
| 💖 | sparkling\_heart | 3 |
| 💕 | two\_hearts | 3 |
| 😉 | wink | 3 |
| 💛 | yellow\_heart | 3 |
| 😋 | yum | 3 |
| 🙌 | raised\_hands | 4 |
| 🤣 | rofl | 4 |

<!--support end-->

## Types

This package is fully typed with [TypeScript][].
It exports the additional type `Info`.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 14.14+ and 16.0+.
It also works in Deno and modern browsers.

## Related

*   [`afinn-165`][afinn-165]
    — list of English words rated for valence
*   [`gemoji`][gemoji]
    — info on gemoji (GitHub Emoji)

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## Security

This package is safe.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/words/emoji-emotion/workflows/main/badge.svg

[build]: https://github.com/words/emoji-emotion/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/words/emoji-emotion.svg

[coverage]: https://codecov.io/github/words/emoji-emotion

[downloads-badge]: https://img.shields.io/npm/dm/emoji-emotion.svg

[downloads]: https://www.npmjs.com/package/emoji-emotion

[size-badge]: https://img.shields.io/bundlephobia/minzip/emoji-emotion.svg

[size]: https://bundlephobia.com/result?p=emoji-emotion

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[license]: license

[author]: https://wooorm.com

[unicode]: http://www.unicode.org/emoji/charts/full-emoji-list.html

[gemoji]: https://github.com/wooorm/gemoji

[afinn-165]: https://github.com/words/afinn-165

[checkmoji]: https://wooorm.com/checkmoji/

[valence-wiki]: https://en.wikipedia.org/wiki/Valence_\(psychology\)
