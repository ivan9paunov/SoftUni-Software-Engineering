const express = require('express');
const { configHbs } = require('./config/hbs.js');
const { configExpress } = require('./config/express.js');
const { router } = require('./config/routes.js');
const { configDatabase } = require('./config/database.js');

const PORT = process.env.PORT || 3000;

async function start() {
    const app = express();
    
    await configDatabase();
    configHbs(app);
    configExpress(app);
    app.use(router);
    
    app.listen(PORT, console.log(`Server is listening on port ${PORT}`));
}

start();