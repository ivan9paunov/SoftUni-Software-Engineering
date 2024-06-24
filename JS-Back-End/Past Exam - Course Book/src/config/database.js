const mongoose = require('mongoose');
require('../models/User');
require('../models/Course');

async function configDatabase() {
    const connectionString = 'mongodb://localhost:27017/Course-Book';

    await mongoose.connect(connectionString);

    console.log('Database connected');
}

module.exports = { configDatabase };