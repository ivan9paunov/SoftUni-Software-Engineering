const { Router } = require('express');
const { body, validationResult } = require('express-validator');
const { isUser } = require('../middlewares/guards.js');
const { parseError } = require('../util.js');
const { create, getById, update, deleteById, likeVolcano, getAll, search } = require('../services/volcano.js');

const volcanoRouter = Router();

volcanoRouter.get('/create', isUser(), (req, res) => {
    res.render('create', { pageTitle: 'Create Volcano' });
});

volcanoRouter.post('/create', isUser(),
    body('name').trim().isLength({ min: 2 }).withMessage('Name should be at least 2 characters'),
    body('location').trim().isLength({ min: 3 }).withMessage('Location should be at least 3 characters'),
    body('elevation').trim().isFloat({ min: 0 }).withMessage('Elevation should be minumum 0'),
    body('lastEruption').trim().isFloat({ min: 0, max: 2024 }).withMessage('Year of Last Eruption should be between 0 and 2024'),
    body('image').trim().isURL({ require_tld: false }).withMessage('Image must be a valid URL'),
    body('typeVolcano').trim().isIn(['Supervolcanoes', 'Submarine', 'Subglacial', 'Mud', 'Stratovolcanoes', 'Shield']).withMessage('Invalid volcano type. Please select a valid type'),
    body('description').trim().isLength({ min: 10 }).withMessage('Description should be at least 10 characters long'),
    async (req, res) => {
        const data = req.body;
        const userId = req.user.id;

        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }

            const result = await create(data, userId);

            res.redirect('/catalog');
        } catch (err) {
            res.render('create', { data, errors: parseError(err).errors, pageTitle: 'Create Volcano' });
        }
    }
);

volcanoRouter.get('/edit/:id', isUser(), async (req, res) => {
    const volcano = await getById(req.params.id);

    if (!volcano) {
        res.render('404');
        return;
    }

    const isOwner = req.user.id == volcano.author.toString();

    if (!isOwner) {
        res.redirect('/login');
        return;
    }

    res.render('edit', { data: volcano, pageTitle: 'Edit Volcano' });
});

volcanoRouter.post('/edit/:id', isUser(),
    body('name').trim().isLength({ min: 2 }).withMessage('Name should be at least 2 characters'),
    body('location').trim().isLength({ min: 3 }).withMessage('Location should be at least 3 characters'),
    body('elevation').trim().isFloat({ min: 0 }).withMessage('Elevation should be minumum 0'),
    body('lastEruption').trim().isFloat({ min: 0, max: 2024 }).withMessage('Year of Last Eruption should be between 0 and 2024'),
    body('image').trim().isURL({ require_tld: false }).withMessage('Image must be a valid URL'),
    body('typeVolcano').trim().isIn(['Supervolcanoes', 'Submarine', 'Subglacial', 'Mud', 'Stratovolcanoes', 'Shield']).withMessage('Invalid volcano type. Please select a valid type'),
    body('description').trim().isLength({ min: 10 }).withMessage('Description should be at least 10 characters long'),
    async (req, res) => {
        const data = req.body;
        const userId = req.user.id;
        const volcanoId = req.params.id;

        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }

            const result = await update(volcanoId, data, userId);

            res.redirect('/details/' + volcanoId);
        } catch (err) {
            res.render('edit', { data, errors: parseError(err).errors, pageTitle: 'Edit Volcano' });
        }
    }
);

volcanoRouter.get('/like/:id', isUser(), async (req, res) => {
    const userId = req.user.id;
    const volcanoId = req.params.id;

    try {
        const result = await likeVolcano(volcanoId, userId);

        res.redirect('/details/' + volcanoId);
    } catch (err) {
        res.render('404');
    }
});

volcanoRouter.get('/delete/:id', isUser(), async (req, res) => {
    const userId = req.user.id;
    const volcanoId = req.params.id;

    try {
        const result = await deleteById(volcanoId, userId);

        res.redirect('/catalog');
    } catch (err) {
        res.redirect('/details/' + volcanoId);
    }
});

volcanoRouter.get('/search', async (req, res) => {
    const query = req.query;
    const volcanoes = await getAll();

    if (Object.keys(query).length) {
        const queryVolcanoes = await search(query);
        res.render('search', { volcanoes: queryVolcanoes, pageTitle: 'Search Volcanoes' });
        return;
    }

    res.render('search', { volcanoes, pageTitle: 'Search Volcano' });
});

module.exports = { volcanoRouter };