var webpack = require('webpack');
module.exports = {
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            webpackConfig.optimization.runtimeChunk = false;
            webpackConfig.optimization.splitChunks = {
                cacheGroups: {
                    default: false
                }
            };
            return webpackConfig;
        }

    },
    devServer: (devServerConfig, { env, paths, proxy, allowedHost }) => {
        devServerConfig = {
            disableHostCheck: true,
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }
        return devServerConfig;
    },
    plugins: [
        {
            plugin: {
                overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions, context: { env, paths } }) => {
                    webpackConfig.optimization.runtimeChunk = false;
                    webpackConfig.optimization.splitChunks = {
                        cacheGroups: {
                            default: false
                        }
                    };
                    return webpackConfig;
                }
            }
        }
    ]
};