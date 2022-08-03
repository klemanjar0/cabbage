import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  preset: 'jest-expo',
  globalTeardown: './test-teardown-globals.js',
  setupFiles: ['<rootDir>/jest/setup.js'],
  collectCoverageFrom: [
    '**/src/**/*.{js,jsx,ts,tsx}',
    'App.tsx',
    '!**/node_modules/**',
    '!**/jest/**',
    '!**/src/**/*.styles.{js,jsx}',
    '!**/src/**/*.style.{js,jsx}',
    '!**/src/**/*.labels.{js,jsx}',
    '!**/src/**/*.label.{js,jsx}',
    '!**/src/**/*.stories.{js,jsx}',
    '!**/src/**/*{Styles}.{js,jsx}',
  ],
};

export default config;
