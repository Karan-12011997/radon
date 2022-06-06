const userModel=require('../models/userModel')
const dataSubmit=async function(req,res){
    let data=req.body
    let saveData =await userModel.create(data)
    res.send({msg:saveData})
};

const dataDetails=async function(req,res){
    let allData =await userModel.find()
    res.send({msg:allData})
}
module.exports.dataDetails=dataDetails;
module.exports.dataSubmit=dataSubmit;