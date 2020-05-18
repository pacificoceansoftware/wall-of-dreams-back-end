const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dreamSchema = new Schema(
  {
    dream: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
    },
  },
  {
    timestamps: true,
  }
);

const Dream = mongoose.model("Dream", dreamSchema);

module.exports = Dream;
