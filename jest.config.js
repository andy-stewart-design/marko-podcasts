export default {
  projects: [
    {
      displayName: "server",
      preset: "@marko/jest/preset/node",
      testEnvironment: "node",
      testRegex: "/tests/[^.]+\\.server\\.js$",
    },
    {
      displayName: "browser",
      preset: "@marko/jest/preset/browser",
      testEnvironment: "jsdom",
      testRegex: "/tests/[^.]+\\.browser\\.js$",
    },
  ],
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
};
