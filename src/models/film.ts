import { Model, Sequelize, DataTypes } from 'sequelize';
export default class Film extends Model {
  public film_id?: number;
  public title?: string;
  public description?: string;
  public release_year?: string;
  public language_id?: string;
  public rental_duration?: string;
  public rental_rate?: string;
  public length?: string;
  public replacement_cost?: string;
  public rating?: string;
  public last_update?: string;
  public special_features?: string;
  public fulltext?: string;
}
export const FilmMap = (sequelize: Sequelize) => {
  Film.init({
    film_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {type: DataTypes.STRING(255), allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: false},
    release_year: {type: DataTypes.DATE, allowNull: false},
    language_id: {type: DataTypes.SMALLINT, allowNull: false, references: { model: 'language', key: 'language_id'}},
    rental_duration: {type: DataTypes.NUMBER, allowNull: false},
    rental_rate: {type: DataTypes.NUMBER, allowNull: false},
    length: {type: DataTypes.SMALLINT, allowNull: false},
    replacement_cost: {type: DataTypes.NUMBER, allowNull: false},
    rating: {type: DataTypes.STRING, allowNull: false},
    last_update: {type: DataTypes.NOW, allowNull: false},
    special_features: {type: DataTypes.TEXT, allowNull: false},
    fulltext: {type: DataTypes.TSVECTOR, allowNull: false},
  }, {
    sequelize,
    tableName: 'film',
    timestamps: false
  });
  Film.sync();
}