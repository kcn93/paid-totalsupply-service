const createError = require('http-errors');
const express = require('express');
const cors = require('cors')
const path = require('path');
const logger = require('morgan');
// Load dotenv
require('dotenv').config();
// Handle Events
require('events').EventEmitter.defaultMaxListeners = 5;
// Routes
const indexRouter = require('./routes/index');
// const totalSupplyRouter = require('./routes/supply');

const app = express();

// view engine setup
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

var corsOptions = {
    methods: ['GET', 'OPTIONS', 'HEAD'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Origin'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


app.use(cors(corsOptions));
app.use('/', indexRouter);
// app.use('/supply', totalSupplyRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;