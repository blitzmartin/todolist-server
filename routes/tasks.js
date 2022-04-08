const express = require('express'); 
const tasksController = require('../controllers/tasks'); 

const router  = express.Router();


router.post('/tasks', tasksController.newTaskCreate);
router.get('/tasks', tasksController.newTaskGet); 

module.exports = router;