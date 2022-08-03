import type { Config } from 'jest';
import { defaults } from 'jest-config';

const config: Config = {
  ...defaults,
  fakeTimers: {
    ...defaults.fakeTimers,
    enableGlobally: false,
  },
  verbose: true,
  preset: 'jest-expo',
  rootDir: '.',
  setupFiles: ['<rootDir>/jest/setup.js'],
  transformIgnorePatterns: ['!node_modules/react-runtime'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/babel.config.js',
    '!**/jest.setup.js',
    '!**/jest.config.ts',
    '!**/.eslintrc.js',
  ],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
};

export default config;
