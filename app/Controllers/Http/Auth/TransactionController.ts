import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TransactionService from "App/Service/TransactionService"

export default class TransactionController {
    public async create({ request, response }: HttpContextContract) {
        const body = request.body()
        const id = "653954711690d24be6a91d76"
        try {
            const transaction = await TransactionService.create(body, id)
            response.status(201).send(transaction)
        }
        catch (error) {
            response.status(409).json({ message: error.message })
        }

    }
}