module.exports = {
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  collectCoverageFrom: [
    'src/**/*.{js,ts,tsx}',
    // no need to test type files
    '!src/global.d.ts',
    // or stories
    '!src/**/*.stories.tsx',
    // or data / mocks
    '!src/**/mock.ts',
    '!src/**/data.ts',
    // or these "css" files
    '!src/styles/colors.ts',
    '!src/styles/fonts.ts',
    '!src/styles/global.ts',
    '!src/styles/media.ts',
  ],
}
