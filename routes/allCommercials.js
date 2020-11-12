const express = require('express');
const router = express.Router();
const db = require('../config/db');
const Commercial = require('../models/Commercial');

/* GET Commercials page. */
router.get('/', (req, res) => {
    Commercial.findAll().then(commercials => {
        res.render('commercials', {
            commercials,
            title: "Hire Community | Commercials"
        });
    }).catch(err => console.log(err));
});

module.exports = router;