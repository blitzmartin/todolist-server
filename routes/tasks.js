const express = require('express'); 
const router = express.Router();
const tasksController = require('../controllers/tasks'); 

router.get('/tasks', tasksController.newTaskGet); 
router.post('/tasks', tasksController.newTaskCreate);

module.exports = router;