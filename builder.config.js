// 🚨
// 🚨 CHANGES TO THIS FILE WILL BE OVERRIDDEN
// 🚨
//@ts-check

/** @type import('\@technobuddha/project/build').Builds */
const config = {
  default: {
    watch: true,
    steps: [
      {
        name: 'Moby',
        command: 'npx tsx ./scripts/make-moby.ts',
      },
      {
        name: 'Compile',
        directory: './src',
        command: 'npx tsc --build src',
      }
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
