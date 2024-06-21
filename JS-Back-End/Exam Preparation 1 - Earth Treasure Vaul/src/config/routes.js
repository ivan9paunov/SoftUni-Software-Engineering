const { homeRouter } = require('../controllers/home.js');
const { stoneRouter } = require('../controllers/stone.js');
const { userRouter } = require('../controllers/user.js');
const { notFoundRouter } = require('../controllers/404.js');

function configRoutes(app) {
    app.use(homeRouter);
    app.use(userRouter);
    app.use(stoneRouter);

    app.use(notFoundRouter);
}

module.exports = { configRoutes };