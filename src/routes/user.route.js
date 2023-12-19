const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const userValidation = require("../validations/user.validation");

router.post('/users/registration', userValidation.login, async function (req, res) {
    return await userController.login(req, res);
});

module.exports = router;