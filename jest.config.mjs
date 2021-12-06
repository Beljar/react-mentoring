const jestConfig = {
  moduleNameMapper: {
    '^src/(.*)$': ['<rootDir>/src/$1'],
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
};

export default jestConfig;
