const express = require("express");
const hbs = require("hbs");
const path = require("path");

const app = express();
require("dotenv").config();

if (config.isVercel) {
    app.use(async (req, res, next) => {
      await mongoose.connect(MONGODB_URI);
      return next();
    });
  }

// set path
const viewsDir = path.join(__dirname, "../templates/views");
const partialsDir = path.join(__dirname, "../templates/partials");
// set view engine
app.set("view engine", "hbs");
app.set("views", viewsDir);
hbs.registerPartials(partialsDir);
// setting static file to use pic
app.use('/static', express.static('static'));

// json parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
const homeRoute = require("../routes/homeRoutes");
app.use("/", homeRoute);

const postRoute = require("../routes/postRoutes");
app.use("/post", postRoute);

module.exports = app;
