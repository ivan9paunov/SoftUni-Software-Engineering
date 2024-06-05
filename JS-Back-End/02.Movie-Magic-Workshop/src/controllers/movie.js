const { createMovie } = require('../services/movie.js');
const title = 'Create Movie';

module.exports = {
    getCreate: (req, res) => {
        res.render('create', { title });
    },
    postCreate: async (req, res) => {
        const errors = {
            title: !req.body.title,
            genre: !req.body.genre,
            director: !req.body.director,
            year: !req.body.year,
            imageURL: !req.body.imageURL,
            rating: !req.body.rating,
            description: !req.body.description
        };

        if (Object.values(errors).includes(true)) {
            res.render('create', { movie: req.body, errors, title });
            return;
        }

        const result = await createMovie(req.body);

        res.redirect('/details/' + result.id);
    }
};