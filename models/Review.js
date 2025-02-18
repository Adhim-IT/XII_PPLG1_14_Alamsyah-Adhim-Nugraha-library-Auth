const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Review = sequelize.define('Review', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  book_id: { type: DataTypes.INTEGER },
  user_id: { type: DataTypes.INTEGER },
  rating: { type: DataTypes.INTEGER },
  comment: { type: DataTypes.STRING }
}, { timestamps: false });

module.exports = Review;
