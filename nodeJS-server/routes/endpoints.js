const express = require('express');
const router = express.Router();
const userImportController = require('../controllers/userImportController');
const {validationMiddleware} = require('../midleweare/inputValidation');
const {userSchema} = require('../midleweare/inputSchemas');

router.get('/getUsers', userImportController.getUsers);
router.get('/getUser', userImportController.getUser);
router.post('/postUsers', validationMiddleware(userSchema, 'body'), userImportController.postUsers);

module.exports = router;