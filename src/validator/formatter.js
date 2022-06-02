const dataTrim=function(){
    const d= "    Karan Jaiswal     "
    console.log("code before=")
    console.log(d)
    console.log( d.trim())
}
module.exports.dataTrim = dataTrim

const lowercase=function(){
    const d= "  FunCTION UP    "
    console.log("code before ="+d)

    console.log( d.toLowerCase())
}
module.exports.lowercase = lowercase

const uppercase=function(){
    const d= "  FunCTION UP    "
    console.log("code before ="+d)
    console.log( d.toUpperCase())
}
module.exports.uppercase = uppercase


