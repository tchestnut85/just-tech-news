// import Sequelize constructor
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to the database
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

// const sequelize = process.env.JAWSDB_URL
//     ? new Sequelize(process.env.JAWSDB_URL)
//     : new Sequelize('just_tech_news_db', 'root', 'poplar', {
//         host: 'localhost',
//         port: 3306,
//         dialect: 'mysql',
//         pool: {
//             max: 5,
//             min: 0,
//             idle: 10000
//         }
//     });

module.exports = sequelize;