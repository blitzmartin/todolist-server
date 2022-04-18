const taskModel = require("../models/tasksModel")

//CRUD operations

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
function newTaskGet (req, res) {
    taskModel.find()
    .then(data => {
        /* console.log(`Updated list:\n ${data}`); */
        res.render('tasks', { items: data });
    })
};

//UPDATE

//DELETE (all)
function removeAllTasks (req, res) {
    taskModel.deleteMany({})
    .then(()=>{
        res.redirect('/tasks');
    })
    .catch((err) => {
        console.log(err);
    })   
};


function removeOneTask (req, res) {
    const checkedItemId = req.body.checkbox;
    taskModel.findByIdAndRemove(checkedItemId, function(err){
        if(!err) {
            res.redirect('/tasks');
        }
    })
}


module.exports = { newTaskGet, newTaskCreate, removeAllTasks, removeOneTask};


