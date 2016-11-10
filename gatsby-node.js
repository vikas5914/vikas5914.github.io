exports.modifyWebpackConfig = function(config, env) {
  if (env === 'build-javascript') {
    config.merge({
      devtool: 'hidden-source-map'
    });
  }
  return config
}