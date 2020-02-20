const express = require('express');
const router = express.Router();
const controller = require('../controllers/timezoneController');


router.use('/all', controller.list_all_timezones)

module.exports = router;