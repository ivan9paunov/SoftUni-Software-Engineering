const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');

const searchBar = `
    <form action="/search">
        <input type="text">
        <button type="button">Search</button>
    </form>`;

async function readFile(filePath) {
    const fileHandle = await fsp.open(path.join('./', filePath), 'r');
    return fileHandle.createReadStream();
}

async function readTemplate(template) {
    const data = await fsp.readFile(path.join('./views/', template + '.html'));
    return data.toString();
}

async function layout(body, hasSearch) {
    let layoutTemplate = await readTemplate('layout');
    let search = '';

    if (hasSearch) {
        search = searchBar;
    }
    
    layoutTemplate = layoutTemplate.replace('%%searchBar%%', search);
    return layoutTemplate.replace('%%body%%', body);
}

function readImg(url) {
    const img = fs.readFileSync(url);
    return Buffer.from(img);
}

async function addImg(imgName, buffer) {
    await fsp.writeFile(path.join('content', 'images', imgName), buffer);
}

async function delImg(imgUrl) {
    await fsp.unlink(imgUrl.replace('\\', ''));
}

module.exports = {
    readFile,
    readTemplate,
    layout,
    readImg,
    addImg,
    delImg
};