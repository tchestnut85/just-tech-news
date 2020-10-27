// import Sequelize constructor
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to the database
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: '3307'
});

module.exports = sequelize;