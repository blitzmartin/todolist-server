const express = require('express');
const ejs = require('ejs');
const fs = require('fs');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

class taskConstructor {
  constructor(taskContent, id) {
    this.taskContent = taskContent;
    this.id = id;
  }
}

let items = [];

app.get('/tasks', (req, res) => {
  res.render('index', { items: items });
});

app.post('/tasks', (req, res) => {
  let taskContent = req.body.newItem;
  let id = Date.now() + Math.floor(Math.random());
  const newTask = new taskConstructor(taskContent, id);
  items.push(newTask);
  console.log(JSON.stringify(items));
  res.redirect('/tasks');
});


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