'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('film_actor', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      actor_id: {
        type: Sequelize.INTEGER,
        references: 'actor',
        referencesKey: 'actor_id'
      },
      film_id: {
        type: Sequelize.INTEGER,
        references: 'film',
        referencesKey: 'film_id'
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
    await queryInterface.dropTable('film_actor');
  }
};