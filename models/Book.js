const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Book = sequelize.define('Book', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  writer: { type: DataTypes.STRING },
  category_id: { type: DataTypes.INTEGER },
  publisher: { type: DataTypes.STRING },
  year: { type: DataTypes.INTEGER }
}, { timestamps: false });

module.exports = Book;
