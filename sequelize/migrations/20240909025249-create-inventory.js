'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('inventory', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      inventory_id: {
        type: Sequelize.INTEGER,
        references: 'inventory',
        referencesKey: 'inventory_id'
      },
      film_id: {
        type: Sequelize.INTEGER,
        references: 'film',
        referencesKey: 'film_id'
      },
      store_id: {
        type: Sequelize.INTEGER,
        references: 'store',
        referencesKey: 'store_id'
      },
      last_update: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('inventory');
  }
};