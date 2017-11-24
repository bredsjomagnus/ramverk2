var navbarjson = require('../../config/navbar.json');

// Sandlådans startsida
exports.indexPage = function(req, res) {
    var data, view;

    //---------------------------

    view = "chat/chat";

    data = {
        title: 'MODULTEST | maaa16',
        navlist: navbarjson,
        thisurl: "/chat"
    };

    //---------------------------

    res.render(view, data);
};
