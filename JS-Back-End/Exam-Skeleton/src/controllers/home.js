const { Router } = require('express');
const { login } = require('../services/user.js');
const { createToken } = require('../services/jwt.js');

// TODO replace with real router according to exam description

const homeRouter = Router();

homeRouter.get('/', async (req, res) => {
    console.log(req.user);

    // const result = await login('ivan', '123123');
    // const token = createToken(result);
    // res.cookie('token', token);

    res.render('home');
});

module.exports = { homeRouter };