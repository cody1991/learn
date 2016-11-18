const express = require('express');
const router = express.Router();

const supplies = ['mop', 'broom', 'duster'];

router.get('/:name', (req, res) => {
    // res.send(`hello,  ${req.params.name} your age is ${req.query.age} `);
    res.render('users', {
        name: req.params.name,
        supplies: supplies
    });
});

module.exports = router;
