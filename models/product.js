'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {    
    static associate(models) {
      Product.belongsTo(models.Category, { foreignKey:'CategoryId'})
      Product.hasMany(models.Product_order)
    }
  }
  Product.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    brand: DataTypes.STRING,
    content: DataTypes.STRING,
    CategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};