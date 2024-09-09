'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  inventory.init({
    inventory_id: DataTypes.NUMBER,
    film_id: DataTypes.NUMBER,
    store_id: DataTypes.NUMBER,
    last_update: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'inventory',
  });
  return inventory;
};