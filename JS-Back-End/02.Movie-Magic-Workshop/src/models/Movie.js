const { Schema, SchemaTypes: Types, model } = require('mongoose');

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: [5, 'Title must be at least 5 characters long!'],
        match: [/^[A-Za-z0-9 ]+$/gi, 'Title may only contain English letters, numbers and spaces!']
    },
    genre: {
        type: String,
        required: true,
        minLength: [5, 'Genre must be at least 5 characters long!'],
        match: [/^[A-Za-z0-9 ]+$/gi, 'Genre may only contain English letters, numbers and spaces!']
    },
    director: {
        type: String,
        required: true,
        minLength: [5, 'Director name must be at least 5 characters long!'],
        match: [/^[A-Za-z0-9 ]+$/gi, 'Director name may only contain English letters, numbers and spaces!']
    },
    year: {
        type: Number,
        required: true,
        min: [1900, 'Year should be between 1900 and 2024!'],
        max: [2024, 'Year should be between 1900 and 2024!']
    },
    imageURL: {
        type: String,
        required: true,
        match: [/^https?:\/\/.+/, 'URL should start with http/https!']
    },
    rating: {
        type: Number,
        required: true,
        min: [1, 'Rating is from 1 to 5!'],
        max: [5, 'Rating is from 1 to 5!']
    },
    description: {
        type: String,
        required: true,
        minLength: [20, 'Description should be between 20 and 1000 characters long!'],
        maxLength: [1000, 'Description should be between 20 and 1000 characters long!']
    },
    cast: {
        type: [Types.ObjectId],
        ref: 'Cast',
        default: []
    },
    author: {
        type: Types.ObjectId,
        ref: 'User'
    }
});

const Movie = model('Movie', movieSchema);

module.exports = { Movie };