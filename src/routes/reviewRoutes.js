const express = require("express")
const router = express.Router()
const reviewController = require('../controllers/reviewController')
const authAdm = require('../middlewares/authAdm')
const authUser = require('../middlewares/authUser')


router.post('/create/:id', authUser.auth, reviewController.addReview)


module.exports = router