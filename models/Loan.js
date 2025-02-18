const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Loan = sequelize.define('Loan', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  book_id: { type: DataTypes.INTEGER },
  user_id: { type: DataTypes.INTEGER },
  loan_date: { type: DataTypes.DATE },
  return_date: { type: DataTypes.DATE },
  status: { type: DataTypes.STRING }
}, { timestamps: false });

module.exports = Loan;
