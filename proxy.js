const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});
const server = http.createServer((req, res) => {
  proxy.web(req, res, { target: 'http://localhost:3000' });
});

server.listen(8080, () => { console.log('Proxy server listening on port 8080'); });
