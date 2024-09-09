'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class staff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  staff.init({
    staff_id: DataTypes.NUMBER,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    address_id: DataTypes.NUMBER,
    email: DataTypes.STRING,
    store_id: DataTypes.NUMBER,
    active: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    last_update: DataTypes.STRING,
    picture: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'staff',
    tableName: 'staff',
    timestamps: false
  });
  return staff;
};