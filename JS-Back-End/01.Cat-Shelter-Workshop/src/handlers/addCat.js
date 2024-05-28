const { getBreeds, getCats, addCat } = require('../model.js');
const { readTemplate, layout, readImg, addImg } = require('../util.js');
const formidable = require('formidable');
const path = require('path');

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
    const fileContent = await getCats();
    const form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
        const name = fields.name[0];
        const description = fields.description[0];
        const breed = fields.breed[0];
        const id = fileContent[fileContent.length - 1].id + 1;
        let imgFile = '';
        let imgPath = '';
        
        if (Object.keys(files).length > 0) {
            imgFile = files.upload[0];
            const imgBuffer = readImg(imgFile.filepath);
            const imgName = imgFile.originalFilename;
            addImg(imgName, imgBuffer);
            imgPath = path.join('\\content', 'images', imgName);
        }

        if (name && description && id) {
            const newCat = { name, imageUrl: imgPath, breed, description, id: String(id)};
            addCat(newCat);
        }
    });
    
    res.writeHead(302, [
        'Location', '/'
    ]);
    res.end();
}

module.exports = {
    addCatHandler,
    postCatHandler
};