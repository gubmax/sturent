module.exports = {
    plugins: {
        'postcss-import': {},
        'postcss-color-mod-function': {},
        stylelint: {
            configFilefigFile: './stylelintrc',
        },
        'postcss-preset-env': {
            stage: 0,
            browsers: 'last 5 versions',
            autoprefixer: 'last 5 versions',
        },
    },
}
