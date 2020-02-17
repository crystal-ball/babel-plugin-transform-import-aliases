module.exports = {
  root: true,
  extends: 'eloquence/node',

  overrides: [
    {
      files: ['*.spec.js'],
      parserOptions: {
        // TODO: setup Babel
        sourceType: 'script',
      },
    },
  ],
}
