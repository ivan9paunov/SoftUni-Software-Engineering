const { Router } = require('express');
const { body, validationResult } = require('express-validator');
const { isUser } = require('../middlewares/guards.js');
const { parseError } = require('../util.js');
const { create, getById, update, deleteById, likeStone, getAll, search } = require('../services/stone.js');

const stoneRouter = Router();

stoneRouter.get('/create', isUser(), (req, res) => {
    res.render('create', { pageTitle: 'Create Page' });
});

stoneRouter.post('/create', isUser(),
    body('name').trim().isLength({ min: 2 }).withMessage('Name should be at least 2 characters'),
    body('category').trim().isLength({ min: 3 }).withMessage('Category should be at least 3 characters'),
    body('color').trim().isLength({ min: 2 }).withMessage('Color should be at least 2 characters'),
    body('formula').trim().isLength({ min: 3, max: 30 }).withMessage('Formula should be between 3 and 30 characters'),
    body('location').trim().isLength({ min: 5, max: 15 }).withMessage('Location should be between 5 and 15 characters'),
    body('description').trim().isLength({ min: 10 }).withMessage('Description should be at least 10 characters long'),
    body('image').trim().isURL({ require_tld: false }).withMessage('Image must be a valid URL'),
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
            res.render('create', { data, errors: parseError(err).errors, pageTitle: 'Create Page' });
        }
    }
);

stoneRouter.get('/edit/:id', isUser(), async (req, res) => {
    const stone = await getById(req.params.id);

    if (!stone) {
        res.render('404');
        return;
    }

    const isOwner = req.user.id == stone.author.toString();

    if (!isOwner) {
        res.redirect('/login');
        return;
    }

    res.render('edit', { data: stone, pageTitle: 'Edit Page' });
});

stoneRouter.post('/edit/:id', isUser(),
    body('name').trim().isLength({ min: 2 }).withMessage('Name should be at least 2 characters'),
    body('category').trim().isLength({ min: 3 }).withMessage('Category should be at least 3 characters'),
    body('color').trim().isLength({ min: 2 }).withMessage('Color should be at least 2 characters'),
    body('formula').trim().isLength({ min: 3, max: 30 }).withMessage('Formula should be between 3 and 30 characters'),
    body('location').trim().isLength({ min: 5, max: 15 }).withMessage('Location should be between 5 and 15 characters'),
    body('description').trim().isLength({ min: 10 }).withMessage('Description should be at least 10 characters long'),
    body('image').trim().isURL({ require_tld: false }).withMessage('Image must be a valid URL'),
    async (req, res) => {
        const data = req.body;
        const userId = req.user.id;
        const stoneId = req.params.id;

        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }

            const result = await update(stoneId, data, userId);

            res.redirect('/details/' + stoneId);
        } catch (err) {
            res.render('edit', { data, errors: parseError(err).errors, pageTitle: 'Edit Page' });
        }
    }
);

stoneRouter.get('/like/:id', isUser(), async (req, res) => {
    const userId = req.user.id;
    const stoneId = req.params.id;

    try {
        const result = await likeStone(stoneId, userId);

        res.redirect('/details/' + stoneId);
    } catch (err) {
        res.render('404');
    }
});

stoneRouter.get('/delete/:id', isUser(), async (req, res) => {
    const userId = req.user.id;
    const stoneId = req.params.id;

    try {
        const result = await deleteById(stoneId, userId);

        res.redirect('/');
    } catch (err) {
        res.redirect('/details/' + stoneId);
    }
});

stoneRouter.get('/search', async (req, res) => {
    const query = req.query.search;
    const stones = await getAll();
    
    if (query) {
        const queriedStones = await search(query);
        res.render('search', { stones: queriedStones, pageTitle: 'Search Stone'});
        return;
    }

    res.render('search', { stones, pageTitle: 'Search Stone'});
});

module.exports = { stoneRouter };