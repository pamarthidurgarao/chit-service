const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const config = require("./config/init.config");

const userRoute = require("./api/routes/user.route");

// DB init
config.initializeDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const baseUrl = "/teachit/api/v1";

// cors setup
app.use(config.cors);

// Routes setup
app.use(baseUrl + "/user", userRoute);

module.exports = app;
