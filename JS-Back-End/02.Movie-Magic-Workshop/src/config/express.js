const { urlencoded, static: staticHandler } = require('express');
const cookieParser = require('cookie-parser');
const { session } = require('../middlewares/session.js');

const secret = 'movie project';

function configExpress(app) {
    app.use(cookieParser(secret));
    app.use(session());
    app.use(urlencoded({ extended: true }));
    app.use('/static', staticHandler('static'));
}

module.exports = {
    configExpress
};