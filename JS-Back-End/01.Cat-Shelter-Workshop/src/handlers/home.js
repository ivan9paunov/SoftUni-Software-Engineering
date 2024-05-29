const { getCats } = require('../model.js');
const { layout, readTemplate } = require('../util.js');

function catFragment(cat) {
    return `
    <li>
        <img src="${cat.imageUrl}">
        <h3>${cat.name}</h3>
        <p><span>Breed: </span>${cat.breed}</p>
        <p><span>Description: </span>${cat.description}</p>
        <ul class="buttons">
            <li class="btn edit"><a href="/cats/edit-cat/${cat.id}">Change Info</a></li>
            <li class="btn delete"><a href="/cats/shelter-cat">New Home</a></li>
        </ul>
    </li>`;
}

async function homeHandler(req, res) {
    const template = await readTemplate('home/index');
    res.writeHead(200, [
        'Content-Type', 'text/html'
    ]);

    const cats = await getCats();
    const html = template.replace('%%catContent%%', cats.map(catFragment).join('\n'));
    res.write(await layout(html, true));
    res.end();
}

module.exports = {
    homeHandler
};