const { Product } = require('../models/index.js');

const ProductController = {
    create(req,res) {        
        Product.create(req.body)
        .then(product => res.status(201).send({message: 'Producto creado con exito', product}))
        .catch(err => console.error(err))
    }
}

module.exports = ProductController