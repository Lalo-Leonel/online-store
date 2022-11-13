const { DataTypes } = require('sequelize');
const {sequelize} = require('../database.js')

const Product = sequelize.define('product', {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    url_image:{
        type: DataTypes.STRING
    },
    price:{
        type: DataTypes.FLOAT
    },
    discount:{
        type: DataTypes.NUMBER
    },
    category:{
        type: DataTypes.NUMBER
    }
  },{
    freezeTableName: true,
    timestamps: false
  });

  module.exports = Product;