const fastify = require('fastify')({
    logger: true
})

const routes = require('./src/router')
routes.forEach((route, index) => {
    fastify.route(route)
})

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/online', { useNewUrlParser: true })
    .then(async() => { console.log('connection successful!..') })
    .catch(async() => { console.log(mongoose.Error) })

fastify.get('/', async(request, response) => {
    await response.send({
        hello: 'world'
    })
})

var PORT = process.env.PORT || 3000;

const start = async() => {
    try {
        await fastify.listen(PORT, '0.0.0.0')
        fastify.log.info(`server listening on ${fastify.server.address().port}`)

    } catch (error) {
        fastify.log.error
    }

}

start()