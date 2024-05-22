const { readFile } = require('../util.js');

function staticFileHandler(req, res) {
    if (req.url.endsWith('.css')) {
        sendFile(req.url, 'text/css', res);
        return true;
    } else if (req.url.endsWith('.ico')) {
        readFile(req.url, 'image/svg+xml', res);
        return true;
    }

    return false;
}

async function sendFile(path, contentType, res) {
    const data = await readFile(path);
    res.writeHead(200, [
        'Content-Type', contentType
    ]);
    data.pipe(res);
}

module.exports = {
    staticFileHandler
};