// 🚨
// 🚨 CHANGES TO THIS FILE WILL BE OVERRIDDEN
// 🚨
// @ts-check
import { app } from '@technobuddha/project';

/** @type import('eslint').Linter.Config[] */
const config = [
  { ignores: ['coverage', 'dist'] },
  // .
  app.lint({ files: ['*.config.js'], ignores: [], environment: 'node' }),
  // .
  app.lint({
    files: ['*.config.ts', '*.setup.ts'],
    ignores: [],
    environment: 'node',
    tsConfig: 'tsconfig.json',
  }),
  // migrations
  app.lint({
    files: ['migrations/**/*.ts'],
    ignores: [],
    environment: 'node',
    tsConfig: 'migrations/tsconfig.json',
  }),
  // reference/words/color-description
  app.lint({
    files: ['reference/words/color-description/*.config.js'],
    ignores: [],
    environment: 'node',
  }),
  // reference/words/google-did-you-mean
  app.lint({
    files: ['reference/words/google-did-you-mean/*.config.js'],
    ignores: [],
    environment: 'node',
  }),
  // scripts
  app.lint({
    files: ['scripts/**/*.ts'],
    ignores: [],
    environment: 'node',
    tsConfig: 'scripts/tsconfig.json',
  }),
  // src/__tests__
  app.lint({
    files: ['src/__tests__/**/*.test.ts'],
    ignores: [],
    environment: 'node',
    tsConfig: 'src/__tests__/tsconfig.json',
    jest: true,
  }),
  // src
  app.lint({
    files: ['src/**/*.ts'],
    ignores: ['src/__tests__/**/*'],
    environment: 'node',
    tsConfig: 'src/tsconfig.json',
  }),
];

export default config;
