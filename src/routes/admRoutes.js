const express = require("express");
const router = express.Router();
const controller = require('../controllers/admController')

router.post('/signup', controller.createUser)
router.post('/login', controller.login)

module.exports = router
