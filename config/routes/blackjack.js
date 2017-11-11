var express = require('express');
var router = express.Router();
var blackjackController = require('../../src/Blackjack/blackjackController');

/* GET blackjack index page. */
router.get('/', blackjackController.indexPage);

router.get('/test/:testparameter', blackjackController.testPage);

module.exports = router;
