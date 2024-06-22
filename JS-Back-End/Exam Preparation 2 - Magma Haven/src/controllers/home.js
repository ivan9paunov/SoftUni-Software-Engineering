const { Router } = require('express');
const { getAll, getById } = require('../services/volcano.js');

const homeRouter = Router();

homeRouter.get('/', (req, res) => {
    res.render('home', { pageTitle: 'Magma Haven'});
});

homeRouter.get('/catalog', async (req, res) => {
    const volcanoes = await getAll();

    res.render('catalog', { volcanoes, pageTitle: 'Volcanoes Catalog'});
});

homeRouter.get('/details/:id', async (req, res) => {
    const volcanoId = req.params.id;
    const volcano = await getById(volcanoId);

    if (!volcano) {
        res.status(404).render('404');
        return;
    }

    const isOwner = req.user?.id == volcano.author.toString();
    const hasVoted = Boolean(volcano.voteList.find(v => req.user?.id == v.toString()));

    res.render('details', { volcano, isOwner, hasVoted, pageTitle: 'Volcano Details'});
});

module.exports = { homeRouter };