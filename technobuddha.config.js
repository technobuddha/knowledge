//@ts-check
import { remotes } from './remotes.config.js';

/** @type import("\@technobuddha/project").TechnobuddhaConfig */
const config = {
  directories: {
    reference: {
      environment: 'none',
    },
    scripts: {
      tsconfig: {
        references: ['./src'],
      },
    },
  },
  lint: {
    rules: {
      'unicorn/no-thenable': { rule: 'off' },
      'unicorn/text-encoding-identifier-case': { rule: 'off' },
    }
  },
  remotes,
};

export default config;
