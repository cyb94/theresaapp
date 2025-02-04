// jest.config.js
module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js|ts|tsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  setupFiles: ['./jest.setup.js'], // Add this if you want a custom setup file.
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|@react-navigation))',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/build/'],
};
