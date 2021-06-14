'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Books', 'genre', {type: Sequelize.STRING, allowNull: false});
    await queryInterface.addColumn('Books', 'pages', {type: Sequelize.INTEGER, allowNull: false});
    await queryInterface.addColumn('Books', 'price', {type: Sequelize.DECIMAL, allowNull: false});
    await queryInterface.addColumn('Books', 'publishedDate', {type: Sequelize.DATE});
    await queryInterface.addColumn('Books', 'publishingCompany', {type: Sequelize.STRING, allowNull: false});
    await queryInterface.addColumn('Books', 'registrationDate', {type: Sequelize.DATE, allowNull: false});
    await queryInterface.addColumn('Books', 'registredBy', {type: Sequelize.STRING, allowNull: false});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.removeColumn('Books', 'genre');
     await queryInterface.removeColumn('Books', 'pages');
     await queryInterface.removeColumn('Books', 'price');
     await queryInterface.removeColumn('Books', 'publishedDate');
     await queryInterface.removeColumn('Books', 'publishingCompany');
     await queryInterface.removeColumn('Books', 'registrationDate');
     await queryInterface.removeColumn('Books', 'registredBy');
  }
};
