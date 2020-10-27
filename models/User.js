const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our user model
class User extends Model { }

// define table columns and configuration
User.init(
    {
        // ID column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // username column
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // email column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            // allowNull set to false allows us to use a validator
            validate: {
                isEmail: true
            }
        },
        // password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // the password must be at least 4 chars long
                len: [4]
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezerTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;