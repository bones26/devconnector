const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema (name, email, password, date and avatar from gravatar)
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.export = User = mongoose.model('users', UserSchema);