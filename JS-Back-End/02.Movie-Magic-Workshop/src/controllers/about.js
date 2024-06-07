module.exports = {
    about: (req, res) => {
        const headerTitle = 'About us';
        res.render('about', { headerTitle });
    }
};