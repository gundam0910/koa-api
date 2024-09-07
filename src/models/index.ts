import { Sequelize } from 'sequelize';
import { development } from '../../config/config.json';
export default new Sequelize({
  dialect: "postgres",
  host: development.host,
  port: development.port,
  database: development.database,
  username: development.username,
  password: development.password
});