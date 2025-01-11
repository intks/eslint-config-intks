# eslint-config-intks

A shareable ESLint configuration package that enforces consistent code style and best practices across JavaScript/TypeScript projects.


## Features

- TypeScript support
- React & React Hooks best practices
- Accessibility (jsx-a11y) rules
- Import sorting and organization
- Unused imports detection
- Prettier compatibility

## Installation

use npm
```sh
npm install --save-dev eslint eslint-config-intks @babel/core @babel/eslint-parser
```

use yarn
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

### Customizing

You can customize the configuration by creating a `.eslintrc.js` file in your project root.

```js
module.exports = {
  extends: 'eslint-config-intks',
  rules: {
    // Add your custom rules here
  },
};
```
