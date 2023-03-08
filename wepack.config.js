const path = require('path');

module.exports = {
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      compress: false,
      port: 3000,
      proxy: {
        '/api': {
          target: 'http://localhost:8080/movietime/',
          pathRewrite: { '^/api': '' },
        },
      }
    },
  };