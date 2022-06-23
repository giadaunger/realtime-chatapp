const express = require('express');
const app = express();
const port = 4000;
const booksRouter = require('./router/books.router');

/* app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})
 */

app.use(express.json());
app.use(booksRouter);

app.get('/', (req, res) => {
    res.send('Hello World!')
})
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})