module.exports = {
    plugins: {
        'postcss-import': {},
        'postcss-color-mod-function': {},
        'postcss-preset-env': {
            stage: 0,
            browsers: 'last 5 versions',
            autoprefixer: 'last 5 versions',
        },
        stylelint: {
            configFilefigFile: './stylelintrc',
        },
    },
}
