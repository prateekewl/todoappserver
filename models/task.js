const mongoose = require('mongoose');
// Define user schema
var Schema = mongoose.Schema;

module.exports = mongoose.model('Task', {
  title: String,
  description: String
});
