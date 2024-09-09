'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class language extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  language.init({
    language_id: DataTypes.NUMBER,
    name: DataTypes.STRING,
    last_update: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'language',
    tableName: 'language',
    timestamps: false
  });
  return language;
};