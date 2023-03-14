const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  /**
   *
   * @param {import('webpack').Configuration} config
   * @returns {import('webpack').Configuration}
   */
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'components',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Button': './components/Button.jsx',
          './MovieCard': './components/MovieCard.jsx',
        },
      })
    );
    return config;
  },
};
