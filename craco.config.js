var webpack = require('webpack');

module.exports = {
  webpack: {
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      })
    ],
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.optimization.runtimeChunk = false;
      webpackConfig.output.filename = 'static/js/[name].js';
      return webpackConfig;
    }
  },
  devServer: (devServerConfig, { env, paths, proxy, allowedHost }) => {
    devServerConfig = {
      disableHostCheck: true,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    };
    return devServerConfig;
  }
};
