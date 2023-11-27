module.exports = {
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'jest-environment-jsdom',
    // testEnvironment: 'node',
    // testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '\\.(css|less)$': '<rootDir>/__mocks__/primeicons/primeicons.css',
    },
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testMatch: ['**/__tests__/**/*.test.(js|jsx|ts|tsx)'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json',
        },
    },
};