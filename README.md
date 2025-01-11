# eslint-config-intks

[![npm version](https://img.shields.io/npm/v/eslint-config-intks?style=flat-square)](https://www.npmjs.com/package/eslint-config-intks)

A shareable ESLint configuration package that enforces consistent code style and best practices across JavaScript/TypeScript projects.

## Features

- React & React Hooks best practices
- Accessibility (jsx-a11y) rules
- Import sorting and organization
- Dead code elimination
- Unused imports detection
- Consistent code formatting with Prettier
- Common JavaScript best practices

## What's Inside?

This configuration includes carefully selected rules and plugins:

### Configurations & Plugins

| Category | Package | Description |
|----------|---------|-------------|
| **Core** | `eslint:recommended` | ESLint's recommended rules |
| | `prettier` | Formatting rules that work with Prettier |
| **TypeScript** | `@typescript-eslint/recommended` | Recommended TypeScript rules |
| | `@typescript-eslint/parser` | TypeScript parser with modern ECMAScript support |
| **React** | `plugin:react/recommended` | React recommended rules |
| | `plugin:react/jsx-runtime` | Support for React 17+ JSX transform |
| | `plugin:react-hooks/recommended` | React Hooks rules |
| **Accessibility** | `plugin:jsx-a11y/recommended` | Web accessibility rules |
| **Imports** | `plugin:import/errors` | Import statement validation |
| | `plugin:import/warnings` | Import warnings |
| | `plugin:import/typescript` | TypeScript import resolution |
| | `unused-imports` | Dead code elimination |


## Installation

Using npm:
```sh
npm install --save-dev eslint eslint-config-intks @babel/core @babel/eslint-parser
```

Using yarn:
```sh
yarn add -D eslint eslint-config-intks @babel/core @babel/eslint-parser
```

## Usage

### Basic Setup

Add the following to your `.eslintrc.js` or `.eslintrc.json`:

```js
module.exports = {
  extends: 'eslint-config-intks',
};
```

### With TypeScript

For TypeScript projects, ensure you have the following dependencies installed:

```sh
npm install --save-dev typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

Then update your `.eslintrc.js`:

```js
module.exports = {
  extends: 'eslint-config-intks',
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
};
```

### Customizing Rules

You can customize the configuration by creating a `.eslintrc.js` file in your project root:

```js
module.exports = {
  extends: 'eslint-config-intks',
  rules: {
    // Override rules
    'no-console': 'warn',
    'react/prop-types': 'off',
    
    // Add custom rules
    '@typescript-eslint/explicit-function-return-type': 'error',
  },
};
```
