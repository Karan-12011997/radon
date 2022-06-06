const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');
const bookSchema = new mongoose.Schema({
    bookAuthor: String,
    bookName: {
        type: String,
        unique: true,
        required: true
    },
    tag: [String],
    date: {
        type: Date,
        default: Date.now 
    },
    category: String,
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europeanPrice: String  
    },
    sales: {
        type: Number,
        default: 10
    }



}, { timestamps: true });
module.exports = mongoose.model('bookdetails', bookSchema);
