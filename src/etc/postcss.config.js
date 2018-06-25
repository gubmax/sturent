module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      stage: 0,
      browsers: 'last 5 versions',
      autoprefixer: 'last 5 versions',
    },
  }
}
