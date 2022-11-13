const Product = require('../models/product');
const { Op } = require("sequelize");

exports.list = async (req, res) => {
    try {
      const products = await Product.findAll();
      res
        .status(200)
        .json({
          message: `${products.length} elementos encontrados`,
          products,
        });
    } catch (error) {
      res.status(500).json({ message: "Error al listar los productos" });
    }
  };

  exports.listbyname = async (req, res) => {
    try {
        const {name} = req.query
      const products = await Product.findAll({
        where:{
            name:{
                [Op.like]:`%${name}%`
            }
        }
      });
      res
        .status(200)
        .json({
          message: `${products.length} elementos encontrados`,
          products,
        });
    } catch (error) {
      res.status(500).json({ message: "Error al listar los productos por nombre" });
    }
  };
