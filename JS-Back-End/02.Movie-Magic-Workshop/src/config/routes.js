const { isUser } = require('../middlewares/guards.js');
const { home, details, search } = require('../controllers/catalog.js');
const { about } = require('../controllers/about.js');
const { movieRouter } = require('../controllers/movie.js');
const { getCreateCast, postCreateCast } = require('../controllers/cast.js');
const { notFound } = require('../controllers/404.js');
const { getAttach, postAttach } = require('../controllers/attach.js');
const { userRouter } = require('../controllers/user.js');

function configRoutes(app) {
    app.get('/', home);
    app.get('/search', search);
    app.get('/details/:id', details);

    app.get('/attach/:id', isUser(), getAttach);
    app.post('/attach/:id', isUser(), postAttach);

    app.use(movieRouter);

    app.get('/create/cast', isUser(), getCreateCast);
    app.post('/create/cast', isUser(), postCreateCast);
    
    app.use(userRouter);
    
    app.get('/about', about);
    app.get('*', notFound);
}

module.exports = { configRoutes };