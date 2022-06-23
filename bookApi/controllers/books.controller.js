const booksModels = require('../model/books.model'); 

async function getAllBooks(req, res) {
    const result = await booksModels.getAllBooks();
    res.json(result);
};

async function getSingleBook(req, res) {
    const result = await booksModels.getSingleBook(req.params.id);
    res.json(result);
};

async function addBook(req, res) {
    if(!req.body.title || !req.body.author) {
        return res.status(400).send('Något saknas')
    }
    const result = await booksModels.addBook(req.body);
    res.status(201).json(result);
};

async function deleteBook(req, res) {
    const result = await booksModels.deleteBook(req.params.id);
    res.json(result);
};

async function editBook(req, res) {
    if(!req.body.title || !req.body.author) {
        return res.status(400).send('Något saknas')
    }
    const result = await booksModels.editBook(req.body);
    res.json(result);
};

async function editPartialBook(req, res) {
    const existingBook = await booksModels.getSingleBook(req.params.id);
    const uppdatedBook = {
        ...existingBook,
        ...req.body
    }
    const result = await booksModels.editBook(uppdatedBook);
    res.json(result);
};

module.exports = {
    getAllBooks,
    getSingleBook,
    addBook,
    deleteBook,
    editBook,
    editPartialBook
}