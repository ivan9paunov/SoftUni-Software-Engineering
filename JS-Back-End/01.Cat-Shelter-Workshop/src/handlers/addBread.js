const { readTemplate } = require('../util.js');

async function addBreedHandler(req, res) {
    const template = await readTemplate('addBreed');
    res.writeHead(200, [
        'Content-Type', 'text/html'
    ]);
    res.write(template);
    res.end();
}

module.exports = {
    addBreedHandler
};