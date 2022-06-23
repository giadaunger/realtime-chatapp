const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db.sqlite', (error) => {
    if (error) {
        console.error(error.message);
    }

    const bookQuery = `
    CREATE TABLE books (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        author TEXT
    )
    `

    db.run(bookQuery, (error) => {
        if (error) {
            console.error(error.message);
        }});
});

module.exports = db;

