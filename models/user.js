const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 1,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 1,
  },
  emailAddress: {
    type: String,
    required: true,
    unique: true,
    minlength: 1,
  },
  password: {
    type: String,
    minlength: 8,
    required: true,
  },
  dreams: {
    type: [String],
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
