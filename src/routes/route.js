const express = require('express');
const { route } = require('express/lib/application');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.get('/movies',function(req,res){
const movieList=["ramayan","krishna","krrish","ramavtar","bahubali","bahubali2","kgf","kgf2","sardaarji","tharki","nadaan","ramayan","krishna","krrish","ramavtar","bahubali","bahubali2","kgf","kgf2","ramayan","krishna","krrish","ramavtar","bahubali","bahubali2","kgf","kgf2","ramayan","krishna","krrish","ramavtar","bahubali","bahubali2","kgf","kgf2","ramayan","krishna","krrish","ramavtar","bahubali","bahubali2","kgf","kgf2","ramayan","krishna","krrish","ramavtar","bahubali","bahubali2","kgf","kgf2","ramayan","krishna","krrish","ramavtar","bahubali","bahubali2","kgf","kgf2","ramayan","krishna","krrish","ramavtar","bahubali","bahubali2","kgf","kgf2","ramayan","krishna","krrish","ramavtar","bahubali","bahubali2","kgf","kgf2","ramayan","krishna","krrish","ramavtar","bahubali","bahubali2","kgf","kgf2"]

    res.send(movieList)
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




router.get('/movies/:indexNumber',function(req,res){
    const movieList=["ramayan","krishna","krrish","ramavtar","bahubali","bahubali2","kgf","kgf2","sardaarji","tharki","nadaan","ramayan","krishna","krrish","ramavtar","bahubali","bahubali2","kgf","kgf2","ramayan",]
   if(req.params.indexNumber<movieList.length){
       res.send(movieList[req.params.indexNumber])
   }else{
     res.send("enter valid index no.")
   }
   res.send()
})
///////////////////////////////////////
router.get('/films',function(req,res){
   const arr= [{
       "id":1,
       "name":"the shinnig"
   },
   {
    "id":2,
    "name":"Moonlight"
   },
   {
    "id":3,
    "name":"avatar"
   },{
    "id":4,
    "name":"joker"
   },{
    "id":5,
    "name":"harry potter"
   }
]
        
    res.send(arr)
})
    ////////////////////////////////////////
    router.get('/films/:filmsId',function(req,res){
        const arr= [{
            "id":1,
            "name":"the shinnig"
        },
        {
         "id":2,
         "name":"Moonlight"
        },
        {
         "id":3,
         "name":"avatar"
        },{
         "id":4,
         "name":"joker"
        },{
         "id":5,
         "name":"harry potter"
        }
     ]
        if(req.params.filmsId<arr.length){
            res.send(arr[req.params.filmsId])
        } else{
            res.send("no movie is existed on this id no.")
        }
        res.send()

    })





module.exports = router;
// adding this comment for no reason