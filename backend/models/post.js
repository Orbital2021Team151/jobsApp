const mongoose = require('mongoose');

//just keep the schema the same as the post model to avoid confusion
const postSchema = mongoose.Schema({
  //id: String, Mongoose will auto generate a unique _id
  orgName: {type: String, required: true},
  uen: {type: String, required: true},
  studentGroupName: {type: String, required: true},
  POC: {type: String, required: true},
  phoneNumber: {type: String, required: true},
  email: {type: String, required: true},
  title: {type: String, required: true},
  content: {type: String, required: true},
  skills: {type: String, required: true},
  startDate: {type: String, required: true},
  endDate: {type: String, required: true},
  hoursRequired: {type: String, required: true},
  beneficiaryInfo: {type: String, required: true},
  //imagePath:
  //creator:
});

module.exports = mongoose.model('Post', postSchema);
