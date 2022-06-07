const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    authorName: String,
    bookName: { 
        type: String,
        required: true, 
        unique: true
    },
    price: {
        indianPrice: String,
        europeanPrice: String   
    },
    publishYear: {
        type: Number,
        default: 2021
    },
    tags: [String], 
    totalPages:Number,
    stockAvailble:Boolean,
    


}, { timestamps: true })
module.exports = mongoose.model('BOOK', bookSchema);