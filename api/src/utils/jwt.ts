import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()


const JWT_SECRET = process.env.JWT_SECRET || 'changeme'
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '3600s'


export function signToken(payload: object) {
return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })
}


export function verifyToken(token: string) {
return jwt.verify(token, JWT_SECRET)
}