const { readTemplate } = require('../util.js');

async function addCatHandler(req, res) {
    const template = await readTemplate('addCat');
    res.writeHead(200, [
        'Content-Type', 'text/html'
    ]);
    res.write(template);
    res.end();
}

module.exports = {
    addCatHandler
};