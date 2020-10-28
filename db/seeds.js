const User = require('../models/User');
const sequelize = require('../config/connection');

const userData = [
    {
        username: 'Min Jin Lee',
        email: 'min@gmail.com',
        password: 'password1',
    },
    {
        username: 'Tanaz Bhatena',
        email: 'tanaz@gmail.com',
        password: 'password12',
    },
    {
        username: 'Julia Alvarez',
        email: 'julia@gmail.com',
        password: 'password13',
    },
    {
        username: 'Catherine Adel West',
        email: 'cath@gmail.com',
        password: 'password155',
    }
];

sequelize
    .sync({ force: true })
    .then(() => {
        return User.bulkCreate(userData);
    })
    .then(data => {
        console.log('\n Users seeded!');
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });
