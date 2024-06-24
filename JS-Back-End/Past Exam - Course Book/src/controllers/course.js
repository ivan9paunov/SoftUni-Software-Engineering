const { Router } = require('express');
const { isUser } = require('../middlewares/guards.js');
const { body, validationResult } = require('express-validator');
const { parseError } = require('../util.js');
const { create, signUp, getById, update, deleteById } = require('../services/course.js');

const courseRouter = Router();

courseRouter.get('/create', isUser(), async (req, res) => {
    res.render('create', { pageTitle: 'Create Course' });
});

courseRouter.post('/create', isUser(),
    body('title').trim().isLength({ min: 5 }).withMessage('Title must be at least 5 characters'),
    body('type').trim().isLength({ min: 3 }).withMessage('Type must be at least 3 characters'),
    body('certificate').trim().isLength({ min: 2 }).withMessage('Certificate must be at least 2 characters'),
    body('image').trim().isURL({ require_tld: false }).withMessage('Image must be a valid URL'),
    body('description').trim().isLength({ min: 10 }).withMessage('Description must be at least 10 characters'),
    body('price').trim().isFloat({ min: 0 }).withMessage('Price must be a positive number'),
    async (req, res) => {
        const data = req.body;
        const userId = req.user.id;

        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }

            await create(data, userId);

            res.redirect('/catalog');
        } catch (err) {
            res.render('create', { data, errors: parseError(err).errors, pageTitle: 'Create Course' });
        }
    }
);

courseRouter.get('/edit/:id', isUser(), async (req, res) => {
    const course = await getById(req.params.id);

    res.render('edit', { data: course, pageTitle: 'Edit Course' });
});

courseRouter.post('/edit/:id', isUser(),
    body('title').trim().isLength({ min: 5 }).withMessage('Title must be at least 5 characters'),
    body('type').trim().isLength({ min: 3 }).withMessage('Type must be at least 3 characters'),
    body('certificate').trim().isLength({ min: 2 }).withMessage('Certificate must be at least 2 characters'),
    body('image').trim().isURL({ require_tld: false }).withMessage('Image must be a valid URL'),
    body('description').trim().isLength({ min: 10 }).withMessage('Description must be at least 10 characters'),
    body('price').trim().isFloat({ min: 0 }).withMessage('Price must be a positive number'),
    async (req, res) => {
        const data = req.body;
        const userId = req.user.id;
        const recipeId = req.params.id;

        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }

            await update(recipeId, data, userId);

            res.redirect('/details/' + recipeId);
        } catch (err) {
            res.render('edit', { data, errors: parseError(err).errors, pageTitle: 'Edit Course' });
        }
    }
);

courseRouter.get('/delete/:id', isUser(), async (req, res) => {
    const userId = req.user.id;
    const courseId = req.params.id;

    try {
        await deleteById(courseId, userId);

        res.redirect('/catalog');
    } catch (err) {
        res.redirect('/details/' + courseId);
    }
});

courseRouter.get('/sign/:id', isUser(), async (req, res) => {
    const userId = req.user.id;
    const username = req.user.username;
    const courseId = req.params.id;

    try {
        await signUp(courseId, userId, username);

        res.redirect('/details/' + courseId);
    } catch (err) {
        res.render('404');
    }
});

module.exports = { courseRouter };
