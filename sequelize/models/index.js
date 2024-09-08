'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const dotenv = require('dotenv').config({ path: ['.env.local', '.env'] });
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/config.js')[env];
const db = {};

let sequelize;

if (process.env.NODE_ENV) {
  sequelize = new Sequelize({
    dialect: "postgres",
    host: config.host,
    port: config.port,
    database: config.database,
    username: config.username,
    password: config.password
  });
} else {
  sequelize = new Sequelize(`${config.url}?sslmode=no-verify`, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
// import { Sequelize } from 'sequelize';
// import { development } from '../../config/config.json';
// export default new Sequelize({
//   dialect: "postgres",
//   host: development.host,
//   port: development.port,
//   database: development.database,
//   username: development.username,
//   password: development.password
// });