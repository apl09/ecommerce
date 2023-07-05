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
  Product.init(
    {
    name: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: {        
        msg: "Introduce a name please",        
        },        
      },        
    },
    type: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: {        
        msg: "Introduce a type please",        
        },        
      },        
    },
    brand: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: {        
        msg: "Introduce a brand please",        
        },        
      },        
    },
    content: {
     type: DataTypes.STRING,
     allowNull:false,
     validate: {
       notNull: {        
       msg: "Introduce content please",        
       },        
     },        
   },
    price: {
    type: DataTypes.INTEGER,
    allowNull:false,
     validate: {
       notNull: {        
       msg: "Introduce price please",        
       },        
     },        
   },
    CategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};