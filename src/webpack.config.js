const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')

//const routes = require('./client/routes')

const ENVIRONMENT = process.env.NODE_ENV || 'development';
const isDebug = (ENVIRONMENT !== 'production');
console.log(`ENVIRONMENT = ${ENVIRONMENT}`);

const server = {
  name: 'server',
	target: 'node',
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
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
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
              discardComments: { removeAll: !isDebug }
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

/*const entry = {};
for (let i = 0; i < routes.length; i += 1) {
  if (routes[i].container) {
    entry[routes[i].componentName] = [
      './client/index.js',
      `./client/${routes[i].componentName}.jsx`,
    ]
  }
}*/

const client  = {
  name: 'client',
	target: 'web',
  entry: './client/index.js',
	//entry,
  output: {
    path: path.resolve(__dirname, 'public/js/'),
    filename: 'bundle.js',
		chunkFilename: '[name].js',
  },
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: ['babel-loader']
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
              discardComments: { removeAll: !isDebug }
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
	/*optimization: {
		splitChunks: {
			cacheGroups: {
				default: false,
				commons: {
					test: /\.jsx?$/,
          chunks: 'all',
          name: 'common'
				}
			}
		}
	},*/
  plugins: [].concat(!isDebug ? [
    new UglifyJsPlugin()
  ] : [])
};

module.exports = [ server, client ];
