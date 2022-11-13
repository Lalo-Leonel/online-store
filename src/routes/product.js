const router = require("express").Router();
const { list, listbyname } = require("../controllers/product");

router.route("/").get(list)
router.route("/search").get(listbyname);

module.exports = router;