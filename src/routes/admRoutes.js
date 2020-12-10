const express = require("express");
const router = express.Router();
const controller = require('../controllers/admController')
const authAdm = require('../middlewares/authAdm')

router.post('/signup', controller.createUser)
router.post('/login', controller.login)
router.get('/all', authAdm.auth,controller.getAll)

module.exports = router
