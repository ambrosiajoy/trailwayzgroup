var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

//let connection = mongodb.createConnection({
 // host: 'cloud.mongodb.com/v2/5d3fe4a479358ebf4a20e37d#clusters',
 // user: 'ambrosiajoy',
 // password: 'Mariah15Sylvia14',
//  database: 'TrailWayz.CustomerForm'
//})


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Trail Wayz' });
});

router.post('/data', function(req, res, next) {
  console.log(req.data);
  const newCustomer = { 
    name: req.data.name,
    email: req.data.email,
    destination: req.data.destination,
    phone: req.data.phone
  };
});

module.exports = router;
