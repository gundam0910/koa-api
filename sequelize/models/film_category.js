'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class film_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  film_category.init({
    film_id: DataTypes.NUMBER,
    category_id: DataTypes.NUMBER,
    last_update: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'film_category',
    tableName: 'film_category',
    timestamps: false
  });
  return film_category;
};