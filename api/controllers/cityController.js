'use strict';


var mongoose = require('mongoose'),
    City = mongoose.model('City'),
    Timezone = mongoose.model('Timezone');

exports.list_all_cities = function(req, res) {
    City.find({}, function(err, city) {
        if (err)
            res.send(err);
        res.json(city);
    });
};

exports.read_a_city = function(req, res) {
    City.findById(req.params.cityId, function(err, city) {
        if (err)
            res.send(err);
        res.json(city);
    });
};

exports.get_cities_by_timezone = async function(req, res) {
    let timezone

    try {

        timezone = await Timezone.find({ code: decodeURIComponent(req.params.timezoneCode) })
           
    } catch(err){
        res.send(err)
    }

    City.find({ timezone: timezone[0]._id }, function(err, cities) {
        if (err)
            res.send(err);
        res.json(cities);
    });
}