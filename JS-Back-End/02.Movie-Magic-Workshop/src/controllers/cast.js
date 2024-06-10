const { createCast } = require('../services/cast.js');
const headerTitle = 'Create Cast';

module.exports = {
    getCreateCast: (req, res) => {
        res.render('cast-create', { headerTitle });
    },
    postCreateCast: async (req, res) => {
        const errors = {
            name: !req.body.name,
            age: !req.body.age,
            born: !req.body.born,
            nameInMovie: !req.body.nameInMovie,
            imageURL: !req.body.imageURL
        };

        if (Object.values(errors).includes(true)) {
            res.render('cast-create', { cast: req.body, errors, headerTitle });
            return;
        }

        const result = await createCast(req.body);

        res.redirect('/');
    }
};