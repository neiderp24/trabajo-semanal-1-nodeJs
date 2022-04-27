const { Sequelize } = require('sequelize');

const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '98032463304',
  database: 'first-deliverable',
  logging: false,
});

module.exports = { db };
