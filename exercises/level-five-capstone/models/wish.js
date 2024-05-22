const mongoose = require('mongoose')
const Schema = mongoose.Schema

const wishSchema = new Schema({
    author: String,
    title: String,
    year: Number
})

module.exports = mongoose.model("wish", wishSchema)