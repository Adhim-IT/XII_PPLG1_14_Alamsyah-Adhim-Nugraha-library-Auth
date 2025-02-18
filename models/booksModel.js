const db = require('../config/database');
const { getAllBooks } = require('../controllers/booksController');

module.exports = {
    getAllBooks: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM books', (err, result) => {
                if (err) {
                    reject(new Error(err));
                } else {
                    resolve(result);
                }
            });
        });
    },


    getBooksById: (id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM books WHERE id = ?', [id], (err, result) => {
                if (err) {
                    reject(new Error(err));
                } else {
                    resolve(result);
                }
            });
        });
    },

    addBook: (title, writer, user_id, category_id, publisher, year) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO books (title, writer, user_id, category_id, publisher, year) VALUES (?, ?, ?, ?, ?, ?)',
                [title, writer, user_id, category_id, publisher, year],
                (err, result) => {
                    if (err) {
                        reject(new Error(err));
                    } else {
                        resolve(result);
                    }
                });
        });
    },

    updateBook: (id, title, writer, user_id, category_id, publisher, year) => {
        return new Promise((resolve, reject) => {
            db.query('UPDATE books SET title = ?, writer = ?, user_id = ?, category_id = ?, publisher = ?, year = ? WHERE id = ?',
                [title, writer, user_id, category_id, publisher, year, id],
                (err, result) => {
                    if (err) {
                        reject(new Error(err));
                    } else {
                        resolve(result);
                    }
                });
        });
    },

    deleteBook: (id) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM books WHERE id = ?', [id], (err, result) => {
                if (err) {
                    reject(new Error(err));
                } else {
                    resolve(result);
                }
            });
        });
    }

}
