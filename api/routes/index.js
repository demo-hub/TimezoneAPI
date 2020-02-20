const express = require("express"),
    city = require("./cities"),
    timezone = require('./timezones'),
    router = express.Router(),
    swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('../../swagger.json');

router.use("/cities", city);
router.use("/timezones", timezone);
router.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = router;