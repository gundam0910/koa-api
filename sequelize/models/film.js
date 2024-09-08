'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Film extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

  }
  Film.init({
    film_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {type: DataTypes.STRING(255), allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: false},
    release_year: {type: DataTypes.DATE, allowNull: false},
    language_id: {type: DataTypes.SMALLINT, allowNull: false, references: { model: 'language', key: 'language_id'}},
    rental_duration: {type: DataTypes.NUMBER, allowNull: false},
    rental_rate: {type: DataTypes.NUMBER, allowNull: false},
    length: {type: DataTypes.SMALLINT, allowNull: false},
    replacement_cost: {type: DataTypes.NUMBER, allowNull: false},
    rating: {type: DataTypes.STRING, allowNull: false},
    last_update: {type: DataTypes.NOW, allowNull: false},
    special_features: {type: DataTypes.TEXT, allowNull: false},
    fulltext: {type: DataTypes.TSVECTOR, allowNull: false},
  }, {
    sequelize,
    tableName: 'film',
    modelName: 'film',
    underscored: true,
    timestamps: false
  });
  return Film;
};