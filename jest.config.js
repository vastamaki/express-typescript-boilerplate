/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  roots: ["<rootDir>"],
  modulePaths: ["<rootDir>", "<rootDir>/src"],
  moduleDirectories: ["node_modules"],
};
