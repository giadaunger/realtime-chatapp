const express = require('express');
const booksRouter = express.Router();
const booksController = require('../controllers/books.controller');

//Get all book
booksRouter.get('/books', booksController.getAllBooks)

//Get a single books
booksRouter.get('/books/:id', booksController.getSingleBook)

//Add books
booksRouter.post('/books', booksController.addBook)

//Delete a book
booksRouter.delete('/books/:id', booksController.deleteBook)

//Update a book
booksRouter.put('/books/:id', booksController.editBook)

booksRouter.patch('/books/:id', booksController.editPartialBook)


module.exports = booksRouter;