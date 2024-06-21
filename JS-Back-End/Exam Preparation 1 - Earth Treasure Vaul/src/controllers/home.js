const { Router } = require('express');
const { getRecent, getAll, getById } = require('../services/stone.js');

const homeRouter = Router();

homeRouter.get('/', async (req, res) => {
    const stones = await getRecent();

    res.render('home', { stones, pageTitle: 'Earth Treasure Vault' });
});

homeRouter.get('/catalog', async (req, res) => {
    const stones = await getAll();

    res.render('catalog', { stones, pageTitle: 'Stones Catalog'});
});

homeRouter.get('/details/:id', async (req, res) => {
    const stone = await getById(req.params.id);
    
    if (!stone) {
        res.render('404');
        return;
    }

    const isOwner = req.user?.id == stone.author.toString();
    const hasLiked = Boolean(stone.likedList.find(l => req.user?.id == l.toString()));

    res.render('details', { stone, isOwner, hasLiked, pageTitle: 'Stone Details'});
});

module.exports = { homeRouter };