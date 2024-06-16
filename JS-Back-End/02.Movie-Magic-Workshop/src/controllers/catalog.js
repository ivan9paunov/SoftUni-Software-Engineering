const { getAllMovies, getMovieById, filterMovies } = require('../services/movie.js');

module.exports = {
    home: async (req, res) => {
        const headerTitle = 'Movie Catalog';
        const movies = await getAllMovies();

        for (const movie of movies) {
            movie.isAuthor = req.user && req.user._id == movie.author.toString();
        }

        res.render('home', { movies, headerTitle });
    },
    details: async (req, res) => {
        const headerTitle = 'Movie Details';
        const id = req.params.id;
        const movie = await getMovieById(id);

        if (!movie) {
            res.render('404');
            return;
        }

        movie.isAuthor = req.user && req.user._id == movie.author.toString();
        movie.starRating = '&#x2605;'.repeat(movie.rating);

        res.render('details', { movie, headerTitle });
    },
    search: async (req, res) => {
        const headerTitle = 'Search Movie';
        const { title, genre, year } = req.query;
        const movies = await filterMovies(title, genre, year);

        res.render('search', { movies, title, genre, year, headerTitle });
    }
};