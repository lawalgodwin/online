const boom = require('boom')
const Product = require('../model/availableCom')
exports.addItem = async(request, response) => {
    try {
        const prod = new Product(request.body)
        return prod.save()
    } catch (error) {
        boom.boomify(error)
    }
}

exports.getall = async(request, response) => {
    var all = []
    try {
        var allitem = await Product.find()
        allitem.forEach((item, index) => {
            all.push(`name: ${item.productName}, price: $${item.price | item.z} `)
        });
        return (all)

    } catch (error) {
        boom.boomify(error)
    }
}