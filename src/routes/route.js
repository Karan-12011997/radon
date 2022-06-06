const express = require('express');
const router = express.Router();
// const userModel=require('../models/userModel');
const userController=require('../controllers/userController');
const bookController=require('../controllers/bookController');
// const bookModel=require('../models/bookModel');
router.get('/test-me',function(req,res){
    res.send("tested, all is well")
});

router.post('/bookEntry',userController.dataSubmit);
router.get('/bookDetails',userController.dataDetails)


router.post ('/newBookEntry',bookController.entryBook);
router.get ('/newBookDetails',bookController.detailsBook);

module.exports = router;










