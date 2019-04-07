const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack.config')

module.exports = (env, argv) => {
  const config = webpack(env, argv)

  return merge(config, {
    devServer: {
      proxy: {
        '/api': 'http://localhost:9000'
      }
    },
    resolve: {
      modules: [
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'src', 'components'),
        path.resolve(__dirname, 'src', 'styles'),
        path.resolve(__dirname, 'src', 'utils'),
        'node_modules'
      ],
      extensions: ['.js', '.json']
    }
  })
}