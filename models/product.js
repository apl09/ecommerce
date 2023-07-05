'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {    
    static associate(models) {
      Product.belongsTo(models.Category, { foreignKey:'CategoryId'})
      Product.belongsToMany(models.Order, {
        through:models.ProductOrder,
      })
    }
  }
  Product.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    brand: DataTypes.STRING,
    content: DataTypes.STRING,
    price: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};