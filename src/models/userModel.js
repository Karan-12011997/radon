const mongoose=require('mongoose');
const bookSchema=new mongoose.Schema({

    author:String,
    book:String,
    category:String,
    year:Number

},{ timespants:true});

module.exports=mongoose.model('book',bookSchema)



// String, Number
// Boolean, Object/json, array