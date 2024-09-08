module.exports = {
  local: {
    username: 'postgres',
    password: 'password',
    database: 'dvdrental',
    host: 'localhost',
    dialect: 'postgres',
    port: 5432
  },
  development: {
    username: 'postgres',
    password: 'password',
    database: 'dvdrental',
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
  test: {
    url: '127.0.0.1',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
}
