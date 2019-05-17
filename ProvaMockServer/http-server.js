
const http = require('http');
const httpProxy = require('http-proxy');

const hostname = '127.0.0.1';
const port = 3000;

const proxy = httpProxy.createProxyServer();


// Proxy per tutte le request verso la porta 3000
const server = http.createServer((req, res) => {

  try {
    proxy.web(req, res, {
      target: 'http://localhost:3001'
    });

  } catch (e) {
    console.log(e);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


