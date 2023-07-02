const UserController = require("../controllers/UserController")
const express = require("express")
const router = express.Router()

router.post("/",UserController.create)

module.exports = router;