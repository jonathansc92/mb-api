const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const userValidation = require("../validations/user.validation");

router.post('/registration', userValidation.user, async function (req, res) {
    return await userController.registration(req, res);
});

module.exports = router;