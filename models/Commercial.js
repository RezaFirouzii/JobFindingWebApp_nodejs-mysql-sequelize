const Sequelize = require('sequelize');
const db = require('../config/db');

const Commercial = db.define('commercial', {
    title: {
        type: Sequelize.STRING
    },
    technologies: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    budget: {
        type: Sequelize.STRING
    },
    contact_email: {
        type: Sequelize.STRING
    }
});

module.exports = Commercial;
