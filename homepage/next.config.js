const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'home',
          filename: 'static/chunks/remoteEntry.js',
          remotes: {
            components: "components@http//localhost:3001/.next/static/chunks/remoteEntry.js"
          }
        }),
      );
    }
    return config;
  },
};
