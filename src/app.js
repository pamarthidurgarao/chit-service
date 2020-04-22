const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const config = require('./config/init.config')

const userRoute = require('./api/routes/user.route');
const chitRoute = require('./api/routes/chit.route');
const instalmentRoute = require('./api/routes/instalment.route');

var swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// DB init
config.initializeDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cors setup 
app.use(config.cors);

// Routes setup
app.use('/user', userRoute);
app.use('/chit', chitRoute);
app.use('/instalment', instalmentRoute);

module.exports = app;