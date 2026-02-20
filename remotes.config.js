//@ts-check
import { empty, range } from '@technobuddha/library';

/** @type import("\@technobuddha/project").TBRemote[] */
export const remotes = [
  //#region anyascii
  {
    url: 'https://raw.githubusercontent.com/anyascii/anyascii/refs/heads/master/impl/js/block.js',
    local: 'reference/anyascii/block.js',
    banner: '//',
  },
  {
    url: 'https://raw.githubusercontent.com/anyascii/anyascii/refs/heads/master/LICENSE',
    local: 'reference/anyascii/LICENSE',
    banner: 'md',
  },
  //#endregion
  //#region bible-data
  {
    url: 'https://raw.githubusercontent.com/BradyStephenson/bible-data/refs/heads/main/BibleData-Person.csv',
    local: 'reference/bible/person.csv',
  },
  {
    url: 'https://raw.githubusercontent.com/BradyStephenson/bible-data/refs/heads/main/HitchcocksBibleNamesDictionary.csv',
    local: 'reference/bible/hitchcock-names.csv',
  },

  // bible-datasets
  {
    url: 'https://raw.githubusercontent.com/SergioBoySV/Bible-Datasets/refs/heads/main/kjv/entire_kjv.csv',
    local: 'reference/bible/kjv.csv',
  },
  {
    url: 'https://raw.githubusercontent.com/SergioBoySV/Bible-Datasets/refs/heads/main/nkjv/entire_nkjv.csv',
    local: 'reference/bible/nkjv.csv',
  },
  //#endregion
  //#region boost
  {
    url: 'https://raw.githubusercontent.com/boost-vault/date_time/refs/heads/master/date_time_zonespec.csv',
    local: 'reference/boost/date_time_zonespec.csv',
  },
  //#endregion
  //#region cat-names
  {
    url: 'https://www.kessels.com/CatNames/CatNames.zip',
    local: 'reference/names',
    zip: '**/*',
  },
  //#endregion
  //#region data-baby-names
  {
    url: 'https://github.com/hadley/data-baby-names/raw/refs/heads/master/baby-names-by-state.csv',
    local: 'reference/data-baby-names/baby-names-by-state.csv',
  },
  {
    url: 'https://github.com/hadley/data-baby-names/raw/refs/heads/master/baby-names.csv',
    local: 'reference/data-baby-names/baby-names.csv',
  },
  {
    url: 'https://github.com/hadley/data-baby-names/raw/refs/heads/master/births.csv',
    local: 'reference/data-baby-names/births.csv',
  },
  {
    url: 'https://raw.githubusercontent.com/hadley/data-baby-names/refs/heads/master/old-testament.txt',
    local: 'reference/data-baby-names/old-testament.txt',
  },
  //#endregion
  //#region US Census
  {
    url: 'https://www2.census.gov/topics/genealogy/1990surnames/dist.all.last',
    local: 'reference/census/dist.all.last',
  },
  {
    url: 'https://www2.census.gov/topics/genealogy/1990surnames/dist.female.first',
    local: 'reference/census/dist.female.first',
  },
  {
    url: 'https://www2.census.gov/topics/genealogy/1990surnames/dist.male.first',
    local: 'reference/census/dist.male.first',
  },
  {
    url: 'https://www2.census.gov/topics/genealogy/2000surnames/names.zip',
    local: 'reference/census/',
    zip: '*.csv',
  },
  {
    url: 'https://www2.census.gov/topics/genealogy/2010surnames/names.zip',
    local: 'reference/census/',
    zip: '*.csv',
  },
  //#endregion
  //#region CMU Pronouncing Dictionary
  {
    url: 'https://raw.githubusercontent.com/cmusphinx/cmudict/refs/heads/master/cmudict.dict',
    local: 'reference/cmu/cmudict.dict',
  },
  {
    url: 'https://raw.githubusercontent.com/cmusphinx/cmudict/refs/heads/master/cmudict.phones',
    local: 'reference/cmu/cmudict.phones',
  },
  {
    url: 'https://raw.githubusercontent.com/cmusphinx/cmudict/refs/heads/master/cmudict.symbols',
    local: 'reference/cmu/cmudict.symbols',
  },
  {
    url: 'https://raw.githubusercontent.com/cmusphinx/cmudict/refs/heads/master/cmudict.vp',
    local: 'reference/cmu/cmudict.vp',
  },
  {
    url: 'https://raw.githubusercontent.com/cmusphinx/cmudict/refs/heads/master/LICENSE',
    local: 'reference/cmu/LICENSE',
    banner: 'md',
  },

  // Big Lou (CMU)
  {
    url: 'https://www.cs.cmu.edu/~biglou/resources/EN_SP_DICT.txt',
    local: 'reference/cmu/biglou-en-sp-dict.txt',
  },
  {
    url: 'https://www.cs.cmu.edu/~biglou/resources/bad-words.txt',
    local: 'reference/cmu/biglou-bad-words.txt',
  },
  //#endregion
  //#region Copylists
  {
    url: 'https://copylists.com/downloads/names/angels/angel_names.csv',
    local: 'reference/copylists/angel-names.csv',
  },
  {
    url: 'https://copylists.com/downloads/names/biblical/female/biblical_female_names.csv',
    local: 'reference/copylists/biblical-female-names.csv',
  },
  {
    url: 'https://copylists.com/downloads/names/biblical/male/biblical_male_names.csv',
    local: 'reference/copylists/biblical-male-names.csv',
  },
  {
    url: 'https://copylists.com/downloads/names/boys/boys_names.csv',
    local: 'reference/copylists/boys-names.csv',
  },
  {
    url: 'https://copylists.com/downloads/names/cats/cat_names.csv',
    local: 'reference/copylists/cat-names.csv',
  },
  {
    url: 'https://copylists.com/downloads/names/dogs/dog_names.csv',
    local: 'reference/copylists/dog-names.csv',
  },
  {
    url: 'https://copylists.com/downloads/names/gender-neutral/gender-neutral_names.csv',
    local: 'reference/copylists/gender-neutral-names.csv',
  },
  {
    url: 'https://copylists.com/downloads/names/girls/girls_names.csv',
    local: 'reference/copylists/girls-names.csv',
  },
  //#endregion
  //#region diceware
  // {
  //   url: 'https://web.archive.org/web/20251227030530/https://theworld.com/~reinhold/diceware.html',
  //   local: 'reference/diceware/diceware-wordlist.html',
  //   banner: '<!->',
  // },
  {
    url: 'https://raw.githubusercontent.com/agreinhold/Diceware-word-lists/refs/heads/master/diceware.wordlist.asc',
    local: 'reference/diceware/diceware-wordlist.txt',
  },
  {
    url: 'https://github.com/agreinhold/Diceware-word-lists/raw/refs/heads/master/beale.wordlist.asc',
    local: 'reference/diceware/beale-wordlist.txt',
  },
  {
    url: 'https://github.com/agreinhold/Diceware-word-lists/raw/refs/heads/master/dicewarekit.txt',
    local: 'reference/diceware/dicewarekit.txt',
  },
  {
    url: 'https://github.com/agreinhold/Diceware-word-lists/raw/refs/heads/master/diceware8k.c',
    local: 'reference/diceware/diceware8k.c',
  },
  {
    url: 'https://github.com/agreinhold/Diceware-word-lists/raw/refs/heads/master/diceware8k.txt',
    local: 'reference/diceware/diceware8k.txt',
  },
  //#endregion
  //#region Dog Names
  {
    url: 'https://raw.githubusercontent.com/sindresorhus/dog-names/refs/heads/main/female-dog-names.json',
    local: 'reference/names/female-dog-names.jsonc',
    banner: '//',
  },
  {
    url: 'https://raw.githubusercontent.com/sindresorhus/dog-names/refs/heads/main/male-dog-names.json',
    local: 'reference/names/male-dog-names.jsonc',
    banner: '//',
  },
  //#endregion
  //#region EFF
  {
    url: 'https://www.eff.org/files/2016/07/18/eff_large_wordlist.txt',
    local: 'reference/eff/eff-large-wordlist.txt',
  },
  {
    url: 'https://www.eff.org/files/2016/09/08/eff_short_wordlist_1.txt',
    local: 'reference/eff/eff-short-wordlist-1.txt',
  },
  {
    url: 'https://www.eff.org/files/2016/09/08/eff_short_wordlist_2_0.txt',
    local: 'reference/eff/eff-short-wordlist-2.txt',
  },
  //#endregion
  //#region ENABLE
  {
    url: 'https://web.archive.org/web/20071018165557if_/http://personal.riverusers.com/~thegrendel/enable2k.zip',
    local: 'reference/enable/enable2k',
    zip: '**/*',
  },
  {
    url: 'https://web.archive.org/web/20071018165557if_/http://personal.riverusers.com/~thegrendel/supp2k.zip',
    local: 'reference/enable/supp2k',
    zip: '**/*',
  },
  {
    url: 'https://web.archive.org/web/20071018165557if_/http://personal.riverusers.com/~thegrendel/ablesupp.zip',
    local: 'reference/enable/ablesupp',
    zip: '**/*',
  },
  //#endregion
  //#region Free Scrabble Dictionary Word Lists
  {
    url: 'https://www.freescrabbledictionary.com/english-word-list/download/english.txt',
    local: 'reference/freescrabbledictionary/english.txt',
  },
  {
    url: 'https://www.freescrabbledictionary.com/twl06/download/twl06.txt',
    local: 'reference/freescrabbledictionary/twl06.txt',
  },
  {
    url: 'https://www.freescrabbledictionary.com/sowpods/download/sowpods.txt',
    local: 'reference/freescrabbledictionary/sowpods.txt',
  },
  {
    url: 'https://www.freescrabbledictionary.com/enable/download/enable.txt',
    local: 'reference/freescrabbledictionary/enable.txt',
  },
  ...[...range('a', 'z')].map(
    (letter) =>
    /** @type import("@technobuddha/project").TBRemote */
    ({
      url: `https://www.freescrabbledictionary.com/word-lists/words-that-start-with/letter/${letter}/words-that-start-with-${letter}.json`,
      local: `reference/freescrabbledictionary/words-${letter}.jsonc`,
      banner: '//',
    }),
  ),
  //#endregion
  //#region GCIDE
  {
    url: 'https://ftp.gnu.org/gnu/gcide/gcide-0.54.tar.gz',
    local: 'reference/gcide',
    zip: '**/*',
    rename: (name) => name.replace('gcide-0.54/', ''),
  },
  //#endregion
  //#region Geonames
  {
    url: 'https://download.geonames.org/export/dump/countryInfo.txt',
    local: 'reference/geonames/country-info.txt',
  },

  // OTHER LANGUAGES AVAILABLE
  {
    url: 'https://download.geonames.org/export/dump/featureCodes_en.txt',
    local: 'reference/geonames/feature-codes-en.txt',
  },

  {
    url: 'https://download.geonames.org/export/dump/iso-languagecodes.txt',
    local: 'reference/geonames/iso-language-codes.txt',
  },
  {
    url: 'https://download.geonames.org/export/dump/readme.txt',
    local: 'reference/geonames/readme.txt',
  },
  {
    url: 'https://download.geonames.org/export/dump/timeZones.txt',
    local: 'reference/geonames/time-zones.txt',
  },

  {
    url: 'https://download.geonames.org/export/zip/US.zip',
    local: 'reference/geonames/zip',
    zip: '**/*',
  },
  //#endregion
  //#region GINAP (a GIven Name mAPper)
  {
    url: 'https://www.galbithink.org/names/ginap.txt',
    local: 'reference/ginap/ginap.txt',
  },
  //#endregion
  //#region homophones
  {
    url: 'http://www.singularis.ltd.uk/bifroest/misc/homophones-list.html',
    local: 'reference/homophones/homophones-list.html',
    banner: '<!->',
  },
  //#endregion
  //#region iboblio
  {
    url: 'https://www.ibiblio.org/pub/Linux/libs/yawl-0.3.2.tar.gz',
    local: 'reference/ibiblio/',
    zip: '**/*',
  },
  //#endregion
  //#region IANA
  {
    url: 'https://www.iana.org/time-zones/repository/tzcode-latest.tar.gz',
    local: 'reference/iana/tzcode',
    zip: '**/*',
  },
  {
    url: 'https://www.iana.org/time-zones/repository/tzdata-latest.tar.gz',
    local: 'reference/iana/tzdata',
    zip: '**/*',
  },
  // {
  //   url: 'https://www.iana.org/time-zones/repository/tzdb-latest.tar.lz',
  //   local: 'reference/iana/tzdb',
  //   zip: '**/*',
  // },
  //#endregion
  //#region Misc
  {
    url: 'https://codeload.github.com/sigpwned/popular-names-by-country-dataset/zip/refs/tags/v1.2',
    local: 'reference/misc/sigpwned',
    zip: '**/*',
    rename: (name) => name.replace('popular-names-by-country-dataset-1.2/', ''),
  },
  //#endregion
  //#region Moby Project
  {
    url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mhyph/readme',
    encoding: 'ascii',
    local: 'reference/moby/mhyph/readme.txt',
  },
  {
    url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mhyph/mhyph.txt',
    encoding: 'Macintosh',
    local: 'reference/moby/mhyph/mhyph.txt',
  },
  {
    url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mlang/readme',
    encoding: 'ascii',
    local: 'reference/moby/mlang/readme.txt',
  },
  {
    url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mlang/french.txt',
    encoding: 'Macintosh',
    local: 'reference/moby/mlang/french.txt',
  },
  {
    url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mlang/german.txt',
    encoding: 'CP437',
    local: 'reference/moby/mlang/german.txt',
  },
  {
    url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mlang/italian.txt',
    encoding: 'ascii',
    local: 'reference/moby/mlang/italian.txt',
  },
  {
    url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mlang/japanese.txt',
    encoding: 'Macintosh',
    local: 'reference/moby/mlang/japanese.txt',
  },
  {
    url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mlang/spanish.txt',
    encoding: 'ascii',
    local: 'reference/moby/mlang/spanish.txt',
  },
  {
    url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mpos/readme',
    encoding: 'ascii',
    local: 'reference/moby/mpos/readme.txt',
  },
  {
    url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mpos/mobyposi.i',
    encoding: 'Macintosh',
    local: 'reference/moby/mpos/mobyposi.i',
  },
  {
    url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mpron/readme',
    encoding: 'ascii',
    local: 'reference/moby/mpron/readme.txt',
  },
  {
    url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mpron/creadme',
    encoding: 'ascii',
    local: 'reference/moby/mpron/creadme.txt',
  },
  {
    url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mpron/cmudict0.3',
    encoding: 'ascii',
    local: 'reference/moby/mpron/cmudict0.3',
  },
  {
    url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mpron/mobypron.unc',
    encoding: 'Macintosh',
    local: 'reference/moby/mpron/mobypron.unc',
  },
  {
    url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mpron/phoneset.3',
    encoding: 'ascii',
    local: 'reference/moby/mpron/phoneset.3',
  },
  {
    url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mshak/readme',
    encoding: 'ascii',
    local: 'reference/moby/mshak/readme.txt',
  },
  {
    url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mshak/shakespe.are',
    encoding: 'ascii',
    local: 'reference/moby/mshak/shakespe.are',
  },
  {
    url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mthes/readme',
    encoding: 'ascii',
    local: 'reference/moby/mthes/readme.txt',
  },
  {
    url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mthes/mobythes.aur',
    encoding: 'ascii',
    local: 'reference/moby/mthes/mobythes.aur',
  },
  {
    url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mthes/roget13a.txt',
    encoding: 'ascii',
    local: 'reference/moby/mthes/roget13a.txt',
  },
  {
    url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mwords/readme.txt',
    encoding: 'ascii',
    local: 'reference/moby/mwords/readme.txt',
  },
  {
    url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mwords/366often.mis',
    encoding: 'ascii',
    local: 'reference/moby/mwords/366often.mis',
  },
  {
    url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mwords/467popul.arf',
    encoding: 'ascii',
    local: 'reference/moby/mwords/467popul.arf',
  },
  {
    url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mwords/1185kjvf.req',
    encoding: 'ascii',
    local: 'reference/moby/mwords/1185kjvf.req',
  },
  {
    url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mwords/3897male.nam',
    encoding: 'ascii',
    local: 'reference/moby/mwords/3897male.nam',
  },
  {
    url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mwords/4160offi.cia',
    encoding: 'ascii',
    local: 'reference/moby/mwords/4160offi.cia',
  },
  {
    url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mwords/4946fema.len',
    encoding: 'ascii',
    local: 'reference/moby/mwords/4946fema.len',
  },
  {
    url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mwords/6213acro.nym',
    encoding: 'ascii',
    local: 'reference/moby/mwords/6213acro.nym',
  },
  {
    url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mwords/10001fr.equ',
    encoding: 'ascii',
    local: 'reference/moby/mwords/10001fr.equ',
  },
  {
    url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mwords/10002fr.equ',
    encoding: 'ascii',
    local: 'reference/moby/mwords/10002fr.equ',
  },
  {
    url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mwords/10196pla.ces',
    encoding: 'ascii',
    local: 'reference/moby/mwords/10196pla.ces',
  },
  {
    url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mwords/74550com.mon',
    encoding: 'ascii',
    local: 'reference/moby/mwords/74550com.mon',
  },
  {
    url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mwords/21986na.mes',
    encoding: 'Macintosh',
    local: 'reference/moby/mwords/21986na.mes',
  },
  {
    url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mwords/256772co.mpo',
    encoding: 'Macintosh',
    local: 'reference/moby/mwords/256772co.mpo',
  },
  {
    url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mwords/354984si.ngl',
    encoding: 'ascii',
    local: 'reference/moby/mwords/354984si.ngl',
  },
  {
    url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mwords/113809of.fic',
    encoding: 'ascii',
    local: 'reference/moby/mwords/113809of.fic',
  },
  {
    url: 'https://github.com/elitejake/Moby-Project/raw/refs/heads/main/.untouched/mwords/usaconst.itu',
    encoding: 'CP437',
    local: 'reference/moby/mwords/usaconst.itu',
  },
  //#endregion
  //#region most-common-names
  {
    url: 'https://raw.githubusercontent.com/fivethirtyeight/data/refs/heads/master/most-common-name/README.md',
    local: 'reference/most-common-names/README.md',
    banner: 'md',
  },
  {
    url: 'https://raw.githubusercontent.com/fivethirtyeight/data/refs/heads/master/most-common-name/adjusted-name-combinations-list.csv',
    local: 'reference/most-common-names/adjusted-name-combinations-list.csv',
  },
  {
    url: 'https://raw.githubusercontent.com/fivethirtyeight/data/refs/heads/master/most-common-name/adjusted-name-combinations-matrix.csv',
    local: 'reference/most-common-names/adjusted-name-combinations-matrix.csv',
  },
  {
    url: 'https://raw.githubusercontent.com/fivethirtyeight/data/refs/heads/master/most-common-name/adjustments.csv',
    local: 'reference/most-common-names/adjustments.csv',
  },
  {
    url: 'https://raw.githubusercontent.com/fivethirtyeight/data/refs/heads/master/most-common-name/aging-curve.csv',
    local: 'reference/most-common-names/aging-curve.csv',
  },
  {
    url: 'https://raw.githubusercontent.com/fivethirtyeight/data/refs/heads/master/most-common-name/independent-name-combinations-by-pop.csv',
    local: 'reference/most-common-names/independent-name-combinations-by-pop.csv',
  },
  {
    url: 'https://raw.githubusercontent.com/fivethirtyeight/data/refs/heads/master/most-common-name/most-common-name.R',
    local: 'reference/most-common-names/most-common-name.R',
  },
  {
    url: 'https://raw.githubusercontent.com/fivethirtyeight/data/refs/heads/master/most-common-name/new-top-firstNames.csv',
    local: 'reference/most-common-names/new-top-firstNames.csv',
  },
  {
    url: 'https://raw.githubusercontent.com/fivethirtyeight/data/refs/heads/master/most-common-name/new-top-surnames.csv',
    local: 'reference/most-common-names/new-top-surnames.csv',
  },
  {
    url: 'https://raw.githubusercontent.com/fivethirtyeight/data/refs/heads/master/most-common-name/state-pop.csv',
    local: 'reference/most-common-names/state-pop.csv',
  },
  {
    url: 'https://raw.githubusercontent.com/fivethirtyeight/data/refs/heads/master/most-common-name/surnames.csv',
    local: 'reference/most-common-names/surnames.csv',
  },
  //#endregion
  //#region names-dataset
  {
    url: 'https://raw.githubusercontent.com/solvenium/names-dataset/refs/heads/master/README.md',
    local: 'reference/names-dataset/README.md',
    banner: 'md',
  },
  {
    url: 'https://raw.githubusercontent.com/solvenium/names-dataset/refs/heads/master/LICENSE',
    local: 'reference/names-dataset/LICENSE.md',
    banner: 'md',
  },
  {
    url: 'https://raw.githubusercontent.com/solvenium/names-dataset/refs/heads/master/scrape-wiktionary-names.js',
    local: 'reference/names-dataset/scrape-wiktionary-names.js',
    banner: '//',
  },
  {
    url: 'https://raw.githubusercontent.com/solvenium/names-dataset/refs/heads/master/dataset/Female_given_names.txt',
    local: 'reference/names-dataset/female-given-names.txt',
  },
  {
    url: 'https://raw.githubusercontent.com/solvenium/names-dataset/refs/heads/master/dataset/Male_given_names.txt',
    local: 'reference/names-dataset/male-given-names.txt',
  },
  {
    url: 'https://raw.githubusercontent.com/solvenium/names-dataset/refs/heads/master/dataset/Surnames.txt',
    local: 'reference/names-dataset/surnames.txt',
  },
  //#endregion
  //#region SCOWL
  // 12dicts
  {
    url: 'https://cytranet-dal.dl.sourceforge.net/project/wordlist/12Dicts/6.0/12dicts-6.0.2.zip?viasf=1',
    local: 'reference/scowl/12dicts/',
    zip: '**/*',
  },
  {
    url: 'https://master.dl.sourceforge.net/project/wordlist/Alt12Dicts/2020.12.07/alt12dicts-2020.12.07.zip?viasf=1',
    local: 'reference/scowl/12dicts-alt',
    rename: (name) => name.replace('alt12dicts-2020.12.07/', empty),
    zip: '**/*',
  },

  // VarCon
  {
    url: 'https://master.dl.sourceforge.net/project/wordlist/VarCon/2020.12.07/varcon-2020.12.07.zip?viasf=1',
    local: 'reference/scowl/varcon',
    rename: (name) => name.replace('varcon-2020.12.07/', empty),
    zip: '**/*',
  },

  // jargon
  {
    url: 'https://master.dl.sourceforge.net/project/wordlist/Jargon-WL/4.2.0-1/jargon-wl-4.2.0-1.tar.gz?viasf=1',
    local: 'reference/scowl/jargon',
    rename: (name) => name.replace('jargon-wl/', empty),
    zip: '**/*',
  },

  // SCOWL
  {
    url: 'https://netactuate.dl.sourceforge.net/project/wordlist/SCOWL/2020.12.07/scowl-2020.12.07.zip?viasf=1',
    local: 'reference/scowl/scowl',
    zip: '**/*',
  },

  // ispell
  {
    url: 'https://master.dl.sourceforge.net/project/wordlist/Ispell-EnWL/3.1.20/ispell-enwl-3.1.20.zip?viasf=1',
    local: 'reference/scowl/ispell',
    zip: '**/*',
  },

  // pos
  {
    url: 'https://master.dl.sourceforge.net/project/wordlist/POS/Rev 1/pos-1.zip?viasf=1',
    local: 'reference/scowl',
    zip: '**/*',
  },

  // wordlist
  {
    url: 'https://pilotfiber.dl.sourceforge.net/project/wordlist/speller/2020.12.07/wordlist-en_US-2020.12.07.zip?viasf=1',
    local: 'reference/scowl/wordlist/us',
    zip: '**/*',
  },
  {
    url: 'https://master.dl.sourceforge.net/project/wordlist/speller/2020.12.07/wordlist-en_US-large-2020.12.07.zip?viasf=1',
    local: 'reference/scowl/wordlist/us-large',
    zip: '**/*',
  },
  {
    url: 'https://master.dl.sourceforge.net/project/wordlist/speller/2020.12.07/wordlist-en_CA-2020.12.07.zip?viasf=1',
    local: 'reference/scowl/wordlist/ca',
    zip: '**/*',
  },
  {
    url: 'https://master.dl.sourceforge.net/project/wordlist/speller/2020.12.07/wordlist-en_CA-large-2020.12.07.zip?viasf=1',
    local: 'reference/scowl/wordlist/ca-large',
    zip: '**/*',
  },
  {
    url: 'https://master.dl.sourceforge.net/project/wordlist/speller/2020.12.07/wordlist-en_AU-2020.12.07.zip?viasf=1',
    local: 'reference/scowl/wordlist/au',
    zip: '**/*',
  },
  {
    url: 'https://master.dl.sourceforge.net/project/wordlist/speller/2020.12.07/wordlist-en_AU-large-2020.12.07.zip?viasf=1',
    local: 'reference/scowl/wordlist/au-large',
    zip: '**/*',
  },
  {
    url: 'https://master.dl.sourceforge.net/project/wordlist/speller/2020.12.07/wordlist-en_GB-ize-2020.12.07.zip?viasf=1',
    local: 'reference/scowl/wordlist/gb-ize',
    zip: '**/*',
  },
  {
    url: 'https://master.dl.sourceforge.net/project/wordlist/speller/2020.12.07/wordlist-en_GB-ise-2020.12.07.zip?viasf=1',
    local: 'reference/scowl/wordlist/gb-ise',
    zip: '**/*',
  },
  {
    url: 'https://master.dl.sourceforge.net/project/wordlist/speller/2020.12.07/wordlist-en_GB-large-2020.12.07.zip?viasf=1',
    local: 'reference/scowl/wordlist/gb-large',
    zip: '**/*',
  },

  // AGID
  {
    url: 'https://master.dl.sourceforge.net/project/wordlist/AGID/2016.01.19/agid-2016.01.19.zip?viasf=1',
    local: 'reference/scowl/agid',
    rename: (name) => name.replace('agid-2016.01.19/', empty),
    zip: '**/*',
  },
  //#endregion
  //#region SSA
  {
    url: 'https://www.ssa.gov/oact/babynames/names.zip',
    local: 'reference/ssa/',
    zip: '*.txt',
  },
  //#endregion
  //#region Tex
  // LaTeX hyphenation patterns
  {
    url: 'https://mirrors.mit.edu/CTAN/language/hyph-utf8/tex/patterns/tex/hyph-en-us.tex',
    local: 'reference/ctan/hyph-en-us.tex',
    banner: '%',
  },
  //#endregion
  //#region Unicode
  // Unicode
  {
    url: 'https://www.unicode.org/L2/L1999/UnicodeData.html',
    local: 'reference/unicode/unicode-data.html',
    banner: '<!->',
  },
  {
    url: 'https://www.unicode.org/license.txt',
    local: 'reference/unicode/license.txt',
    banner: '#',
  },
  {
    url: 'https://www.unicode.org/Public/UCD/latest/ucd/UnicodeData.txt',
    local: 'reference/unicode/unicode-data.txt',
  },
  // https://www.unicode.org/Public/UCD/latest/ucd/UCD.zip
  // https://www.unicode.org/Public/UCD/latest/ucdxml/ucd.all.flat.zip
  //#endregion
  //#region UK
  {
    url: 'https://www.nrscotland.gov.uk/media/hlmdqoat/full-list-1974-2024.zip',
    local: 'reference/uk/baby',
    zip: '**/*',
  },
  {
    url: 'https://www.nrscotland.gov.uk/media/q1epi2ni/full-list-2024.xlsx',
    local: 'reference/uk/baby/full-list-2024.xlsx',
  },
  {
    url: 'https://www.nrscotland.gov.uk/media/uijhxulq/most-common-surnames-bmd-register-2024.xlsx',
    local: 'reference/uk/most-common-surnames-bmd-register-2024.xlsx',
  },
  //#endregion UK
  //#region WHAT
  {
    url: 'https://wolfberg.net/what/NWL18defs.exe',
    local: 'reference/what',
    zip: '**/*',
  },
  {
    url: 'https://wolfberg.net/what/CSW19defs.exe',
    local: 'reference/what',
    zip: '**/*',
  },
  {
    url: 'https://wolfberg.net/what/CSWdefs.exe',
    local: 'reference/what',
    zip: '**/*',
  },
  {
    url: 'https://wolfberg.net/what/OWL3defs.exe',
    local: 'reference/what',
    zip: '**/*',
  },
  {
    url: 'https://wolfberg.net/what/OWLdefs.exe',
    local: 'reference/what',
    zip: '**/*',
  },
  {
    url: 'https://wolfberg.net/what/TWLdefs.exe',
    local: 'reference/what',
    zip: '**/*',
  },
  //#endregion
  //#region Wordnet
  // Open English Wordnet
  {
    url: 'https://en-word.net/static/english-wordnet-2024.zip',
    local: 'reference/wordnet/english-wordnet',
    rename: (name) => name.replace('oewn2024/', ''),
    zip: '**/*',
  },
  //#endregion
  //#region words
  {
    url: 'https://github.com/words/afinn-96/archive/refs/heads/main.zip',
    local: 'reference/words/afinn-96',
    zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/*.txt'],
    rename: (name) => name.replace(/.*?\//, empty),
  },
  {
    url: 'https://github.com/words/afinn-111/archive/refs/heads/main.zip',
    local: 'reference/words/afinn-111',
    zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/*.txt'],
    rename: (name) => name.replace(/.*?\//, empty),
  },
  {
    url: 'https://github.com/words/afinn-165/archive/refs/heads/main.zip',
    local: 'reference/words/afinn-165',
    zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/*.txt'],
    rename: (name) => name.replace(/.*?\//, empty),
  },
  {
    url: 'https://github.com/words/an-array-of-english-words/archive/refs/heads/master.zip',
    local: 'reference/words/an-array-of-english-words',
    zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/*.txt'],
    rename: (name) => name.replace(/.*?\//, empty),
  },
  {
    url: 'https://github.com/words/an-array-of-french-words/archive/refs/heads/master.zip',
    local: 'reference/words/an-array-of-french-words',
    zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/*.txt'],
    rename: (name) => name.replace(/.*?\//, empty),
  },
  {
    url: 'https://github.com/words/an-array-of-spanish-words/archive/refs/heads/master.zip',
    local: 'reference/words/an-array-of-spanish-words',
    zip: ['*/readme.md', '*/license', "*/*.js", '*/*.json', '*/*.txt'],
    rename: (name) => name.replace(/.*?\//, empty),
  },
  {
    url: 'https://github.com/words/automated-readability/archive/refs/heads/main.zip',
    local: 'reference/words/automated-readability',
    zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/*.txt'],
    rename: (name) => name.replace(/.*?\//, empty),
  },
  {
    url: 'https://github.com/words/brill/archive/refs/heads/main.zip',
    local: 'reference/words/brill',
    zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/*.txt'],
    rename: (name) => name.replace(/.*?\//, empty),
  },
  {
    url: 'https://github.com/words/buzzwords/archive/refs/heads/main.zip',
    local: 'reference/words/buzzwords',
    zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/*.txt'],
    rename: (name) => name.replace(/.*?\//, empty),
  },
  {
    url: 'https://github.com/words/cmu-pronouncing-dictionary/archive/refs/heads/master.zip',
    local: 'reference/words/cmu-pronouncing-dictionary',
    zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/*.txt'],
    rename: (name) => name.replace(/.*?\//, empty),
  },
  {
    url: 'https://github.com/words/coleman-liau/archive/refs/heads/main.zip',
    local: 'reference/words/coleman-liau',
    zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/*.txt'],
    rename: (name) => name.replace(/.*?\//, empty),
  },
  {
    url: 'https://github.com/words/color-description/archive/refs/heads/main.zip',
    local: 'reference/words/color-description',
    zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/*.txt'],
    rename: (name) => name.replace(/.*?\//, empty),
  },
  {
    url: 'https://github.com/words/cuss/archive/refs/heads/main.zip',
    local: 'reference/words/cuss',
    zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/*.txt'],
    rename: (name) => name.replace(/.*?\//, empty),
  },
  {
    url: 'https://github.com/words/dale-chall/archive/refs/heads/main.zip',
    local: 'reference/words/dale-chall',
    zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/*.txt'],
    rename: (name) => name.replace(/.*?\//, empty),
  },
  {
    url: 'https://github.com/words/dale-chall-formula/archive/refs/heads/main.zip',
    local: 'reference/words/dale-chall-formula',
    zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/*.txt'],
    rename: (name) => name.replace(/.*?\//, empty),
  },
  {
    url: 'https://github.com/words/emoji-emotion/archive/refs/heads/main.zip',
    local: 'reference/words/emoji-emotion',
    zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/*.txt'],
    rename: (name) => name.replace(/.*?\//, empty),
  },
  {
    url: 'https://github.com/words/english-anagrams/archive/refs/heads/master.zip',
    local: 'reference/words/english-anagrams',
    zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
    rename: (name) => name.replace(/.*?\//, empty),
  },
  {
    url: 'https://github.com/words/fillers/archive/refs/heads/master.zip',
    local: 'reference/words/fillers',
    zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
    rename: (name) => name.replace(/.*?\//, empty),
  },
  {
    url: 'https://github.com/words/flesch/archive/refs/heads/main.zip',
    local: 'reference/words/flesch',
    zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
    rename: (name) => name.replace(/.*?\//, empty),
  },
  {
    url: 'https://github.com/words/flesch-kincaid/archive/refs/heads/main.zip',
    local: 'reference/words/flesch-kincaid',
    zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
    rename: (name) => name.replace(/.*?\//, empty),
  },
  {
    url: 'https://github.com/words/google-did-you-mean/archive/refs/heads/master.zip',
    local: 'reference/words/google-did-you-mean',
    zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
    rename: (name) => name.replace(/.*?\//, empty),
  },
  {
    url: 'https://github.com/words/gunning-fog/archive/refs/heads/main.zip',
    local: 'reference/words/gunning-fog',
    zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
    rename: (name) => name.replace(/.*?\//, empty),
  },
  {
    url: 'https://github.com/words/hedges/archive/refs/heads/main.zip',
    local: 'reference/words/hedges',
    zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
    rename: (name) => name.replace(/.*?\//, empty),
  },
  {
    url: 'https://github.com/words/levenmorpher/archive/refs/heads/master.zip',
    local: 'reference/words/levenmorpher',
    zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
    rename: (name) => name.replace(/.*?\//, empty),
  },
  {
    url: 'https://github.com/words/ologies/archive/refs/heads/master.zip',
    local: 'reference/words/ologies',
    zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
    rename: (name) => name.replace(/.*?\//, empty),
  },
  {
    url: 'https://github.com/words/polarity/archive/refs/heads/main.zip',
    local: 'reference/words/polarity',
    zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
    rename: (name) => name.replace(/.*?\//, empty),
  },
  {
    url: 'https://github.com/words/powerthesaurus-api/archive/refs/heads/master.zip',
    local: 'reference/words/powerthesaurus-api',
    zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
    rename: (name) => name.replace(/.*?\//, empty),
  },
  {
    url: 'https://github.com/words/profanities/archive/refs/heads/main.zip',
    local: 'reference/words/profanities',
    zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
    rename: (name) => name.replace(/.*?\//, empty),
  },
  {
    url: 'https://github.com/words/rhymes/archive/refs/heads/master.zip',
    local: 'reference/words/rhymes',
    zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
    rename: (name) => name.replace(/.*?\//, empty),
  },
  {
    url: 'https://github.com/words/russian-given-names/archive/refs/heads/master.zip',
    local: 'reference/words/russian-given-names',
    zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
    rename: (name) => name.replace(/.*?\//, empty),
  },
  {
    url: 'https://github.com/words/similar-english-words/archive/refs/heads/master.zip',
    local: 'reference/words/similar-english-words',
    zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
    rename: (name) => name.replace(/.*?\//, empty),
  },
  {
    url: 'https://github.com/words/smog-formula/archive/refs/heads/master.zip',
    local: 'reference/words/smog-formula',
    zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
    rename: (name) => name.replace(/.*?\//, empty),
  },
  {
    url: 'https://github.com/words/spache/archive/refs/heads/master.zip',
    local: 'reference/words/spache',
    zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
    rename: (name) => name.replace(/.*?\//, empty),
  },
  {
    url: 'https://github.com/words/spache-formula/archive/refs/heads/master.zip',
    local: 'reference/words/spache-formula',
    zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
    rename: (name) => name.replace(/.*?\//, empty),
  },
  {
    url: 'https://github.com/words/subtlex-word-frequencies/archive/refs/heads/master.zip',
    local: 'reference/words/subtlex-word-frequencies',
    zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
    rename: (name) => name.replace(/.*?\//, empty),
  },
  {
    url: 'https://github.com/words/tree-names/archive/refs/heads/master.zip',
    local: 'reference/words/tree-names',
    zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
    rename: (name) => name.replace(/.*?\//, empty),
  },
  {
    url: 'https://github.com/words/weasels/archive/refs/heads/main.zip',
    local: 'reference/words/weasels',
    zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
    rename: (name) => name.replace(/.*?\//, empty),
  },
  {
    url: 'https://github.com/words/wordnet/archive/refs/heads/master.zip',
    local: 'reference/words/wordnet',
    zip: ['*/readme.md', '*/license', '*/*.js', '*/*.json', '*/.txt'],
    rename: (name) => name.replace(/.*?\//, empty),
  },
  //#endregion
  //#region Breider-Morse
  {
    url: 'https://stevemorse.org/phonetics/bmver315.zip',
    local: 'reference/breider-morse',
    zip: '**/*',
  },
  //#endregion
  //#region SUBTLEXus
  {
    url: 'https://www.ugent.be/pp/experimentele-psychologie/en/research/documents/subtlexus/subtlexus2.zip',
    local: 'reference/subtlexus',
    zip: '**/*',
  },
  {
    url: 'https://www.ugent.be/pp/experimentele-psychologie/en/research/documents/subtlexus/subtlexus5.zip',
    local: 'reference/subtlexus',
    zip: '**/*',
  },
  {
    url: 'https://www.ugent.be/pp/experimentele-psychologie/en/research/documents/subtlexus',
    local: 'reference/subtlexus/index.html',
    banner: '<!->',
  },
  {
    url: 'https://www.ugent.be/pp/experimentele-psychologie/en/research/documents/subtlexus/subtlexus1.zip',
    local: 'reference/subtlexus',
    zip: '**/*',
  },
  //#endregion
  //#region openlexicon
  {
    url: 'https://github.com/chrplr/openlexicon/raw/refs/heads/master/README.md',
    local: 'reference/openlexicon/README.md',
    banner: 'md',
  },
  //#endregion
  //#region fasttag
  {
    url: 'https://github.com/mark-watson/fasttag_v2/archive/refs/heads/master.zip',
    local: 'reference/fasttag',
    zip: '**/*',
    rename: (name) => name.replace(/.*?\//, empty),
  },
  //#endregion
];
