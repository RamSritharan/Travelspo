const { imageListClasses } = require("@mui/material");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    id: Number,
    title: String,
    description: String,
    destination: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);