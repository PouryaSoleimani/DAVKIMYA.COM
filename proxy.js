const http = require('http');
const httpProxy = require('http-proxy');

// Create a proxy server that forwards requests to your Next.js app
const proxy = httpProxy.createProxyServer({});

// Create an HTTP server that listens on port 80
const server = http.createServer((req, res) => {
  // Forward incoming requests to your Next.js app running on port 3000
  proxy.web(req, res, { target: 'http://localhost:3000' });
});

// Listen on port 80 (the default HTTP port)
server.listen(80, () => {
  console.log('Proxy server listening on port 80');
});
