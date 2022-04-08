class taskConstructor {
    constructor(taskContent, id) {
      this.taskContent = taskContent;
      this.id = id;
    }
}

let items = [];

const newTaskGet = function (req, res) {
    res.render('index', { items: items });
};


const newTaskCreate = function (req, res) {
    let taskContent = req.body.newItem;
    let id = Date.now() + Math.floor(Math.random());
    const newTask = new taskConstructor(taskContent, id);
    items.push(newTask);
    console.log(JSON.stringify(items));
    res.redirect('/tasks');
};

module.exports = { newTaskGet, newTaskCreate };