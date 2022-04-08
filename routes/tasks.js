const express = require('express'); 
const router = express.Router();
const tasksController = require('../controllers/tasks'); 

router.get('/', tasksController.newTaskGet); 
router.post('/', tasksController.newTaskCreate);

module.exports = router;