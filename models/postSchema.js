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
  }
});

module.exports = new mongoose.model("post", postSchema);
// use in model -> post is a name collection in mongodb database
