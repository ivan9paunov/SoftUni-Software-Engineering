const { Router } = require('express');

const errorRouter = Router();

errorRouter.get('*', (req, res) => {
    res.render('404', { pageTitle: 'Page Not Found' });
});

module.exports = { errorRouter };