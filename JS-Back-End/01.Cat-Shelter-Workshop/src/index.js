const http = require('http');

const { homeHandler } = require('./handlers/home.js');

const routes = {
    '/': homeHandler,
    'index.html': homeHandler
};

http.createServer((req, res) => {
    const route = routes[req.url];

    if (typeof route == 'function') {
        route(req, res);
    } else {
        res.writeHead(404, [
            'Content-Type', 'text/plaint'
        ]);
        res.write('404 Not Found!');
        res.end();
    }
}).listen(3000);