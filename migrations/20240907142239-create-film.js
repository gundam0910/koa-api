'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('film', {
      film_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {type: DataTypes.STRING(255)},
      description: {},
      release_year: {},
      language_id: {},
      rental_duration: {},
      rental_rate: {},
      length: {},
      replacement_cost: {},
      rating: {},
      last_update: {},
      special_features: {},
      fulltext: {}
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('film');
  }
};