const express = require("express")
const OrderController = require("../controllers/OrderController")
const router = express.Router()

router.order("/", OrderController.create)

module.exports = router