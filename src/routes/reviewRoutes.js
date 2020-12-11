const express = require("express")
const router = express.Router()

const reviewController = require('../controllers/reviewController')
const authUser = require('../middlewares/authUser')

router.post('/review/:id', authUser.auth, reviewController.addReview)
router.get('/review/:id', authUser.auth, reviewController.getById)


module.exports = router