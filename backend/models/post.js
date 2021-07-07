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
  opportunity: { type: String, required: true },
  skills: {type: [String], required: true},

  startDate: {type: Date, required: true},
  endDate: {type: Date, required: true},
  hoursRequired: {type: String, required: true},

  location: {type: String, },
  beneficiaries: {type: String, required: true},

  approved: {type: Boolean, required: true},
  creationDate: {type: Date, /* required: true */},
  publishDate: {type: Date, /* required: true */},
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  removed: {type: String, required: true},
  rejected: {type: Boolean, required: true}, //remove in future
  reason: {type: String, },
  completed: {type: Boolean, required: true}, //remove in future

  students: {type: {email: String, contact: Number, content: String, applicationUser: String}, required: true},
  reports: {type: {email: String, contact: Number, content: String}, required: true},

  //image:
  imagePath:{type: String, },
});

module.exports = mongoose.model('Post', postSchema);
