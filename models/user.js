'use strict';

module.exports = (sequelize, DataTypes)  => {
    const User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.ENUM('admin', 'writer', 'customer'),
            allowNull: false
        }
    });

    return User;
};