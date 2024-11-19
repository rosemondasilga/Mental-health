// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Import the logger middleware
const logger = require('../middleware/logger');

// Apply the logger middleware globally for this route
router.use(logger);

router.post('/users', userController.createUser);
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);

module.exports = router;
