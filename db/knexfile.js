const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'jumpstartprojects',
      user: 'admin',
      password: 'admin',
      host: 'db-projects'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: path.join(__dirname, './migrations')
    },
    seeds: {
      directory: path.join(__dirname, './seeds')
    }
  },
  test: {
    client: 'postgresql',
    connection: {
      database: 'jumpstartprojects',
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      host: process.env.DB_HOST
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: path.join(__dirname, './migrations')
    },
    seeds: {
      directory: path.join(__dirname, './seeds')
    }
  },
  production: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      host: process.env.DB_HOST
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: path.join(__dirname, './migrations')
    },
    seeds: {
      directory: path.join(__dirname, './seeds')
    }
  }
};
