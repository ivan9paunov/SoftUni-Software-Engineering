const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const { isGuest } = require('../middlewares/guards.js');
const { register, login } = require('../services/user.js');
const { createToken } = require('../services/token.js');

const userRouter = Router();

userRouter.get('/register', isGuest(), (req, res) => {
    res.render('register', { headerTitle: 'Register Page' });
});

userRouter.post(
    '/register',
    isGuest(),
    body('email').trim().isEmail().withMessage('Please enter a valid email!'),
    body('password').trim().isAlphanumeric().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long and may contain only letters and numbers!'),
    body('repass').trim().custom((value, { req }) => value == req.body.password).withMessage('Passwords don\'t match!'),
    async (req, res) => {
        const { email, password, repass } = req.body;

        try {
            const result = validationResult(req);

            if (result.errors.length) {
                const err = new Error('Input validation error!');
                err.errors = Object.fromEntries(result.errors.map(e => [e.path, e.msg]));

                throw err;
            }

            const user = await register(email, password);
            const token = createToken(user);

            res.cookie('token', token, { httpOnly: true });

            res.redirect('/');

        } catch (err) {
            res.render('register', { data: { email }, errors: err.errors, headerTitle: 'Register Page' });
            return;
        }
    }
);

userRouter.get('/login', isGuest(), (req, res) => {
    res.render('login', { headerTitle: 'Login Page'});
});

userRouter.post('/login', isGuest(), async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            throw new Error('All fields are required!');
        }

        const user = await login(email, password);
        const token = createToken(user);

        res.cookie('token', token, { httpOnly: true });

        res.redirect('/');

    } catch (err) {
        res.render('login', { data: { email }, error: err.message });
        return;
    }
});

userRouter.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});

module.exports = { userRouter };