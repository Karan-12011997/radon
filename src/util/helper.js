const printdate =function(){
    let today = new Date().getFullYear()

console.log(today)
}
module.exports.printdate = printdate

const printMonth = function(){
    let currentDate = new Date()
    console.log("Current month is :", currentDate.getMonth()+1)
}
module.exports.printMonth = printMonth


const batchinfo=function(){
    console.log("Roadon, W3D1, the topic for today is Nodejs module system")
}
module.exports.batchinfo=batchinfo