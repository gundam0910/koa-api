'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('film_category', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      film_id: {
        type: Sequelize.INTEGER,
        references: 'film',
        referencesKey: 'film_id'
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: 'category',
        referencesKey: 'category_id'
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
    await queryInterface.dropTable('film_category');
  }
};