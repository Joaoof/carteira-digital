import UserSchema from "../Schema/User"
import jwt from 'jsonwebtoken'
import Env from '@ioc:Adonis/Core/Env'
import { ObjectId } from "mongoose"

type tipagem = {
    data: string,
    email: string,
    id: ObjectId
}

async function create(data: Object) {
    return await UserSchema.create({ data })
}

async function findByEmail(email: string) {
    return await UserSchema.findOne({ email })
}

async function generateToken(id: tipagem) {
    return jwt.sign({ id }, Env.get('SECRET'), { expiresIn: 86400 })
}

export default {
    create, findByEmail, generateToken
}

