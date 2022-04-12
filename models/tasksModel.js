const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({
    taskName: { type: String }
})

module.exports = new mongoose.model('Task', tasksSchema);