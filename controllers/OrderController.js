const { Order } = require("../models/index.js")

const OrderController = {
    create(req,res){
        Order.create(req.body)
        .then(order => res.status(201).send({message: 'Order succesfully created', order}))
        .catch(err => console.error(err))
    }
}

module.exports = OrderController