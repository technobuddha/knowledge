//@ts-check

/** @type import('\@technobuddha/project/build').Builds */
const config = {
  default: {
    watch: true,
    steps: [
      {
        name: 'Prepare',
        command: 'rm -rf dist',
      },
      {
        name: 'Moby Constitution',
        command: ['npx tsx ./scripts/moby/constitution.ts',
          'npx tsc ./src/@data/moby-constitution.ts'],
      },
      {
        name: 'Moby Crosswords',
        command: 'npx tsx ./scripts/moby/crosswords.ts',
      },
      {
        name: 'Moby Frequency',
        command: 'npx tsx ./scripts/moby/frequency.ts',
      },
      {
        name: 'Moby Hyphenation',
        command: 'npx tsx ./scripts/moby/hyphenation.ts',
      },
      {
        name: 'Moby Language',
        command: 'npx tsx ./scripts/moby/language.ts',
      },
      {
        name: 'Moby Parts of Speech',
        command: 'npx tsx ./scripts/moby/parts-of-speech.ts',
      },
      {
        name: 'Moby Pronunciation',
        command: 'npx tsx ./scripts/moby/pronounce.ts',
      },
      {
        name: 'Moby Shakespeare',
        command: 'npx tsx ./scripts/moby/shakespeare.ts',
      },
      {
        name: 'Moby Substring',
        command: 'npx tsx ./scripts/moby/substring.ts',
      },
      {
        name: 'Moby Thesaurus',
        command: 'npx tsx ./scripts/moby/thesaurus.ts',
      },
      {
        name: 'Moby Words',
        command: 'npx tsx ./scripts/moby/words.ts',
      },
      {
        name: 'CMU',
        command: 'npx tsx ./scripts/cmu/cmu.ts',
      },
      {
        name: 'Names',
        command: 'npx tsx ./scripts/names/names.ts',
      },
      {
        name: 'FSD OTCWL',
        command: 'npx tsx ./scripts/freescrabbledictionary/otcwl.ts',
      },
      {
        name: 'Unicode Data',
        command: 'npx tsx ./scripts/unicode/unicode.ts',
      },
      {
        name: 'Romanization',
        command: 'npx tsx ./scripts/romanization/anyascii.ts',
      },
      {
        name: 'Compile',
        directory: './src',
        command: 'npx tsc -p src',
      },
      // {
      //   name: 'Documentation',
      //   command: 'npx tsx ./scripts/moby/exception-list.ts',
      // }
    ],
  },
  prod: {
    steps: [{ build: 'default' }]
  },
  publish: {
    steps: [
      { build: 'default' },
      {
        name: 'Version',
        command: 'yarn version prerelease',
      },
      {
        name: 'Publish',
        command: 'yarn npm publish --access=public',
      }
    ]
  }
};

export default config;
