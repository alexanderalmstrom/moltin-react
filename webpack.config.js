const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackConfig = require('webpack.config')
const dotenv = require('dotenv-webpack')

module.exports = (env, argv) => {
  const config = webpackConfig(env, argv)

  return merge(config, {
    node: {
      fs: 'empty'
    },

    devServer: {
      proxy: {
        '/api': 'http://localhost:9000'
      }
    },

    resolve: {
      modules: [
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'src', 'scripts'),
        path.resolve(__dirname, 'src', 'styles'),
        path.resolve(__dirname, 'src', 'services'),
        path.resolve(__dirname, 'src', 'utils'),
        'node_modules'
      ],
      extensions: ['.js', '.json', '.scss']
    },

    plugins: [
      new dotenv(),
      new webpack.DefinePlugin({
        'process.env.MOLTIN_CLIENT_ID': JSON.stringify(process.env.MOLTIN_CLIENT_ID)
      })
    ]
  })
}