const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const convertToCamel = result => {
  if (Array.isArray(result)) {
    return result.map(row => convertToCamel(row));
  } else {
    let convertedRow = {};
    Object.keys(result).forEach(key => {
      let convertedKey = key.replace(/_(\w)/g, m => m[1].toUpperCase());
      convertedRow[convertedKey] = result[key];
    });
    return convertedRow;
  }
};

const convertToSnakeCase = value =>
  value.replace(/([A-Z])/g, function($1) {
    return '_' + $1.toLowerCase();
  });

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'jumpstartprojects',
      user: 'admin',
      password: 'admin',
      host: 'db-projects'
    },
    wrapIdentifier: (value, origImpl) => origImpl(convertToSnakeCase(value)),
    postProcessResponse: result => convertToCamel(result),
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
    wrapIdentifier: (value, origImpl) => origImpl(convertToSnakeCase(value)),
    postProcessResponse: result => convertToCamel(result),
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
    wrapIdentifier: (value, origImpl) => origImpl(convertToSnakeCase(value)),
    postProcessResponse: result => convertToCamel(result),
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
