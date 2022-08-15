const { imageListClasses } = require("@mui/material");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    user_id: String,
    name: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      minLength: 3,
      requred: true,
    },
    travelCollection: {
      Object,
    },
    countriesVisited: {
      Object,
    },
    followers: Object,
    following: Object,
    contactInfo: String,
    profile_img: Image,
    Inspo_tags: Object,
    board: { type: Schema.Types.ObjectId, ref: "Board" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);