const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    require: true
  },
  topic: {
    type: String,
    require: true
  },
  tell_story: {
    type: String,
    require: true
  },
  emoji: {
    type: String,
    enum: {
      values: [0, 1, 2, 3, 4, 5, 6, 7],
      message: "Is not emoji to support!",
    },
  },
});

module.exports = new mongoose.model("post", postSchema);
// use in model -> post is a name collection in mongodb database
