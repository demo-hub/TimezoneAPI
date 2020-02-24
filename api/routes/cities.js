const express = require('express');
const router = express.Router();
const controller = require('../controllers/cityController');

router.get('/', controller.list_all_cities);

router.get('/:cityId', controller.read_a_city);

router.get('/timezone/:timezoneCode', controller.get_cities_by_timezone)

module.exports = router;