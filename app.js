// Require modules
const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// require Routes
const tasksRouter = require('./routes/tasksRoutes');
const homeRouter= require ('./routes/indexRoutes');

// Connect to MongoDB server on port 27017 and database
dotenv.config();
mongoose.connect(process.env.DB_SERVER)
.then(() => console.log('Connected to DB server...'))
.catch((err) => console.log(err));


// create server
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// use routes
app.use('/tasks', tasksRouter); 
app.use('/', homeRouter);


// SERVER RUNNING
const port = process.env.PORT || 3000;
const hostname = 'localhost';

app.listen(port, hostname, (err) => {
  if (err) {
    return console.log("Something went wrong: " + err);
  } else {
    console.log(`Server running on port ${port}...`)
  }
})