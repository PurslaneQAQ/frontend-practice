const config = {
  verbose: true,
};

module.exports = config;

// Or async function
module.exports = async () => ({
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|svg|png|jpg|jpeg)$': '<rootDir>/__mocks__/fileMock.ts',
  },
});
