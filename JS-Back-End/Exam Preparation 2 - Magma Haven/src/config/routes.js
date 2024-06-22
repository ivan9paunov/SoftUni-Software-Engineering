const { homeRouter } = require('../controllers/home.js');
const { userRouter } = require('../controllers/user.js');
const { volcanoRouter } = require('../controllers/volcano.js');
const { errorRouter } = require('../controllers/404.js');

function configRoutes(app) {
    app.use(homeRouter);
    app.use(userRouter);
    app.use(volcanoRouter);
    
    app.use(errorRouter);
}

module.exports = { configRoutes };