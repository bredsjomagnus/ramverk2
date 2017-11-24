var express = require('express');
var router = express.Router();
var chatController = require('../../src/Chat/chatController');

/* GET playground index page. */
router.get('/', chatController.indexPage);

module.exports = router;
