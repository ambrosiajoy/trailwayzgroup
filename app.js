var createError = require('http-errors');
var express = require('express');
var bodyParser=require("body-parser");
var path = require('path');
var mongodb = require('mongodb');

const mongoose = require('mongoose');

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

const routes = require('./server/routes/index.js');  

// Connection URL
var url = 'mongodb+srv://trailwayz-tpznr.mongodb.net/test" --username irishjoy13';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  db.close();
});

mongoose.connect('mongo "mongodb+srv://trailwayz-tpznr.mongodb.net/test" --username irishjoy13'); 
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
    console.log("connection succeeded"); 
}) 

var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./server/routes/index.js');
var usersRouter = require('./server/routes/users.js');

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

app.post('/sign_up', function(req,res){ 
  var name = req.body.name; 
  var email =req.body.email; 
  var destination = req.body.destination; 
  var phone =req.body.phone; 

  var data = { 
    "name": name, 
    "email":email, 
    "destination":destination, 
    "phone":phone
  }

    app.post('/addCustomer', uploads.single("data"), (request, response) => {
      let customer = request.file.path;
      var data = new Data({
          Name: request.body.name,
          Email: request.body.email,
          Destination: request.body.destination,
          Phone: request.body.phone
      });
      customer.save().then((document) => {
          response.redirect('/listCustomer');
      }, (error) => {
          response.status(400).send(error);
          //response.send(JSON.stringify(response.body));
      });
    });
    
},
  //db.collection('details').insertOne(data,function(err, collection){ 
  //  if (err) throw err; 
  //  console.log("Record inserted Successfully"); 
          
);
routes.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});
  app.get('/',function(req,res){ 
    res.set({ 
        'Access-control-Allow-Origin': '*'
        });  
      
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

module.exports = app});

//return res.redirect('index.html'); 

//return res.redirect('signup_success.html'); 


