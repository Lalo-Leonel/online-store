const { DataTypes } = require('sequelize');
const {sequelize} = require('../database.js')

const Category = sequelize.define('category', {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    }
  },{
    freezeTableName: true,
    timestamps: false
  });

  module.exports = Category;