var createError = require('http-errors');
var express = require('express');
var bodyParser=require("body-parser");
var path = require('path');
var mongodb = require('mongodb');

const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/gfg'); 
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
    console.log("connection succeeded"); 
}) 

var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json()); 
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ 
    extended: true
})); 

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.post('/post-CustomerForm', function (req, res) {
  var FirstName = req.body.FirstName;
  var LastName = req.body.LastName;
  var Email = req.body.Email;
  var Address = req.body.Address;
  var City = req.body.City;
  var State = req.body.State;
  var Zip = req.body.Zip;
  var Destination = req.body.Destination},

  db.collection('details').insertOne(data,function(err, collection){ 
    if (err) throw err; 
    console.log("Record inserted Successfully"); 
          
}));

  return res.redirect('signup_success.html'); 


  app.get('/',function(req,res){ 
    res.set({ 
        'Access-control-Allow-Origin': '*'
        }); 
    return res.redirect('index.html'); 
    }).listen(3000) 
      
      
    console.log("server listening at port 3000"); 

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
