const express = require('express');

const router = express.Router();

router.get('/sol1', function (req, res) {
    let arr = [1, 2, 3, 5, 6, 7]

    let total = 0;
    for (var i in arr) {
        total += arr[i];
    }

    let lastDigit = arr.pop()
    let consecutiveSum = lastDigit * (lastDigit + 1) / 2
    let missingNumber = consecutiveSum - total



    res.send({ data: missingNumber })
});

router.get('/sol2', function (req, res) {
    let arr= [33, 34, 35, 37, 38]
    total=0;
    for (var i in arr){
        total+=arr[i]
    };
    let a=arr.pop()
    let addTotal=a*(a+1)/2
    let b=arr.shift()
    let addFirst=(b-1)*(b)/2
    let total1=addTotal-addFirst
    let missingNumber=total1-total



    res.send({data:missingNumber})
})


module.exports = router;
// adding this comment for no reason