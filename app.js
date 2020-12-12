const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost:27017/booksDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(3000, () => {
    console.log('Server running successfully on port 3000')
})