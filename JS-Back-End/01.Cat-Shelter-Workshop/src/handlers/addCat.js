const { getBreeds, addCat } = require('../model.js');
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

async function postCatHandler(req, res) {
    let data = '';

    req.on('data', (chunk) => data += chunk);
    req.on('end', async () => {
        const formData = new URLSearchParams(data);
        const name = formData.get('name');
        const description = formData.get('description');
        const imageUrl = formData.get('imageUrl');
        const breed = formData.get('breed');

        if (name && description && imageUrl && breed) {
            const id = Math.floor(Math.random() * 10000000000);

            await addCat({ id, name, imageUrl, breed, description });

            res.writeHead(301, [
                'Location', '/'
            ]);
            res.end();
        } else {
            res.writeHead(301, [
                'Location', '/cats/add-cat'
            ]);
            res.end();
        }
    });
}

module.exports = {
    addCatHandler,
    postCatHandler
};