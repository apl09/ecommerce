const UserController = require("../controllers/UserController")
const express = require("express")
const router = express.Router()


router.post("/",UserController.create)
router.post('/login',UserController.login)


module.exports = router;