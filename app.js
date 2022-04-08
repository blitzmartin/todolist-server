const express = require('express');
const ejs = require('ejs');
const tasksRouter = require('./routes/tasks');
const homeRouter= require ('./routes/index');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


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