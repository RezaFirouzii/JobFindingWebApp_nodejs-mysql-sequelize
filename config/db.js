const Sequelize = require('sequelize');
const db = new Sequelize('job_finder', 'root', 'e1985mysqlroot', {
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