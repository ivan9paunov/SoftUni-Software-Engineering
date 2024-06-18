const { Router } = require('express');

const { isGuest, isUser } = require('../middlewares/guards.js');

const { home, details, search } = require('../controllers/catalog.js');
const { about } = require('../controllers/about.js');
const { getCreateMovie, postCreateMovie, getEditMovie, postEditMovie, getDelete, postDelete } = require('../controllers/movie.js');
const { getCreateCast, postCreateCast } = require('../controllers/cast.js');
const { notFound } = require('../controllers/404.js');
const { getAttach, postAttach } = require('../controllers/attach.js');
const { userRouter } = require('../controllers/user.js');

const router = Router();

function configRoutes(app) {
    // TODO
}

router.get('/', home);
router.get('/about', about);
router.get('/search', search);

router.get('/details/:id', details);
router.get('/attach/:id', isUser(), getAttach);
router.post('/attach/:id', isUser(), postAttach);
router.get('/edit/:id', isUser(), getEditMovie);
router.post('/edit/:id', isUser(), postEditMovie);
router.get('/delete/:id', isUser(), getDelete);
router.post('/delete/:id', isUser(), postDelete);

router.get('/create/movie', isUser(), getCreateMovie);
router.post('/create/movie', isUser(), postCreateMovie);
router.get('/create/cast', isUser(), getCreateCast);
router.post('/create/cast', isUser(), postCreateCast);

router.use(userRouter);

router.get('*', notFound);

module.exports = {
    router
};