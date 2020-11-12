const express = require('express');
const router = express.Router();
const db = require('../config/db');
const Commercial = require('../models/Commercial');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
