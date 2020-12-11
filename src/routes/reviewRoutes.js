const express = require("express")
const router = express.Router()

const reviewController = require('../controllers/reviewController')
const authUser = require('../middlewares/authUser')

router.post('/:id', authUser.auth, reviewController.addReview)
router.get('/all', authUser.auth, reviewController.getAll)


module.exports = router