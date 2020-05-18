const router = require("express").Router();

let Dream = require("../models/dream");

router.route("/").get((req, res) => {
  Dream.find()
    .then((dreams) => res.json(dreams))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const dream = req.body.dream;
  const newDream = new Dream({ dream: dream });

  newDream
    .save()
    .then(() => res.json("Dream added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
