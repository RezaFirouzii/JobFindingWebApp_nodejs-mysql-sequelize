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
    let { title, technologies, budget, description, contact_email } = req.body;
    const errors = [];
    if (!title) errors.push({ text: 'Please add a title ✗' });
    if (!technologies) errors.push({ text: 'Please add some technologies ✗' });
    if (!description) errors.push({ text: 'Please add a description ✗' });
    if (!contact_email) errors.push({ text: 'Please add a contact email ✗' });

    if (errors.length) {
        res.json({
            errors,
            title,
            technologies,
            budget,
            description,
            contact_email
        });
    } else {
        if (Number(budget)) budget = `$${budget}`;
        else budget = 'Unknown';

        technologies = technologies.toLowerCase().replace(/, /g, ',');

        Commercial.create({
            title,
            technologies,
            budget,
            description,
            contact_email
        });
        errors.push({
            text: "✔ Your Commercial is registered successfully, Thanks!"
        });
        res.json({ errors });
    }
});

module.exports = router;