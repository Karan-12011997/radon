const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({

    author: {
        type: String,
        required: true

    },
    book: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
    //createdAt
    //modifiedAt

}, { timespants: true });

module.exports = mongoose.model('book', bookSchema)



// String, Number
// Boolean, Object/json, array