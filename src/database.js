const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  "bsale_test",
  "bsale_test",
  "bsale_test",
  {
    host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 5000,
      idle: 10000,
    },
  }
);

module.exports = {sequelize}
