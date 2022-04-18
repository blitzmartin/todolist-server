const express = require('express'); 
const router = express.Router();
const tasksController = require('../controllers/indexController'); 

router.get('/', tasksController.showHomepage); 

module.exports = router;