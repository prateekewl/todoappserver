const mongoose = require('mongoose');

var Schema = mongoose.Schema;
module.exports = mongoose.model('User', {
  email: String,
  firstname: String,
  lastname: String,
  password: String
});
