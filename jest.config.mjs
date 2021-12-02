const jestConfig = {
  moduleNameMapper: {
    '^src/(.*)$': ['<rootDir>/src/$1'],
  },
};

export default jestConfig;
