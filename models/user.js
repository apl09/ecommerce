'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {    
    static associate(models) {
      User.hasMany(models.Order)      
    }
  }
  User.init(
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
    lastname: {
    type: DataTypes.STRING,
    allowNull:false,
      validate: {
        notNull: {        
        msg: "Introduce lastname please",        
        },        
      },        
    },
    email: {
    type: DataTypes.STRING,
    allowNull:false,
      validate: {
        notNull: {        
        msg: "Introduce email please",        
        },        
      },        
    },
    password: {
    type: DataTypes.STRING,
    allowNull:false,
      validate: {
        notNull: {        
        msg: "Introduce password please",        
        },        
      },        
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};