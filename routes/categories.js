const express = require("express")
const CategoryController = require("../controllers/CategoryController")
const router = express.Router()

router.post("/",CategoryController.create)
router.get("/", CategoryController.getAll)
router.get("/id/:id", CategoryController.getById)
router.get("/title/:title", CategoryController.getOneByName)
router.delete("/id/:id", CategoryController.productDelete)


module.exports = router