import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  coverageDirectory: './coverage',
  collectCoverageFrom: [
    'src/**/*.{ts}',
  ],
  testEnvironment: 'node',
  rootDir: './',
  roots: [
    '<rootDir>/src/'
  ],
  moduleFileExtensions: [
    'ts',
    'js'
  ],
  transform: {
    '^.+\\.(ts)$': 'ts-jest'
  },
  testMatch: [
    './**/*.spec.ts'
  ],
  testPathIgnorePatterns: [
    './node_modules/',
    './dist/',
  ],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json'
    }
  },
  clearMocks: true
};

export default config;
