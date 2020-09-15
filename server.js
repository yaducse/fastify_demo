
const fastify = require('fastify')({ 
    logger: true,
    ajv:{
        customOptions: {
            coerceTypes: false
        }
    }
    
});

// fastify.get('/', async (request, reply) => { 
//     reply.send({Yadu: 'B'})
// });

fastify.register(require('./our-first-route'));

fastify.listen(3000, (err,address) => {
    if(err) {
        fastify.log.error(err);
        process.exit(1);
    }
    fastify.log.info(
        'Server listening on '+address
    )
});

/* const start = async () => {
    try{
        await fastify.listen(3000);
    }   catch(err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start(); */
