const mongoose = require('mongoose');
// Define list schema
var Schema = mongoose.Schema;

module.exports = mongoose.model('List', {
  title: String,
  description: String
});
