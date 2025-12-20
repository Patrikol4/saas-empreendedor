import { FastifyRequest, FastifyReply, FastifyInstance} from "fastify"

export async function healthRoutes(fastify: FastifyInstance){
    fastify.get('/api/health', async (request: FastifyRequest, reply: FastifyReply) => {
        console.log("Server ok!")
    })
}