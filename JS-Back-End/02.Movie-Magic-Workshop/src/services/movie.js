const { Movie } = require('../models/Movie.js');

async function getAllMovies() {
    const movies = await Movie.find().lean();
    return movies;
}

async function getMovieById(id) {
    const movie = await Movie.findById(id).lean().populate('cast');
    return movie;
}

async function createMovie(movieData, authorId) {
    const movie = new Movie({
        title: movieData.title,
        genre: movieData.genre,
        director: movieData.director,
        year: Number(movieData.year),
        imageURL: movieData.imageURL,
        rating: Number(movieData.rating),
        description: movieData.description,
        author: authorId
    });

    await movie.save();

    return movie;
}

async function updateMovie(movieId, movieData, userId) {
    const movie = await Movie.findById(movieId);

    if (!movie) {
        throw new Error(`Movie ${movieId} not found!`);
    }

    if (movie.author.toString() != userId) {
        throw new Error('Access denied!');
    }

    movie.title = movieData.title;
    movie.genre = movieData.genre;
    movie.director = movieData.director;
    movie.year = movieData.year;
    movie.imageURL = movieData.imageURL;
    movie.rating = movieData.rating;
    movie.description = movieData.description;

    await movie.save();

    return movie;
}

async function deleteMovie(movieId, userId) {
    const movie = await Movie.findById(movieId);

    if (!movie) {
        throw new Error(`Movie ${movieId} not found!`);
    }

    if (movie.author.toString() != userId) {
        throw new Error('Access denied!');
    }

    await Movie.findByIdAndDelete(movieId);
}

async function filterMovies(title, genre, year) {
    let movies = await Movie.find().lean();

    if (title) {
        movies = movies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));
    }

    if (genre) {
        movies = movies.filter(movie => movie.genre.toLowerCase() == genre.toLowerCase());
    }

    if (year) {
        movies = movies.filter(movie => String(movie.year).toLowerCase() == String(year).toLowerCase());
    }

    return movies;
}

async function attachCastToMovie(movieId, castId, userId) {
    const movie = await Movie.findById(movieId);

    if (!movie) {
        throw new Error(`Movie ${movieId} not found!`);
    }

    if (movie.author.toString() != userId) {
        throw new Error('Access denied!');
    }

    movie.cast.push(castId);

    await movie.save();

    return movie;
}

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    filterMovies,
    attachCastToMovie,
    updateMovie,
    deleteMovie
};