const express = require('express');
const router = express.Router();
// const userModel=require('../models/userModel');
const userController=require('../controllers/userController');

router.get('/test-me',function(req,res){
    res.send("tested, all is well")
});

router.post('/bookEntry',userController.dataSubmit);

router.get('/bookDetails',userController.dataDetails)

module.exports = router;