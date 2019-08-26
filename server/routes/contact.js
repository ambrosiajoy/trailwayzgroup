const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});

const Contact = module.exports = mongoose.model('Contact', ContactSchema);

module.exports.createContact = function(newContact, callback){
    newContact.save(callback);
};

module.exports.getContactById = function(id, callback){
    Contact.findById(id, callback);
};

console.log(ContactSchema)