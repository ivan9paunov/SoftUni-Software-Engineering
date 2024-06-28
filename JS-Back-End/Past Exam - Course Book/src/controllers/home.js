const { Router } = require('express');
const { getAll, getById, getCreator, getRecent, getUserCourses, getUserSubs } = require('../services/course.js');
const { isUser } = require('../middlewares/guards.js');

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
    const hasSignedUp = Boolean(course.signUpList.find(u => req.user?.username == u));
    const signedUp = course.signUpList.join(', ');
    const creator = await getCreator(course.author.toString());
    course.creator = creator.email;

    res.render('details', { course, signedUp, isOwner, hasSignedUp, pageTitle: 'Course Details' });
});

homeRouter.get('/profile', isUser(), async (req, res) => {
    const userId = req.user.id;
    const username = req.user.username;

    const myCourses = await getUserCourses(userId);
    const mySubscriptions = await getUserSubs(username);

    res.render('profile', { email: req.user.email, myCourses, mySubscriptions, pageTitle: 'My Profile' });
});

module.exports = { homeRouter };