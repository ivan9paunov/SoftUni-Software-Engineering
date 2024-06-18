const { Schema, SchemaTypes: Types, model } = require('mongoose');

const castSchema = new Schema({
    name: {
        required: true,
        type: String,
        minLength: 5,
        match: /^[A-Za-z0-9 ]+$/gi
    },
    age: {
        required: true,
        type: Number,
        min: 1,
        max: 120
    },
    born: {
        required: true,
        type: String,
        minLength: 10,
        match: /^[A-Za-z0-9 ]+$/gi
    },
    nameInMovie: {
        required: true,
        type: String,
        minLength: 5,
        match: /^[A-Za-z0-9 ]+$/gi
    },
    imageURL: {
        required: true,
        type: String,
        match: /^https?:\/\/.+/
    },
    movie: {
        type: [Types.ObjectId],
        ref: 'Movie'
    }
});

const Cast = model('Cast', castSchema);

module.exports = { Cast };