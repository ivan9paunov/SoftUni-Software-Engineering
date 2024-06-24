const { Schema, model, Types } = require('mongoose');

const courseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    certificate: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    signUpList: {
        type: [String],
        ref: 'User',
        default: []
    },
    author: {
        type: Types.ObjectId,
        ref: 'User'
    }
});

const Course = model('Course', courseSchema);

module.exports = { Course };

