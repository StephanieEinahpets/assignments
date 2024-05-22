const mongoose = require('mongoose')
const Schema = mongoose.Schema

const wishSchema = new Schema({
    author: String,
    title: String,
    year: Number,
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("wish", wishSchema)