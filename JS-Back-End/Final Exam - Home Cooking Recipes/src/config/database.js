const mongoose = require('mongoose');
require('../models/User');
require('../models/Recipes');

async function configDatabase() {
    const connectionString = 'mongodb://localhost:27017/HomeCookingRecipes';

    await mongoose.connect(connectionString);

    console.log('Database connected');
}

module.exports = { configDatabase };