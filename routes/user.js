const router = require("express").Router();
const usersController = require("../controllers/usersController");

router.route("/").get(usersController.findUser);

router.route("/add").post(usersController.create);

module.exports = router;
