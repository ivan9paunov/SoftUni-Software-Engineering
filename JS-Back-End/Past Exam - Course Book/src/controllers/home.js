const { Router } = require('express');
const { getAll, getById, getCreator, getRecent } = require('../services/course.js');

const homeRouter = Router();

homeRouter.get('/', async (req, res) => {
    const courses = await getRecent();

    if (!courses) {
        res.status(404).render('404');
        return;
    }

    res.render('home', { courses, pageTitle: 'Course Book' });
});

homeRouter.get('/catalog', async (req, res) => {
    const courses = await getAll();

    res.render('catalog', { courses, pageTitle: 'Courses' });
});

homeRouter.get('/details/:id', async (req, res) => {
    const courseId = req.params.id;
    const course = await getById(courseId);

    if (!course) {
        res.status(404).render('404');
        return;
    }
    
    const isOwner = req.user?.id == course.author.toString();
    const hasSignedUp = Boolean(course.signUpList.find(u => req.user.username == u));
    const signedUp = course.signUpList.join(', ');
    const creator = await getCreator(course.author.toString());
    course.creator = creator.email;

    res.render('details', { course, signedUp, isOwner, hasSignedUp, pageTitle: 'Course Details' });
});

module.exports = { homeRouter };