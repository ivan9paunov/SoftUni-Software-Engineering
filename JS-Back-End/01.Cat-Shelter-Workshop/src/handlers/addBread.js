const { readFile } = require('../util.js');

function addBreedHandler(req, res) {
    const template = readFile('./views/addBreed.html');
    res.writeHead(200, [
        'Content-Type', 'text/html'
    ]);
    res.write(template);
    res.end();
}

module.exports = {
    addBreedHandler
};