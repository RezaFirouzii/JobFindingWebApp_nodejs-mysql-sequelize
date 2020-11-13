const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const Commercial = require('../models/Commercial');
const Op = Sequelize.Op;

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Hire Community | Home' });
});

/* GET commercials page with search filter */
router.get('/search', (req, res) => {
  let { keyword } = req.query;
  keyword = keyword.replace(/ /g, '');
  Commercial.findAll({ where: { technologies: { [Op.like]: '%' + keyword + '%' }}
  }).then(filteredCommercials => {
    res.render('commercials', {
      commercials: filteredCommercials,
      title: "Hire Community | Commercials"
    });
  }).catch(err => console.log(err));
});

module.exports = router;
