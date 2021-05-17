const express = require('express');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/users');

const mongoose = require("mongoose");

const app = express();

//username: admin, password: bh447oHghiti5g2E
mongoose.connect("mongodb+srv://admin:bh447oHghiti5g2E@eprepmeancoursecluster.qa0ny.mongodb.net/orbitalDatabase?retryWrites=true&w=majority")
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas!");
  })
  .catch((e) => {
    console.log("Error occurred!");
    console.log(e);
  });

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader(
    'Access-Control-Allow-Headers',
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    );
    res.setHeader('Access-Control-Allow-Methods', "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.use('/api/posts', postRoutes);
app.use('/api/user', userRoutes);

module.exports = app;
