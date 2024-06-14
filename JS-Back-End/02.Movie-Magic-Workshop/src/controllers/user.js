const { register } = require('../services/user.js');

module.exports = {
    registerGet: (req, res) => {
        res.render('register');
    },
    registerPost: async (req, res) => {
        const { email, password, repass } = req.body;

        try {
            if (!email || !password) {
                throw new Error('All fields are required!');
            }

            if (password != repass) {
                throw new Error('Passwords does not match!');
            }

            const user = await register(email, password);
        
            res.redirect('/');

        } catch (err) {
            res.render('register', { data: { email }, error: err.message });
            return;
        }
    }
};