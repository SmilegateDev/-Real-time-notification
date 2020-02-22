require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const index = require('./routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);

//require('mongoose').connect('mongodb://localhost/tattletale');
mongoose.connect(process.env.MONGO_DB,{ useNewUrlParser: true, useUnifiedTopology: true }); // 옵션 필수 - 에러 해결
mongoose.set('useFindAndModify', false); // 옵션 설정
module.exports = app;
