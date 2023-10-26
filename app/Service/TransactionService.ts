import TransactionRepository from "App/Repositories/TransactionRepository"

async function create(body: any, id: number) {
    if(!id) throw new Error("User id is required")

    return await TransactionRepository.create({...body, userId: id})
}

export default { create }