module.exports = {
    about: (req, res) => {
        const title = 'About us';
        res.render('about', { title });
    }
};