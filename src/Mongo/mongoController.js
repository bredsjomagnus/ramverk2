var navbarjson = require('../../config/navbar.json');
const database = require("./database");
const dsn = process.env.DBWEBB_DSN || "mongodb://magnus:vb8gGtlQT3@ds129156.mlab.com:29156/maaa16";

// Mongo CRUDs startsida
exports.indexPage = async (req, res) => {
    var data, view;

    //---------------------------

    view = "mongo/index";

    try {
        let result = await database.findInCollection(dsn, "users", {}, {}, 0);

        console.log(result[0].firstname);

        data = {
            title: 'CRUD index | maaa16',
            navlist: navbarjson,
            thisurl: "/mongocrud",
            result: result
        };

        //---------------------------

        res.render(view, data);

        // res.json(res);
    } catch (err) {
        console.log(err);
        // res.json(err);
    }
};

// Mongo CRUDs startsida
exports.insertPage = function(req, res) {
    var data, view;

    //---------------------------

    view = "mongo/insert";

    data = {
        title: 'CRUD insert | maaa16',
        navlist: navbarjson,
        thisurl: "/mongocrud",
        insertpost: req.body.username
    };

    //---------------------------

    res.render(view, data);
};
