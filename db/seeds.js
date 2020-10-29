const User = require('../models/User');
const sequelize = require('../config/connection');

const userData = [
    {
        username: 'the_silent_wolf',
        email: 'ned@winterfell.com',
        password: 'winteriscoming',
    },
    {
        username: 'king_slayer',
        email: 'jaime@casterlyrock.com',
        password: 'brienne',
    },
    {
        username: 'dragon_mom',
        email: 'daenerys@targaryen.com',
        password: 'wherearemydragons',
    },
    {
        username: 'hodor',
        email: 'hodor@hodor.com',
        password: 'hodorhodor',
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
