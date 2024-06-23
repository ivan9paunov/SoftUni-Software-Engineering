const { Router } = require('express');
const { isUser } = require('../middlewares/guards.js');
const { body, validationResult } = require('express-validator');
const { create, getById, update, deleteById, recommendRecipe, getAll, search } = require('../services/recipes.js');
const { parseError } = require('../util.js');

const recipesRouter = Router();

recipesRouter.get('/create', isUser(), (req, res) => {
    res.render('create', { pageTitle: 'Create Recipe - Home Cooking Recipes' });
});

recipesRouter.post('/create', isUser(),
    body('title').trim().isLength({ min: 2 }).withMessage('Title must be at least 2 characters long'),
    body('description').trim().isLength({ min: 10, max: 100 }).withMessage('Description must be between 10 and 100 characters long'),
    body('ingredients').trim().isLength({ min: 10, max: 200 }).withMessage('Ingredients must be between 10 and 200 characters long'),
    body('instructions').trim().isLength({ min: 10 }).withMessage('Instructions must be at least 10 characters long'),
    body('image').trim().isURL({ require_tld: false }).withMessage('Image must be a valid URL'),
    async (req, res) => {
        const data = req.body;
        const userId = req.user.id;

        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }

            await create(data, userId);

            res.redirect('/catalog');
        } catch (err) {
            res.render('create', { data, errors: parseError(err).errors, pageTitle: 'Create Recipe - Home Cooking Recipes' });
        }
    }
);

recipesRouter.get('/edit/:id', isUser(), async (req, res) => {
    const recipes = await getById(req.params.id);

    if (!recipes) {
        res.render('404');
        return;
    }

    const isOwner = req.user.id == recipes.author.toString();

    if (!isOwner) {
        res.redirect('/login');
        return;
    }

    res.render('edit', { data: recipes, pageTitle: 'Edit Recipe - Home Cooking Recipes' });
});

recipesRouter.post('/edit/:id', isUser(),
    body('title').trim().isLength({ min: 2 }).withMessage('Title must be at least 2 characters long'),
    body('description').trim().isLength({ min: 10, max: 100 }).withMessage('Description must be between 10 and 100 characters long'),
    body('ingredients').trim().isLength({ min: 10, max: 200 }).withMessage('Ingredients must be between 10 and 200 characters long'),
    body('instructions').trim().isLength({ min: 10 }).withMessage('Instructions must be at least 10 characters long'),
    body('image').trim().isURL({ require_tld: false }).withMessage('Image must be a valid URL'),
    async (req, res) => {
        const data = req.body;
        const userId = req.user.id;
        const recipeId = req.params.id;

        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }

            await update(recipeId, data, userId);

            res.redirect('/details/' + recipeId);
        } catch (err) {
            res.render('edit', { data, errors: parseError(err).errors, pageTitle: 'Edit Recipe - Home Cooking Recipes' });
        }
    }
);

recipesRouter.get('/delete/:id', isUser(), async (req, res) => {
    const userId = req.user.id;
    const recipeId = req.params.id;

    try {
        await deleteById(recipeId, userId);

        res.redirect('/catalog');
    } catch (err) {
        res.redirect('/details/' + recipeId);
    }
});

recipesRouter.get('/recommend/:id', isUser(), async (req, res) => {
    const userId = req.user.id;
    const recipeId = req.params.id;

    try {
        await recommendRecipe(recipeId, userId);

        res.redirect('/details/' + recipeId);
    } catch (err) {
        res.render('404');
    }
});

recipesRouter.get('/search', async (req, res) => {
    const query = req.query.search;
    const recipes = await getAll();

    if (!recipes) {
        res.render('404');
        return;
    }

    if (query) {
        const queriedRecipes = await search(query);
        res.render('search', { recipes: queriedRecipes, pageTitle: 'Search Recipes - Home Cooking Recipes' });
        return;
    }

    res.render('search', { recipes, pageTitle: 'Search Recipes - Home Cooking Recipes' });
});

module.exports = { recipesRouter };