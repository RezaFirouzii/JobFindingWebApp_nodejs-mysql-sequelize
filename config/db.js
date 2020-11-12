const Sequelize = require('sequelize');
const db = new Sequelize('<Your Database Name>', '<Your MySql Username>', '<Your MySql Password>', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: 'false',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = db;