'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  customer.init({
    customer_id: DataTypes.NUMBER,
    store_id: DataTypes.NUMBER,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    address_id: DataTypes.NUMBER,
    email: DataTypes.STRING,
    address_id: DataTypes.STRING,
    activebool: DataTypes.BOOLEAN,
    create_date: DataTypes.DATE,
    last_update: DataTypes.STRING,
    active: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'customer',
    tableName: 'customer',
    timestamps: false
  });
  return customer;
};