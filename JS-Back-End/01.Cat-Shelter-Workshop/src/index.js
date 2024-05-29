const http = require('http');

const { homeHandler } = require('./handlers/home.js');
const { staticFileHandler } = require('./handlers/static.js');
const { addBreedHandler, postBreedHandler } = require('./handlers/addBread.js');
const { addCatHandler, postCatHandler } = require('./handlers/addCat.js');
const { editCatHandler, postEditedCat } = require('./handlers/editCat.js');

const routes = {
    'GET': {
        '/': homeHandler,
        '/index.html': homeHandler,
        '/cats/add-breed': addBreedHandler,
        '/cats/add-cat': addCatHandler,
        '/cats/edit-cat': editCatHandler
    },
    'POST': {
        '/cats/add-breed': postBreedHandler,
        '/cats/add-cat': postCatHandler,
        '/cats/edit-cat': postEditedCat
    }
};

http.createServer((req, res) => {
    const methodRoutes = routes[req.method];
    if (methodRoutes) {
        let path = req.url;
        
        if (path.startsWith('/cats/edit-cat')) {
            path = '/cats/edit-cat';
        }

        const route = methodRoutes[path];

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