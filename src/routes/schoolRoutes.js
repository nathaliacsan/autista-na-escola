const express = require("express")
const router = express.Router()
const schoolController = require('../controllers/schoolController')
const authAdm = require('../middlewares/authAdm')
const authUser = require('../middlewares/authUser')



router.get('/', authUser.auth, schoolController.getAllValidated)
router.get('/tovalidate', authAdm.auth, schoolController.toValidate)
router.post('/create', authUser.auth, schoolController.addSchool)
router.get('/state', authUser.auth, schoolController.findByState)
router.delete('/:id', authAdm.auth, schoolController.deleteSchool)
router.put('/:id', authAdm.auth, schoolController.update)


module.exports = router