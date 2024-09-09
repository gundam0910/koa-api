'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rental', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rental_id: {
        type: Sequelize.INTEGER,
      },
      rental_date: {
        type: Sequelize.STRING
      },
      inventory_id: {
        type: Sequelize.INTEGER,
        references: 'inventory',
        referencesKey: 'inventory_id'
      },
      customer_id: {
        type: Sequelize.INTEGER,
        references: 'customer',
        referencesKey: 'customer_id'
      },
      return_date: {
        type: Sequelize.STRING
      },
      staff_id: {
        type: Sequelize.INTEGER,
        references: 'staff',
        referencesKey: 'staff_id'
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
    await queryInterface.dropTable('rental');
  }
};