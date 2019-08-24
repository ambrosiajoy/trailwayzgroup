var createError = require('http-errors');
var express = require('express');
var bodyParser=require("body-parser");
var path = require('path');
//var mongodb = require('mongodb');

const mongoose = require('mongoose');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://AmbrosiaJoy:Mariah15Sylvia14@thingsidontneed-59p4j.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

mongoose.connect('mongodb://localhost:27017/mongodb+srv://AmbrosiaJoy:Mariah15Sylvia14@thingsidontneed-59p4j.gcp.mongodb.net/test?retryWrites=true&w=majority'); 
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
  db.collection('details').insertOne(data,function(err, collection){ 
    if (err) throw err; 
    console.log("Record inserted Successfully"); 
          
});
router.use(function(req, res, next) {
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
return res.redirect('index.html'); 
}).listen(3000)
//return res.redirect('signup_success.html'); 


