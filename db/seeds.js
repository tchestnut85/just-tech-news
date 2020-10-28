const User = require('../models/User');
const sequelize = require('../config/connection');

const userData = [
    {
        username: 'Pachinko',
        email: 'Min Jin Lee',
        password: 'Fiction',
    },
    {
        username: 'A Girl Like That',
        email: 'Tanaz Bhatena',
        password: 'Fiction',
    },
    {
        username: 'How the Garcia Girls Lost Their Accents',
        email: 'Julia Alvarez',
        password: 'Fiction',
    },
    {
        username: 'Saving Ruby King: A Novel',
        email: 'Catherine Adel West',
        password: 'Fiction',
    }
];

sequelize
    .sync({ force: true })
    .then(() => {
        return User.bulkCreate(userData);
    })
    .then(data => {
        console.log('Books seeded!');
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });
