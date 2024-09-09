'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  country.init({
    country_id: DataTypes.NUMBER,
    country: DataTypes.STRING,
    last_update: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'country',
    tableName: 'country',
    timestamps: false
  });
  return country;
};