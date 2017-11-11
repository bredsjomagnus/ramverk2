var navbarjson = require('../../config/navbar.json');
// var BookInstance = require('../models/bookinstance');

// Blackjack hompepage
exports.indexPage = function(req, res) {
    res.render(
        'blackjack/moduletest', {
            title: 'MODULTEST | maaa16',
            navlist: navbarjson,
            thisurl: "/blackjack"
        });
};

// Blackjack testpage
exports.testPage = function(req, res) {
    res.render(
        'blackjack/testpage', {
            title: 'MODULTEST | maaa16',
            navlist: navbarjson,
            thisurl: "/blackjack",
            testparam: req.params.testparameter
        });
};
