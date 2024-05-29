const { getCats, readData, writeData } = require('../model.js');
const { readTemplate, layout } = require('../util.js');

async function shelterCatHandler(req, res) {
    let template = await readTemplate('catShelter');
    const catId = req.url.split('/cats/shelter-cat/')[1];
    const allCats = await getCats();
    const myCat = allCats.find(cat => cat.id == catId);
    
    template = template.replace('%%imageUrl%%', myCat.imageUrl);
    template = template.replace('%%name%%', myCat.name);
    template = template.replace('%%description%%', myCat.description);
    template = template.replace('%%breed%%', myCat.breed);

    res.writeHead(200, [
        'Content-Type', 'text/html'
    ]);
    res.write(await layout(template));
    res.end();
}

async function shelterTheCat(req, res) {
    const catId = req.url.split('/cats/shelter-cat/')[1];
    const catsData = await readData();
    const myCatIdx = catsData.cats.findIndex(cat => cat.id == catId);
    
    catsData.cats.splice(myCatIdx, 1);
    await writeData(catsData);

    res.writeHead(301, [
        'location', '/'
    ]);
    res.end();
}

module.exports = {
    shelterCatHandler,
    shelterTheCat
};