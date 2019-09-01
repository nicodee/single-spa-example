module.exports = function override(config) {
  config.optimization.runtimeChunk = false;
  config.optimization.splitChunks = {
    cacheGroups: {
      default: false
    }
  };

  config.devServer = {
    ...config.devServer,
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  }
  return config;
};