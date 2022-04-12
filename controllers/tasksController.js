const taskModel = require("../models/tasksModel")

//CRUD operations
let items = [];

//CREATE
async function newTaskCreate (req, res) {
    try{
        const newTask = await taskModel.create({taskName: req.body.newItem});
        res.redirect('/tasks');
    } catch(err) {
        console.log(err)
    }
};

//READ
async function newTaskGet (req, res) {
    taskModel.find()
    .then(items => {
        console.log(`Updated list:\n ${items}`);
        res.render('tasks', { items: items });
    })
};

//UPDATE

//DELETE (all)
async function removeTasks (req, res) {
    taskModel.deleteMany({})
    .then(()=>{
        res.redirect('/tasks');
    })
    .catch((err) => {
        console.log(err);
    })   
};

module.exports = { newTaskGet, newTaskCreate, removeTasks};