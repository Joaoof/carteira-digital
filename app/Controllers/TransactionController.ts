import TransactionService from "App/Service/TransactionService"

async function create(request: any, response: any) {
    const body = request.body()
    const id = 1
    
    try {
        const transaction = await TransactionService.create(body, id)
        return response.status(201).send(transaction)
    } catch (error) {
        response.status(409).send(error.message)
    }
}

export default { create }