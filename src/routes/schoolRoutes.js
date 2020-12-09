const express = require("express")
const router = express.Router()
const schoolController = require('../controllers/schoolController')
const reviewController = require('../controllers/reviewController')
const authAdm = require('../middlewares/authAdm')
const authUser = require('../middlewares/authUser')



router.get('/', authUser.auth, schoolController.getAllValidated)
router.get('/tovalidate', authAdm.auth, schoolController.toValidate)
router.post('/create', authUser.auth, schoolController.addSchool)
router.get('/:id', authUser.auth, schoolController.findById)
router.delete('/:id', authAdm.auth, schoolController.deleteSchool)
router.put('/:id', authAdm.auth, schoolController.update)


module.exports = router