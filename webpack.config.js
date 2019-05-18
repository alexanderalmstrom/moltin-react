const webpack = require("webpack");
const merge = require("webpack-merge");
const webpackConfig = require("webpack.config");
const dotenv = require("dotenv-webpack");

module.exports = (env, argv) => {
  const config = webpackConfig(env, argv);

  return merge(config, {
    node: {
      fs: "empty",
    },

    devServer: {
      hot: true,
    },

    plugins: [
      new dotenv(),
      new webpack.DefinePlugin({
        "process.env.MOLTIN_CLIENT_ID": JSON.stringify(process.env.MOLTIN_CLIENT_ID),
        "process.env.CONTENTFUL_SPACE_ID": JSON.stringify(process.env.CONTENTFUL_SPACE_ID),
        "process.env.CONTENTFUL_ACCESS_TOKEN": JSON.stringify(process.env.CONTENTFUL_ACCESS_TOKEN),
        "process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN": JSON.stringify(process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN),
      })
    ]
  });
};