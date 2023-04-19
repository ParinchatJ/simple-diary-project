const express = require("express");
const app = express();
const MongoStore = require('connect-mongo');
const config = require("../config/config");
// const session = require('express-session');

require("dotenv").config();

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

// api test
app.get("/", (req, res, next) => {
    res.send("connected");
  });

//routes
const homeRoute = require("../routes/homeRoutes");
app.use("/", homeRoute);

const postRoute = require("../routes/postRoutes");
app.use("/post", postRoute);

module.exports = app