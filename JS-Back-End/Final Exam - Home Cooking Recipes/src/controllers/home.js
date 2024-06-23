const { Router } = require('express');
const { getRecent, getAll, getById } = require('../services/recipes.js');

const homeRouter = Router();

homeRouter.get('/', async (req, res) => {
    const recipes = await getRecent();

    if (!recipes) {
        res.status(404).render('404');
        return;
    }

    res.render('home', { recipes, pageTitle: 'Home Cooking Recipes' });
});

homeRouter.get('/catalog', async (req, res) => {
    const recipes = await getAll();

    if (!recipes) {
        res.status(404).render('404');
        return;
    }

    res.render('catalog', { recipes, pageTitle: 'Recipe Catalog - Home Cooking Recipes' });
});

homeRouter.get('/details/:id', async (req, res) => {
    const recipeId = req.params.id;
    const recipe = await getById(recipeId);
    const recipeName = recipe.title;

    if (!recipe) {
        res.status(404).render('404');
        return;
    }

    const isOwner = req.user?.id == recipe.author.toString();
    const hasRecommended = Boolean(recipe.recommendList.find(r => req.user?.id == r.toString()));

    res.render('details', { recipe, isOwner, hasRecommended, pageTitle: `${recipeName} - Home Cooking Recipes` });
});

module.exports = { homeRouter };