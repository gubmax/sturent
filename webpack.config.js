const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')

const routes = require('./src/client/routes')

const ENVIRONMENT = process.env.NODE_ENV || 'development'
const isDebug = (ENVIRONMENT !== 'production')

console.log(`ENVIRONMENT = ${ENVIRONMENT}`)

// Server
const server = {
    mode: isDebug ? 'development' : 'production',
    name: 'server',
    devtool: isDebug ? 'eval' : false,
    target: 'node',
    bail: !isDebug,
    entry: './src/server/index.js',
    output: {
        path: path.resolve(__dirname, 'src/server/bundle'),
        filename: 'bundle.node.js',
        libraryTarget: 'commonjs2',
    },
    node: {
        __dirname: false,
    },
    resolve: {
        extensions: ['.js', '.jsx', 'json'],
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: 'babel-loader?retainLines=true',
        },
        {
            test: /\.s?css$/,
            exclude: /node_modules/,
            use: [
                'isomorphic-style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        modules: true,
                        localIdentName: isDebug ? '[name]__[local]--[hash:base64:4]' : '[hash:base64:4]',
                        minimize: !isDebug,
                        discardComments: {
                            removeAll: !isDebug,
                        },
                    },
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        config: {
                            path: './postcss.config.js',
                        },
                    },
                },
            ],
        },
        ],
    },
    externals: [
        nodeExternals(),
    ],
    plugins: [].concat(!isDebug ? [
        new UglifyJsPlugin(),
    ] : []),
}

// Client
const entry = {}
for (let i = 0; i < routes.length; i += 1) {
    entry[`pages/${routes[i].componentName}`] = [
        './src/client/index.js',
        `./src/client/pages/${routes[i].componentName}/${routes[i].componentName}.jsx`,
    ]
}

const client = {
    mode: isDebug ? 'development' : 'production',
    name: 'client',
    target: 'web',
    cache: isDebug,
    devtool: isDebug ? 'cheap-module-source-map' : 'hidden-source-map',
    context: __dirname,
    // entry: './src/client/index.js',
    entry,
    output: {
        path: path.resolve(__dirname, 'src/public/js'),
        publicPath: '/js/',
        filename: '[name].bundle.js',
        chunkFilename: '[name].js',
    },
    resolve: {
        extensions: ['.js', '.jsx', 'json'],
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                cacheDirectory: isDebug,
                babelrc: false,
                presets: [
                    '@babel/env',
                    '@babel/preset-react',
                ],
                plugins: [
                    '@babel/plugin-transform-runtime',
                    '@babel/plugin-syntax-dynamic-import',
                    '@babel/plugin-proposal-class-properties',
                ].concat(!isDebug ? [
                    '@babel/plugin-transform-react-inline-elements',
                ] : []),
            },
        },
        {
            test: /\.s?css$/,
            exclude: /node_modules/,
            use: [
                'isomorphic-style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        modules: true,
                        localIdentName: isDebug ? '[name]__[local]--[hash:base64:4]' : '[hash:base64:4]',
                        minimize: !isDebug,
                        discardComments: {
                            removeAll: !isDebug,
                        },
                    },
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        config: {
                            path: './postcss.config.js',
                        },
                    },
                },
            ],
        },
        ],
    },
    optimization: {
        minimize: !isDebug,
        runtimeChunk: { name: 'common' },
        splitChunks: {
            cacheGroups: {
                default: false,
                commons: {
                    test: /\.jsx?$/,
                    chunks: 'all',
                    minChunks: 2,
                    name: 'common',
                    enforce: true,
                    maxAsyncRequests: 1,
                    maxInitialRequests: 1,
                },
            },
        },
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin(),
    ].concat(!isDebug ? [
        new UglifyJsPlugin(),
    ] : []),
}

module.exports = [server, client]
