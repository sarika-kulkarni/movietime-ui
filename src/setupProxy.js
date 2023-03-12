const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  console.log('setting up proxy');
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: false,
      pathRewrite: {
        "^/api": "/movietime"
      },
      onProxyReq: (proxyReq, req, res) => {
        console.log('setting header before proxying request');
        proxyReq.setHeader('Content-Type', 'application/json');
      }
    })
  );
  // app.onProxyReq((proxyReq, req, res) => {
  //   console.log('setting header before proxying request');
  //   proxyReq.setHeader('Content-Type', 'application/json');
  // });
};