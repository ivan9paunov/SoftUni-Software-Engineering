const { getAllMovies, getMovieById, filterMovies } = require('../services/movie.js');

module.exports = {
    home: async (req, res) => {
        const title = 'Movie Catalog';
        const movies = await getAllMovies();

        res.render('home', { movies, title });
    },
    details: async (req, res) => {
        const title = 'Movie Details';
        const id = req.params.id;
        const movie = await getMovieById(id);

        if (!movie) {
            res.render('404');
            return;
        }

        movie.starRating = '&#x2605;'.repeat(movie.rating);

        res.render('details', { movie, title });
    },
    search: async (req, res) => {
        const title = 'Search Movie';
        let movies = await getAllMovies();
        const queries = req.query;

        if (Object.keys(req.query) == 0 || (!queries.title && !queries.genre && !queries.year)) {
            res.render('search', { movies, title });
            return;
        }

        movies = await filterMovies(queries);
        res.render('search', { movies, title });
    }
};