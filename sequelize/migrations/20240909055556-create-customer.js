'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('customers', {
      customer_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      store_id: {
        type: Sequelize.NUMBER
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      address_id: {
        type: Sequelize.NUMBER
      },
      email: {
        type: Sequelize.STRING
      },
      address_id: {
        type: Sequelize.STRING
      },
      activebool: {
        type: Sequelize.BOOLEAN
      },
      create_date: {
        type: Sequelize.DATE
      },
      last_update: {
        type: Sequelize.STRING
      },
      active: {
        type: Sequelize.NUMBER
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
    await queryInterface.dropTable('customers');
  }
};