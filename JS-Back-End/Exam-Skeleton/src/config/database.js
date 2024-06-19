const mongoose = require('mongoose');
require('../models/User');
require('../models/Data'); // TODO import real data model

async function configDatabase() {
    // TODO set db name
    const connectionString = 'mongodb://localhost:27017/exam-db';

    await mongoose.connect(connectionString);

    console.log('Database connected');
}

module.exports = { configDatabase };