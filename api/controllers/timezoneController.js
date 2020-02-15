'use strict';


var mongoose = require('mongoose'),
    Timezone = mongoose.model('Timezone');

exports.list_all_timezones = function(req, res) {
    Timezone.find({}, function(err, city) {
        if (err)
            res.send(err);
        res.json(city);
    });
};