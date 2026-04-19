// @ts-check
// cspell:disable
import { empty } from '@technobuddha/library';

/** @type import("\@technobuddha/project").SyncConfig */
export default [
  //#region anyascii
  {
    transfers: [
      {
        url: 'https://raw.githubusercontent.com/anyascii/anyascii/refs/heads/master/impl/js/block.js',
        local: 'reference/external/anyascii/block.js',
        banner: '//',
      },
      {
        url: 'https://raw.githubusercontent.com/anyascii/anyascii/refs/heads/master/LICENSE',
        local: 'reference/external/anyascii/LICENSE',
        banner: 'md',
      },
    ],
  },
  //#endregion
  //#region bible
  {
    transfers: [
      {
        url: 'https://raw.githubusercontent.com/BradyStephenson/bible-data/refs/heads/main/BibleData-Person.csv',
        local: 'reference/external/bible/person.csv',
      },
      {
        url: 'https://raw.githubusercontent.com/BradyStephenson/bible-data/refs/heads/main/HitchcocksBibleNamesDictionary.csv',
        local: 'reference/external/bible/hitchcock-names.csv',
      },
      {
        url: 'https://raw.githubusercontent.com/SergioBoySV/Bible-Datasets/refs/heads/main/kjv/entire_kjv.csv',
        local: 'reference/external/bible/kjv.csv',
      },
      {
        url: 'https://raw.githubusercontent.com/SergioBoySV/Bible-Datasets/refs/heads/main/nkjv/entire_nkjv.csv',
        local: 'reference/external/bible/nkjv.csv',
      },
      {
        url: 'https://copylists.com/downloads/names/angels/angel_names.csv',
        local: 'reference/external/copylists/angel-names.csv',
      },
      {
        url: 'https://copylists.com/downloads/names/biblical/female/biblical_female_names.csv',
        local: 'reference/external/copylists/biblical-female-names.csv',
      },
      {
        url: 'https://copylists.com/downloads/names/biblical/male/biblical_male_names.csv',
        local: 'reference/external/copylists/biblical-male-names.csv',
      },
    ],
    onUpdate: 'npx tsx scripts/bible/bible.ts',
  },
  //#endregion
  //#region boost
  {
    transfers: [
      {
        url: 'https://raw.githubusercontent.com/boost-vault/date_time/refs/heads/master/date_time_zonespec.csv',
        local: 'reference/external/boost/date_time_zonespec.csv',
      },]
  },
  //#endregion
  //#region names
  {
    transfers: [{
      url: 'https://www.kessels.com/CatNames/CatNames.zip',
      local: 'reference/external/names',
      zip: '**/*',
    },
    {
      url: 'https://github.com/hadley/data-baby-names/raw/refs/heads/master/baby-names-by-state.csv',
      local: 'reference/external/names/baby-names-by-state.csv',
    },
    {
      url: 'https://github.com/hadley/data-baby-names/raw/refs/heads/master/baby-names.csv',
      local: 'reference/external/names/baby-names.csv',
    },
    {
      url: 'https://github.com/hadley/data-baby-names/raw/refs/heads/master/births.csv',
      local: 'reference/external/names/births.csv',
    },
    {
      url: 'https://raw.githubusercontent.com/hadley/data-baby-names/refs/heads/master/old-testament.txt',
      local: 'reference/external/names/old-testament.txt',
    },
    {
      url: 'https://raw.githubusercontent.com/sindresorhus/dog-names/refs/heads/main/female-dog-names.json',
      local: 'reference/external/names/female-dog-names.jsonc',
      banner: '//',
    },
    {
      url: 'https://raw.githubusercontent.com/sindresorhus/dog-names/refs/heads/main/male-dog-names.json',
      local: 'reference/external/names/male-dog-names.jsonc',
      banner: '//',
    },
    {
      url: 'https://raw.githubusercontent.com/solvenium/names-dataset/refs/heads/master/README.md',
      local: 'reference/external/names/dataset/README.md',
      banner: 'md',
    },
    {
      url: 'https://raw.githubusercontent.com/solvenium/names-dataset/refs/heads/master/LICENSE',
      local: 'reference/external/names/dataset/LICENSE.md',
      banner: 'md',
    },
    {
      url: 'https://raw.githubusercontent.com/solvenium/names-dataset/refs/heads/master/scrape-wiktionary-names.js',
      local: 'reference/external/names/dataset/scrape-wiktionary-names.js',
      banner: '//',
    },
    {
      url: 'https://raw.githubusercontent.com/solvenium/names-dataset/refs/heads/master/dataset/Female_given_names.txt',
      local: 'reference/external/names/dataset/female-given-names.txt',
    },
    {
      url: 'https://raw.githubusercontent.com/solvenium/names-dataset/refs/heads/master/dataset/Male_given_names.txt',
      local: 'reference/external/names/dataset/male-given-names.txt',
    },
    {
      url: 'https://raw.githubusercontent.com/solvenium/names-dataset/refs/heads/master/dataset/Surnames.txt',
      local: 'reference/external/names/dataset/surnames.txt',
    },
    {
      url: 'https://www.nrscotland.gov.uk/media/hlmdqoat/full-list-1974-2024.zip',
      local: 'reference/external/names/uk/baby',
      zip: '**/*',
    },
    {
      url: 'https://www.nrscotland.gov.uk/media/q1epi2ni/full-list-2024.xlsx',
      local: 'reference/external/names/uk/baby/full-list-2024.xlsx',
    },
    {
      url: 'https://www.nrscotland.gov.uk/media/uijhxulq/most-common-surnames-bmd-register-2024.xlsx',
      local: 'reference/external/names/uk/most-common-surnames-bmd-register-2024.xlsx',
    },
    ]
  },
  //#endregion
  //#region census
  {
    transfers: [
      {
        url: 'https://www2.census.gov/topics/genealogy/1990surnames/dist.all.last',
        local: 'reference/external/census/dist.all.last',
      },
      {
        url: 'https://www2.census.gov/topics/genealogy/1990surnames/dist.female.first',
        local: 'reference/external/census/dist.female.first',
      },
      {
        url: 'https://www2.census.gov/topics/genealogy/1990surnames/dist.male.first',
        local: 'reference/external/census/dist.male.first',
      },
      {
        url: 'https://www2.census.gov/topics/genealogy/2000surnames/names.zip',
        local: 'reference/external/census/',
        zip: '*.csv',
      },
      {
        url: 'https://www2.census.gov/topics/genealogy/2010surnames/names.zip',
        local: 'reference/external/census/',
        zip: '*.csv',
      },]
  },
  //#endregion
  //#region cmu
  {
    transfers: [
      {
        url: 'https://raw.githubusercontent.com/cmusphinx/cmudict/refs/heads/master/cmudict.dict',
        local: 'reference/external/cmu/cmudict.dict',
      },
      {
        url: 'https://raw.githubusercontent.com/cmusphinx/cmudict/refs/heads/master/cmudict.phones',
        local: 'reference/external/cmu/cmudict.phones',
      },
      {
        url: 'https://raw.githubusercontent.com/cmusphinx/cmudict/refs/heads/master/cmudict.symbols',
        local: 'reference/external/cmu/cmudict.symbols',
      },
      {
        url: 'https://raw.githubusercontent.com/cmusphinx/cmudict/refs/heads/master/cmudict.vp',
        local: 'reference/external/cmu/cmudict.vp',
      },
      {
        url: 'https://raw.githubusercontent.com/cmusphinx/cmudict/refs/heads/master/LICENSE',
        local: 'reference/external/cmu/LICENSE',
        banner: 'md',
      },]
  },
  //#endregion
  //#region biglou
  {
    transfers: [
      {
        url: 'https://www.cs.cmu.edu/~biglou/resources/EN_SP_DICT.txt',
        local: 'reference/external/biglou/en-sp-dict.txt',
      },
      {
        url: 'https://www.cs.cmu.edu/~biglou/resources/bad-words.txt',
        local: 'reference/external/biglou/bad-words.txt',
      },]
  },
  //#endregion
  //#region copylists
  {
    transfers: [
      {
        url: 'https://copylists.com/downloads/names/boys/boys_names.csv',
        local: 'reference/external/copylists/boys-names.csv',
      },
      {
        url: 'https://copylists.com/downloads/names/cats/cat_names.csv',
        local: 'reference/external/copylists/cat-names.csv',
      },
      {
        url: 'https://copylists.com/downloads/names/dogs/dog_names.csv',
        local: 'reference/external/copylists/dog-names.csv',
      },
      {
        url: 'https://copylists.com/downloads/names/gender-neutral/gender-neutral_names.csv',
        local: 'reference/external/copylists/gender-neutral-names.csv',
      },
      {
        url: 'https://copylists.com/downloads/names/girls/girls_names.csv',
        local: 'reference/external/copylists/girls-names.csv',
      },]
  },
  //#endregion
  //#region diceware
  {
    transfers: [
      // {
      //   url: 'https://web.archive.org/web/20251227030530/https://theworld.com/~reinhold/diceware.html',
      //   local: 'reference/external/diceware/diceware-wordlist.html',
      //   banner: '<!->',
      // },
      {
        url: 'https://raw.githubusercontent.com/agreinhold/Diceware-word-lists/refs/heads/master/diceware.wordlist.asc',
        local: 'reference/external/diceware/diceware-wordlist.txt',
      },
      {
        url: 'https://github.com/agreinhold/Diceware-word-lists/raw/refs/heads/master/beale.wordlist.asc',
        local: 'reference/external/diceware/beale-wordlist.txt',
      },
      {
        url: 'https://github.com/agreinhold/Diceware-word-lists/raw/refs/heads/master/dicewarekit.txt',
        local: 'reference/external/diceware/dicewarekit.txt',
      },
      {
        url: 'https://github.com/agreinhold/Diceware-word-lists/raw/refs/heads/master/diceware8k.c',
        local: 'reference/external/diceware/diceware8k.c',
      },
      {
        url: 'https://github.com/agreinhold/Diceware-word-lists/raw/refs/heads/master/diceware8k.txt',
        local: 'reference/external/diceware/diceware8k.txt',
      },
    ]
  },
  //#endregion
  //#region eff
  {
    transfers: [
      {
        url: 'https://www.eff.org/files/2016/07/18/eff_large_wordlist.txt',
        local: 'reference/external/eff/eff-large-wordlist.txt',
      },
      {
        url: 'https://www.eff.org/files/2016/09/08/eff_short_wordlist_1.txt',
        local: 'reference/external/eff/eff-short-wordlist-1.txt',
      },
      {
        url: 'https://www.eff.org/files/2016/09/08/eff_short_wordlist_2_0.txt',
        local: 'reference/external/eff/eff-short-wordlist-2.txt',
      },]
  },
  //#endregion
  //#region enable
  {
    transfers: [
      {
        url: 'https://web.archive.org/web/20071018165557if_/http://personal.riverusers.com/~thegrendel/enable2k.zip',
        local: 'reference/external/enable/enable2k',
        zip: '**/*',
      },
      {
        url: 'https://web.archive.org/web/20071018165557if_/http://personal.riverusers.com/~thegrendel/supp2k.zip',
        local: 'reference/external/enable/supp2k',
        zip: '**/*',
      },
      {
        url: 'https://web.archive.org/web/20071018165557if_/http://personal.riverusers.com/~thegrendel/ablesupp.zip',
        local: 'reference/external/enable/ablesupp',
        zip: '**/*',
      },]
  },
  //#endregion
  //#region freescrabbledictionary
  {
    transfers: [
      {
        url: 'https://www.freescrabbledictionary.com/english-word-list/download/english.txt',
        local: 'reference/external/freescrabbledictionary/english.txt',
      },
      {
        url: 'https://www.freescrabbledictionary.com/twl06/download/twl06.txt',
        local: 'reference/external/freescrabbledictionary/twl06.txt',
      },
      {
        url: 'https://www.freescrabbledictionary.com/sowpods/download/sowpods.txt',
        local: 'reference/external/freescrabbledictionary/sowpods.txt',
      },
      {
        url: 'https://www.freescrabbledictionary.com/enable/download/enable.txt',
        local: 'reference/external/freescrabbledictionary/enable.txt',
      },
      {
        url: `https://www.freescrabbledictionary.com/word-lists/words-that-start-with/letter/a/words-that-start-with-a.json`,
        local: `reference/external/freescrabbledictionary/words-a.jsonc`,
        banner: '//',
      },
      {
        url: `https://www.freescrabbledictionary.com/word-lists/words-that-start-with/letter/b/words-that-start-with-b.json`,
        local: `reference/external/freescrabbledictionary/words-b.jsonc`,
        banner: '//',
      },
      {
        url: `https://www.freescrabbledictionary.com/word-lists/words-that-start-with/letter/c/words-that-start-with-c.json`,
        local: `reference/external/freescrabbledictionary/words-c.jsonc`,
        banner: '//',
      },
      {
        url: `https://www.freescrabbledictionary.com/word-lists/words-that-start-with/letter/d/words-that-start-with-d.json`,
        local: `reference/external/freescrabbledictionary/words-d.jsonc`,
        banner: '//',
      },
      {
        url: `https://www.freescrabbledictionary.com/word-lists/words-that-start-with/letter/e/words-that-start-with-e.json`,
        local: `reference/external/freescrabbledictionary/words-e.jsonc`,
        banner: '//',
      },
      {
        url: `https://www.freescrabbledictionary.com/word-lists/words-that-start-with/letter/f/words-that-start-with-f.json`,
        local: `reference/external/freescrabbledictionary/words-f.jsonc`,
        banner: '//',
      },
      {
        url: `https://www.freescrabbledictionary.com/word-lists/words-that-start-with/letter/g/words-that-start-with-g.json`,
        local: `reference/external/freescrabbledictionary/words-g.jsonc`,
        banner: '//',
      },
      {
        url: `https://www.freescrabbledictionary.com/word-lists/words-that-start-with/letter/h/words-that-start-with-h.json`,
        local: `reference/external/freescrabbledictionary/words-h.jsonc`,
        banner: '//',
      },
      {
        url: `https://www.freescrabbledictionary.com/word-lists/words-that-start-with/letter/i/words-that-start-with-i.json`,
        local: `reference/external/freescrabbledictionary/words-i.jsonc`,
        banner: '//',
      },
      {
        url: `https://www.freescrabbledictionary.com/word-lists/words-that-start-with/letter/j/words-that-start-with-j.json`,
        local: `reference/external/freescrabbledictionary/words-j.jsonc`,
        banner: '//',
      },
      {
        url: `https://www.freescrabbledictionary.com/word-lists/words-that-start-with/letter/k/words-that-start-with-k.json`,
        local: `reference/external/freescrabbledictionary/words-k.jsonc`,
        banner: '//',
      },
      {
        url: `https://www.freescrabbledictionary.com/word-lists/words-that-start-with/letter/l/words-that-start-with-l.json`,
        local: `reference/external/freescrabbledictionary/words-l.jsonc`,
        banner: '//',
      },
      {
        url: `https://www.freescrabbledictionary.com/word-lists/words-that-start-with/letter/m/words-that-start-with-m.json`,
        local: `reference/external/freescrabbledictionary/words-m.jsonc`,
        banner: '//',
      },
      {
        url: `https://www.freescrabbledictionary.com/word-lists/words-that-start-with/letter/n/words-that-start-with-n.json`,
        local: `reference/external/freescrabbledictionary/words-n.jsonc`,
        banner: '//',
      },
      {
        url: `https://www.freescrabbledictionary.com/word-lists/words-that-start-with/letter/o/words-that-start-with-o.json`,
        local: `reference/external/freescrabbledictionary/words-o.jsonc`,
        banner: '//',
      },
      {
        url: `https://www.freescrabbledictionary.com/word-lists/words-that-start-with/letter/p/words-that-start-with-p.json`,
        local: `reference/external/freescrabbledictionary/words-p.jsonc`,
        banner: '//',
      },
      {
        url: `https://www.freescrabbledictionary.com/word-lists/words-that-start-with/letter/q/words-that-start-with-q.json`,
        local: `reference/external/freescrabbledictionary/words-q.jsonc`,
        banner: '//',
      },
      {
        url: `https://www.freescrabbledictionary.com/word-lists/words-that-start-with/letter/r/words-that-start-with-r.json`,
        local: `reference/external/freescrabbledictionary/words-r.jsonc`,
        banner: '//',
      },
      {
        url: `https://www.freescrabbledictionary.com/word-lists/words-that-start-with/letter/s/words-that-start-with-s.json`,
        local: `reference/external/freescrabbledictionary/words-s.jsonc`,
        banner: '//',
      },
      {
        url: `https://www.freescrabbledictionary.com/word-lists/words-that-start-with/letter/t/words-that-start-with-t.json`,
        local: `reference/external/freescrabbledictionary/words-t.jsonc`,
        banner: '//',
      },
      {
        url: `https://www.freescrabbledictionary.com/word-lists/words-that-start-with/letter/u/words-that-start-with-u.json`,
        local: `reference/external/freescrabbledictionary/words-u.jsonc`,
        banner: '//',
      },
      {
        url: `https://www.freescrabbledictionary.com/word-lists/words-that-start-with/letter/v/words-that-start-with-v.json`,
        local: `reference/external/freescrabbledictionary/words-v.jsonc`,
        banner: '//',
      },
      {
        url: `https://www.freescrabbledictionary.com/word-lists/words-that-start-with/letter/w/words-that-start-with-w.json`,
        local: `reference/external/freescrabbledictionary/words-w.jsonc`,
        banner: '//',
      },
      {
        url: `https://www.freescrabbledictionary.com/word-lists/words-that-start-with/letter/x/words-that-start-with-x.json`,
        local: `reference/external/freescrabbledictionary/words-x.jsonc`,
        banner: '//',
      },
      {
        url: `https://www.freescrabbledictionary.com/word-lists/words-that-start-with/letter/y/words-that-start-with-y.json`,
        local: `reference/external/freescrabbledictionary/words-y.jsonc`,
        banner: '//',
      },
      {
        url: `https://www.freescrabbledictionary.com/word-lists/words-that-start-with/letter/z/words-that-start-with-z.json`,
        local: `reference/external/freescrabbledictionary/words-z.jsonc`,
        banner: '//',
      },
    ]
  },
  //#endregion
  //#region gcide
  {
    transfers: [
      {
        url: 'https://ftp.gnu.org/gnu/gcide/gcide-0.54.tar.gz',
        local: 'reference/external/gcide',
        zip: '**/*',
        rename: (name) => name.replace('gcide-0.54/', ''),
      },]
  },
  //#endregion
  //#region geonames
  {
    transfers: [
      {
        url: 'https://download.geonames.org/export/dump/countryInfo.txt',
        local: 'reference/external/geonames/country-info.txt',
      },
      // OTHER LANGUAGES AVAILABLE
      {
        url: 'https://download.geonames.org/export/dump/featureCodes_en.txt',
        local: 'reference/external/geonames/feature-codes-en.txt',
      },

      {
        url: 'https://download.geonames.org/export/dump/iso-languagecodes.txt',
        local: 'reference/external/geonames/iso-language-codes.txt',
      },
      {
        url: 'https://download.geonames.org/export/dump/readme.txt',
        local: 'reference/external/geonames/readme.txt',
      },
      {
        url: 'https://download.geonames.org/export/dump/timeZones.txt',
        local: 'reference/external/geonames/time-zones.txt',
      },

      {
        url: 'https://download.geonames.org/export/zip/US.zip',
        local: 'reference/external/geonames/zip',
        zip: '**/*',
      }]
  },
  //#endregion
  //#region ginap (a GIven Name mAPper)
  {
    transfers: [
      {
        url: 'https://www.galbithink.org/names/ginap.txt',
        local: 'reference/external/ginap/ginap.txt',
      }]
  },
  //#endregion
  //#region homophones
  {
    transfers: [
      {
        url: 'http://www.singularis.ltd.uk/bifroest/misc/homophones-list.html',
        local: 'reference/external/homophones/homophones-list.html',
        banner: '<!->',
      },]
  },
  //#endregion
  //#region ibiblio
  {
    transfers: [
      {
        url: 'https://www.ibiblio.org/pub/Linux/libs/yawl-0.3.2.tar.gz',
        local: 'reference/external/ibiblio/',
        zip: '**/*',
      },]
  },
  //#endregion
  //#region iana
  {
    transfers: [
      {
        url: 'https://www.iana.org/time-zones/repository/tzcode-latest.tar.gz',
        local: 'reference/external/iana/tzcode',
        zip: '**/*',
      },
      {
        url: 'https://www.iana.org/time-zones/repository/tzdata-latest.tar.gz',
        local: 'reference/external/iana/tzdata',
        zip: '**/*',
      },
      // {
      //   url: 'https://www.iana.org/time-zones/repository/tzdb-latest.tar.lz',
      //   local: 'reference/external/iana/tzdb',
      //   zip: '**/*',
      // },
    ]
  },
  //#endregion
  //#region misc
  {
    transfers: [
      {
        url: 'https://codeload.github.com/sigpwned/popular-names-by-country-dataset/zip/refs/tags/v1.2',
        local: 'reference/external/misc/sigpwned',
        zip: '**/*',
        rename: (name) => name.replace('popular-names-by-country-dataset-1.2/', ''),
      },
    ]
  },
  //#endregion
  //#region moby
  {
    transfers: [{
      url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mhyph/readme',
      encoding: 'ascii',
      local: 'reference/external/moby/mhyph/readme.txt',
    },
    {
      url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mhyph/mhyph.txt',
      encoding: 'Macintosh',
      local: 'reference/external/moby/mhyph/mhyph.txt',
    },
    {
      url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mlang/readme',
      encoding: 'ascii',
      local: 'reference/external/moby/mlang/readme.txt',
    },
    {
      url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mlang/french.txt',
      encoding: 'Macintosh',
      local: 'reference/external/moby/mlang/french.txt',
    },
    {
      url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mlang/german.txt',
      encoding: 'CP437',
      local: 'reference/external/moby/mlang/german.txt',
    },
    {
      url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mlang/italian.txt',
      encoding: 'ascii',
      local: 'reference/external/moby/mlang/italian.txt',
    },
    {
      url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mlang/japanese.txt',
      encoding: 'Macintosh',
      local: 'reference/external/moby/mlang/japanese.txt',
    },
    {
      url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mlang/spanish.txt',
      encoding: 'ascii',
      local: 'reference/external/moby/mlang/spanish.txt',
    },
    {
      url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mpos/readme',
      encoding: 'ascii',
      local: 'reference/external/moby/mpos/readme.txt',
    },
    {
      url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mpos/mobyposi.i',
      encoding: 'Macintosh',
      local: 'reference/external/moby/mpos/mobyposi.i',
    },
    {
      url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mpron/readme',
      encoding: 'ascii',
      local: 'reference/external/moby/mpron/readme.txt',
    },
    {
      url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mpron/creadme',
      encoding: 'ascii',
      local: 'reference/external/moby/mpron/creadme.txt',
    },
    {
      url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mpron/cmudict0.3',
      encoding: 'ascii',
      local: 'reference/external/moby/mpron/cmudict0.3',
    },
    {
      url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mpron/mobypron.unc',
      encoding: 'Macintosh',
      local: 'reference/external/moby/mpron/mobypron.unc',
    },
    {
      url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mpron/phoneset.3',
      encoding: 'ascii',
      local: 'reference/external/moby/mpron/phoneset.3',
    },
    {
      url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mshak/readme',
      encoding: 'ascii',
      local: 'reference/external/moby/mshak/readme.txt',
    },
    {
      url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mshak/shakespe.are',
      encoding: 'ascii',
      local: 'reference/external/moby/mshak/shakespe.are',
    },
    {
      url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mthes/readme',
      encoding: 'ascii',
      local: 'reference/external/moby/mthes/readme.txt',
    },
    {
      url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mthes/mobythes.aur',
      encoding: 'ascii',
      local: 'reference/external/moby/mthes/mobythes.aur',
    },
    {
      url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mthes/roget13a.txt',
      encoding: 'ascii',
      local: 'reference/external/moby/mthes/roget13a.txt',
    },
    {
      url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mwords/readme.txt',
      encoding: 'ascii',
      local: 'reference/external/moby/mwords/readme.txt',
    },
    {
      url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mwords/366often.mis',
      encoding: 'ascii',
      local: 'reference/external/moby/mwords/366often.mis',
    },
    {
      url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mwords/467popul.arf',
      encoding: 'ascii',
      local: 'reference/external/moby/mwords/467popul.arf',
    },
    {
      url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mwords/1185kjvf.req',
      encoding: 'ascii',
      local: 'reference/external/moby/mwords/1185kjvf.req',
    },
    {
      url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mwords/3897male.nam',
      encoding: 'ascii',
      local: 'reference/external/moby/mwords/3897male.nam',
    },
    {
      url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mwords/4160offi.cia',
      encoding: 'ascii',
      local: 'reference/external/moby/mwords/4160offi.cia',
    },
    {
      url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mwords/4946fema.len',
      encoding: 'ascii',
      local: 'reference/external/moby/mwords/4946fema.len',
    },
    {
      url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mwords/6213acro.nym',
      encoding: 'ascii',
      local: 'reference/external/moby/mwords/6213acro.nym',
    },
    {
      url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mwords/10001fr.equ',
      encoding: 'ascii',
      local: 'reference/external/moby/mwords/10001fr.equ',
    },
    {
      url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mwords/10002fr.equ',
      encoding: 'ascii',
      local: 'reference/external/moby/mwords/10002fr.equ',
    },
    {
      url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mwords/10196pla.ces',
      encoding: 'ascii',
      local: 'reference/external/moby/mwords/10196pla.ces',
    },
    {
      url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mwords/74550com.mon',
      encoding: 'ascii',
      local: 'reference/external/moby/mwords/74550com.mon',
    },
    {
      url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mwords/21986na.mes',
      encoding: 'Macintosh',
      local: 'reference/external/moby/mwords/21986na.mes',
    },
    {
      url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mwords/256772co.mpo',
      encoding: 'Macintosh',
      local: 'reference/external/moby/mwords/256772co.mpo',
    },
    {
      url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mwords/354984si.ngl',
      encoding: 'ascii',
      local: 'reference/external/moby/mwords/354984si.ngl',
    },
    {
      url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mwords/113809of.fic',
      encoding: 'ascii',
      local: 'reference/external/moby/mwords/113809of.fic',
    },
    {
      url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mwords/usaconst.itu',
      encoding: 'CP437',
      local: 'reference/external/moby/mwords/usaconst.itu',
    }]
  },
  //#endregion
  //#region fivethirtyeight
  {
    transfers: [
      {
        url: 'https://raw.githubusercontent.com/fivethirtyeight/data/refs/heads/master/most-common-name/README.md',
        local: 'reference/external/fivethirtyeight/README.md',
        banner: 'md',
      },
      {
        url: 'https://raw.githubusercontent.com/fivethirtyeight/data/refs/heads/master/most-common-name/adjusted-name-combinations-list.csv',
        local: 'reference/external/fivethirtyeight/adjusted-name-combinations-list.csv',
      },
      {
        url: 'https://raw.githubusercontent.com/fivethirtyeight/data/refs/heads/master/most-common-name/adjusted-name-combinations-matrix.csv',
        local: 'reference/external/fivethirtyeight/adjusted-name-combinations-matrix.csv',
      },
      {
        url: 'https://raw.githubusercontent.com/fivethirtyeight/data/refs/heads/master/most-common-name/adjustments.csv',
        local: 'reference/external/fivethirtyeight/adjustments.csv',
      },
      {
        url: 'https://raw.githubusercontent.com/fivethirtyeight/data/refs/heads/master/most-common-name/aging-curve.csv',
        local: 'reference/external/fivethirtyeight/aging-curve.csv',
      },
      {
        url: 'https://raw.githubusercontent.com/fivethirtyeight/data/refs/heads/master/most-common-name/independent-name-combinations-by-pop.csv',
        local: 'reference/external/fivethirtyeight/independent-name-combinations-by-pop.csv',
      },
      {
        url: 'https://raw.githubusercontent.com/fivethirtyeight/data/refs/heads/master/most-common-name/most-common-name.R',
        local: 'reference/external/fivethirtyeight/most-common-name.R',
      },
      {
        url: 'https://raw.githubusercontent.com/fivethirtyeight/data/refs/heads/master/most-common-name/new-top-firstNames.csv',
        local: 'reference/external/fivethirtyeight/new-top-firstNames.csv',
      },
      {
        url: 'https://raw.githubusercontent.com/fivethirtyeight/data/refs/heads/master/most-common-name/new-top-surnames.csv',
        local: 'reference/external/fivethirtyeight/new-top-surnames.csv',
      },
      {
        url: 'https://raw.githubusercontent.com/fivethirtyeight/data/refs/heads/master/most-common-name/state-pop.csv',
        local: 'reference/external/fivethirtyeight/state-pop.csv',
      },
      {
        url: 'https://raw.githubusercontent.com/fivethirtyeight/data/refs/heads/master/most-common-name/surnames.csv',
        local: 'reference/external/fivethirtyeight/surnames.csv',
      },]
  },
  //#endregion
  //#region scowl
  {
    transfers: [
      // 12dicts
      {
        url: 'https://cytranet-dal.dl.sourceforge.net/project/wordlist/12Dicts/6.0/12dicts-6.0.2.zip?viasf=1',
        local: 'reference/external/scowl/12dicts/',
        zip: '**/*',
      },
      {
        url: 'https://master.dl.sourceforge.net/project/wordlist/Alt12Dicts/2020.12.07/alt12dicts-2020.12.07.zip?viasf=1',
        local: 'reference/external/scowl/12dicts-alt',
        rename: (name) => name.replace('alt12dicts-2020.12.07/', empty),
        zip: '**/*',
      },

      // VarCon
      {
        url: 'https://master.dl.sourceforge.net/project/wordlist/VarCon/2020.12.07/varcon-2020.12.07.zip?viasf=1',
        local: 'reference/external/scowl/varcon',
        rename: (name) => name.replace('varcon-2020.12.07/', empty),
        zip: '**/*',
      },

      // jargon
      {
        url: 'https://master.dl.sourceforge.net/project/wordlist/Jargon-WL/4.2.0-1/jargon-wl-4.2.0-1.tar.gz?viasf=1',
        local: 'reference/external/scowl/jargon',
        rename: (name) => name.replace('jargon-wl/', empty),
        zip: '**/*',
      },

      // SCOWL
      {
        url: 'https://netactuate.dl.sourceforge.net/project/wordlist/SCOWL/2020.12.07/scowl-2020.12.07.zip?viasf=1',
        local: 'reference/external/scowl/scowl',
        zip: '**/*',
      },

      // ispell
      {
        url: 'https://master.dl.sourceforge.net/project/wordlist/Ispell-EnWL/3.1.20/ispell-enwl-3.1.20.zip?viasf=1',
        local: 'reference/external/scowl/ispell',
        zip: '**/*',
      },

      // pos
      {
        url: 'https://master.dl.sourceforge.net/project/wordlist/POS/Rev 1/pos-1.zip?viasf=1',
        local: 'reference/external/scowl',
        zip: '**/*',
      },

      // wordlist
      {
        url: 'https://pilotfiber.dl.sourceforge.net/project/wordlist/speller/2020.12.07/wordlist-en_US-2020.12.07.zip?viasf=1',
        local: 'reference/external/scowl/wordlist/us',
        zip: '**/*',
      },
      {
        url: 'https://master.dl.sourceforge.net/project/wordlist/speller/2020.12.07/wordlist-en_US-large-2020.12.07.zip?viasf=1',
        local: 'reference/external/scowl/wordlist/us-large',
        zip: '**/*',
      },
      {
        url: 'https://master.dl.sourceforge.net/project/wordlist/speller/2020.12.07/wordlist-en_CA-2020.12.07.zip?viasf=1',
        local: 'reference/external/scowl/wordlist/ca',
        zip: '**/*',
      },
      {
        url: 'https://master.dl.sourceforge.net/project/wordlist/speller/2020.12.07/wordlist-en_CA-large-2020.12.07.zip?viasf=1',
        local: 'reference/external/scowl/wordlist/ca-large',
        zip: '**/*',
      },
      {
        url: 'https://master.dl.sourceforge.net/project/wordlist/speller/2020.12.07/wordlist-en_AU-2020.12.07.zip?viasf=1',
        local: 'reference/external/scowl/wordlist/au',
        zip: '**/*',
      },
      {
        url: 'https://master.dl.sourceforge.net/project/wordlist/speller/2020.12.07/wordlist-en_AU-large-2020.12.07.zip?viasf=1',
        local: 'reference/external/scowl/wordlist/au-large',
        zip: '**/*',
      },
      {
        url: 'https://master.dl.sourceforge.net/project/wordlist/speller/2020.12.07/wordlist-en_GB-ize-2020.12.07.zip?viasf=1',
        local: 'reference/external/scowl/wordlist/gb-ize',
        zip: '**/*',
      },
      {
        url: 'https://master.dl.sourceforge.net/project/wordlist/speller/2020.12.07/wordlist-en_GB-ise-2020.12.07.zip?viasf=1',
        local: 'reference/external/scowl/wordlist/gb-ise',
        zip: '**/*',
      },
      {
        url: 'https://master.dl.sourceforge.net/project/wordlist/speller/2020.12.07/wordlist-en_GB-large-2020.12.07.zip?viasf=1',
        local: 'reference/external/scowl/wordlist/gb-large',
        zip: '**/*',
      },

      // AGID
      {
        url: 'https://master.dl.sourceforge.net/project/wordlist/AGID/2016.01.19/agid-2016.01.19.zip?viasf=1',
        local: 'reference/external/scowl/agid',
        rename: (name) => name.replace('agid-2016.01.19/', empty),
        zip: '**/*',
      },]
  },
  //#endregion
  //#region ssa
  {
    transfers: [
      {
        url: 'https://www.ssa.gov/oact/babynames/names.zip',
        local: 'reference/external/ssa/',
        zip: '*.txt',
      },]
  },
  //#endregion
  //#region ctan
  {
    transfers: [
      {
        url: 'https://mirrors.mit.edu/CTAN/language/hyph-utf8/tex/patterns/tex/hyph-en-us.tex',
        local: 'reference/external/ctan/hyph-en-us.tex',
        banner: '%',
      },]
  },
  //#endregion
  //#region unicode
  {
    transfers: [
      {
        url: 'https://www.unicode.org/license.txt',
        local: 'reference/external/unicode/license.txt',
        banner: '#',
      },
      {
        url: 'https://www.unicode.org/Public/UCD/latest/ucd/UnicodeData.txt',
        local: 'reference/external/unicode/unicode-data.txt',
      },
      // https://www.unicode.org/Public/UCD/latest/ucd/UCD.zip
      // https://www.unicode.org/Public/UCD/latest/ucdxml/ucd.all.flat.zip
    ]
  },
  //#endregion
  //#region what
  {
    transfers: [
      {
        url: 'https://wolfberg.net/what/NWL18defs.exe',
        local: 'reference/external/what',
        zip: '**/*',
      },
      {
        url: 'https://wolfberg.net/what/CSW19defs.exe',
        local: 'reference/external/what',
        zip: '**/*',
      },
      {
        url: 'https://wolfberg.net/what/CSWdefs.exe',
        local: 'reference/external/what',
        zip: '**/*',
      },
      {
        url: 'https://wolfberg.net/what/OWL3defs.exe',
        local: 'reference/external/what',
        zip: '**/*',
      },
      {
        url: 'https://wolfberg.net/what/OWLdefs.exe',
        local: 'reference/external/what',
        zip: '**/*',
      },
      {
        url: 'https://wolfberg.net/what/TWLdefs.exe',
        local: 'reference/external/what',
        zip: '**/*',
      },]
  },
  //#endregion
  //#region wordnet
  // Open English Wordnet
  {
    transfers: [{
      url: 'https://en-word.net/static/english-wordnet-2024.zip',
      local: 'reference/external/wordnet/english-wordnet',
      rename: (name) => name.replace('oewn2024/', ''),
      zip: '**/*',
    },]
  },
  //#endregion
  //#region words
  {
    transfers: [
      {
        url: 'https://github.com/words/brill/archive/refs/heads/main.zip',
        local: 'reference/external/words/brill',
        zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/*.txt'],
        rename: (name) => name.replace(/.*?\//, empty),
      },
      {
        url: 'https://github.com/words/buzzwords/archive/refs/heads/main.zip',
        local: 'reference/external/words/buzzwords',
        zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/*.txt'],
        rename: (name) => name.replace(/.*?\//, empty),
      },
      {
        url: 'https://github.com/words/coleman-liau/archive/refs/heads/main.zip',
        local: 'reference/external/words/coleman-liau',
        zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/*.txt'],
        rename: (name) => name.replace(/.*?\//, empty),
      },
      {
        url: 'https://github.com/words/color-description/archive/refs/heads/main.zip',
        local: 'reference/external/words/color-description',
        zip: ['*/README.md', '*/LICENSE', '*/src/*', '*/tests/*', '*/tools/*', '*/utils/*', '*/index.d.ts', '*/package.json'],
        rename: (name) => name.replace(/.*?\//, empty),
      },
      {
        url: 'https://github.com/words/cuss/archive/refs/heads/main.zip',
        local: 'reference/external/words/cuss',
        zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/*.txt'],
        rename: (name) => name.replace(/.*?\//, empty),
      },
      {
        url: 'https://github.com/words/dale-chall/archive/refs/heads/main.zip',
        local: 'reference/external/words/dale-chall',
        zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/*.txt'],
        rename: (name) => name.replace(/.*?\//, empty),
      },
      {
        url: 'https://github.com/words/dale-chall-formula/archive/refs/heads/main.zip',
        local: 'reference/external/words/dale-chall-formula',
        zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/*.txt'],
        rename: (name) => name.replace(/.*?\//, empty),
      },
      {
        url: 'https://github.com/words/emoji-emotion/archive/refs/heads/main.zip',
        local: 'reference/external/words/emoji-emotion',
        zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/*.txt'],
        rename: (name) => name.replace(/.*?\//, empty),
      },
      {
        url: 'https://github.com/words/english-anagrams/archive/refs/heads/master.zip',
        local: 'reference/external/words/english-anagrams',
        zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
        rename: (name) => name.replace(/.*?\//, empty),
      },
      {
        url: 'https://github.com/words/fillers/archive/refs/heads/master.zip',
        local: 'reference/external/words/fillers',
        zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
        rename: (name) => name.replace(/.*?\//, empty),
      },
      {
        url: 'https://github.com/words/flesch/archive/refs/heads/main.zip',
        local: 'reference/external/words/flesch',
        zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
        rename: (name) => name.replace(/.*?\//, empty),
      },
      {
        url: 'https://github.com/words/flesch-kincaid/archive/refs/heads/main.zip',
        local: 'reference/external/words/flesch-kincaid',
        zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
        rename: (name) => name.replace(/.*?\//, empty),
      },
      {
        url: 'https://github.com/words/gunning-fog/archive/refs/heads/main.zip',
        local: 'reference/external/words/gunning-fog',
        zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
        rename: (name) => name.replace(/.*?\//, empty),
      },
      {
        url: 'https://github.com/words/hedges/archive/refs/heads/main.zip',
        local: 'reference/external/words/hedges',
        zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
        rename: (name) => name.replace(/.*?\//, empty),
      },
      {
        url: 'https://github.com/words/ologies/archive/refs/heads/master.zip',
        local: 'reference/external/words/ologies',
        zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
        rename: (name) => name.replace(/.*?\//, empty),
      },
      {
        url: 'https://github.com/words/polarity/archive/refs/heads/main.zip',
        local: 'reference/external/words/polarity',
        zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
        rename: (name) => name.replace(/.*?\//, empty),
      },
      {
        url: 'https://github.com/words/powerthesaurus-api/archive/refs/heads/master.zip',
        local: 'reference/external/words/powerthesaurus-api',
        zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
        rename: (name) => name.replace(/.*?\//, empty),
      },
      {
        url: 'https://github.com/words/profanities/archive/refs/heads/main.zip',
        local: 'reference/external/words/profanities',
        zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
        rename: (name) => name.replace(/.*?\//, empty),
      },
      {
        url: 'https://github.com/words/rhymes/archive/refs/heads/master.zip',
        local: 'reference/external/words/rhymes',
        zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
        rename: (name) => name.replace(/.*?\//, empty),
      },
      {
        url: 'https://github.com/words/russian-given-names/archive/refs/heads/master.zip',
        local: 'reference/external/words/russian-given-names',
        zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
        rename: (name) => name.replace(/.*?\//, empty),
      },
      {
        url: 'https://github.com/words/smog-formula/archive/refs/heads/master.zip',
        local: 'reference/external/words/smog-formula',
        zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
        rename: (name) => name.replace(/.*?\//, empty),
      },
      {
        url: 'https://github.com/words/spache/archive/refs/heads/master.zip',
        local: 'reference/external/words/spache',
        zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
        rename: (name) => name.replace(/.*?\//, empty),
      },
      {
        url: 'https://github.com/words/spache-formula/archive/refs/heads/master.zip',
        local: 'reference/external/words/spache-formula',
        zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
        rename: (name) => name.replace(/.*?\//, empty),
      },
      {
        url: 'https://github.com/words/subtlex-word-frequencies/archive/refs/heads/master.zip',
        local: 'reference/external/words/subtlex-word-frequencies',
        zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
        rename: (name) => name.replace(/.*?\//, empty),
      },
      {
        url: 'https://github.com/words/tree-names/archive/refs/heads/master.zip',
        local: 'reference/external/words/tree-names',
        zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
        rename: (name) => name.replace(/.*?\//, empty),
      },
      {
        url: 'https://github.com/words/weasels/archive/refs/heads/main.zip',
        local: 'reference/external/words/weasels',
        zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
        rename: (name) => name.replace(/.*?\//, empty),
      },
      {
        url: 'https://github.com/words/wordnet/archive/refs/heads/master.zip',
        local: 'reference/external/words/wordnet',
        zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
        rename: (name) => name.replace(/.*?\//, empty),
      },
    ]
  },
  //#endregion
  //#region breider-morse
  {
    transfers: [
      {
        url: 'https://stevemorse.org/phonetics/bmver315.zip',
        local: 'reference/external/breider-morse',
        zip: '**/*',
      },]
  },
  //#endregion
  //#region subtlexus
  {
    transfers: [
      {
        url: 'https://www.ugent.be/pp/experimentele-psychologie/en/research/documents/subtlexus/subtlexus2.zip',
        local: 'reference/external/subtlexus',
        zip: '**/*',
      },
      {
        url: 'https://www.ugent.be/pp/experimentele-psychologie/en/research/documents/subtlexus/subtlexus5.zip',
        local: 'reference/external/subtlexus',
        zip: '**/*',
      },
      {
        url: 'https://www.ugent.be/pp/experimentele-psychologie/en/research/documents/subtlexus',
        local: 'reference/external/subtlexus/index.html',
        banner: '<!->',
      },
      {
        url: 'https://www.ugent.be/pp/experimentele-psychologie/en/research/documents/subtlexus/subtlexus1.zip',
        local: 'reference/external/subtlexus',
        zip: '**/*',
      },]
  },
  //#endregion
  //#region openlexicon
  {
    transfers: [
      {
        url: 'https://github.com/chrplr/openlexicon/raw/refs/heads/master/README.md',
        local: 'reference/external/openlexicon/README.md',
        banner: 'md',
      },]
  },
  //#endregion
  //#region fasttag
  {
    transfers: [
      {
        url: 'https://github.com/mark-watson/fasttag_v2/archive/refs/heads/master.zip',
        local: 'reference/external/fasttag',
        zip: '**/*',
        rename: (name) => name.replace(/.*?\//, empty),
      },
    ]
  },
  //#endregion
  //#region afinn
  {
    transfers: [
      {
        url: 'https://github.com/fnielsen/afinn/archive/refs/heads/master.zip',
        local: 'reference/external/afinn',
        zip: ['*/README.rst', '*/LICENSE', '**/AFINN*.txt'],
        rename: (name) => name.replace(/(?:.*?\/)+/, empty),
      },]
  },
  //#endregion
  //#region letterpress
  {
    transfers: [
      {
        url: 'https://github.com/lorenbrichter/Words/archive/refs/heads/master.zip',
        local: 'reference/external/letterpress',
        zip: ['**/*'],
        rename: (name) => name.replace(/(?:.*?\/)+/, empty),

      },]
  },
  //#endregion
];
