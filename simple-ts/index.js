const pluginJs = require('@eslint/js');
const auto = require('eslint-config-canonical/configurations/auto.js');
const globals = require('globals');
const tseslint = require('typescript-eslint');

module.exports = [
  ...auto,
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@/lines-between-class-members': [
        'error',
        'always',
        { exceptAfterSingleLine: true },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          format: ['camelCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
          selector: 'variable',
        },
        {
          format: ['camelCase'],
          leadingUnderscore: 'allow',
          selector: 'function',
        },
        {
          format: ['PascalCase'],
          selector: 'typeLike',
        },
      ],
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'no-console': 'warn',
      'no-param-reassign': 'warn',
    },
  },
];