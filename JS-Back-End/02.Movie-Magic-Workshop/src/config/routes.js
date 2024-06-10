const { Router } = require('express');
const { home, details, search } = require('../controllers/catalog.js');
const { about } = require('../controllers/about.js');
const { getCreateMovie, postCreateMovie } = require('../controllers/movie.js');
const { getCreateCast, postCreateCast } = require('../controllers/cast.js');
const { notFound } = require('../controllers/404.js');

const router = Router();

router.get('/', home);
router.get('/create/movie', getCreateMovie);
router.post('/create/movie', postCreateMovie);
router.get('/create/cast', getCreateCast);
router.post('/create/cast', postCreateCast);
router.get('/search', search);
router.get('/about', about);
router.get('/details/:id', details);

router.get('*', notFound);

module.exports = {
    router
};