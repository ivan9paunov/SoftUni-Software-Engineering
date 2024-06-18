const { Schema, SchemaTypes: Types, model } = require('mongoose');

const movieSchema = new Schema({
    title: {
        required: true,
        type: String
    },
    genre: {
        required: true,
        type: String
    },
    director: {
        required: true,
        type: String
    },
    year: {
        required: true,
        type: Number,
        min: 1878,
        max: 2100
    },
    imageURL: {
        required: true,
        type: String,
        match: /^https?:\/\/.+/
    },
    rating: {
        required: true,
        type: Number,
        min: 0,
        max: 5
    },
    description: {
        required: true,
        type: String,
        maxLength: 1000
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