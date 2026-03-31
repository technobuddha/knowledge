//@ts-check
/** @type import("\@technobuddha/project").TechnobuddhaConfig */
const config = {
  directories: {
    src: {
      environment: 'node',
    },
    reference: {
      environment: 'none',
    },
    // scripts: {
    //   tsconfig: {
    //     references: ['./src'],
    //   },
    // },
  },
  lint: {
    rules: {
      'unicorn/no-thenable': { rule: 'off' },
      'unicorn/text-encoding-identifier-case': { rule: 'off' },
    }
  },
};

export default config;
