const Category = require('../models/category');
const { Op } = require("sequelize");

exports.list = async (req, res) => {
    try {
      const categories = await Category.findAll();
      res
        .status(200)
        .json({
          message: `${categories.length} elementos encontrados`,
          categories,
        });
    } catch (error) {
      res.status(500).json({ message: "Error al listar las categorias" });
    }
  };

