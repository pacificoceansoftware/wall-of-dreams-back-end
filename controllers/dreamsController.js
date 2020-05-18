const Dream = require('../models/dream');

// Defining all methods and business logic for routes

module.exports = {
	findAll: function(req, res) {
        Dream.find()
        .then((dreams) => res.json(dreams))
        .catch((err) => res.status(400).json("Error: " + err));
	},
	create: function(req, res) {
            const dream = req.body.dream;
            const newDream = new Dream({ dream: dream });
          
            newDream
              .save()
              .then(() => res.json("Dream added"))
              .catch((err) => res.status(400).json("Error: " + err));
	},
};
