// TODO import routers

const { homeRouter } = require('../controllers/home.js');

function configRoutes(app) {
    app.use(homeRouter);
    
    // TODO register routers
}

module.exports = { configRoutes };