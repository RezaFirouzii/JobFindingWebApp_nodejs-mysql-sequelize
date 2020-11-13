const Sequelize = require('sequelize');
const db = new Sequelize('<Your database name>', '<Your MySql username>', '<Your MySql password>', {
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