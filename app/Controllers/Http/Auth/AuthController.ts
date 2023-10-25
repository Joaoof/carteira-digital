import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AuthService from 'App/Service/AuthService'

export default class AuthController {
    public async signup({request, response}: HttpContextContract) {
        const body = request.body()

        return  AuthService.signup(body)
    }
}
