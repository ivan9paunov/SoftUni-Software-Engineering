const { getBreeds } = require('../model.js');
const { readTemplate, layout } = require('../util.js');

function breedFragment(breed) {
    return `<option value="${breed}">${breed}</option>`;
}

async function addCatHandler(req, res) {
    const template = await readTemplate('addCat');
    
    const breeds = await getBreeds();
    const html = template.replace('%%breeds%%', breeds.map(breedFragment).join('\n'));

    res.writeHead(200, [
        'Content-Type', 'text/html'
    ]);
    res.write(await layout(html));
    res.end();
}

module.exports = {
    addCatHandler
};