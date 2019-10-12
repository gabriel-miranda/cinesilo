require('dotenv').config();
const withOffline = require('next-offline');

const path = require('path');
const Dotenv = require('dotenv-webpack');

const nextConfig = {
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];

    return config;
  },
};

module.exports = withOffline(nextConfig);
