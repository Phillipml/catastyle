import storybook from 'eslint-plugin-storybook'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from '@typescript-eslint/eslint-plugin'
import tseslintParser from '@typescript-eslint/parser'
import prettierConfig from 'eslint-config-prettier'

export default [
  {
    ignores: ['dist','storybook-static']
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      parser: tseslintParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      storybook: storybook
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ],
      'no-unused-vars': 'off', 
      ...storybook.configs.recommended.rules
    }
  },
  prettierConfig
]
