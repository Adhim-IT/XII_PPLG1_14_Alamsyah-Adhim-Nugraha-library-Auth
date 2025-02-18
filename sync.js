const sequelize = require('./config/database');
const User = require('./models/User');
const Book = require('./models/Book');
const Loan = require('./models/Loan');
const Review = require('./models/Review');
const Category = require('./models/Category');

sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});
