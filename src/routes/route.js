const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.post('/createBook', bookController.bookEntry);
router.get('/bookList', bookController.bookListByNameAndAuthor);
router.post('/getBooksInYear',bookController.bookPubishInYear);     
router.post('/getParticularBooks',bookController.bookParticular);
router.get('/getXINRBooks',bookController.indianRupee);
router.post('/getRandomBooks ',bookController.bookRandom);






module.exports = router;