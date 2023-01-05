module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['react-app', 'react-app/jest', 'airbnb-typescript', 'prettier'],
  plugins: ['json-format', 'simple-import-sort'],
  parserOptions: {
    project: './tsconfig.json',
    createDefaultProgram: true,
  },
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/extensions': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    '@typescript-eslint/no-unused-vars':
      process.env.NODE_ENV === 'production' ? 'error' : 'warn',
  },
  ignorePatterns: [
    '**/__generated__/**/*',
    '**/dist/**/*',
    '.eslintrc.js',
    'cz-config.js',
  ],
};
