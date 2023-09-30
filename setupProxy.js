// const { createProxyMiddleware } = require('http-proxy-middleware');

// console.log('Proxy middleware is being executed.');

// module.exports = function (app) {
//   // Forward requests to the Spring Boot server
//   app.use(
//     '/user',  // Specify the path that should trigger the proxy
//     createProxyMiddleware({
//       target: 'http://127.0.0.1:8080',  // URL of your Spring Boot server
//       changeOrigin: true,  // Changes the "Origin" header to match the target URL
//     })
//   );
// };
