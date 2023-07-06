const { Category, Product, Sequelize } = require("../models/index.js");
const { Op } = Sequelize;
const CategoryController = {

  create(req, res) {
    Category.create(req.body)
      .then((category) =>
        res
          .status(201)
          .send({ message: "Category created succesfully", category })
      )
      .catch((err) => console.error(err));
  },

  getAll(req, res) {
    Category.findAll({
      include: [Product],
    })
      .then((products) => res.send(products))
      .catch((err) => {
        console.error(err);
        res
          .status(500)
          .send({
            message:
              "There has been a problem to show the category with products",
          });
      });
  },

  getById(req, res) {
    Category.findByPk(req.params.id, {})
      .then((category) => res.send(category))
      .catch((err) => {
        console.error(err);
        res.staturs(500).send(err);
      });
  },

  getOneByName(req, res) {
    Category.findOne({
      where: {
        title: {
          [Op.like]: `%${req.params.title}%`,
        },
      },
    }).then((category) => res.send(category));
  },

  productDelete(req, res) {
    Category.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((category) =>
        res
          .status(201)
          .send({ message: "Category eliminated correctly", category })
      )
      .catch((err) => console.error(err));
  },
  
  productUpdate(req, res) {
    Category.update(req.body, {
      where: { id: req.params.id, id: req.params.id },
    })
      .then((category) =>
        res.send({ message: "Product updated correctly", category })
      )
      .catch((err) => console.error(err));
  },
};

module.exports = CategoryController;
