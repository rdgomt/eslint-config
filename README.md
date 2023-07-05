## Setup

1. Install the dependencies

```
yarn add -D eslint @rdgomt/eslint-config
```

2. Create a ```.eslintrc``` file extending the config:

```
{
  "extends": "@rocketseat/eslint-config/react"
  // "extends": "@rocketseat/eslint-config" for node apps
}
```

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
