module.exports = {
  env: {
    node: false,
    es2022: true,
  },
  extends: [
    "@react-native-community",
    "plugin:storybook/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "./index.js",
  ],
  plugins: ["react-perf", "unicorn", "@tanstack/query"],
  rules: {
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
    "react/jsx-key": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "react-native/no-inline-styles": "warn",
    "react-native/sort-styles": "warn",
    "react-perf/jsx-no-jsx-as-prop": "warn",
    "react-perf/jsx-no-new-array-as-prop": "warn",
    "react-perf/jsx-no-new-function-as-prop": "warn",
    "react-perf/jsx-no-new-object-as-prop": "warn",
  },
};
