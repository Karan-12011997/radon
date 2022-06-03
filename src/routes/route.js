const express = require('express');
const { send } = require('express/lib/response');
const lodash=require("lodash")
const router = express.Router();

let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": ["swimming"]
               
           
       },
       {
           "name": "gopal",
           "dob": "12/01/1197",
           "gender": "male",
           "city":"motihari",
           "sports": ["football","cricket"]
       },
       
       {
        "name": "ram",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "ghorasahan",
        "sports": ["swimming", "cricket","kabbadi"]
            
        
    },
    
    {
        "name": "raushan",
        "dob": "1/1/1997",
        "gender": "male",
        "city": "patna",
        "sports": ["swimming", "hockey","badminton","skating"]
            
        
    },
    
    {
        "name": "sita",
        "dob": "1/1/1995",
        "gender": "female",
        "city": "indore",
        "sports": ["cricket","badminton","cricket","kho-kho"]
            
        
    },
    ]
    
    router.post('/player-5',function(req,res){
   let ele=req.body
let ele2=ele.name
   for (let i=0;i<players.length;i++){
       if(ele2==players[i].name){
           return res.send("this player is existed.")
        }
    }
    players.push(ele)
    res.send(players)
});






    



router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})

module.exports = router;