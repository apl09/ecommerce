const { Category, Product } = require('../models/index.js')

const CategoryController = {
    create(req,res) {
        Category.create(req.body)
        .then(category => res.status(201).send({message: 'Category created succesfully', category}))
        .catch(err => console.error(err))
    },
    getAll(req, res) {
        Category.findAll({        
        include: [Product]        
        })        
        .then(products => res.send(products))        
        .catch(err => {        
        console.error(err)        
        res.status(500).send({ message: 'There has been a problem to show the category with products' })        
        })    
    }
}

module.exports = CategoryController