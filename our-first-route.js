async function routes(fastify,options) {

    const opts1 = {
        schema: {
          response: {
            200: {
              type: 'object',
              properties: {
                GET: { type: 'string' }
              }
            }
          }
        }
      }

    fastify.get('/', async (request,reply) => {
       
        return { GET: "works"}
    })

  const opts2 = {
    schema : {
      body : {
        type: 'object',
        additionalProperties: false,
        maxProperties: 2,
        required: [
          'someKey',
          'someOtherKey'
        ],
        properties: {
          someKey: { type: 'number' },
          someOtherKey: { type: 'string' }
        }
      }
    },
    response: {
      201: {
        type: 'object',
        properties: {
          someKey: { type: 'string'},
          someOtherKey: { type: 'number'}
        }
      }
    }

  }
    
    fastify.post('/', opts2, async (request, reply) => {
      reply.code(201);
      reply.send( { POST: 'works' });
      
    })
 
}

module.exports = routes;