const express = require("express")
const ProductController = require("../controllers/ProductController")
const router = express.Router()
const {authentication, isAdmin } = require('../middleware/authentication')

router.post("/",authentication, ProductController.create)
router.get("/desc", ProductController.getInDescOrder)
router.get('/price/:price', ProductController.getOneByPrice)
router.get("/", ProductController.getAll)
router.get("/id/:id", ProductController.getById)
router.get("/name/:name", ProductController.getOneByName)
router.put("/id/:id",authentication, ProductController.productUpdate)
router.delete("/id/:id",authentication, isAdmin, ProductController.productDelete)



module.exports = router