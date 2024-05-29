const { getCats, getBreeds, writeData, readData } = require('../model.js');
const { readTemplate, layout } = require('../util.js');

function breedFragment(breed, isSelected) {
    if (isSelected) {
        return `<option value="${breed}" selected="">${breed}</option>`;
    } else {
        return `<option value="${breed}">${breed}</option>`;
    }
}

async function editCatHandler(req, res) {
    const catId = req.url.split('/cats/edit-cat/')[1];
    const cats = await getCats();
    const cat = cats.find(c => c.id == catId);

    let template = await readTemplate('editCat');
    template = template.replace('%%name%%', cat.name);
    template = template.replace('%%description%%', cat.description);
    template = template.replace('%%imageUrl%%', cat.imageUrl);

    const breeds = await getBreeds();
    template = template.replace('%%breeds%%', breeds.map(breed => {
        if (breed == cat.breed) {
            return breedFragment(breed, true);
        } else {
            return breedFragment(breed, false);
        }
    }).join('\n'));

    res.writeHead(200, [
        'Content-Type', 'text/html'
    ]);
    res.write(await layout(template));
    res.end();
}

async function postEditedCat(req, res) {
    let data = '';

    req.on('data', (chunk) => data += chunk);
    req.on('end', async () => {
        const catId = req.url.split('/cats/edit-cat/')[1];
        const catsData = await readData();
        const myCat = catsData.cats.find(cat => cat.id == catId);
        
        const formData = new URLSearchParams(data);
        const name = formData.get('name');
        const description = formData.get('description');
        const imageUrl = formData.get('imageUrl');
        const breed = formData.get('breed');
        
        if (name && description && imageUrl && breed) {
            myCat.name = name;
            myCat.description = description;
            myCat.imageUrl = imageUrl;
            myCat.breed = breed;
            
            await writeData(catsData);

            res.writeHead(301, [
                'location', '/'
            ]);
            res.end();

        } else {
            res.writeHead(301, [
                'location', `/cats/edit-cat/${catId}`
            ]);
            res.end();
        }
    });
}

module.exports = {
    editCatHandler,
    postEditedCat
};