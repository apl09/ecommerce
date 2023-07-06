const { Order, Product } = require("../models/index.js");

const OrderController = {
  insert(req, res) {
    Order.create(req.body)
      .then((order) => {
        console.log(req.body.ProductId);
        order.addProduct(req.body.ProductId);
        res.status(201).send({ message: "Order succesfully created", order });
      })
      .catch((err) => console.error(err));
  },
  
  async getAll(req, res) {
    try {
      const orders = await Order.findAll({
        include: [{ model: Product, through: { attributes: [] } }],
      });
      res.send(orders);
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = OrderController;
