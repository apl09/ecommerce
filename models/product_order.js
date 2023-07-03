'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product_order extends Model {    
    static associate(models) {
      Product_order.belongsTo(models.Product, { foreignKey: 'Product_Id' });
      Product_order.belongsTo(models.Order, { foreignKey: 'Order_Id' });      
    }
  }
  Product_order.init({
    Order_Id: DataTypes.INTEGER,
    Product_Id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product_order',
  });
  return Product_order;
};