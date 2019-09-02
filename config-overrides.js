var webpack = require('webpack');

module.exports = function override(config) {
  config.plugins = [
    ...config.plugins,
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    })
  ];

  config.optimization.runtimeChunk = false;
  config.output.filename = 'static/js/[name].js';
  config.plugins[5].options.filename = 'static/css/[name].css';
  return config;
};
