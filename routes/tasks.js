const express = require('express'); 
const router = express.Router();
const tasksController = require('../controllers/tasks'); 

router.get('/', tasksController.newTaskGet); 
router.post('/', tasksController.newTaskCreate);
router.post('/', tasksController.removeTasks);

module.exports = router;