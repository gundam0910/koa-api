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
      description: {type: DataTypes.TEXT},
      release_year: {type: DataTypes.STRING(255)},
      language_id: {
        type: Sequelize.INTEGER,
        references: 'language',
        referencesKey: 'language_id'
      },
      rental_duration: {type: DataTypes.STRING(255)},
      rental_rate: {type: DataTypes.STRING(255)},
      length: {type: DataTypes.STRING(255)},
      replacement_cost: {type: DataTypes.STRING(255)},
      rating: {type: DataTypes.STRING(255)},
      last_update: {type: DataTypes.STRING(255)},
      special_features: {type: DataTypes.STRING(255)},
      fulltext: {type: DataTypes.STRING(255)}
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('film');
  }
};