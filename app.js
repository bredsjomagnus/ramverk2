var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// MongoDB
// const dsn =  process.env.DBWEBB_DSN ||
// "mongodb://magnus:vb8gGtlQT3@ds129156.mlab.com:29156/maaa16";
// const database = require("./src/Mongo/database");


// const fs = require("fs");
// // const pathjson = require("path");
// const docs = JSON.parse(fs.readFileSync(
//     path.resolve(__dirname, "setup.json"),
//     "utf8"
// ));
//
// console.log(docs);

// ROUTES
var index = require('./config/routes/index');
var memory = require('./config/routes/memory');
var chat = require('./config/routes/chat');
var playground = require('./config/routes/playground');
var users = require('./config/routes/users');
var mongoroute = require('./config/routes/mongo');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public/images/favicon', 'favicon.png')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', index);
app.use('/memory', memory);
app.use('/chat', chat);
app.use('/playground', playground);
app.use('/users', users);
app.use('/mongocrud', mongoroute);

// Return a JSON object with list of all documents within the collection.
// app.get("/list", async (request, response) => {
//     try {
//         let res = await database.findInCollection(dsn, "users", {}, {}, 0);
//
//         console.log(res);
//         response.json(res);
//     } catch (err) {
//         console.log(err);
//         response.json(err);
//     }
// });




// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');

    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
