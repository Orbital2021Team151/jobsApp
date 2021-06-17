const express = require('express');
const bodyParser = require('body-parser');
const mongoSanitize = require('express-mongo-sanitize');

const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/users');
const path = require("path");

const mongoose = require("mongoose");
//const nev = require('email-verification')(mongoose);

const app = express();

//username: admin, password: bh447oHghiti5g2E
//cli command @mongdb's bin folder: mongo "mongodb+srv://eprepmeancoursecluster.qa0ny.mongodb.net/myFirstDatabase" --username <username>
mongoose.connect("mongodb+srv://admin:" + process.env.MONGO_ATLAS_PW + "@eprepmeancoursecluster.qa0ny.mongodb.net/orbitalDatabase?retryWrites=true&w=majority")
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas!");
  })
  .catch((e) => {
    console.log("Error occurred!");
    console.log(e);
  });

app.use(bodyParser.json());
//app.use(mongoSanitize());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader(
    'Access-Control-Allow-Headers',
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    );
    res.setHeader('Access-Control-Allow-Methods', "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  next();
});

app.use('/api/posts', postRoutes);
app.use('/api/user', userRoutes);

//for deployment in heroku
app.use("/", express.static(path.join(__dirname, "../dist/jobsApp")));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "../dist/jobsApp/index.html"));
});


module.exports = app;
