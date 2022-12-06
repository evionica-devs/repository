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

  rules: {
    // Globals
    "no-prototype-builtins": "warn",
    "no-extend-native":      "error",

    // Complexity
    "complexity":              [ "error", 13 ],
    "max-depth":               [ "error", 6 ],
    "max-nested-callbacks":    [ "error", 4 ],
    "max-lines":               [ "warn", { max: 400, skipBlankLines: true, skipComments: true } ],
    "max-statements":          [ "error", 20 ],
    "max-statements-per-line": [ "error", { "max": 2 } ],
    "max-params":              [ "error", 3 ],

    // Statement security
    "import/no-duplicates":                    "error",
    "no-shadow":                               "off",
    "@typescript-eslint/no-shadow":            "error",
    "no-unreachable-loop":                     "error",
    "no-use-before-define":                    "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        functions: false,
        classes:   true,
        variables: true,
        enums:     true,
        typedefs:  true,
      },
    ],
    "one-var-declaration-per-line": [ "error", "always" ],
    "id-length":                    [ "warn", { min: 3, exceptions: [ "e", "t" ]} ],
    "@typescript-eslint/no-dynamic-delete": "warn",

    // EcmaScript
    "@typescript-eslint/prefer-regexp-exec": "warn",
    "@typescript-eslint/prefer-string-starts-ends-with": "warn",

    // Loop statements
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/prefer-for-of": "warn",
    "no-loop-func": "off",
    "@typescript-eslint/no-loop-func": "warn",

    // Conditional statements
    "no-else-return":    "error",
    "no-lonely-if":      "error",
    "no-nested-ternary": "error",
    "@typescript-eslint/no-unnecessary-condition": "warn",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/non-nullable-type-assertion-style": "error",
    "@typescript-eslint/switch-exhaustiveness-check": "error",

    // Arrays
    "@typescript-eslint/prefer-includes": "warn",
    "array-callback-return": [
      "error",
      {
        allowImplicit: false,
        checkForEach:  true,
      },
    ],
    "@typescript-eslint/prefer-reduce-type-parameter": "error",
    "@typescript-eslint/require-array-sort-compare": "error",
    "no-array-constructor": "off",
    "@typescript-eslint/no-array-constructor": "error",

    // Functions
    "no-extra-bind":      "error",
    "no-empty-function":  "error",
    "no-new-func":        "error",
    "no-useless-call":    "error",
    "no-useless-return":  "error",
    "require-yield":      "error",
    "arrow-body-style":   [ "error", "as-needed" ],
    "default-param-last": "off",
    "@typescript-eslint/default-param-last": "error",
    "func-name-matching": "error",
    "func-style":         [
      "error",
      "declaration",
      { allowArrowFunctions: true },
    ],
    "prefer-rest-params": "error",
    "sort-vars":          "error",
    "wrap-iife":          [ "error", "inside" ],
    "@typescript-eslint/explicit-function-return-type": ["warn"],
    "@typescript-eslint/method-signature-style": ["error", "method"],
    "@typescript-eslint/prefer-function-type": "warn",
    "@typescript-eslint/prefer-readonly-parameter-types": "warn",

    // Objects & Classes
    "no-new-object":                      "error",
    "new-parens":                         "error",
    "no-constructor-return":              "error",
    "no-unused-private-class-members":    "error",
    "class-methods-use-this":             "warn",
    "max-classes-per-file":               [ "error", 1 ],
    "new-cap":                            [ "error", { newIsCap: true, capIsNew: true } ],
    "no-invalid-this":                    "off",
    "@typescript-eslint/no-invalid-this": "error",
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "error",
    "object-shorthand":                   [ "error", "always" ],
    "dot-notation": "off",
    "@typescript-eslint/dot-notation": [ "error", { allowKeywords: false } ],
    "sort-keys":                          [
      "error",
      "asc",
      { caseSensitive: true, natural: false, minKeys: 5 },
    ],
    "prefer-destructuring":     [ "error", { object: true, array: false } ],
    "prefer-object-spread":     "error",
    "quote-props":              [ "error", "consistent" ],
    "grouped-accessor-pairs":   [ "error", "getBeforeSet" ],
    "newline-per-chained-call": [ "error", { "ignoreChainWithDepth": 2 } ],
    "@typescript-eslint/explicit-member-accessibility": ["error", { accessibility: 'explicit' }],
    "@typescript-eslint/no-base-to-string": "error",
    "@typescript-eslint/no-extraneous-class": ["error", { allowWithDecorator: true }],
    "@typescript-eslint/parameter-properties": "warn",
    "@typescript-eslint/prefer-readonly": "warn",
    "@typescript-eslint/prefer-return-this-type": "warn",
    "@typescript-eslint/unbound-method": "error",
    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": "error",

    // Async
    "no-await-in-loop":           "warn",
    "no-promise-executor-return": "error",
    "require-atomic-updates":     [ "error", { allowProperties: false } ],
    "no-return-await": "off",
    "@typescript-eslint/return-await": "error",
    "require-await": "off",
    "@typescript-eslint/require-await": "warn",
    "@typescript-eslint/no-floating-promises": ["error", { ignoreIIFE: false }],
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/promise-function-async": "error",

    // Modules
    "no-useless-rename": "error",
    "@typescript-eslint/consistent-type-exports": ["error", { fixMixedExportsWithInlineTypeSpecifier: false }],
    "@typescript-eslint/consistent-type-imports": ["error", {
      prefer: 'type-imports',
      fixStyle: 'separate-type-imports',
      disallowTypeAnnotations: true,
    }],
    "@typescript-eslint/explicit-module-boundary-types": ["error", {
      allowArgumentsExplicitlyTypedAsAny: false,
      allowDirectConstAssertionInArrowFunctions: true,
      allowHigherOrderFunctions: true,
      allowTypedFunctionExpressions: true,
      allowedNames: [],
    }],
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-useless-empty-export": "error",

    // Expressions
    "no-constant-binary-expression":                      "error",
    "no-self-compare":                                    "error",
    "no-template-curly-in-string":                        "error",
    "eqeqeq":                                             [ "error", "always" ],
    "no-eval":                                            "error",
    "no-multi-str":                                       "error",
    "prefer-template":                                    "error",
    "logical-assignment-operators":                       [ "error", "never" ],
    "@typescript-eslint/consistent-generic-constructors": [ "error", "constructor" ],
    "@typescript-eslint/no-confusing-non-null-assertion": "error",
    "@typescript-eslint/no-confusing-void-expression": "error",
    "@typescript-eslint/no-meaningless-void-operator": "error",
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "warn",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/restrict-template-expressions": "error",
    "@typescript-eslint/strict-boolean-expressions": [
      "warn",
      {
        allowString: true,
        allowNumber: true,
        allowNullableObject: true,
        allowNullableBoolean: false,
        allowNullableString: false,
        allowNullableNumber: false,
        allowAny: false,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
      },
    ],

    // Types
    "@typescript-eslint/no-invalid-void-type": "error",
    "@typescript-eslint/no-redundant-type-constituents": "error",
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/prefer-ts-expect-error": "error",
    "@typescript-eslint/sort-type-constituents": "error",
    // Any protection
    "@typescript-eslint/no-unsafe-argument": "error",
    "@typescript-eslint/no-unsafe-assignment": "error",
    "@typescript-eslint/no-unsafe-call": "error",
    "@typescript-eslint/no-unsafe-member-access": "error",
    "@typescript-eslint/no-unsafe-return": "error",
    // Enums
    "@typescript-eslint/no-duplicate-enum-values": "error",
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/prefer-enum-initializers": "error",
    "@typescript-eslint/prefer-literal-enum-member": "error",


    // Dangerous
    "no-alert":             "error",
    "no-caller":            "error",
    "no-sequences":         "error",
    "no-var":               "error",
    "no-void":              "error",
    "@typescript-eslint/no-unsafe-declaration-merging": "error",
    "no-implied-eval": "off",
    "@typescript-eslint/no-implied-eval": "error",


    // Code smells
    "no-magic-numbers": "off",
    "@typescript-eslint/no-magic-numbers": [ "warn", { ignoreArrayIndexes: true } ],
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary:      true,
      },
    ],
    // Maybe as error?
    "prefer-const":                      "warn",
    "@typescript-eslint/ban-ts-comment": [ "error", { "ts-expect-error": "allow-with-description" } ],
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": "error",
    "no-throw-literal": "off",
    "@typescript-eslint/no-throw-literal": "error",

    // Comments
    "multiline-comment-style": [ "error", "starred-block" ],
    "spaced-comment":          [ "error", "always", { "markers": ["/"] } ],
    "capitalized-comments":    [
      "error",
      "always",
      {
        ignorePattern:        "pragma|ignored",
        ignoreInlineComments: true,
      },
    ],
    "line-comment-position": [ "error", { "position": "above" } ],
    "lines-around-comment":  [
      "error",
      {
        "beforeBlockComment": true,
        "afterBlockComment":  false,
        "beforeLineComment":  false,
        "afterLineComment":   false,
      },
    ],

    // Format & style
    "camelcase": [
      "error",
      {
        properties:          "always",
        ignoreDestructuring: false,
        ignoreImports:       false,
        ignoreGlobals:       false,
        allow:               [],
      },
    ],
    "default-case-last": "error",
    "max-len":           [
      "error",
      {
        code:          100,
        tabWidth:      2,
        ignoreStrings: true,
      },
    ],
    "dot-location": [ "error", "property" ],
    "indent": "off",
    "@typescript-eslint/indent": [
      "error",
      2,
      {
        "SwitchCase":               1,
        "MemberExpression":         1,
        "FunctionDeclaration":      { "parameters": "first" },
        "FunctionExpression":       { "parameters": "first" },
        "CallExpression":           { "arguments": "first" },
        "ArrayExpression":          "first",
        "ObjectExpression":         "first",
        "ImportDeclaration":        "first",
        "flatTernaryExpressions":   false,
        "offsetTernaryExpressions": true,
        "ignoreComments":           false,
      },
    ],
    "quotes": "off",
    "@typescript-eslint/quotes": [
      "error",
      "double",
      { "avoidEscape": true, "allowTemplateLiterals": true },
    ],
    "semi": "off",
    "@typescript-eslint/semi": [ "error", "never" ],
    "semi-style":                    [ "error", "first" ],
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/member-ordering": ["error", {
      default: {
        memberTypes: [["signature", "field"], "static-initialization", "constructor", ["get", "set"], "method"],
        optionalityOrder: "required-first",
        order: "alphabetically-case-insensitive"
      }
    }],

    // Braces
    "curly":                [ "error", "all" ],
    "brace-style":          "off",
    "@typescript-eslint/brace-style": [ "error", "1tbs" ],
    "object-curly-newline": [ "error", { "multiline": true } ],

    // Parenthesis
    "arrow-parens": [ "error", "always" ],

    // Spacing
    "no-multi-spaces": "error",
    "keyword-spacing": "off",
    "@typescript-eslint/keyword-spacing": [
      "error",
      {
        "overrides": {
          "if":     { before: true, after: true },
          "for":    { after: true },
          "while":  { after: true },
          "static": { after: true },
          "await":  { after: true },
        },
      },
    ],
    "block-spacing":         "error",
    "array-bracket-spacing": [
      "error",
      "always",
      { arraysInArrays: false },
    ],
    "arrow-spacing":        [ "error", { "before": true, "after": true } ],
    "space-in-parens":      [ "error", "never" ],
    "object-curly-spacing": "off",
    "@typescript-eslint/object-curly-spacing": [
      "error",
      "always",
      { "arraysInObjects": false, "objectsInObjects": false },
    ],
    "comma-spacing": "off",
    "@typescript-eslint/comma-spacing": [ "error", { "before": false, "after": true } ],
    "computed-property-spacing":      [ "error", "never" ],
    "func-call-spacing": "off",
    "@typescript-eslint/func-call-spacing": [ "error", "never" ],
    "function-call-argument-newline": [ "error", "consistent" ],
    "generator-star-spacing":         [ "error", { "before": true, "after": false } ],
    "yield-star-spacing":             [ "error", "after" ],
    "key-spacing":                    [ "error", { "beforeColon": false, "afterColon": true, "align": "value" } ],
    "no-trailing-spaces":             [ "error", { "ignoreComments": true } ],
    "no-whitespace-before-property":  "error",
    "rest-spread-spacing":            [ "error", "never" ],
    "space-before-blocks": "off",
    "@typescript-eslint/space-before-blocks": "error",
    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": [ "error", "never" ],
    "space-unary-ops":                [ "error", { "words": true, "nonwords": false } ],
    "switch-colon-spacing":           [ "error", { "after": true, "before": false } ],
    "template-curly-spacing":         [ "error", "never" ],
    "template-tag-spacing":           [ "error", "never" ],
    "@typescript-eslint/type-annotation-spacing": ["error", {
      before: false,
      after: true,
      overrides: {
        arrow: {
          before: true,
          after: true
        }
      }
    }],

    // Commas
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": [
      "error",
      {
        "arrays":    "always-multiline",
        "objects":   "always-multiline",
        "imports":   "never",
        "exports":   "never",
        "functions": "never",
      },
    ],
    "comma-style": [ "error", "last" ],
    "@typescript-eslint/member-delimiter-style": ["error", {
      multiline: {
        delimiter: "none",
        requireLast: true
      },
      singleline: {
        delimiter: "semi",
        requireLast: false
      },
      multilineDetection: "brackets"
    }],

    // Newlines
    "array-bracket-newline":       [ "error", { multiline: true, minItems: 3 } ],
    "array-element-newline":       [ "error", { multiline: true, minItems: 3 } ],
    "function-paren-newline":      [ "error", { minItems: 3 } ],
    "implicit-arrow-linebreak":    [ "error", "beside" ],
    "lines-between-class-members": "off",
    "@typescript-eslint/lines-between-class-members": [
      "error",
      "always",
      { "exceptAfterSingleLine": true },
    ],
    "no-multiple-empty-lines":         "error",
    "operator-linebreak":              [ "error", "before" ],
    "padding-line-between-statements": "off",
    "@typescript-eslint/padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "var", next: "return" },
      { blankLine: "always", prev: "block-like", next: "*" },
      { blankLine: "always", prev: "break", next: "*" },
      { blankLine: "always", prev: "*", next: "class" },
      { blankLine: "always", prev: "directive", next: "*" },
      { blankLine: "always", prev: "export", next: "*" },
      { blankLine: "always", prev: "iife", next: "*" },
      { blankLine: "always", prev: "*", next: "iife" },
      { blankLine: "always", prev: "try", next: "*" },
      { blankLine: "always", prev: [ "case", "default" ], next: "*" },
    ],
  },
}
