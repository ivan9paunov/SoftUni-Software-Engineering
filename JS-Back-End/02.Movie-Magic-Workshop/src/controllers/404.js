module.exports = {
    notFound: (req, res) => {
        const title = 'Page not found';
        res.render('404', { title });
    }
};