const { Product, Category, Sequelize } = require("../models/index.js");
const { Op } = Sequelize;

const ProductController = {
  create(req, res) {
    Product.create(req.body)
      .then((product) =>
        res.status(201).send({ message: "Product created correctly", product })
      )
      .catch((err) => {
        console.error(err);
        res.status(500).send({ message: "There has been a problem", err });
      });
  },

  getAll(req, res) {
    Product.findAll({
      include: [Category],
    })
      .then((products) => res.send(products))
      .catch((err) => {
        console.error(err);
        res
          .status(500)
          .send({
            message:
              "There has been a problem to show the products with the category",
          });
      });
  },

  getById(req, res) {
    Product.findByPk(req.params.id, {})
      .then((product) => res.send(product))
      .catch((err) => {
        console.error(err);
        res.staturs(500).send(err);
      });
  },

  getOneByName(req, res) {
    Product.findOne({
      where: {
        name: {
          [Op.like]: `%${req.params.name}%`,
        },
      },
    }).then((product) => res.send(product));
  },

  productDelete(req, res) {
    Product.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((product) =>
        res
          .status(201)
          .send({ message: "Product eliminated correctly", product })
      )
      .catch((err) => console.error(err));
  },

  productUpdate(req, res) {
    Product.update(req.body, {
      where: { id: req.params.id, id: req.params.id },
    })
      .then((product) =>
        res.send({ message: "Product updated correctly", product })
      )
      .catch((err) => console.error(err));
  },

  getOneByPrice(req, res) {
    Product.findOne({
      where: {
        price: {
          [Op.like]: `%${req.params.price}%`,
        },
      },
    }).then((post) => res.send(post));
  },

  getInDescOrder(req, res) {
    Product.findAll({
      order: [["price", "DESC"]],
    })
      .then((products) => {
        res.status(200).send(products);
      })
      .catch((error) => {
        console.error("Error retrieving products:", error);
        res.status(500).send("Error retrieving products");
        e;
      });
  },
};

module.exports = ProductController;
