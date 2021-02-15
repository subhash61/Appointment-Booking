const mongoose = require('mongoose');
const validator = require('validator');

const clientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'please provide a valid Email'],
  },
  phoneNo: {
    type: Number,
    maxlength: [10, 'mobile no. cannot be greater than 10'],
    minlength: [10, 'mobile no. cannot be smaller than 10'],
  },
  timestamp: {
    type: Date,
    default: Date.now(),
  },
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
