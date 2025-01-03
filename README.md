## Setup

1. Install the dependencies

```
yarn add -D eslint prettier @rdgomt/eslint-config
```

2. Create a `.eslintrc` file extending the config:

```
{
  "extends": "@rdgomt/eslint-config/react"
  // "extends": "@rdgomt/eslint-config" for node apps
}
```

3. Add `"strictNullChecks": true` to `compilerOptions` inside `tsconfig.json` to take advantage of all typescript rules.

## What is included?

- prettier
- @typescript/eslint
- sonarjs
- unicorn
- import-helpers
- unused-imports
- typescript-sort-keys
- @react-native-community
- storybook
- react/jsx-runtime
- @tanstack/eslint-plugin-query
- react-perf
- eslint-plugin-etc
- eslint-plugin-check-file
- eslint-plugin-promise
- eslint-plugin-security
- eslint-plugin-tailwindcss
