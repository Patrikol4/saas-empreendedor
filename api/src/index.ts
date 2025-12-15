import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'http'
import cookie, { FastifyCookieOptions } from "@fastify/cookie"
// import { userRoutes } from './routes/user.route'
import prismaPlugin from './plugins/prismaPlugin.ts'
// import nodemailerPlugin from './plugins/nodemailerPlugin'
// import { redutoRoutes } from './routes/reduto.route'
// import { walletRoutes } from './routes/wallet.route'
// import { withdrawRoutes } from './routes/withdraw.route'
// import { postRoutes } from './routes/post.route'
// import { transactionRoutes } from './routes/transaction.route'
//import { commentRoutes } from './routes/comment.route'
//import { healthRoutes } from './routes/health.route'
//import fastifyRedis from '@fastify/redis'
import cors from '@fastify/cors'

const server = Fastify()

// setting cookie allow and identify as plugin
//server.register(cookie)
// server.register(fastifyRedis, {
//   host: '127.0.0.1', 
//   port: 6379,
//   password: process.env.REDIS_PASS,
//   family: 4
// })

server.register(prismaPlugin)
// server.register(nodemailerPlugin)
// server.register(userRoutes)
// server.register(postRoutes)
// server.register(redutoRoutes)
// server.register(transactionRoutes)
// server.register(walletRoutes)
// server.register(withdrawRoutes)
// server.register(commentRoutes)
//server.register(healthRoutes) // saúde da API , serve bem com Kubernetes
await server.register(cors, {
    origin: 'http://localhost:5173', // mudar depois pra .env
    credentials: true
})


const start = async () => {
    try {
        await server.listen({ port: 4000, host: '0.0.0.0' })
        const address = server.server.address()
        const port = typeof address === 'string' ? address : address?.port

    } catch (err) {
        server.log.error(err)
        process.exit(1)
    }
}

start()