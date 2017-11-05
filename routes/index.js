var express = require('express');
var router = express.Router();
var url = require('url');
var navbarjson = require('../config/navbar.json');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render(
        'index',
        {
            title: 'RV2 | maaa16',
            navlist: navbarjson,
            thisurl: req.url
        });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
    res.render(
        'about',
        {
            title: 'OM | maaa16',
            navlist: navbarjson,
            thisurl: req.url
        });
});

/* GET reports page. */
router.get('/reports', function(req, res, next) {
    res.render(
        'reports',
        {
            title: 'RAPPORTER | maaa16',
            navlist: navbarjson,
            thisurl: req.url
        });
});

module.exports = router;
