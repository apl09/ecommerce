const {Order} = require("../models/index.js")

const OrderController = {
    create(req,res){
        Order.create(req.body)
        .then(post => res.status(201).send({message:`Order ${ordernumber} succesfully created`}))
        .catch(err => console.error(err))
    }
}

module.exports = OrderController