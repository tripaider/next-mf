const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'components',
          filename: 'static/chunks/remoteEntry.js',
          exposes: {
            "./Button": "./components/Button.jsx",
            "./MovieCard": "./components/MovieCard.jsx"
          },
        }),
      );
    }
    return config;
  },
};
