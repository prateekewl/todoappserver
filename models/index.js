const mongoose = require('mongoose');
// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/testDB').then(() => {
  console.log('Database connection successful');
}).catch(err => {
  console.error('Database connection error');
});

const models = {
  Task: require('./task'),
  User: require('./users'),
  List: require('./list')
}
module.exports = models;
