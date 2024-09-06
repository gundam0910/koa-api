import { Pool } from 'pg';
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

export const pool = new Pool({
    host: config.host,
    database: config.password
});