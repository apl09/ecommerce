'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {    
    static associate(models) {
      Product.belongsTo(models.Category)
      Product.hasMany(models.Order)
    }
  }
  Product.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    brand: DataTypes.STRING,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};