const { Router } = require('express');
const { home, details, search } = require('../controllers/catalog.js');
const { about } = require('../controllers/about.js');
const { getCreate, postCreate } = require('../controllers/movie.js');
const { notFound } = require('../controllers/404.js');

const router = Router();

router.get('/', home);
router.get('/create', getCreate);
router.post('/create', postCreate);
router.get('/search', search);
router.get('/about', about);
router.get('/details/:id', details);

router.get('*', notFound);

module.exports = {
    router
};