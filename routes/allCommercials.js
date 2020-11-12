const express = require('express');
const router = express.Router();
const db = require('../config/db');
const Commercial = require('../models/Commercial');

/* GET Commercials page. */
router.get('/', (req, res) => {
    Commercial.findAll().then(commercials => {
        console.log(commercials);
        res.sendStatus(200);
    }).catch(err => console.log(err));
});

module.exports = router;