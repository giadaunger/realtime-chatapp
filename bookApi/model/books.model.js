const db = require('../db');

function getAllBooks() {
    const query = 'SELECT * FROM books'

    return new Promise((resolve, reject) => {
        db.all(query, (error, rows) => {
            if (error) {
                console.error(error.message);
                reject(error.message);
            } else {
                resolve(rows)
            }
        })
    }) 
}

function getSingleBook(id) {
    const query = 'SELECT * FROM books WHERE id = ?'

    return new Promise((resolve, reject) => {
        db.get(query, [id], (error, row) => {
            if (error) {
                console.error(error.message);
                reject(error.message);
            } else {
                resolve(row)
            }
        })
    })
}

function deleteBook(id) {
    const query = `
    DELETE FROM books
    WHERE id = ?
    `
    return new Promise((resolve, reject) => {
        db.run(query, [id], (error) => {
            if (error) {
                console.error(error.message)
                reject(error.message);
            } else {
                resolve('Book has been deleted')
            }
        })
    })}

function editBook(body) {
    const query = `
    UPDATE books
    SET title = $title,
    author = $author
    WHERE id = $id
    `

    return new Promise((resolve, reject) => {
        db.run(query, {'$title': body.title,'$author': body.author, '$id': body.id}, (error) => {
            if (error) {
                console.error(error.message)
                reject(error.message);
            } else {
                resolve('Book has been updated')
            }
        })
    })
}

function addBook(body) {
    const query = `
    INSERT INTO books (title, author)
    VALUES ($title, $author)
    `
    return new Promise((resolve, reject) => {
        db.run(query, {
            '$title': body.title,
            '$author': body.author
        }, (error) => {
            if (error) {
                console.error(error.message);
                reject(error.message);
            } else {
                resolve('Book has been added')
            }
        })
    })
}

module.exports = { 
    getAllBooks,
    getSingleBook,
    addBook,
    deleteBook,
    editBook
};