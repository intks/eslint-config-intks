const allExtensions = ['.ts', '.tsx', '.d.ts', '.js', '.jsx', '.json'];

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['react', '@typescript-eslint', 'eslint-plugin-import', 'unused-imports'],
  rules: {
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
      },
    ],
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    // TODO: Refactor all warning at this rule
    '@typescript-eslint/no-unsafe-enum-comparison': 'warn',
    // '@typescript-eslint/no-use-before-define': [
    //     'error',
    //     {
    //         functions: false,
    //         classes: true,
    //         variables: true,
    //         typedefs: false,
    //         ignoreTypeReferences: true,
    //     },
    // ],
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    // TODO: discuss naming convention rules
    // '@typescript-eslint/naming-convention': [
    //     'error',
    //     {
    //         selector: 'enum',
    //         format: null,
    //         custom: {
    //             regex: '^[A-Z][A-Z0-9]*(__?[A-Z0-9]+)*$',
    //             match: true,
    //         },
    //     },
    // ],
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    'no-restricted-imports': [
      'warn',
      {
        name: 'react',
        importNames: ['default'],
        message: "use import { xxx } from 'react'; instead",
      },
    ],
    'consistent-return': 'off',
    'no-irregular-whitespace': [
      'warn',
      {
        skipStrings: true,
        skipTemplates: true,
      },
    ],
    eqeqeq: ['error', 'always'],
    // TODO: discuss dependencies check
    // 'import/no-extraneous-dependencies': [
    //     'error',
    //     {
    //         devDependencies: [
    //             '**/*.test.{js,jsx,ts,tsx}',
    //             '**/*.stories.{js,jsx,ts,tsx}',
    //             '**/rollup.config.js',
    //         ],
    //         peerDependencies: true,
    //         packageDir,
    //     },
    // ],
    'import/prefer-default-export': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], ['internal'], ['parent', 'sibling', 'index']],
        pathGroups: [
          {
            pattern: '{react*,react*/**}',
            group: 'builtin',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/namespace': 'warn',
    'import/no-named-as-default-member': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/extensions': allExtensions,
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      node: {
        extensions: allExtensions,
        moduleDirectory: ['src', 'node_modules'],
      },
    },
  },
  ignorePatterns: [
    'dist',
    'build',
    'node_modules',
    'coverage',
    '*.config.js',
    '*.config.ts',
    '*.d.ts',
    'public',
    '.next',
    'out',
  ],
};
