'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('payment', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      payment_id: {
        type: Sequelize.INTEGER,
      },
      customer_id: {
        type: Sequelize.INTEGER,
        references: 'customer',
        referencesKey: 'customer_id'
      },
      staff_id: {
        type: Sequelize.INTEGER,
        references: 'staff',
        referencesKey: 'staff_id'
      },
      rental_id: {
        type: Sequelize.INTEGER,
        references: 'rental',
        referencesKey: 'rental_id'
      },
      amount: {
        type: Sequelize.NUMBER
      },
      payment_date: {
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
    await queryInterface.dropTable('payment');
  }
};