'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('address', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      address_id: {
        type: Sequelize.NUMBER
      },
      address: {
        type: Sequelize.STRING
      },
      address2: {
        type: Sequelize.STRING
      },
      district: {
        type: Sequelize.STRING
      },
      city_id: {
        type: Sequelize.INTEGER,
        references: 'city',
        referencesKey: 'city_id'
      },
      postal_code: {
        type: Sequelize.NUMBER
      },
      phone: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('address');
  }
};