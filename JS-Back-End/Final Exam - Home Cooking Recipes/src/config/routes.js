const { homeRouter } = require('../controllers/home.js');
const { userRouter } = require('../controllers/user.js');
const { recipesRouter } = require('../controllers/recipes.js');
const { errorRouter } = require('../controllers/404.js');

function configRoutes(app) {
    app.use(homeRouter);
    app.use(userRouter);
    app.use(recipesRouter);
    app.use(errorRouter);   
}

module.exports = { configRoutes };