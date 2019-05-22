const boom = require('boom')
const Product = require('../model/availableCom')
exports.addItem = async(request, response) => {
    try {
        console.log(request.body)
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
        console.log(allitem)
        return allitem

    } catch (error) {
        boom.boomify(error)
    }
}