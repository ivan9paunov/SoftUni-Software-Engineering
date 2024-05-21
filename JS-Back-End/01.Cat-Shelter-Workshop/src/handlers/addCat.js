const { readFile } = require('../util.js');

function addCatHandler(req, res) {
    const template = readFile('./views/addCat.html');
    res.writeHead(200, [
        'Content-Type', 'text/html'
    ]);
    res.write(template);
    res.end();
}

module.exports = {
    addCatHandler
};