const mongoose = require('mongoose');

//just keep the schema the same as the post model to avoid confusion
const postSchema = mongoose.Schema({
  //id: String, Mongoose will auto generate a unique _id
  orgName: {type: String, required: true},
  uen: {type: String, required: true},
  POC: {type: String, required: true},
  phoneNumber: {type: String, required: true},
  email: {type: String, required: true},
  title: {type: String, required: true},
  content: {type: String, required: true},
  skills: {type: String, required: true},

  startDate: {type: Date, required: true},
  endDate: {type: Date, required: true},
  hoursRequired: {type: String, required: true},

  beneficiaries: {type: [String], required: true},
  approved: {type: Boolean, },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  students: {type: {email: String, contact: Number, content: String}, required: true},
  reports: {type: {email: String, contact: Number, content: String}, required: true},

  //imagePath:
});

module.exports = mongoose.model('Post', postSchema);
