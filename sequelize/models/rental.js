'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rental extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  rental.init({
    rental_id: DataTypes.NUMBER,
    rental_date: DataTypes.STRING,
    inventory_id: DataTypes.NUMBER,
    customer_id: DataTypes.NUMBER,
    return_date: DataTypes.STRING,
    staff_id: DataTypes.NUMBER,
    last_update: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'rental',
    tableName: 'rental',
    timestamps: false
  });
  return rental;
};