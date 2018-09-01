const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require('path')

const routes = require('./client/routes')

const ENVIRONMENT = process.env.NODE_ENV || 'development';
const isDebug = (ENVIRONMENT !== 'production');
console.log(`ENVIRONMENT = ${ENVIRONMENT}`);

// Server
const server = {
  mode: isDebug ? 'development' : 'production',
  name: 'server',
  devtool: isDebug ? 'eval' : false,
  target: 'node',
  bail: !isDebug,
  entry: './server/index.js',
  output: {
    path: path.resolve(__dirname, 'server/bundle/'),
    filename: 'bundle.node.js',
    libraryTarget: 'commonjs2'
  },
  node: {
    __dirname: false
  },
  module: {
    rules: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader?retainLines=true'
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
                removeAll: !isDebug
              }
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.join(__dirname, 'etc/postcss.config.js')
              }
            }
          }
        ]
      }
    ]
  },
  externals: [
    nodeExternals()
  ],
  plugins: [].concat(!isDebug ? [
    new UglifyJsPlugin()
  ] : [])
};

// Client
const entry = {};
for (let i = 0; i < routes.length; i += 1) {
  entry['pages/' + routes[i].componentName] = [
    './client/index.js',
    `./client/pages/${routes[i].componentName}/${routes[i].componentName}.jsx`,
  ]
}

const client = {
  mode: isDebug ? 'development' : 'production',
  name: 'client',
  target: 'web',
  cache: isDebug,
  devtool: isDebug ? 'cheap-module-source-map' : 'hidden-source-map',
  context: __dirname,
  //entry: './client/index.js',
  entry,
  output: {
    path: path.resolve(__dirname, './public/js/'),
    publicPath: '/js/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].js'
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
            'es2015',
            'es2017',
            'react',
            'stage-0',
            'stage-3',
          ],
          plugins: [
            'transform-runtime',
            'syntax-dynamic-import',
          ]
        }
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
                removeAll: !isDebug
              }
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.join(__dirname, 'etc/postcss.config.js')
              }
            }
          }
        ]
      }
    ]
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
    new BundleAnalyzerPlugin()
  ].concat(!isDebug ? [
    new UglifyJsPlugin()
  ] : [])
};

module.exports = [server, client];
