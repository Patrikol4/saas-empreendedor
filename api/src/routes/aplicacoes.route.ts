import { FastifyRequest, FastifyReply, FastifyInstance } from "fastify"

export async function aplicacoesRoutes(fastify: FastifyInstance) {
    fastify.get('/api/aplicacoes/all', async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            const aplicacoes = await fastify.prisma.aplicacoes.findMany({})
            reply.send(aplicacoes)
        } catch (error) {
            reply.status(400)
        }
    }) //

    fastify.post('/api/aplicacoes/new', async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            const {
                image,
                online,
                linkAcesso,
                linkRepo,
                custoMensal,
                retornoMensal,
                status: PLANEJAMENTO
            } = request.body as any

            const createApplication = await fastify.prisma.$transaction(async (tx: any) => {
                const app = await tx.applicacoes.create({
                    data: {
                        image,
                        online,
                        linkAcesso,
                        linkRepo,
                        custoMensal,
                        retornoMensal,
                        status
                    }
                })
            })
        } catch (error) {
            reply.status(400).send({
                error: "Não foi possível criar a nova aplicação. Tente novamente mais tarde."
            })
        }
    })
}