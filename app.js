const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost:27017/booksDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const bookSchema = {
    title: String,
    author: String,
    imgURL: String,
    review: String
}
const Book = mongoose.model("Book", bookSchema);

app.route('/books')
.get((req, res) => {
    Book.find({}, (e, foundItems) => {
        if (e) {
            res.send(e);
        } else {
            res.send(foundItems);
        }
    });
})
.post((req, res) => {
    const newBook = new  Book({
        title: req.body.title,
        author: req.body.author,
        imgURL: req.body.imgURL,
        review: req.body.review
    });
    newBook.save((e) => {
        if (e) {
            res.send(e);
        } else {
            res.send('Document saved successfully!')
        }
    })
})

app.listen(3000, () => {
    console.log('Server running successfully on port 3000')
})