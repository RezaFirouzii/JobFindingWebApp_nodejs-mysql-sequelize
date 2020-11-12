const express = require('express');
const router = express.Router();
const db = require('../config/db');
const Commercial = require('../models/Commercial');

/* GET new Commercial page */
router.get('/', (req, res) => {
    res.render('new-commercial', {
        title: "Hire Community | New Commercial"
    });
});

/* POST a new commercial */
router.post('/', (req, res) => {

});

module.exports = router;