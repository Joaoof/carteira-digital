import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AuthService from 'App/Service/AuthService'

type tipagem = {
    body: string,
    id: number,
    name: string,
    password: string,
    email: string
}

export default class AuthController {
    public async signup({ request, response }: HttpContextContract) {
        try {
            const body: tipagem = request.body() as tipagem
            const resService = await AuthService.signup(body)
            response.status(201).send(resService)
        }
        catch (error) {
            response.status(409).json({ message: error.message })
        }

    }

    public async signin({ request, response }: HttpContextContract) {
        const body: tipagem = request.body() as tipagem
        try {
            const token = await AuthService.signin(body)
            return response.send(token)
        } catch (error) {
            return response.status(401).send(error.message)
        }
    }

}

