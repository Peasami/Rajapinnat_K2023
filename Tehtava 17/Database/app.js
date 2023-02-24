var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexOpiskelija = require('./routes/opiskelija');
var indexOpintojakso = require('./routes/opintojakso');
var indexArviointi = require('./routes/arviointi');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/opiskelija', indexOpiskelija);
app.use('/opintojakso', indexOpintojakso);
app.use('/arviointi', indexArviointi);

module.exports = app;
