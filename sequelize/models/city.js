'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class city extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  city.init({
    city_id: DataTypes.NUMBER,
    city: DataTypes.STRING,
    country_id: DataTypes.NUMBER,
    last_update: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'city',
    tableName: 'city',
    timestamps: false
  });
  return city;
};