'use strict';

const { sequelize } = require('./books');

const User = sequelize.define('User', {
      username: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      role: {
        type: Sequelize.ENUM('admin', 'writer', 'customer'),
        allowNull: false
      }
});

module.exports = User;