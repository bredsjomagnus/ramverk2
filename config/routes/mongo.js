var express = require('express');
var router = express.Router();
var mongoController = require('../../src/Mongo/mongoController');

/* GET playground index page. */
router.get('/index', mongoController.indexPage);
router.post('/index', mongoController.indexPage);
router.post('/edit', mongoController.editProcess);
router.get('/delete/:id', mongoController.deleteProcess);

module.exports = router;
