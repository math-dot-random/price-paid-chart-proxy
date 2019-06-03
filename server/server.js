const app = require('./serverapp.js');
const port = 2999;
const http = require('http');
const proxy = require('http-proxy');


// pricePaidServer= proxy.createProxyServer({target:'http://127.0.0.1:3111'});

// pricePaidServer.listen(port, () => console.log(`I am server.js and I am listening on port ${port}`));
app.listen(port, () => console.log(`I am server.js and I am listening on port ${port}`))

// server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.write('Proxy Request was Successful!' + '\n' + JSON.stringify(req.headers, true, 2));
//   res.end();
// });

// proxyServer.listen(port, () => console.log(`I am server.js and I am listening on port ${port}!`));
