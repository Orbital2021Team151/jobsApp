const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  name: {type: String, required: true},

  email: { type: String, required: true, unique: true },

  password: { type: String, required: true },

  admin: {type: Boolean},

  beneficiaries: {type: [String], required: true},

  verified: {type: Boolean, required: true, default: false},


  //seenPosts: {type: [String], required: false} //if we want to continue with notifications

  //about: {type: String, required: false},

  // profilePic:

});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
