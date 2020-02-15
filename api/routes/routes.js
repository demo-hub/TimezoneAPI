'use strict';
module.exports = function(app) {
    var cityList = require('../controllers/cityController');
    var timezoneList = require('../controllers/timezoneController');

    // City routes
    app.route('/cities')
        .get(cityList.list_all_cities);

    app.route('/cities/:cityId')
        .get(cityList.read_a_city);

    app.route('/cities/timezone/:timezoneCode')
        .get(cityList.get_cities_by_timezone);

    // Timezone routes
    app.route('/timezones')
        .get(timezoneList.list_all_timezones);
};