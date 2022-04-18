const express = require('express'); 
const router = express.Router();
const tasksController = require('../controllers/tasksController'); 

router.get('/', tasksController.newTaskGet); 
router.post('/', tasksController.newTaskCreate);
router.post('/delete', tasksController.removeOneTask);

module.exports = router;