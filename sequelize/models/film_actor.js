'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class film_actor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  film_actor.init({
    actor_id: DataTypes.NUMBER,
    film_id: DataTypes.NUMBER,
    last_update: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'film_actor',
    tableName: 'film_actor',
    timestamps: false
  });
  return film_actor;
};