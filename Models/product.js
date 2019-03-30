const Sequalize = require('sequelize');

const sequelize = require('../util/database');

/* with this two things imported, now we can define a model that will be 
manage by sequelize */

const Product = sequelize.define('product', {
  id: {
    type: Sequalize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: Sequalize.STRING,
  price: {
    type: Sequalize.DOUBLE,
    allowNull:false,
  },
  imageUrl: {
    type: Sequalize.STRING,
    allowNull: false,
  },
  description: {
    type: sequelize.STRING,
    allowNull: false,
  }
});

module.exports = Product;