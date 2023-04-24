const express = require("express");
const hbs = require("hbs");
const path = require("path");

const app = express();
require("dotenv").config();

// set path
const pubDir = path.join(__dirname, "./public");
const viewsDir = path.join(__dirname, "../templates/views");
const partialsDir = path.join(__dirname, "../templates/partials");
// set view engine
app.set("view engine", "hbs");
app.set("views", viewsDir);
hbs.registerPartials(partialsDir);
app.use(express.static(pubDir));

// connect mongo
// app.use(session({
//   secret: 'foo',
//   store: MongoStore.create({
//     mongoUrl: config.mongodb
//   })
// }));

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
