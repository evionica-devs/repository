require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,

  env: {
    "node":                      true,
    "browser":                   true,
  },

  ignorePatterns: [
    "dist/**/*",
    "coverage/**/*",
    "public/**/*",
    "tests/stubs/**/*",
    "docs/dist/**/*",
    "tsconfig.json",
    "types/**/*",
  ],

  parser: require.resolve("@typescript-eslint/parser"),

  parserOptions: {
    ecmaVersion:         2022,
    project: ['./tsconfig.json'],
  },

  plugins: [
    "@typescript-eslint",
    "import",
  ],

  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],

  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [
        ".ts",
        ".tsx",
        ".mts",
        ".cts",
      ],
    },
    "import/resolver": {
      typescript: { alwaysTryTypes: true },
      node:       true,
    },
  },
}
