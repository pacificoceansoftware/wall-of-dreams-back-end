const router = require("express").Router();
const dreamsController = require("../controllers/dreamsController");

router.route("/").get(dreamsController.findAll);

router.route("/add").post(dreamsController.create);

module.exports = router;
