const router = require("express").Router();
const usersController = require("../controllers/usersController");

router.route("/search").post(usersController.findUser);

router.route("/add").post(usersController.create);

router.route("/dreams").get(usersController.getDreams);

router.route("/addDream").patch(usersController.addDream);

module.exports = router;
