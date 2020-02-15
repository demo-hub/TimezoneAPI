'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CitySchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        required: 'Enter the city name'
    },
    timezone: {
        type: Schema.Types.ObjectId,
        ref: 'Timezone',
        required: 'Enter the city timezone'
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('City', CitySchema);