const { User } = require('../models/User');
const bcrypt = require('bcrypt');

async function register(email, password) {
    const existing = await User.findOne({ email });

    if (existing) {
        throw new Error('Email is already used!');
    }

    const user = new User({
        email,
        password: await bcrypt.hash(password, 10)
    });

    await user.save();

    return user;
}

async function login(email, password) {

}

module.exports = {
    register,
    login
};