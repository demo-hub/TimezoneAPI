const express = require('express');
const router = express.Router();
const controller = require('../controllers/timezoneController');


router.use('/', controller.list_all_timezones)

module.exports = router;