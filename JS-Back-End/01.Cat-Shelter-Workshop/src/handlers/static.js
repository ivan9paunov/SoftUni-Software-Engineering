const { readFile } = require('../util.js');

function staticFileHandler(req, res) {
    if (req.url.endsWith('.css')) {
        const data = readFile(req.url);
        res.writeHead(200, [
            'Content-Type', 'text/css'
        ]);
        res.write(data);
        res.end();

        return true;
    } else if (req.url.endsWith('.ico')) {
        const data = readFile(req.url);
        res.writeHead(200, [
            'Content-Type', 'image/svg+xml'
        ]);
        res.write(data);
        res.end();

        return true;
    }

    return false;
}

module.exports = {
    staticFileHandler
};