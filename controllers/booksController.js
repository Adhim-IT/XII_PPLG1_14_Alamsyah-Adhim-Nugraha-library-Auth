const booksModel = require('../models/booksModel');

module.exports = {
    getAllBooks: async (req, res) => {
        booksModel
        .getAllBooks()
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            
        })
    }
}