var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

//let connection = mongodb.createConnection({
 // host: 'cloud.mongodb.com/v2/5d3fe4a479358ebf4a20e37d#clusters',
 // user: 'ambrosiajoy',
 // password: 'Mariah15Sylvia14',
//  database: 'TrailWayz.CustomerForm'
//})
var Contact = require(`./contact`);

/* GET home page. */
router.get('/contact', function(req, res) {
  res.render('contact');
});

router.post('/contact', function(req, res) {
  console.log(req.body);
    var name = req.body.name;
    var email = req.body.email;
    var destination = req.body.destination;
    var phone = req.body.phone;
  
var newContact = new Contact({
  name: name,
  email: email,
  destination: destination,
  phone: phone
  });
  
  Contact.createContact(newContact, function(err, contact){

  });

  res.redirect('/');
});

module.exports = router;
