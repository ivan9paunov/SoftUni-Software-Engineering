const { Router } = require('express');

const notFoundRouter = Router();

notFoundRouter.get('*', async (req, res) => {
    res.render('404', { pageTitle: 'Page Not Found' });
});

module.exports = { notFoundRouter };