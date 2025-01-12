# eslint-config-intks

[![npm version](https://img.shields.io/npm/v/eslint-config-intks?style=flat-square)](https://www.npmjs.com/package/eslint-config-intks)

A shareable ESLint configuration package that enforces consistent code style and best practices across JavaScript/TypeScript projects.

## Features

- Airbnb style guide integration
- TypeScript support
- React & React Hooks best practices
- Accessibility (jsx-a11y) rules
- Import sorting and organization
- Consistent code formatting with Prettier
- Common JavaScript/TypeScript best practices

## What's Inside?

This configuration includes carefully selected rules and plugins:

### Configurations & Plugins

| Category | Package | Description |
|----------|---------|-------------|
| **Base** | `eslint-config-airbnb` | Airbnb's ESLint config with React support |
| **Core** | `@typescript-eslint/parser` | TypeScript parser |
| | `@typescript-eslint/eslint-plugin` | TypeScript linting rules |
| **React** | `plugin:react/recommended` | React recommended rules |
| | `plugin:react-hooks/recommended` | React Hooks rules |
| **Accessibility** | `plugin:jsx-a11y/recommended` | Web accessibility rules |
| **Imports** | `plugin:import/recommended` | Import statement validation |
| | `plugin:import/typescript` | TypeScript import resolution |
| **Formatting** | `prettier` | Code formatting rules |

## Installation

Using npm:
```sh
npm install --save-dev eslint typescript eslint-config-intks
```

Using yarn:
```sh
yarn add -D eslint typescript eslint-config-intks
```

## Usage

### Basic Setup

Add the following to your `.eslintrc.js` or `.eslintrc.json`:

```js
module.exports = {
  extends: 'eslint-config-intks',
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
    '@typescript-eslint/no-explicit-any': 'error',
  },
};
```

## Key Rules Included

- TypeScript strict checking
- React hooks rules enforcement
- Import sorting and organization
- Accessibility guidelines
- Console logging warnings
- Consistent code style with Airbnb guidelines

## Requirements

- Node.js >= 14
- ESLint >= 8
- TypeScript >= 4

## License

MIT
