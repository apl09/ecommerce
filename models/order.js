'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {    
    static associate(models) {
      Order.belongsTo(models.User)
      Order.hasMany(models.Product_order)
    }
  }
  Order.init({
    ordernumber: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};