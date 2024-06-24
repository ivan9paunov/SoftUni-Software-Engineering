// TODO import routers

const { courseRouter } = require('../controllers/course.js');
const { homeRouter } = require('../controllers/home.js');
const { userRouter } = require('../controllers/user.js');

function configRoutes(app) {
    app.use(homeRouter);
    app.use(userRouter);
    app.use(courseRouter);

    app.get('*', (req, res) => {
        res.render('404', { pageTitle: 'Page Not Found' });
    });
}

module.exports = { configRoutes };