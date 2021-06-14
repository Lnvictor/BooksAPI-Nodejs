const Sequelize = require('sequelize');
const { sequelize } = require('./books')


const User = sequelize.define(
    'User', {
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        role: {
            type: Sequelize.ENUM('admin', 'writer', 'customer')
        }
    });


    module.exports = User