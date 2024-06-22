const { Router } = require('express');
const { isGuest } = require('../middlewares/guards.js');
const { register, login } = require('../services/user.js');
const { createToken } = require('../services/jwt.js');
const { parseError } = require('../util.js');
const { body, validationResult } = require('express-validator');

const userRouter = Router();

userRouter.get('/register', isGuest(), (req, res) => {
    res.render('register', { pageTitle: 'Register Page' });
});

userRouter.post('/register', isGuest(),
    body('username').trim().isLength({ min: 2 }).withMessage('Username must be at least 2 characters long'),
    body('email').trim().isEmail().isLength({ min: 10 }).withMessage('Invalid email'),
    body('password').trim().isLength({ min: 4 }).withMessage('Password must be at least 4 characters long'),
    body('repass').trim().custom((value, { req }) => value == req.body.password).withMessage('Passwords do not match'),
    async (req, res) => {
        const { username, email, password } = req.body;

        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }

            const result = await register(username, email, password);
            const token = createToken(result);

            res.cookie('token', token);

            res.redirect('/');
        } catch (err) {
            res.render('register', { data: { username, email }, errors: parseError(err).errors, pageTitle: 'Register Page' });
        }
    }
);

userRouter.get('/login', isGuest(), (req, res) => {
    res.render('login', { pageTitle: 'Login Page' });
});

userRouter.post('/login', isGuest(),
    body('email').trim(),
    body('password').trim(),
    async (req, res) => {
        const { email, password } = req.body;

        try {
            const result = await login(email, password);
            const token = createToken(result);

            res.cookie('token', token);

            res.redirect('/');
        } catch (err) {
            res.render('login', { data: { email }, errors: parseError(err).errors, pageTitle: 'Login Page' });
        }
    }
);

userRouter.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});

module.exports = { userRouter };