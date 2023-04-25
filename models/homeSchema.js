const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
  name: 
  {
    type: String,
    required: true,
    unique: true
  },
  date_of_birth: Date,
  goal: String,
  inspiration: String
});

module.exports = new mongoose.model("user", homeSchema);
// use in model -> post is a name collection in mongodb database
