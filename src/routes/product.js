const router = require("express").Router();
const { list } = require("../controllers/product");

router.route("/").get(list);

module.exports = router;