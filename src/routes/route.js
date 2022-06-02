const express = require('express');
const lodash = require('lodash')
const externalModule = require('./logger')
const externalModule1 = require('../util/helper')
const externalModule3 = require('../validator/formatter');
const { tail } = require('lodash');

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('The constant in logger route has a value ' + externalModule.endpoint)
    console.log('The current batch is ' + externalModule.batch)
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
router.get('/hello', function (req, res) {
    const arr = ["jan", "feb", "mar", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
    const ra1 = lodash.chunk(arr, 3)
    res.send(ra1)
})
router.get('/hello2', function (req, res) {
    const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    const ra1 = lodash.tail(arr)
    console.log(ra1)
    res.send("hello world")
})

router.get('/hello3', function (req, res) {
    const a = ["romance", "shahrukhan", "amitabh", "emotional"]
    const b = ["dance", "hritik roshan", "romance", "shahrukhan"]
    const c = ["comedy", "akashay", "shahrukhan"]
    const d = ["emotional", "jakki shroff", "akashay", "dance"]
    const e = ["family", "amitabh", "shroff"]
    const f = lodash.union(a, b, c, d, e)
    console.log(f)

    res.send("hello india")
})

router.get('/hello4', function (req, res) {
    const pair = [["horror", "conjuring"], ["comedy", "herapheri"], ["family", "bagwan"], ["ethnic", "mohanjodaro"], ["romance", "mohabbaten"]]
    const pairs = lodash.fromPairs(pair)
    console.log(pairs)
    res.send("hello sir ")
})







module.exports = router;
// adding this comment for no reason