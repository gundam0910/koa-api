'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  payment.init({
    payment_id: DataTypes.NUMBER,
    customer_id: DataTypes.NUMBER,
    staff_id: DataTypes.NUMBER,
    rental_id: DataTypes.NUMBER,
    amount: DataTypes.NUMBER,
    payment_date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'payment',
    tableName: 'payment',
    timestamps: false
  });
  return payment;
};