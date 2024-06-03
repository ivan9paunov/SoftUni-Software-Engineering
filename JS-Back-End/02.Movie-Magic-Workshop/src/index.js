const express = require('express');
const { configHbs } = require('./config/hbs.js');
const { configExpress } = require('./config/express.js');
const { router } = require('./config/routes.js');

const PORT = process.env.PORT || 3000;

const app = express();

configHbs(app);
configExpress(app);
app.use(router);

app.listen(PORT, console.log(`The app is listening on port ${PORT}`));