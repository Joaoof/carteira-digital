import UserSchema from "../Schema/User"
import jwt from 'jsonwebtoken'
import Env from '@ioc:Adonis/Core/Env'

async function create(data: string) {
    return await UserSchema.create(data)
}

async function findByEmail(email: string) {
    return  await UserSchema.findOne({ email })
}

async function generateToken(id) {
    return jwt.sign({ id }, Env.get('SECRET'), {expiresIn: 86400})
}

export default {
    create, findByEmail, generateToken
}

