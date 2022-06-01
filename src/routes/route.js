const express = require('express');
const externalModule = require('./logger')
const externalModule1 = require('../util/helper')
const externalModule3 = require('../validator/formatter')

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('The constant in logger route has a value '+externalModule.endpoint)
    console.log('The current batch is '+externalModule.batch)
    externalModule.log()
    externalModule.welCome()
    externalModule1.printdate()
    externalModule1.printMonth()
    externalModule1.batchinfo()
    externalModule3.dataTrim()
    externalModule3.lowercase()
    externalModule3.uppercase()
 
    
    
    res.send('My first ever api!')
});


module.exports = router;
// adding this comment for no reason