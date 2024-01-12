const webpack = require('webpack');

require('dotenv').config();

module.exports = (config, options, context) => {
  config.plugins.push(new webpack.DefinePlugin({
    'process.env': Object.keys(process.env).reduce((env, key) => {
      env[key] = JSON.stringify(process.env[key]);
      return env;
    }, {}),
  }));
  config.plugins.push(new webpack.EnvironmentPlugin([
    'NINJAS_API_URL', 'NINJAS_API_KEY', 'OPENWEATHER_API_URL', 'OPENWEATHER_API_KEY'
  ]));
  return config;
};
