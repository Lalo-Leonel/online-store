const router = require("express").Router();
const { list } = require("../controllers/category");

router.route("/").get(list)

module.exports = router;