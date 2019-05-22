const mongoose = require('mongoose')

const allProducts = mongoose.Schema({
    productName: String,
    price: String,
    qty: String
})

module.exports = mongoose.model('Products', allProducts)