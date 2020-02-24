'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CountrySchema = new Schema({
    _id: Schema.Types.ObjectId,
    code: {
        type: String,
        required: 'Enter country code'
    },
    name: {
        type: String,
        required: 'Enter the country name'
    },
    timezone: [{
        type: Schema.Types.ObjectId,
        ref: 'Timezone',
        required: 'Enter the country timezones'
    }],
    created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Country', CountrySchema);