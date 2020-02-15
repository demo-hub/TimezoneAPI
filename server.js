var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Timezone = require('./api/models/timezoneModel'), // always create the Timezone first because City has a reference to Timezone
    City = require('./api/models/cityModel')
bodyParser = require('body-parser');
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/timezonedb', { useNewUrlParser: true });

const timezoneList = [
    { code: 'UTC' },
    { code: 'UTC+1' }
]

if (Timezone.length < timezoneList.length) { // if db already has the timezones we don't need to insert
    Timezone.collection.insertMany(timezoneList, function(err, timezones) {
        if (err) {
            console.log('error')
        } else {
            console.log('%d timezones were successfully stored', timezones.length)
        }
    })
}


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/routes'); //importing route
routes(app); //register the route


app.listen(port);

app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});


console.log('Server started in: ' + port);