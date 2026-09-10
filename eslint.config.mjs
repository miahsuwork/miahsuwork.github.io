import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default [
  ...nextCoreWebVitals,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    languageOptions: {
      globals: {
        JSX: 'readonly',
      },
    },
    rules: {
      'space-before-function-paren': 'off',
      'no-unused-vars': 'off',
      'import/no-anonymous-default-export': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'jsx-quotes': ['warn', 'prefer-single'],
      '@typescript-eslint/no-explicit-any': ['error'],
      'no-console': 'warn',
    },
  },
];
