module.exports = {
  env: {
    es2022: true,
    node: true,
  },
  extends: [
    "eslint:all",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/strict",
    "plugin:eslint-comments/recommended",
    "plugin:security/recommended",
    "plugin:sonarjs/recommended",
    "plugin:unicorn/all",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["node_modules", "build", "dist", "mocks", "coverage"],
  overrides: [
    {
      files: ["*.spec.ts", "*.test.ts"],
      rules: {
        "max-lines": "off",
        "max-lines-per-function": "off",
        "no-magic-numbers": "off",
        "no-new": "off",
      },
    },
    {
      files: ["*.presenter.ts", "*-presenter.ts"],
      rules: {
        "perfectionist/sort-objects": "off",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    project: "tsconfig.json",
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "etc",
    "check-file",
    "import-helpers",
    "promise",
    "sonarjs",
    "typescript-sort-keys",
    "unicorn",
    "unused-imports",
  ],
  root: true,
  rules: {
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/naming-convention": [
      "off",
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: true,
        },
      },
    ],
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-shadow": ["warn"],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        args: "after-used",
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/prefer-optional-chain": "warn",
    "capitalized-comments": "off",
    "check-file/folder-naming-convention": [
      "error",
      {
        "src/*": "KEBAB_CASE",
      },
    ],
    "class-methods-use-this": "off",
    "comma-dangle": "off",
    "consistent-return": "off",
    curly: ["warn"],
    "default-param-last": "warn",
    "dot-notation": "warn",
    eqeqeq: "warn",
    "eslint-comments/disable-enable-pair": "off",
    "eslint-comments/no-unused-disable": "warn",
    "etc/no-assign-mutated-array": "warn",
    "etc/no-commented-out-code": "warn",
    "etc/no-const-enum": "warn",
    "etc/no-deprecated": "warn",
    "etc/no-implicit-any-catch": "warn",
    "etc/no-internal": "warn",
    "etc/no-t": "off",
    "etc/throw-error": "warn",
    "func-name-matching": "warn",
    "func-style": "off",
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "never",
        groups: ["module", "/^@/", "/^~/", ["parent", "sibling", "index"]],
        alphabetize: {
          order: "asc",
          ignoreCase: true,
        },
      },
    ],
    "id-length": [
      "warn",
      {
        min: 2,
        exceptions: ["_", "a", "b", "x", "y"],
      },
    ],
    "init-declarations": "off",
    "line-comment-position": "off",
    "lines-between-class-members": "off",
    "max-depth": [
      "warn",
      {
        max: 2,
      },
    ],
    "max-lines": [
      "warn",
      {
        max: 100,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    "max-params": ["warn", 4],
    "multiline-comment-style": "off",
    "new-cap": "off",
    "no-console": "off",
    "no-else-return": "warn",
    "no-extra-boolean-cast": "warn",
    "no-implicit-coercion": "warn",
    "no-inline-comments": "off",
    "no-lonely-if": "warn",
    "no-magic-numbers": [
      "warn",
      {
        enforceConst: true,
        detectObjects: false,
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
        ignoreClassFieldInitialValues: true,
        ignore: [-1, 0, 0.5, 1, 2, 3, 100],
      },
    ],
    "no-param-reassign": "error",
    "no-plusplus": ["off", { allowForLoopAfterthoughts: true }],
    "no-return-assign": "warn",
    "no-shadow": "off",
    "no-ternary": "off",
    "no-undef": "off",
    "no-undefined": "off",
    "no-underscore-dangle": "off",
    "no-unneeded-ternary": "warn",
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
        enforceForJSX: true,
      },
    ],
    "no-use-before-define": "off",
    "no-useless-constructor": "off",
    "no-useless-return": "warn",
    "no-warning-comments": "off",
    "object-shorthand": "warn",
    "one-var": "off",
    "padding-line-between-statements": [
      "warn",
      {
        blankLine: "always",
        prev: ["multiline-block-like", "const", "let", "var"],
        next: "*",
      },
      {
        blankLine: "always",
        prev: "*",
        next: ["multiline-block-like", "return", "throw"],
      },
      {
        blankLine: "never",
        prev: ["singleline-const", "singleline-let", "singleline-var"],
        next: ["singleline-const", "singleline-let", "singleline-var"],
      },
      {
        blankLine: "always",
        prev: ["multiline-const", "multiline-let", "multiline-var"],
        next: ["multiline-const", "multiline-let", "multiline-var"],
      },
    ],
    "prefer-destructuring": "warn",
    "prefer-named-capture-group": "off",
    "prefer-template": "warn",
    "prettier/prettier": "off",
    "promise/always-return": "warn",
    "promise/catch-or-return": "warn",
    "promise/no-callback-in-promise": "warn",
    "promise/no-nesting": "warn",
    "promise/no-new-statics": "warn",
    "promise/no-promise-in-callback": "warn",
    "promise/no-return-in-finally": "warn",
    "promise/no-return-wrap": "warn",
    "promise/param-names": "warn",
    "promise/valid-params": "warn",
    radix: ["error", "as-needed"],
    "require-await": "off",
    "require-unicode-regexp": "off",
    "security/detect-object-injection": "off",
    semi: "off",
    "sonarjs/no-duplicate-string": "warn",
    "sonarjs/no-inverted-boolean-check": "warn",
    "sort-imports": "off",
    "sort-keys": "off",
    "spaced-comment": "off",
    "unicorn/custom-error-definition": "off",
    "unicorn/no-keyword-prefix": "off",
    "unicorn/no-nested-ternary": "off",
    "unicorn/no-null": "off",
    "unicorn/no-static-only-class": "off",
    "unicorn/no-useless-undefined": "off",
    "unicorn/numeric-separators-style": "warn",
    "unicorn/prefer-dom-node-dataset": "off",
    "unicorn/prefer-logical-operator-over-ternary": "warn",
    "unicorn/prefer-module": "off",
    "unicorn/prevent-abbreviations": [
      "warn",
      {
        ignore: [
          "\\.prod|dev$",
          "args",
          "env",
          "Env",
          "e2e",
          "fn",
          "Fn",
          "lib",
          "Lib",
          "obj",
          "Obj",
          "params",
          "Params",
          "props",
          "Props",
          "Prop",
          "ref",
          "Ref",
          "temp",
          "Temp",
        ],
      },
    ],
    "unused-imports/no-unused-imports-ts": "warn",
    "unused-imports/no-unused-vars": "off",
    "typescript-sort-keys/interface": "off",
    "typescript-sort-keys/string-enum": "warn",

    // evaluate better:
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/unbound-method": "off",
  },
  settings: {
    "import/parsers": {
      [require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
    },
    "import/resolver": {
      typescript: {
        project: "./tsconfig.json",
      },
    },
  },
};
