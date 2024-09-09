'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  address.init({
    address_id: DataTypes.NUMBER,
    address: DataTypes.STRING,
    address2: DataTypes.STRING,
    district: DataTypes.STRING,
    city_id: DataTypes.NUMBER,
    postal_code: DataTypes.NUMBER,
    phone: DataTypes.STRING,
    last_update: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'address',
    tableName: 'address',
    timestamps: false
  });
  return address;
};