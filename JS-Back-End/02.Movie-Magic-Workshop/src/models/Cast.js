const { Schema, SchemaTypes: Types, model } = require('mongoose');

const castSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number,
        min: 0,
        max: 120
    },
    born: {
        required: true,
        type: String
    },
    nameInMovie: {
        required: true,
        type: String
    },
    imageURL: {
        required: true,
        type: String,
        regexp: /^https?:\/\/.+/
    },
    movie: {
        type: [Types.ObjectId],
        ref: 'Movie'
    }
});

const Cast = model('Cast', castSchema);

module.exports = { Cast };