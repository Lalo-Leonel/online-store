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
        const {name, categoryId} = req.query
        let products;
       if(categoryId === "todos"){
        products = await Product.findAll({
            where:{
                name:{
                    [Op.like]:`%${name}%`
                }
            }
        });
       }
       else{
        products = await Product.findAll({
            where:{
                [Op.and]:[
                    {
                        name:{
                            [Op.like]:`%${name}%`
                        },
                    },
                    {
                        category: categoryId
                    }
    
                ]
                
            }
          });
       }
      
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
