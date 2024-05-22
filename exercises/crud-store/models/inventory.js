const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    item: String,
    price: Number,
    stocked: Boolean
})

module.exports = mongoose.model("Item", inventorySchema)

