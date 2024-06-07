module.exports = {
    notFound: (req, res) => {
        const headerTitle = 'Page not found';
        res.render('404', { headerTitle });
    }
};