const express = require("express")
const ProductController = require("../controllers/ProductController")
const router = express.Router()
const {authentication} = require('../middleware/authentication')

router.post("/",authentication, ProductController.create)
router.get("/", ProductController.getAll)
router.get("/id/:id", ProductController.getById)
router.get("/name/:name", ProductController.getOneByName)
router.put("/id/:id",authentication, ProductController.productUpdate)
router.delete("/id/:id",authentication, ProductController.productDelete)

module.exports = router