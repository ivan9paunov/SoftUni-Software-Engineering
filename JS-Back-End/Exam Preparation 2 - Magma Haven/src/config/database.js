const mongoose = require('mongoose');
require('../models/User');
require('../models/Volcano');

async function configDatabase() {
    const connectionString = 'mongodb://localhost:27017/MagmaHaven';

    await mongoose.connect(connectionString);

    console.log('Database connected');
}

module.exports = { configDatabase };