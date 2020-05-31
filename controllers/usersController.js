const User = require("../models/user");

// Defining all methods and business logic for routes
module.exports = {
  findUser: function (req, res) {
    User.find({
      emailAddress: req.body.emailAddress,
      password: req.body.password,
    })
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      emailAddress: req.body.emailAddress,
      password: req.body.password,
      dreams: req.body.dream,
    });
    newUser
      .save()
      .then(() => res.json("User added"))
      .catch((err) => res.status(400).json("Error: " + err));
  },
  getDreams: function (req, res) {
    User.find({}, "dreams")
      .then((dream) => res.json(dream))
      .catch((err) => res.status(422).json("Error: " + err));
  },
  addDream: function (req, res) {
    const filter = { emailAddress: req.body.emailAddress };
    const update = {$push: { dreams: req.body.dream }};
    User.findOneAndUpdate(filter, update, {
      upsert: true,
    })
      .then((dream) => res.json(dream))
      .catch((err) => res.status(422).json("Error: " + err));
  },
};
