var express = require('express');
var router = express.Router();
var playgroundController = require('../../src/Playground/playgroundController');

/* GET playground index page. */
router.get('/', playgroundController.indexPage);

router.get('/test/:testparameter', playgroundController.testPage);

// Testar GET och POST
router.get('/posttest', playgroundController.postTestPage);
router.post('/posttest', playgroundController.postTestPage);

router.get('/bctestclient', playgroundController.bctestclientPage);

module.exports = router;
