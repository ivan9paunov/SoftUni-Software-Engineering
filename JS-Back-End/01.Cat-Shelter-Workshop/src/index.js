const http = require('http');

const { homeHandler } = require('./handlers/home.js');
const { staticFileHandler } = require('./handlers/static.js');
const { addBreedHandler, postBreedHandler } = require('./handlers/addBread.js');
const { addCatHandler } = require('./handlers/addCat.js');

const routes = {
    'GET': {
        '/': homeHandler,
        '/index.html': homeHandler,
        '/cats/add-breed': addBreedHandler,
        '/cats/add-cat': addCatHandler
    },
    'POST': {
        '/cats/add-breed': postBreedHandler,
        // '/cats/add-cat': 
    }
};

http.createServer((req, res) => {
    const methodRoutes = routes[req.method];

    if (methodRoutes) {
        const route = methodRoutes[req.url];

        if (typeof route == 'function') {
            route(req, res);
            return;
        }
    }

    if (staticFileHandler(req, res)) {
        return;
    }

    res.writeHead(404, [
        'Content-Type', 'text/plain'
    ]);
    res.write('404 Not Found!');
    res.end();

}).listen(3000);