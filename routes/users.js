const UserController = require("../controllers/UserController")
const express = require("express")
const { authentication } = require("../middleware/authentication")
const router = express.Router()


router.post("/",UserController.create)
router.post('/login',UserController.login)
router.delete('/logout', authentication, UserController.logout)
router.get('/id/:id', UserController.getById)


module.exports = router;