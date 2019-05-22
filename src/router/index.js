const controller = require('../controller')

const routes = [{
        method: 'POST',
        url: '/api/addItem',
        handler: controller.addItem
    },
    {
        method: 'GET',
        url: '/api/allItem',
        handler: controller.getall
    }
]

module.exports = routes