var mongoose = require('mongoose');
  Schema = mongoose.Schema;

  car userSchema = Schema({
  	fb_id: String,
  	following: [String],
  	shleems: []

  });

  module.exports = mongoose.model('User', userSchema);