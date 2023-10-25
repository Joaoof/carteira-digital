import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AuthService from 'App/Service/AuthService'

export default class AuthController {
    public async signup({ request, response }: HttpContextContract) {

        try {
            const body = request.body()
            const resService = await AuthService.signup(body)
            response.status(201).send(resService)
        }
        catch (error) {
            response.status(409).json({ message: error.message })
        }

    }
}

