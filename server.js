require('dotenv').config()

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Timezone = require('./api/models/timezoneModel'), // always create the Timezone first because City has a reference to Timezone
    City = require('./api/models/cityModel')
bodyParser = require('body-parser');
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true });
// mongoose.connect('mongodb+srv://heroku:8FbaUkX1AAFXLf7u@cluster0-ietwu.mongodb.net/timezonedb', { useNewUrlParser: true });

const dbBootstrap = require('./api/dbBootstrap')

dbBootstrap();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/routes'); //importing route
routes(app); //register the route

// swagger documentation
var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port);

app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});


console.log('Server started in: ' + port);