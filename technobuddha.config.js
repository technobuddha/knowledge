//@ts-check
import { remotes } from './remotes.config.js';

/** @type import("\@technobuddha/project").TechnobuddhaConfig */
const config = {
  lint: {
    rules: {
      'unicorn/no-thenable': { rule: 'off' },
      'unicorn/text-encoding-identifier-case': { rule: 'off' },
    }
  },
  remotes,
};

export default config;
