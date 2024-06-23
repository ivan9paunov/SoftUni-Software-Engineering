const { Recipes } = require('../models/Recipes');

async function getAll() {
    return Recipes.find().lean();
}

async function getById(id) {
    return Recipes.findById(id).lean();
}

async function getRecent() {
    return Recipes.find().sort({ $natural: -1 }).limit(3).lean();
}

async function create(data, authorId) {
    const recipe = new Recipes({
        title: data.title,
        ingredients: data.ingredients,
        instructions: data.instructions,
        description: data.description,
        image: data.image,
        author: authorId
    });

    await recipe.save();

    return recipe;
}

async function update(id, data, userId) {
    const recipe = await Recipes.findById(id);

    if (!recipe) {
        throw new ReferenceError('Recipe not found ' + id);
    }

    if (recipe.author.toString() != userId) {
        throw new Error('Access denied');
    }

    recipe.title = data.title;
    recipe.ingredients = data.ingredients;
    recipe.instructions = data.instructions;
    recipe.description = data.description;
    recipe.image = data.image;

    await recipe.save();

    return recipe;
}

async function deleteById(id, userId) {
    const recipe = await Recipes.findById(id);

    if (!recipe) {
        throw new ReferenceError('Recipe not found' + id);
    }

    if (recipe.author.toString() != userId) {
        throw new Error('Access denied');
    }

    await Recipes.findByIdAndDelete(id);
}

async function recommendRecipe(recipeId, userId) {
    const recipe = await Recipes.findById(recipeId);

    if (!recipe) {
        throw new ReferenceError('Recipe not found ' + recipeId);
    }

    if (recipe.author.toString() == userId) {
        throw new Error('Access denied');
    }

    if (recipe.recommendList.find(r => r.toString() == userId)) {
        return;
    }

    recipe.recommendList.push(userId);

    await recipe.save();
}

async function search(query) {
    query = query.toLowerCase();
    const recipes = await getAll();
    const queriedRecipes = recipes.filter(r => r.title.toLowerCase().includes(query));

    return queriedRecipes;
}

module.exports = {
    getAll,
    getById,
    getRecent,
    create,
    update,
    deleteById,
    recommendRecipe,
    search
};