const express = require("express");
const cors = require("cors");
const app = express();

const bodyParser = require("body-parser");
const config = require("./config/init.config");

const userRoute = require("./api/routes/user.route");
const chitRoute = require("./api/routes/chit.route");
const instalmentRoute = require("./api/routes/instalment.route");
const chitRequestRoute = require("./api/routes/chit-request.route");

const bidRoute = require("./api/routes/bid.route");

var swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// DB init
config.initializeDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const baseUrl = "/chit/api/v1";

// cors setup
// app.use(config.cors);
app.use(function (req, res, next) {
  //Enabling CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
  );
  next();
});

// Routes setup
app.use(baseUrl + "/user", userRoute);
app.use(baseUrl + "/chit", chitRoute);
app.use(baseUrl + "/instalment", instalmentRoute);
app.use(baseUrl + "/chitRequest", chitRequestRoute);
app.use(baseUrl + "/bid", bidRoute);

module.exports = app;
