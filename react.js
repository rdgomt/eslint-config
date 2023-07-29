module.exports = {
  env: {
    node: false,
    browser: true,
  },
  extends: [
    "plugin:storybook/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "./index.js",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    project: "tsconfig.json",
    sourceType: "module",
  },
  overrides: [
    {
      files: ["App.tsx", "app.tsx"],
      rules: {
        "react/jsx-max-depth": "off",
      },
    },
    {
      files: ["*.styles.tsx", "*.styles.ts"],
      rules: {
        "max-lines": "off",
        "react/no-multi-comp": "off",
      },
    },
    {
      files: ["*.stories.tsx"],
      rules: {
        "max-lines": "off",
        "react/function-component-definition": "off",
        "react/no-array-index-key": "off",
        "react/no-multi-comp": "off",
        "react-native/no-color-literals": "off",
      },
    },
  ],
  plugins: ["react-hooks", "react-native", "react-perf"],
  rules: {
    "@typescript-eslint/no-floating-promises": "off",
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "never",
        groups: [
          "/^react/",
          "module",
          "/^@/",
          "/^~/",
          ["parent", "sibling", "index"],
        ],
        alphabetize: {
          order: "asc",
          ignoreCase: true,
        },
      },
    ],
    "max-lines-per-function": [
      "warn",
      {
        max: 100,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    "react/boolean-prop-naming": [
      "warn", // react/boolean-prop-naming is not working at the moment
      {
        rule: "^(is|has|should)[A-Z]([A-Za-z0-9]?)+",
        validateNested: true,
        propTypeNames: ["bool", "boolean"],
      },
    ],
    "react/destructuring-assignment": [
      "warn",
      "always",
      { destructureInSignature: "always" },
    ],
    "react/function-component-definition": [
      "warn",
      {
        namedComponents: "function-declaration",
      },
    ],
    "react/jsx-boolean-value": ["warn", "never"],
    "react/jsx-fragments": ["warn"],
    "react/jsx-key": "warn",
    "react/jsx-max-depth": ["warn", { max: 4 }],
    "react/jsx-no-constructed-context-values": "warn",
    "react/jsx-no-leaked-render": ["warn"],
    "react/jsx-no-useless-fragment": "off",
    "react/jsx-pascal-case": [
      "warn",
      {
        allowLeadingUnderscore: false,
      },
    ],
    "react/jsx-wrap-multilines": [
      "warn",
      {
        declaration: "parens",
        assignment: "parens",
        return: "parens",
        arrow: "parens",
        condition: "parens",
        logical: "parens",
        prop: "parens",
      },
    ],
    "react/no-array-index-key": "warn",
    "react/no-multi-comp": "warn",
    "react/no-unescaped-entities": "off",
    "react/no-unstable-nested-components": ["warn"],
    "react/self-closing-comp": [
      "warn",
      {
        component: true,
        html: true,
      },
    ],
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-native/no-color-literals": "warn",
    "react-native/no-inline-styles": "warn",
    "react-native/no-raw-text": "off",
    "react-native/no-single-element-style-arrays": "warn",
    "react-native/no-unused-styles": "warn",
    "react-native/split-platform-components": "warn",
    "react-perf/jsx-no-jsx-as-prop": "warn",
    "react-perf/jsx-no-new-array-as-prop": "warn",
    "react-perf/jsx-no-new-function-as-prop": "warn",
    "react-perf/jsx-no-new-object-as-prop": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
