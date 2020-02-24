require('dotenv').config()

var express = require('express'),
    createError = require('http-errors'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose')
Timezone = require('./api/models/timezoneModel'),
    City = require('./api/models/cityModel'),
    Country = require('./api/models/countryModel')
bodyParser = require('body-parser');
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true });

const dbBootstrap = require('./api/dbBootstrap')

dbBootstrap();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


router = require('./api/routes/index')

app.use('/api/v1', router)

app.listen(port);

app.use(function(req, res, next) {
    next(createError(404));
});

app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});


console.log('Server started in: ' + port);