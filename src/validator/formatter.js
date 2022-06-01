const dataTrim=function(){
    const d= "    Karan Jaiswal     "
    console.log( d.trim())
}
module.exports.dataTrim = dataTrim

const lowercase=function(){
    const d= "  FunCTION UP    "
    console.log( d.toLowerCase(),"code before"+d)
}
module.exports.lowercase = lowercase

const uppercase=function(){
    const d= "  FunCTION UP    "
    console.log( d.toUpperCase(),"code before"+d)
}
module.exports.uppercase = uppercase
