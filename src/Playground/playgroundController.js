var navbarjson = require('../../config/navbar.json');

// Sandlådans startsida
exports.indexPage = function(req, res) {
    var data, view;

    //---------------------------

    view = "playground/moduletest";

    data = {
        title: 'MODULTEST | maaa16',
        navlist: navbarjson,
        thisurl: "/playground"
    };

    //---------------------------

    res.render(view, data);
};

// Testsida för att kolla hur man länkar
exports.testPage = function(req, res) {
    var data, view;

    //----------------------------

    view = "playground/testpage";

    data = {
        title: 'MODULTEST | maaa16',
        navlist: navbarjson,
        thisurl: "/playground",
        testparam: req.params.testparameter
    };

    //---------------------------

    res.render(view, data);
};


/**
* Request metod kommer vara GET första gången man når sidan.
* Trycker man submit kommer man tillbaka hit och då är
* metoden POST och req.body.one är den parameter som man
* skrivit i inputfältet med name='one'.
*/
exports.postTestPage = function(req, res) {
    var data, view;

    //--------------------------

    view = 'playground/posttest';

    data = {
        title: 'MODULTEST | maaa16',
        navlist: navbarjson,
        thisurl: "/playground",
        method: req.method,
        postedget: req.query.oneget, // name='oneget'
        postedpost: req.body.onepost // name='onepost'
    };

    //---------------------------

    res.render(view, data);
};
