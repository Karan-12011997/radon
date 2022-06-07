const { count } = require('console');
const bookModel=require('../models/bookModel')

const bookEntry=async function(req,res){
    let data=req.body;
    let saveData=await bookModel.create(data)
    res.send({msg:saveData})
};

const bookListByNameAndAuthor=async function(req,res){   
    let allData=await bookModel.find().select({authorName:1,bookName:1,_id:0}) 
    res.send({msg:allData})
};

const bookPubishInYear=async function(req,res){
    let data=req.body
    let allData=await bookModel.find(data)

    res.send({msg:allData})  
};   
    

const bookParticular=async function(req,res){
    let data=req.body
     let allData=await bookModel.find(data)
   res.send(allData)

 };

const indianRupee=async function(req,res){
    let data=await bookModel.find({"price.indianPrice":{ $in:["100RS","200RS","300RS"]}})
    res.send(data)
}; 
   

    

const bookRandom=async function(req,res){
    let data=await bookModel.find({$or:[{stockAvailble:true},{totalPages:{$gt:500}}]})
    res.send(data)
};


module.exports.bookEntry=bookEntry;
module.exports.bookListByNameAndAuthor=bookListByNameAndAuthor;
module.exports.bookPubishInYear=bookPubishInYear;
module.exports.bookParticular=bookParticular;
module.exports.indianRupee=indianRupee;
module.exports.bookRandom=bookRandom;
    
    













