import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthService {
    static signup(body: Record<string, any>) {
        throw new Error('Method not implemented.')
    }
    public async signup({request}: HttpContextContract) {
        const body = request.body()

        return body
    }
}