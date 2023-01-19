export default {
  preset: 'ts-jest',
  rootDir: './test',
  testMatch: ['./**/*.ts'],
  testEnvironment: 'node',
  resetMocks: true,
  clearMocks: true,
}
