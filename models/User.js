var mongoose = require('mongoose');
  Schema = mongoose.Schema;

  var userSchema = Schema({
  	fb_id: String,
  	following: [String],
  	shleems: [],
  });

var mod = mongoose.model('User', userSchema);

module.exports = mod//mongoose.model('User', userSchema);