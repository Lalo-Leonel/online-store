const Product = require('../models/product');

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
