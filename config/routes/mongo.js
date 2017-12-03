var express = require('express');
var router = express.Router();
var mongoController = require('../../src/Mongo/mongoController');

/* GET playground index page. */
router.get('/index', mongoController.indexPage);

router.post('/insert', mongoController.insertPage);

module.exports = router;
