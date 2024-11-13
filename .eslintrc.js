module.exports = {
  extends: ['expo', 'prettier'],
  ignorePatterns: ['node_modules/**', 'dist/**'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
      },
    ],
  },
};
