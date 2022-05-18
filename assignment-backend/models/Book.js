const mongoose = require('mongoose');

// Schema 
const bookSchema = new mongoose.Schema({
    author: String,
    country: String,
    imageLink: String,
    language: String,
    link: String,
    pages: Number,
    title: String,
    year: Number,
    clickCount: {
        type: Number,
        default:0
    }
});


// Model is technically a js class- it has got lot of static methods to interact with db
const Book = mongoose.model('Book',bookSchema);


module.exports = Book;







