const bookModel = require('../models/bookModel');
const entryBook = async function (req, res) {
    let data = req.body
    let saveData = await bookModel.create(data)
    res.send({ msg: saveData })
};
const detailsBook = async function (req, res) {
    let allData = await bookModel.find()
    res.send({ msg: allData })
};
module.exports.entryBook = entryBook
module.exports.detailsBook = detailsBook

