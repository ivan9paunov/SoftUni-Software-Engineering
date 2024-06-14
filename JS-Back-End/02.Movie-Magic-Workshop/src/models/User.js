const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        email: {
            required: true,
            type: String
        },
        password: {
            required: true,
            type: String
        },
    },
    {
        collation: {
            locale: 'en',
            strength: 2
        }
    }
);

const User = model('User', userSchema);

module.exports = { User };