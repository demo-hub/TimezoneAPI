'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TimezoneSchema = new Schema({
    _id: Schema.Types.ObjectId,
    code: {
        type: String,
        required: 'Enter the timezone code',
        unique: true
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Timezone', TimezoneSchema);