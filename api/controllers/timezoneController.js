'use strict';


var mongoose = require('mongoose'),
    Timezone = mongoose.model('Timezone');

exports.list_all_timezones = function(req, res) {
    Timezone.find({}, function(err, timezones) {
        if (err)
            res.send(err);
        res.json(timezones);
    });
};