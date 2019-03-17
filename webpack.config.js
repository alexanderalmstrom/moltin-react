const merge = require('webpack-merge')
const webpack = require('webpack.config')

module.exports = (env, argv) => {
  const config = webpack(env, argv)

  return merge(config, {
    devServer: {
      proxy: {
        '/api': 'http://localhost:9000'
      }
    }
  })
}