const express = require("express");
const bodyParser = require("body-parser");
const mongoSanitize = require("express-mongo-sanitize");
const path = require("path");
const mongoose = require("mongoose");
const cors = require('cors');
const postRoutes = require("./routes/posts");
const userRoutes = require("./routes/users");
const highlightRoutes = require("./routes/highlights");
const { urlencoded } = require("body-parser");

const app = express();

//cli command @mongdb's bin folder: mongo "mongodb+srv://eprepmeancoursecluster.qa0ny.mongodb.net/orbitalDatabase" --username <username>
mongoose.connect("mongodb+srv://admin:" + process.env.MONGO_ATLAS_PW + "@eprepmeancoursecluster.qa0ny.mongodb.net/orbitalDatabase?retryWrites=true&w=majority")
.then(() => {
  console.log("Successfully connected to MongoDB Atlas!");
})
.catch((e) => {
  console.log("Error occurred!");
  console.log(e);
});

/*
app.use(cors());
app.use(cors({origin: true}));
app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));
*/

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    //res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader(
      'Access-Control-Allow-Headers',
      "Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Disposition, sessionId",
      );
    res.setHeader('Access-Control-Allow-Methods', "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    next();
})


app.use(bodyParser.json());

//can i comment out this and nothing breaks?
app.use(urlencoded({ extended: false }));

app.use("/images", express.static(path.join(__dirname, "images"))); //for localhost:3000? or do it on aws for safety
app.use(
  "/highlightsImages",
  express.static(path.join(__dirname, "highlightsImages"))
); //for localhost:3000 only? or do it on aws for safety

//app.use(mongoSanitize());

app.use("/api/posts", postRoutes);
app.use("/api/user", userRoutes);
app.use("/api/highlights", highlightRoutes);

//for deployment in heroku. If using on localhost3000, make sure to run ng build --prod to get this dist/ created
app.use("/", express.static(path.join(__dirname, "../dist/jobsApp")));
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "../dist/jobsApp/index.html"));
  //next();
});

module.exports = app;
