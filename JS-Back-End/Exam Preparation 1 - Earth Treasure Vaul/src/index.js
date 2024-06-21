const express = require('express');
const { configDatabase } = require('./config/database.js');
const { configExpress } = require('./config/express.js');
const { configHandlebars } = require('./config/handlebars.js');
const { configRoutes } = require('./config/routes.js');

const PORT = 3000;

start();

async function start() {
    const app = express();
    
    await configDatabase();
    configHandlebars(app);
    configExpress(app);
    configRoutes(app);

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}