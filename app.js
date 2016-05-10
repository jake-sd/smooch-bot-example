'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.render('index', {
        appToken: process.env.cid71f5sxrwgaxbohlyn9p0ll
    });
});

module.exports = app;
