const { Product, Category } = require('../models/index.js');

const ProductController = {
    create(req,res) {        
        Product.create(req.body)
        .then(product => res.status(201).send({message: 'Product created correctly', product}))
        .catch(err => console.error(err))
    },
    getAll(req, res) {
        Product.findAll({        
        include: [Category]        
        })        
        .then(products => res.send(products))        
        .catch(err => {        
        console.error(err)        
        res.status(500).send({ message: 'There has been a problem to show the products with the category' })        
        })    
    },
    getById(req, res) {
        Product.findByPk(req.params.id, {                      
        })        
        .then(post => res.send(post))
        .catch((err) => {
            console.error(err);
            res.staturs(500).send(err)
        })
    }
}

module.exports = ProductController